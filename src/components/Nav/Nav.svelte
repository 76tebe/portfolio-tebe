<script>
  import NavItem from "./NavItem.svelte";
  import Button from "../Button/Button.svelte";
  import Switcher from "../Switcher.svelte";

  // export let scrolled;
  // let state = "default";
  let currentPage = "/";
</script>

<nav class="sticky top-0 flex w-screen items-center justify-between px-20 py-8 z-50">
  <Switcher trigger={false} />
  <ul class="flex gap-4 p-4">
    <NavItem label="Home" href="/" {currentPage} />
    <NavItem label="Projects" href="/projects" {currentPage} />
    <NavItem label="Playground" href="/playground" {currentPage} />
    <NavItem label="About" href="/about" {currentPage} />
  </ul>
  <div class="flex gap-2">
    <Button
      type="secondary"
      idleLabel="Work Together"
      hoveredLabel="Contact Me!"
    />
    <Button
      type="primary"
      href="https://drive.google.com/file/d/16E9sHd9ROOUh39jQFG6qORpgS3j-qyci/view"
      target="_blank"
      idleLabel="Resume"
      hoveredLabel="Explore My Journey"
    />
  </div>
</nav>
