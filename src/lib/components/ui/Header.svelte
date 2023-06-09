<!-- Main navigation container -->
<header
	id="NavHeader"
	class="relative flex h-12 w-full flex-nowrap items-center justify-between bg-white shadow-md shadow-black/5 dark:bg-indigo-950 dark:shadow-black/10"
>
	<div id="HeaderLeftRegion" class="flex h-full w-12 flex-none items-center justify-center">
		<!-- Logo -->
		<a class="" href="/">
			<span>
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
			</span>
		</a>
	</div>

	<div
		id="HeaderCenterRegion"
		class="flex flex-1 flex-shrink-0 flex-grow-0 flex-wrap items-center justify-between px-3"
	>
		<!-- Collapsible navigation container -->
		<div class="">
			<!-- Left navigation links -->
			<ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
				<li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
					<!-- Dashboard link -->
					<a
						class="disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
						href="/dashboard"
						data-te-nav-link-ref>Dashboard</a
					>
				</li>
				<!-- Team link -->
				<li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
					<a
						class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
						href="/"
						data-te-nav-link-ref>Team</a
					>
				</li>
				<!-- Projects link -->
				<li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
					<a
						class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
						href="/"
						data-te-nav-link-ref>Projects</a
					>
				</li>
			</ul>
		</div>
	</div>
	<div id="HeaderRightRegion">
		<!-- Right elements -->
		<div class="relative flex items-center">
			<!-- Cart Icon -->
			<a
				class="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
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

			<!-- Container with two dropdown menus -->
			<div class="relative" data-te-dropdown-ref>
				<!-- First dropdown trigger -->
				<a
					class="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
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
						class="absolute -mt-2.5 ml-2 rounded-[0.37rem] px-[0.45em] py-[0.2em] text-[0.6rem] leading-none text-white dark:bg-error"
						>1</span
					>
				</a>
				<!-- First dropdown menu -->
				<ul
					class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
					aria-labelledby="dropdownMenuButton1"
					data-te-dropdown-menu-ref
				>
					<!-- First dropdown menu items -->
					<li>
						<a
							class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
							href="/"
							data-te-dropdown-item-ref>Action</a
						>
					</li>
					<li>
						<a
							class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
							href="/"
							data-te-dropdown-item-ref>Another action</a
						>
					</li>
					<li>
						<a
							class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
							href="/"
							data-te-dropdown-item-ref>Something else here</a
						>
					</li>
				</ul>
			</div>

			<!-- Second dropdown container -->
			<div class="flex h-12 w-12 items-center justify-center">
				<!-- Second dropdown trigger -->
				<a
					class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
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
			</div>
		</div>
	</div>
</header>
