<script lang="ts">
  import { pathsMap, ReaderModel } from "$lib/models/readerModel";
  import loading from "$lib/scripts/loading";

  async function load(path: string, reader: ReaderModel) {
    const fileName = path.toLowerCase().replaceAll(" ", "-");
    const hardcodedFilePath = `/qzv/${fileName}.qzv`;

    const response = await fetch(hardcodedFilePath);
    const blob = await response.blob();

    const file = new File([blob], ".qzv", { type: blob.type });
    await reader.readData(file);
  }

  async function loadAll() {
    loading.setLoading(true, "Loading started");
    for (const [path, reader] of Object.entries(pathsMap)) {
      await load(path, reader);
    }
    loading.setLoading(false);
    console.log("All readers loaded");
  }


  async function loadByUrl() {
    loading.setLoading(true, "Loading started");
    const pathname = window.location.pathname.replaceAll("/", "");
    for (const [path, reader] of Object.entries(pathsMap)) {
      if (pathname === path.toLowerCase().replaceAll(" ", "-")) {
        await load(path, reader);
        break;
      }
    }
    loading.setLoading(false);
  }


  loadAll();
  // loadByUrl();

  
</script>

