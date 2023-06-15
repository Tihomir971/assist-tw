<article
	class="dark:shadow-3 m-4 flex w-fit flex-col justify-between rounded-md border border-solid border-surface-300 bg-surface-200 shadow-lg"
>
	{#if $$slots.header}
		<div class="shadow-2 dark:shadow-2 bg-surface-100 px-6 py-4 text-lg">
			<slot name="header" />
		</div>
	{/if}
	<div class="px-6 py-4">
		<slot>
			<span class="missing">Unknown address</span>
		</slot>
	</div>
	{#if $$slots.footer}
		<div class="shadow-2 bg-surface-100 px-6 py-4 text-lg">
			<slot name="footer" />
		</div>
	{/if}
</article>
