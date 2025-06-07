<script lang="ts">
  import { pathsMap } from "$lib/models/readerModel";

  for (const [path, reader] of Object.entries(pathsMap)) {
    const fileName = path.toLowerCase().replaceAll(" ", "-");
    const hardcodedFilePath = `/qzv/${fileName}.qzv`;

    async function loadHardcodedFile() {
      const response = await fetch(hardcodedFilePath);
      const blob = await response.blob();

      const file = new File([blob], "example.qza", { type: blob.type });
      reader.readData(file);
    }

    loadHardcodedFile();
  }

  
</script>

