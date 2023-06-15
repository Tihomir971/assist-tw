<article
	class="m-4 flex w-fit flex-col justify-between rounded-md border border-solid border-surface-300 bg-surface-200 shadow-3"
>
	{#if $$slots.header}
		<div class="bg-surface-100 px-6 py-4 text-lg">
			<slot name="header" />
		</div>
	{/if}
	<div class="px-6 py-4">
		<slot>
			<span class="missing" />
		</slot>
	</div>
	{#if $$slots.footer}
		<div class="rounded-md bg-surface-100 px-6 py-4 text-lg">
			<slot name="footer" />
		</div>
	{/if}
</article>
