<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import Card from '$lib/components/cards/Card.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ result }) => {
			await applyAction(result);
			loading = false;
		};
	};
</script>

<div
	class="flex h-full min-h-[600px] w-full items-center justify-center bg-gradient-to-b from-indigo-600 to-indigo-950 py-12"
>
	<div class="flex h-full flex-col justify-around">
		<div class="flex flex-1 items-center">
			<div class="block">
				<div id="Account_content" class="min-h-[240px] w-80">
					<form
						action="/?/signin-with-password"
						method="post"
						use:enhance={handleSubmit}
						class="w-full"
					>
						<p class="mb-4 text-base">Please login to your account</p>
						<div class="mb-6">
							<label for="email" class="mb-2 block text-sm font-medium">Email address</label>
							<input
								type="email"
								id="email"
								name="email"
								class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								placeholder="Your Email"
								autocomplete="email"
								required
							/>
						</div>
						<div class="mb-6">
							<label for="password" class="mb-2 block text-sm font-medium">Password</label>
							<input
								type="password"
								id="password"
								name="password"
								class="no-autofill block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								placeholder="Enter password"
								autocomplete="current-password"
								required
							/>
						</div>

						<!--Submit button-->
						<div class="text-center">
							<button
								class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
								disabled={loading}
								style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);"
							>
								Log in
							</button>

							<!--Forgot password link-->
							<a href="#!">Forgot password?</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
