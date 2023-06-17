<script>
	import TreeViewNode from './TreeViewNode.svelte';
	import ChevronDown from '../../icons/chevron-down.svelte';
	import ChevronRight from '../../icons/chevron-right.svelte';

	/**
	 * @typedef {string | number} TreeNodeId
	 * @typedef {{ id: TreeNodeId; text: string; disabled?: boolean; expanded?: boolean; }} TreeNode
	 */

	/** @type {Array<TreeNode & { children?: TreeNode[] }>} */
	export let children = [];
	export let root = false;

	export let id = '';
	export let text = '';
	export let expanded = false;

	function toggle() {
		expanded = !expanded;
	}
	$: icon = expanded ? ChevronDown : ChevronRight;

	//$: node = { id, text, expanded, leaf: !parent };
	$: node = { id, text, expanded, leaf: 'леаф' };
</script>

<!-- <button class:expanded class="pl-6" on:click={toggle}>{name}</button> -->

{#if root}
	{#each children as child (child.id)}
		{#if Array.isArray(child.children)}
			<svelte:self {...child} />
		{:else}
			<TreeViewNode leaf {...child} />
		{/if}
	{/each}
{:else}
	<div
		class="relative -ml-4 flex min-h-[2rem] items-center pl-4"
		on:click={toggle}
		on:keydown
		on:keyup
		on:keypress
	>
		<span class="mr-2"><svelte:component this={icon} /></span>
		<span class="flex items-center">{text}</span>
	</div>
	{#if expanded}
		<ul>
			{#each children as child}
				{#if child.children}
					<li class="pl-4">
						<svelte:self {...child} />
					</li>
				{:else}
					<li class="pl-10 hover:bg-surface-300">
						<TreeViewNode {...child} />
					</li>
				{/if}
			{/each}
		</ul>
	{/if}
{/if}
