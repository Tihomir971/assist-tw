<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	// Your custom Skeleton theme:
	import '../theme.postcss';

	import '../app.css';

	export let data;

	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>Assist with TW</title>
</svelte:head>

<slot />
