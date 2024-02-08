<script>
	import '../app.pcss';
</script>

<div class="background_image flex h-screen w-full bg-cover bg-center bg-no-repeat">
	<slot />
</div>

<style>
	.background_image {
		background-image: url('$images/background_image.jpg'); 
	}
</style>
