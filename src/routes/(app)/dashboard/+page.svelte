<script lang="ts">
	import Card from '$lib/components/cards/Card.svelte';

	export let data;

	$: ({ testTable, user } = data);
</script>

<Card title="Table data">
	<div class="block">
		<p class="text-base">Protected content for {user.email}</p>
		<p>server-side fetched data with RLS:</p>
		<pre>{JSON.stringify(testTable, null, 2)}</pre>
	</div>
	<div slot="footer">
		<button class="btn-secondary">Secondary Button</button>
		<button class="btn-primary">Primary Button</button>
	</div>
</Card>
<Card title="User data">
	<div class="block">
		<p>user:</p>
		<pre>{JSON.stringify(user, null, 2)}</pre>
	</div>
	<div slot="footer" class="bg-red-400">Footer</div>
</Card>
