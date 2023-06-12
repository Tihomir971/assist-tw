<script lang="ts">
	import Card from '$lib/components/cards/Card.svelte';

	export let data;

	$: ({ testTable, user } = data);
</script>

<h1>H1</h1>
<a href="/">Go</a>
<div class="flex justify-center">
	<Card title="Table data">
		<div class="block">
			<p class="text-base">Protected content for {user.email}</p>
			<p>server-side fetched data with RLS:</p>
			<pre>{JSON.stringify(testTable, null, 2)}</pre>
		</div>
		<div slot="footer">
			<button class="btn-secondary">Secondary Button</button>
			<button>Primary Button</button>
		</div>
	</Card>
	<Card title="User data">
		<div class="block">
			<p>user:</p>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</div>
		<div slot="footer" class="bg-red-400">Footer</div>
	</Card>
</div>
