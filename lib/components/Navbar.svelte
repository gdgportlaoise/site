<script lang="ts">
	import ThemeSelect from '$lib/components/ThemeSelect.svelte';
</script>

<div class="navbar h-20 bg-base-100 px-8 fixed z-10">
	<div class="flex-1">
		<a class="flex" href="/">
			<img src="/gdg-logomark.svg" alt="GDG Logo" class="w-12 h-12" />
			<div class="pt-2 pl-3 hidden lg:block">
				<p class="text-xl font-googlesansregular leading-4">Google Developer Groups</p>
				<p class="text-md font-googlesansregular">Portlaoise</p>
			</div></a
		>
	</div>
	<div class="flex-none">
		<ThemeSelect />
	</div>
</div>
