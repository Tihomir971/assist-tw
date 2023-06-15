<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	// My custom theme
	import '../theme.postcss';
	// App Themes
	import { page } from '$app/stores';
	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	import AppRail from '$lib/components/ui/AppRail/AppRail.svelte';
	import AppRailAnchor from '$lib/components/ui/AppRail/AppRailAnchor.svelte';
	import AppShell from '$lib/components/ui/AppShell.svelte';
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
<AppShell slotHeader="">
	<svelte:fragment slot="header">
		<AppBar padding="0px" regionRowMain="h-12" slotLead="w-12">
			<svelte:fragment slot="lead">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#fff"
					stroke-width="1"
					stroke-linecap="butt"
					stroke-linejoin="miter"
					><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect
						x="14"
						y="14"
						width="7"
						height="7"
					/><rect x="3" y="14" width="7" height="7" /></svg
				>
			</svelte:fragment>
			<ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
				<li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
					<!-- Dashboard link -->
					<a
						class="disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
						href="/dashboard">Dashboard</a
					>
				</li>
				<!-- Team link -->
				<li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
					<a
						class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
						href="/">Team</a
					>
				</li>
				<!-- Projects link -->
				<li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
					<a
						class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
						href="/">Projects</a
					>
				</li>
			</ul>
			<!-- <Header /> -->
			<svelte:fragment slot="trail">
				<a
					class="flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
					href="/"
					id="dropdownMenuButton1"
					role="button"
					aria-expanded="false"
				>
					<!-- Dropdown trigger icon -->
					<span class="[&>svg]:w-5">
						<svg
							style="color: white"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-envelope"
							viewBox="0 0 16 16"
						>
							<path
								d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
								fill="white"
							/>
						</svg>
					</span>
					<!-- Notification counter -->
					<span
						class="dark:bg-error absolute -mt-2.5 ml-2 rounded-[0.37rem] px-[0.45em] py-[0.2em] text-[0.6rem] leading-none text-white"
						>1</span
					>
				</a>
				<a
					class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
					href="/"
				>
					<span class="[&>svg]:w-5">
						<svg
							style="color: white"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-cart"
							viewBox="0 0 16 16"
						>
							<path
								d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
								fill="white"
							/>
						</svg>
					</span>
				</a>
				<a
					class="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
					href="/"
					id="dropdownMenuButton2"
					role="button"
					aria-expanded="false"
				>
					<!-- User avatar -->
					<img
						src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
						class="h-8 w-8 rounded-full"
						alt=""
						loading="lazy"
					/>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail background="bg-gray-950" width="w-12">
			<AppRailAnchor href="/dashboard" selected={$page.url.pathname === '/dashboard'}
				>Dash</AppRailAnchor
			>
			<AppRailAnchor href="/about" selected={$page.url.pathname === '/about'}>(icon)</AppRailAnchor>
		</AppRail>
	</svelte:fragment>

	<!-- 	{#if $page.data.session}
		<form action="/logout" method="post" use:enhance={handleLogout}>
			<button disabled={loading} type="submit">Sign out</button>
		</form>
	{/if} -->
	<slot />
</AppShell>
