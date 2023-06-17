<script>
	/**
	 * @typedef {string | number} TreeNodeId
	 * @typedef {{ id: TreeNodeId; text: string; disabled?: boolean; expanded?: boolean; }} TreeNode
	 */

	/** @type {Array<TreeNode & { children?: TreeNode[] }>} */
	export let children = [];
	export let root = false;

	import TreeViewNode from './TreeViewNode.svelte';
</script>

{#if root}
	{#each children as child (child.id)}
		{#if Array.isArray(child.children)}
			<svelte:self {...child} />
		{:else}
			<TreeViewNode text={child.text} />
		{/if}
	{/each}
{:else}
	<li class="pl-4">
		<ul>
			{#each children as child (child.id)}
				{#if Array.isArray(child.children)}
					<svelte:self {...child} />
				{:else}
					<TreeViewNode text={child.text} />
				{/if}
			{/each}
		</ul>
	</li>
{/if}
