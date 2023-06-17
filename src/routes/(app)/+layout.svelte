<script lang="ts">
	// Svelte
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';

	// Components
	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	import AppRail from '$lib/components/ui/AppRail/AppRail.svelte';
	import AppRailAnchor from '$lib/components/ui/AppRail/AppRailAnchor.svelte';
	import AppShell from '$lib/components/ui/AppShell.svelte';

	let loading = false;

	const handleLogout: SubmitFunction = () => {
		loading = true;
		return async ({ result }) => {
			if (result.type === 'redirect') {
				await invalidate('supabase:auth');
			} else {
				await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<svelte:head>
	<title>Email and Password Demo - Supabase Auth Helpers</title>
</svelte:head>
{#if $page.data.session}
	<AppShell slotHeader="">
		<svelte:fragment slot="header">
			<AppBar padding="0px" regionRowMain="h-12" slotLead="w-12">
				<svelte:fragment slot="lead">
					<div>
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
							><rect x="3" y="3" width="7" height="7" /><rect
								x="14"
								y="3"
								width="7"
								height="7"
							/><rect x="14" y="14" width="7" height="7" /><rect
								x="3"
								y="14"
								width="7"
								height="7"
							/></svg
						>
					</div>
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
					<li class="mb-4 lg:mb-0 lg:pr-2">
						<a
							class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
							href="/">Team</a
						>
					</li>
					<!-- Projects link -->
					<li class="mb-4 lg:mb-0 lg:pr-2">
						<a
							class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
							href="/">Projects</a
						>
					</li>
				</ul>
				<!-- <Header /> -->
				<svelte:fragment slot="trail">
					<form action="/logout" method="post" use:enhance={handleLogout}>
						<button disabled={loading} type="submit">Sign out</button>
					</form>

					<button
						type="button"
						class="focus:outlines-none relative inline-flex items-center rounded-md p-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-mail"
							><rect width="20" height="16" x="2" y="4" rx="2" /><path
								d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
							/></svg
						>
						<!-- Notification counter -->
						<span class="sr-only">Notifications</span>
						<div
							class="absolute right-3 top-3 inline-flex h-2 w-2 items-center justify-center rounded-full border-none bg-red-500 text-[0.5rem] text-white dark:border-gray-900"
						/>
					</button>
					<button
						type="button"
						class="relative inline-flex items-center rounded-lg p-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-shopping-cart"
						>
							<circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
							<path
								d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
							/>
						</svg>
					</button>
					<a
						class="flex items-center whitespace-nowrap p-2 transition duration-150 ease-in-out motion-reduce:transition-none"
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
			<AppRail background="bg-gray-950" hover="bg-gray-500" active="bg-gray-800" width="w-12">
				<AppRailAnchor href="/dashboard" selected={$page.url.pathname === '/dashboard'}>
					<svelte:fragment slot="lead">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-layout-dashboard"
							><rect width="7" height="9" x="3" y="3" rx="1" /><rect
								width="7"
								height="5"
								x="14"
								y="3"
								rx="1"
							/><rect width="7" height="9" x="14" y="12" rx="1" /><rect
								width="7"
								height="5"
								x="3"
								y="16"
								rx="1"
							/></svg
						>
					</svelte:fragment></AppRailAnchor
				>
				<AppRailAnchor href="/catalog" selected={$page.url.pathname === '/catalog'}
					><svelte:fragment slot="lead">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-shirt"
							><path
								d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
							/></svg
						>
					</svelte:fragment></AppRailAnchor
				>
			</AppRail>
		</svelte:fragment>

		<!-- 	{#if $page.data.session}
		<form action="/logout" method="post" use:enhance={handleLogout}>
			<button disabled={loading} type="submit">Sign out</button>
		</form>
	{/if} -->
		<slot />
	</AppShell>
{:else}
	<slot />
{/if}
