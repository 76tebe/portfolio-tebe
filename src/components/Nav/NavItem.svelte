<script>
  import { onMount } from "svelte";
  import { draw } from "svelte/transition";

  export let label;
  export let href;
  // export let state = "default";
  export let currentPage; 

  const mark = `M42.8952 4.57976C33.1925 4.50727 22.5968 5.72225 13.4971 8.24859C7.23505 9.98712 -2.31913 14.5504 2.1523 20.6173C8.20509 28.8299 24.2397 32.0802 35.3251 33.8994C51.8876 36.6175 70.3489 38.1544 87.1667 35.9428C95.114 34.8977 112.379 32.7551 112.975 24.6267C113.517 17.2154 105.272 12.274 97.3421 9.28577C75.8768 1.19744 49.7511 0.175075 25.2348 1.46584`;

  // let url = window.location.href.split('/')[3] || '/';

  // onMount(() => url = window.location.href);
  // console.log(url);
</script>

<li>
  <a
    href={href}
    class="inline-flex justify-center items-center px-4 py-3 text-body-2 leading-6 text-neutral-60 hover:font-medium hover:text-neutral-90 {currentPage === href ? 'active:font-semibold active:text-neutral-90' : ''}"
    on:mouseenter={() => (currentPage = href)}
    on:mouseleave={() => (currentPage = "/")}
  >
    {label}
    {#if currentPage === href}
      <svg
        class="absolute"
        width="114"
        height="38"
        viewBox="0 0 114 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          transition:draw={{ duration: 300 }}
          id="mark"
          d={mark}
          stroke="#334155"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    {/if}
  </a>
</li>
