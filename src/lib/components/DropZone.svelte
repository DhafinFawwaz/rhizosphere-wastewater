<script lang="ts">
  import readerModel from "$lib/models/readerModel";

  const url = window.location.pathname;
  const split = url.split("/").filter(part => part.length > 0);
  // console.log("Split URL:", split);
  if(split.length == 1) {
    const fileName = split[0];
    const hardcodedFilePath = `/qzv/${fileName}.qzv`;
  
    async function loadHardcodedFile() {
      const response = await fetch(hardcodedFilePath);
      const blob = await response.blob();
  
      const file = new File([blob], "example.qza", { type: blob.type });
      readerModel.readData(file);
    }
  
    loadHardcodedFile();
  }
  
</script>

