<script>
    import loder from '$images/loader.gif';
</script>

<style>
    /* Overlay for the blur effect */
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity for the blur effect */
        backdrop-filter: blur(5px); /* Add blur effect to the background */
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div class="overlay">
    <!-- Loader image centered within the overlay -->
    <img src={loder} alt="Loader" class="mx-auto" />
</div>
