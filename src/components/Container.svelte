<script>
  export let bgImage = false;
  export let full = false;
  export let bgUrl = '';
</script>

<div class="flex items-center {full === true ? 'py-10' : ''} px-[120px] {bgImage == true ? "bg-cover bg-no-repeat" : ""}" style="{bgImage == true ? `background-image: url(${bgUrl})` : ''}">   
  <slot />
</div>
