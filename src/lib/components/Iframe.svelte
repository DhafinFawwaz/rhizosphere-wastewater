<script lang="ts">
  import { onDestroy } from "svelte";
  import { ReaderModel } from "$lib/models/readerModel";
  import { getScrollBarWidth } from "$lib/scripts/util";

  export let title: string;
  export let reader: ReaderModel;

  let indexPath = "";

  const unsubscribe = reader.subscribe((r) => {
    indexPath = r.indexPath;
  });

  onDestroy(unsubscribe);
</script>

<br>

{#if indexPath}
  <iframe
    title={title}
    id={title}
    frameborder="0"
    src={indexPath}
    style:left={`calc(0% - ${getScrollBarWidth()}px)`}
    style:width={`calc(100% + 2 * ${getScrollBarWidth()}px)`}
    style:height="100vh"
  ></iframe>
{/if}

<style lang="postcss">
  #iframe {
    @apply absolute
    w-full
    h-full;
  }
</style>
