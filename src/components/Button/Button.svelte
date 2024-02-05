<script lang="ts">
  import { Button } from "bits-ui";
  import "./Button.css";

  // export let label;
  export let type;
  export let idleLabel;
  export let hoveredLabel;
  export let href;
  export let target;
</script>

<Button.Root
  {href} {target}
  class="btn flex flex-col items-center overflow-hidden px-4 py-3 h-12 text-button
  {type == 'primary'
    ? 'bg-neutral-100 text-white'
    : 'text-neutral-100 border-2 border-neutral-20'} rounded-[10px]"
>
  <span>
    <em>
      {idleLabel}
    </em>
  </span>
  <span>
    <em>
      {hoveredLabel}
    </em>
  </span>
</Button.Root>
