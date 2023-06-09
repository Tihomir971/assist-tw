<script lang="ts">
	let className = '';
	export { className as class };
	export let title = 'Unknown title';
	let classDef = 'bg-neutral-200 dark:bg-neutral-700 p-8 drop-shadow-md rounded-md';
	$: classesBase = `${className} ${classDef} ${$$props.class ?? ''}`;
</script>

<article class={classesBase}>
	<div class="mb-4">
		<div class="text-2xl">
			{title}
		</div>

		<div class="my-2 border-b border-gray-200 pb-8">
			<slot>
				<span class="missing">Unknown address</span>
			</slot>
		</div>
		{#if $$slots.footer}
			<div class="my-2 border-b border-gray-200 pb-8">
				<slot name="footer">
					<span class="missing">Unknown email</span>
				</slot>
			</div>
		{/if}
	</div>
</article>
