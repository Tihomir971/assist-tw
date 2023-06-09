<script lang="ts">
	import Header from '$lib/components/ui/Header.svelte';
</script>

<div class="relative z-0 flex h-full flex-col overflow-hidden">
	<div id="header">
		<Header />
	</div>
	<div id="mainApp" class="flex h-full items-stretch">
		<div class="w-12 bg-neutral-950" />
		<div class="flex w-full items-center justify-center"><slot /></div>
		<!-- <div class="w-full bg-violet-950"><slot /></div> -->
	</div>
</div>
