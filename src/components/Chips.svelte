<script>
  export let mode;
  export let size;
</script>

<div
  class="flex py-2 px-3 rounded-lg bg-white/20 backdrop-blur-lg font-semibold
{mode == 'dark' ? 'text-white' : ''}
{size == 'regular' ? 'text-body-2 gap-3' : 'text-body-3 gap-2'}"
>
  <slot />
</div>
