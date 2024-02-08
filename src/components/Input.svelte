<script>
	export let lable_class;
	export let input_name;
	export let lable_name;
	export let input_class;
	export let input_type;
	export let placeholder;
	export let input_value;
	export let isRequired;
	export let error;
	export let handleChange;
	export let handleKeyDown;
</script>

<label class={lable_class} for={input_name}>
	{#if isRequired}
		{lable_name}
		<span class="text-red-700">*</span>
	{:else}
		{lable_name}
	{/if}
</label>
<input
	class={input_class}
	id={input_name}
	type={input_type}
	{placeholder}
	name={input_name}
	value={input_value}
	on:change={handleChange}
	on:input={handleChange}
	on:keydown={handleKeyDown}
/>
{#if error}
	<p><small style="color: red"> {error} </small></p>
{/if}

<style>
</style>
