<script lang="ts">
  import url from "$lib/scripts/url-store";
  import { toUrl, pathsMap } from "$lib/models/readerModel";

  const initialPath = "About"
</script>

  <li>
    <button
      class={$url.pathname.replaceAll("/", "") === initialPath.toLowerCase().replaceAll(" ", "-") || $url.pathname.replaceAll("/", "") === "" ? "selected-nav-button nav-button" : "nav-button"}
      onclick={() => {
        history.pushState({}, "", toUrl(initialPath))
        // location.href = toUrl(initialPath);
      }}
      title={initialPath}
    >
      {initialPath}
    </button>
  </li>
{#each Object.keys(pathsMap) as path}
  <li>
    <button
      class={$url.pathname.replaceAll("/", "") === path.toLowerCase().replaceAll(" ", "-") ? "selected-nav-button nav-button" : "nav-button"}
      onclick={() => {
        history.pushState({}, "", toUrl(path))
        // location.href = toUrl(path);
      }}
      title={path}
    >
      {path}
    </button>
  </li>
{/each}
