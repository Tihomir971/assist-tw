<script>
	/**
	 * @typedef {string | number} TreeNodeId
	 * @typedef {{ id: TreeNodeId; text: any; icon?: typeof import("svelte").SvelteComponent; disabled?: boolean; children?: TreeNode[]; }} TreeNode
	 * @event {TreeNode & { expanded: boolean; leaf: boolean; }} select
	 * @event {TreeNode & { expanded: boolean; leaf: boolean; }} toggle
	 * @event {TreeNode & { expanded: boolean; leaf: boolean; }} focus
	 */

	/**
	 * Provide an array of children nodes to render
	 * @type {Array<TreeNode>}
	 */
	export let children = [];

	import TreeViewNodeList from './TreeViewNodeList.svelte';
</script>

<ul>
	<TreeViewNodeList root={true} {children} />
</ul>
