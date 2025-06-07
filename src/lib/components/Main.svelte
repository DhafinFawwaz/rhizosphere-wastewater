<script lang="ts">
  // Global styling
  import "../../app.css";
  import readerModel from "$lib/models/readerModel";
  import { pathsMap } from "$lib/models/readerModel";

  import url from "$lib/scripts/url-store";
  import { onMount } from "svelte";
  import { checkBrowserCompatibility, handleError } from "$lib/scripts/util";
  import { getFile } from "$lib/scripts/fileutils";
  import NavBar from "$lib/components/NavBar.svelte";
  import ContentContainer from "$lib/components/ContentContainer.svelte";

  const uuid4Regex = /[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}/;

  // onMount(() => {
  //   checkBrowserCompatibility();
  //   for(const [path, reader] of Object.entries(pathsMap)) {
  //     reader.attachToServiceWorker()
  //   }
  //   fetch("/_/wakeup");
  // });

  onMount(() => {
    checkBrowserCompatibility();
    fetch("/_/wakeup");

    window.navigator.serviceWorker.onmessage = (event) => {
      const { session, type, filename } = event.data;

      const targetReader = Object.values(pathsMap).find(
        (reader) => reader.session === session,
      );

      if (!targetReader) {
        return;
      }

      switch (type) {
        case "GET_DATA":
          getFile(
            decodeURIComponent(filename),
            targetReader.uuid,
            targetReader.zipReader,
          )
            .then((data) => {
              event.ports[0].postMessage(data);
            })
            .catch((error) => {
              console.error(error);
              event.ports[0].postMessage({ data: "", type: "error" });
            });
          break;
        default:
          console.log(`Unknown SW event type: ${type}`);
          break;
      }
    };
  });

  // This block runs every time the URL bar updates. It determines what to do based
  // on the src SearchParam in the URL.
  //
  // Case 1, The src didn't change:
  //  do nothing
  //
  // Case 2, The src changed and is a uuid that is not the currently loaded one:
  //  We throw a fit because this URL is referencing a local source that we do
  //  not have access to.
  //
  // Case 3, The src changed and it is a URL:
  //  We load the new URL.
  //
  // NOTE: Anything that is not a valid uuid4 is presumed to be a URL
  //
  // Case 4, The src changed and it is now empty:
  //  Reset the readerModel because we no longer have data.
  $effect(() => {
    const newSrc = $url.searchParams.get("src");
    const newTab = $url.pathname.replaceAll("/", "");

    if (newSrc !== readerModel.rawSrc) {
      // We have a local source
      if (uuid4Regex.test(newSrc)) {
        // We have a local source that does not match our currently loaded data.
        // This is an error because we do not have access to arbitray local sources
        if (newSrc !== readerModel.uuid) {
          handleError(
            "This was a temporary page based on local data.",
            "Expired Data",
          );
        }
        // We have a local source, but it is still the local source we have loaded
      } else {
        // We have a non uuid source which is presumed to be a remote source. We
        // attempt to load it.
        //
        // We also provide the tab that was in the URL so after loading the source
        // we can default to this
        if (newSrc) {
          readerModel.readData(newSrc, newTab);
        }
        // We have no source, so we reset
        else {
          readerModel.clear();
        }
      }
    }
  });
</script>

<NavBar />
<ContentContainer />
