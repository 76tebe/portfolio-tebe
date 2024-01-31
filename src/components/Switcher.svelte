<script lang="ts">
  export let trigger;

  function switcher(event) {
    trigger = !trigger;
  }
</script>

<div on:click={switcher}
  class="
  flex w-20 h-20 justify-center items-center rounded-xl border-[0.5px]
  {trigger == false
    ? 'border-neutral-40 bg-gradient-to-b from-neutral-10 from-0% to-neutral-20 to-100%'
    : 'border-neutral-60 bg-gradient-to-b from-neutral-70 from-[-30%] to-neutral-50 to-100%'}
    transition-all duration-300 ease-in-out"
>
  <div class="trigger">
    {#if trigger == false}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="42"
        viewBox="0 0 28 42"
        fill="none"
      >
        <rect
          x="0.416748"
          y="0.750015"
          width="27.1667"
          height="40.5"
          rx="6.25"
          fill="white"
          stroke="#94A3B8"
          stroke-width="0.5"
        />
        <rect
          x="0.916748"
          y="7.91669"
          width="26.1667"
          height="32.8333"
          rx="5.75"
          fill="url(#paint0_linear_250_93)"
          stroke="url(#paint1_linear_250_93)"
          stroke-width="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_250_93"
            x1="14.0001"
            y1="7.66669"
            x2="14.0001"
            y2="41"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E2E8F0" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_250_93"
            x1="14.0001"
            y1="7.66669"
            x2="14.0001"
            y2="24.3334"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F1F5F9" />
            <stop offset="1" stop-color="#F1F5F9" />
          </linearGradient>
        </defs>
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="42"
        viewBox="0 0 28 42"
        fill="none"
      >
        <rect
          x="0.416748"
          y="0.750015"
          width="27.1667"
          height="40.5"
          rx="6.25"
          fill="#475569"
          stroke="#475569"
          stroke-width="0.5"
        />
        <rect
          x="0.916748"
          y="1.25002"
          width="26.1667"
          height="32.8333"
          rx="5.75"
          fill="url(#paint0_linear_250_97)"
          stroke="#64748B"
          stroke-width="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_250_97"
            x1="14.0001"
            y1="1.00002"
            x2="14.0001"
            y2="34.3334"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#475569" />
            <stop offset="1" stop-color="#94A3B8" />
          </linearGradient>
        </defs>
      </svg>
    {/if}
  </div>
</div>
