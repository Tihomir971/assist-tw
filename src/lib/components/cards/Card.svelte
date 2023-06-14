<script lang="ts">
	let className = '';
	export { className as class };
	let classDef = 'text-text-1 bg-neutral-200 dark:bg-canvas p-8 drop-shadow-md rounded-md';
	$: classesBase = `${className} ${classDef} ${$$props.class ?? ''}`;
</script>

<article
	class="m-4 flex w-fit flex-col justify-between rounded-md border border-solid border-surface-3-light bg-white shadow-lg dark:border-surface-2-dark dark:bg-surface-1-dark dark:shadow-3"
>
	{#if $$slots.header}
		<div class="px-6 py-4 text-lg shadow-2 dark:bg-surface-2-dark dark:shadow-2">
			<slot name="header" />
		</div>
	{/if}
	<div class="px-6 py-4">
		<slot>
			<span class="missing">Unknown address</span>
		</slot>
	</div>
	{#if $$slots.footer}
		<div class="px-6 py-4 text-lg shadow-2 dark:bg-surface-2-dark">
			<slot name="footer" />
		</div>
	{/if}
</article>
