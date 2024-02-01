<script>
    export let title;
	import "../main.css";
	import 'remixicon/fonts/remixicon.css'
	import Nav from "../components/Nav/Nav.svelte";
</script>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content="Astro description" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<link rel="stylesheet" href="../main.css">
		<title>{title}</title>
	</head>
	<main class=" {title == 'Home' ? 'w-[1200px]' : 'w-[1040px]'} mx-auto my-20 text-neutral-80">
		<slot />
	</main>
</html>