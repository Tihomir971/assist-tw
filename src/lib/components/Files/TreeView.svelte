<script>
	import TreeViewNodeList from './TreeViewNodeList.svelte';

	const children = [
		{
			id: 1,
			text: 'Appliances',
			children: [
				{
					id: 2,
					text: 'Kitchen Appliances',
					children: [{ id: 3, text: 'Blenders' }]
				}
			]
		},
		{
			id: 4,
			text: 'Elektronika',
			children: [
				{
					id: 5,
					text: 'Computers',
					children: [
						{ id: 6, text: 'Computer Monitors' },
						{ id: 7, text: 'Desktop Computers' }
					]
				},
				{
					id: 8,
					text: 'Portable Audio',
					children: [
						{ id: 9, text: 'parkour.gif' },
						{ id: 10, text: 'rampage.gif' }
					]
				},
				{ id: 11, text: 'Cameras & Camcorders' },
				{ id: 12, text: 'duck-shuffle.gif' },
				{ id: 13, text: 'monkey-on-a-pig.gif' }
			]
		},
		{ id: 14, text: 'TODO' }
	];
</script>

<ul class="bg-surface-200">
	<TreeViewNodeList root {children} />
</ul>
