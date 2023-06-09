<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	export let form;
	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ result }) => {
			await applyAction(result);
			loading = false;
		};
	};
</script>

<section
	class="flex w-3/12 flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg dark:bg-neutral-800"
>
	<!--Logo-->
	<img
		class="mx-auto w-48"
		src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
		alt="logo"
	/>
	<h4 class="mb-12 mt-1 pb-1 text-center text-xl font-semibold">We are The Kalisi Team</h4>

	<form action="/?/signin-with-password" method="post" use:enhance={handleSubmit} class="w-full">
		<p class="mb-4">Please login to your account</p>
		<div class="mb-6">
			<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
				>Email address</label
			>
			<input
				type="email"
				id="email"
				name="email"
				class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
				placeholder="Your Email"
				autocomplete="email"
				required
			/>
		</div>
		<div class="mb-6">
			<label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
				>Password</label
			>
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
		<!--Username input-->
		<!-- 	<div class="relative mb-4" data-te-input-wrapper-init>
										<input
											type="email"
											class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
											id="email"
											name="email"
											placeholder="Email"
											value={form?.signinWithPassword.values?.email ?? ''}
											autocomplete="email"
										/>
										<label
											for="email"
											class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
											>Email2
										</label>
									</div> -->

		<!--Password input-->
		<!-- <div class="relative mb-4" data-te-input-wrapper-init>
										<input
											type="password"
											class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
											id="password"
											name="password"
											placeholder="Password"
											autocomplete="current-password"
										/>
										<label
											for="password"
											class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
											>Password
										</label>
									</div> -->

		<!-- Flowbite -->

		<!-- <div class="group relative z-0 mb-6 w-full">
										<input
											type="email"
											name="floating_email"
											id="floating_email"
											class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
											placeholder=" "
											required
										/>
										<label
											for="floating_email"
											class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
											>Email address</label
										>
									</div> -->

		<!-- <div class="relative">
										<input
											type="email"
											id="floating_outlined"
											class="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
											placeholder=" "
										/>
										<label
											for="floating_outlined"
											class="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
											>Email outlined</label
										>
									</div> -->
		<br />
		<!-- 	<div>
										<input
											type="email"
											class="no-autofill w-full rounded-lg bg-transparent autofill:bg-yellow-400"
											autocomplete="email"
											title="Mail"
										/>
									</div> -->
		<br />

		<!--Submit button-->
		<div class="mb-12 pb-1 pt-1 text-center">
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
</section>

<style lang="postcss">
</style>
