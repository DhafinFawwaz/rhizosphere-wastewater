<script lang="ts">
  import "../../app.css";

  import readerModel from "$lib/models/readerModel";
  import loading from "$lib/scripts/loading"

  import url from "$lib/scripts/url-store";

  import NavButtons from "$lib/components/NavButtons.svelte";

  import { createCollapsible, createDropdownMenu, melt } from "@melt-ui/svelte";
  import { slide, fly } from "svelte/transition";
  import NavBanner from "./NavBanner.svelte";

  interface Props {
    vendored?: boolean;
  }

  let { vendored = false }: Props = $props();

  // Height of the navbar is bound to this var
  let nav_bar_height: number | undefined = $state();

  const {
    elements: { root, content, trigger: triggerCollapsible },
    states: { open: openCollapsible },
  } = createCollapsible({});

  const {
    elements: { menu, trigger: triggerDropdown },
    states: { open: openDropdown },
  } = createDropdownMenu({});

  $effect(() => {
    const positioned_container = document.getElementById("positioned-container");

    // Offset the container based on the current height of the navbar
    if (positioned_container !== null) {
      positioned_container.style.top = `${nav_bar_height}px`;
      positioned_container.style.height = `calc(100% - ${nav_bar_height}px)`;
    }
  });

  function navLogoClicked(event: MouseEvent) {
    
  }
</script>

<svelte:head>
  {#if $readerModel.name}
  <title></title>
  {:else}
  <title></title>
  {/if}
</svelte:head>

<nav id="navbar" use:melt={$root} bind:offsetHeight={nav_bar_height}>
  {#if !vendored}
    <NavBanner/>
  {/if}
  <div class="nav-wrapper mx-2">
    <div id="nav-container" class="max-width">
      
      <!-- {#if $readerModel.name}
        <ul class="mx-auto flex">
          <li id="file-text">
            File: <span class='font-bold'>{$readerModel.name}</span>
          </li>
          {#if !vendored && ($readerModel.indexPath || $readerModel.rawSrc)}
            <li>
              <button title="Unload File" id="close-button" onclick={() => {
                  readerModel.clear();
                  history.pushState({}, "", "/");
                }}
                aria-label="Unload File">
                <svg fill="none"
                  viewBox="0 0 20 20"
                  class="size-3"
                >
                  <path
                    id="close-button-path"
                    stroke-width="3"
                    stroke="rgb(119, 119, 119)"
                    d="M2 18L18 2M18 18L2 2"
                  />
                </svg>
              </button>
            </li>
          {/if}
        </ul>
      {/if} -->
      <!-- If the screen is wide enough slap the buttons here in a grid -->
      <ul class="grid grid-flow-col gap-2 items-center">
        <NavButtons/>
      </ul>
    </div>
    <div id="nav-dropdown">
      {#if $openCollapsible}
        <ul use:melt={$content} transition:slide class="lg:hidden">
          <NavButtons />
        </ul>
      {/if}
    </div>
  </div>
</nav>

<style lang="postcss">
  #navbar {
    width: 100vw;
    font-size: 16px;
    @apply fixed
    bg-[#fcfcfc]
    w-full
    z-10
    top-0
    left-0
    right-0
    shadow-md
    ;
  }

  .nav-wrapper {
    scrollbar-gutter: stable;
    overflow: hidden;
  }

  #nav-container {
    height: 48px;
    @apply flex
    mx-auto
    text-[#636363]
    pl-2 pr-3;
  }

  #navlogo {
    @apply my-1 h-10;
  }

  #dropdown {
    box-shadow: rgb(153, 153, 153) 0px 1px 5px;
    @apply absolute
    border
    border-gray-300
    rounded
    h-auto
    p-1
    bg-gray-100
    z-10;
  }

  #dropdown-input {
    @apply border
    border-gray-300
    rounded
    w-full
  }

  #file-text {
    margin: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @apply
    max-w-[100px]
    lg:max-w-[500px]
    md:max-w-[350px]
    sm:max-w-[200px];
  }

  #close-button {
    @apply w-full
    h-full
    p-3;
  }

  #close-button:hover #close-button-path {
    stroke: red;
  }

  :global(.nav-button) {
    @apply rounded-full px-3 py-1 text-sm;
    color: #337AB7;
  }

  :global(.nav-button:hover) {
    background-color: #eeeeee;
}

  :global(.selected-nav-button) {
    @apply text-gray-700;
    border: 1px solid #ddd;
  }

  :global(.nav-button::before) {
    @apply font-bold;
    display: block;
    content: attr(title);
    height: 1px;
    width: max-content;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }
</style>