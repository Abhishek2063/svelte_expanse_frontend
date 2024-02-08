<script>
	// Import necessary libraries
	import welcome from '$images/svelte-welcome.webp';
	import welcome_fallback from '$images/svelte-welcome.png';
	import NavigateButton from '../components/NavigateButton.svelte';
</script>

<div
	class=" flex h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
>
	<div class="mx-auto max-w-md">
		<div class="rounded-xl bg-white p-8 shadow-lg">
			<h1 class="mb-4">
				<span class="welcome">
					<picture>
						<source srcset={welcome} type="image/webp" />
						<img src={welcome_fallback} alt="Welcome" />
					</picture>
				</span>

				<br />
				<span class="mb-4 text-3xl font-bold"> Expanse Tracking App </span>
			</h1>
			<p class="mb-4 text-lg">We're glad you're here.</p>
			<p class="mb-8 text-lg">
				Our expense tracking page helps you manage your finances efficiently.
			</p>
          
			<NavigateButton
				class_values="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
				text="Sign Up"
                navigate_path = "/register"
			/>
			<NavigateButton
				class_values="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
				text="Sign In"
                navigate_path = "/login"
			/>
		</div>
	</div>
</div>

<style>
	
	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
