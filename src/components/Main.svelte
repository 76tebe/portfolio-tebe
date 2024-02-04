<script>
  export let title;
</script>

<main
  class="{title == "Tebe's Portfolio"
    ? 'max-w-[1200px]'
    : 'max-w-[1040px]'} mx-auto p-4"
>
  <slot />
</main>

<style>
    main {
        height: calc(100svh - 144px);
    }
</style>