<script lang="ts">
  import "../../app.css";

  import { pathsMap } from "$lib/models/readerModel";

  import url from "$lib/scripts/url-store";
  import loading from "$lib/scripts/loading";

  import Iframe from "$lib/components/Iframe.svelte";
  import Gallery from "$lib/components/Gallery.svelte";
  import Citations from "$lib/components/Citations.svelte";
  import DropZone from "$lib/components/DropZone.svelte";
  import UrlInput from "$lib/components/UrlInput.svelte";
  import Provenance from "$lib/components/Provenance.svelte";
  import Metadata from "$lib/components/Metadata.svelte";
  import About from "$lib/components/About.svelte";
  import Error from "$lib/components/Error.svelte";
  import Loading from "$lib/components/Loading.svelte";

  interface Props {
    vendored?: boolean;
  }

  let { vendored = false }: Props = $props();
</script>

<div id="positioned-container" class='p-0 m-0 overflow-y-hidden'>
  <div id="content-container" class="p-0 m-0">
    {#if !vendored}
      <div
        class={"overflow-y-hidden" + $url.pathname.replaceAll("/", "") === "" && $loading.status !== "LOADING" ? "tab" : "hidden-tab"}
      >
        <br>
        <br>
        <DropZone />
        <UrlInput />
      </div>
    {/if}
    <div
      class={$url.pathname.replaceAll("/", "") === "about" && $loading.status !== "LOADING"
        ? "tab"
        : "hidden-tab"}
    >
      <About />
    </div>
    <div
      class={$url.pathname.replaceAll("/", "") === "error" && $loading.status !== "LOADING"
        ? "tab"
        : "hidden-tab"}
    >
      <Error />
    </div>
    {#if $loading.status === "LOADING"}
      <div class="tab">
        <Loading />
      </div>
    {/if}

    {#each Object.entries(pathsMap) as [path, reader]}
      <!-- {#if reader.indexPath} -->
        <div
          class={$url.pathname.replaceAll("/", "") === path.toLowerCase().replaceAll(" ", "-") && $loading.status !== "LOADING"
            ? "tab iframe"
            : "hidden-tab"}
        >
          <Iframe title={path} reader={reader} />
        </div>
      <!-- {/if} -->
      
    {/each}

  </div>
</div>


<style lang="postcss">
  #positioned-container {
    position: absolute;
    top: 25px;
    width: 100%;
    height: calc(100% - 55px);
    /* scrollbar-gutter: stable both-edges; */
    padding: 0px;
    margin: 0px;
  }

  #content-container {
    display: grid;
    @apply m-0 p-0;
  }

  .tab {
    grid-column: 1;
    grid-row: 1;
    visibility: visible;
    overflow: hidden;
    /* This padding is to accomodate the dropshadow on the DropZone */
    padding-right: 10px;
    @apply mb-4
    pt-5;
  }
  .tab.iframe {
    @apply pt-0;
  }

  /* Hoist this up here because the absolute will cause the scrollbar to persist
     across tabs if we do not remove this class as needed */
  .provenance {
    left: 0%;
    @apply lg:absolute
    lg:grid
    lg:grid-cols-[70%_30%]
    w-screen
    h-full;
  }

  .hidden-tab {
    grid-column: 1;
    grid-row: 1;
    height: 0;
    visibility: hidden;
    overflow: hidden;
  }
</style>
