<script>
    export let title;
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
	<body class="{title == 'Home' ? 'mx-[120px]' : 'mx-[200px]'} my-20">
		<slot />
	</body>
</html>