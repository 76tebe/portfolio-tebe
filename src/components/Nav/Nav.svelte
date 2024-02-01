<script>
  import NavItem from "./NavItem.svelte";
  import Button from "../Button/Button.svelte";
  import Switcher from "../Switcher.svelte";

  // export let scrolled;
</script>

<nav class="flex w-screen items-center justify-between px-20 py-8">
  <Switcher trigger={false} />
  <ul class="flex gap-4 p-4">
    <NavItem label="Home" href="/" />
    <NavItem label="Projects" href="/" />
    <NavItem label="Playground" href="/" />
    <NavItem label="About" href="/about" />
  </ul>
  <div class="flex gap-2">
    <Button
      type="secondary"
      idleLabel="Work Together"
      hoveredLabel="Contact Me!"
    />
    <Button
      type="primary"
      idleLabel="Resume"
      hoveredLabel="Explore My Journey"
    />
  </div>
</nav>
