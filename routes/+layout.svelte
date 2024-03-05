<script>
	import 'tailwindcss/tailwind.css';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>GDG Portlaoise | Google Developer Groups</title>
	<meta
		name="description"
		content="The premier destination for tech enthusiasts across the Midlands to come together, share ideas, and advance their skills in the dynamic world of technology."
	/>
</svelte:head>

<Navbar />
<div class="pt-20">
	<slot />
</div>
<Footer />
