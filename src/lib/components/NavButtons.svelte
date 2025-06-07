<script lang="ts">
  import readerModel from "$lib/models/readerModel";
  import url from "$lib/scripts/url-store";
  import { toUrl, pathsMap } from "$lib/models/readerModel";
</script>

{#if $readerModel.indexPath}

  {#each Object.keys(pathsMap) as path}
    <li>
      <button
        class={$url.pathname.replaceAll("/", "") === path.toLowerCase().replaceAll(" ", "-") ? "selected-nav-button nav-button" : "nav-button"}
        onclick={() => {history.pushState({}, "", toUrl(path))}}
        title={path}
      >
        {path}
      </button>
    </li>
  {/each}

{/if}
