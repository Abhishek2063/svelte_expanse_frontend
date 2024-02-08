<script>
	import { REGISTER, LOGIN_API, DASHBOARD } from '$lib/index.js';
	import { post } from '$lib/api.js';
	import { setToken } from '$lib/storage/token.js';
	import { setUserDetails } from '$lib/storage/user.js';

	import { fieldValidator } from '$lib/validation/custom.js';
	import Input from '$components/Input.svelte';
	import Button from '$components/Button.svelte';
	import { message } from 'antd';
	import { goto } from '$app/navigation';
	import Loader from '$lib/loader.svelte';

	let login_form_data = {
		email: '',
		password: ''
	};

	let login_form_data_error = {
		email: '',
		password: ''
	};

	let isLoader = false;

	const validateForm = (login_form_data, login_form_data_error) => {
		let hasErrors = false; // Flag to track if there are any errors

		for (const key in login_form_data) {
			if (login_form_data.hasOwnProperty(key)) {
				let type = '';
				let maxLength = null;
				let minLength = null;

				if (key === 'email') {
					type = 'email';
					maxLength = 255;
					minLength = 8;
				}
				if (key === 'password') {
					type = 'password';
					maxLength = 20;
					minLength = 8;
				}

				const error = checkValidation(
					key,
					login_form_data[key],
					type,
					maxLength,
					minLength,
					login_form_data
				);

				// Update error message in the login_form_data_error object
				login_form_data_error[key] = error.getError ? error.errorMsg : '';

				// Update hasErrors flag if there is an error
				if (error.getError) {
					hasErrors = true;
				}
			}
		}

		return !hasErrors; // Return true if no errors, false otherwise
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		isLoader = true;
		const isFormValid = validateForm(login_form_data, login_form_data_error);
		if (isFormValid) {
			await post(LOGIN_API, login_form_data)
				.then((response) => {
					if (response.data.success) {
						message.success(response.data.message);

						setToken(response.data.data.token);
						setUserDetails(response.data.data.user);
						login_form_data = {
							email: '',
							password: ''
						};
						login_form_data_error = {
							email: '',
							password: ''
						};
						isLoader = false;
						goto(DASHBOARD);
					} else {
						isLoader = false;
						message.error(response.data.message);
					}
				})
				.catch((error) => {
					isLoader = false;
					message.error(error.response.data.message);
				});
		} else {
			isLoader = false;
			login_form_data_error = login_form_data_error;
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === 'enter') {
			handleSubmit(event);
		}
	};

	const checkValidation = (field, value, type, maxLength, minLength) => {
		return fieldValidator(field, value, type, maxLength, minLength, login_form_data.password);
	};

	const handleInputValue = (e, type, maxLength, minLength) => {
		let value = e.target.value;
		if (type === 'password' || type === 'email') {
			value = e.target.value.replace(/\s+/g, '');
		}
		let error = checkValidation(e.target.name, value, type, maxLength, minLength);
		// Update form data and error messages
		login_form_data = {
			...login_form_data,
			[e.target.name]: value
		};

		login_form_data_error = {
			...login_form_data_error,
			[e.target.name]: error.getError ? error.errorMsg : ''
		};
	};
</script>

{#if isLoader}
	<Loader />
{/if}
<!-- markup (zero or more items) goes here -->
<div class=" flex h-screen w-full items-center justify-center">
	<form class="mb-4 max-w-md rounded bg-white px-8 pb-8 pt-6 shadow-md" on:submit={handleSubmit}>
		<h1 class="mb-2 text-center text-lg font-bold text-cyan-500">Login in your account</h1>

		<div class="mb-4">
			<Input
				lable_class="block text-gray-700 text-sm font-bold mb-2"
				input_name="email"
				lable_name="Email"
				input_class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				input_type="email"
				placeholder="Enter email."
				input_value={login_form_data.email}
				isRequired="true"
				error={login_form_data_error.email}
				handleChange={(e) => handleInputValue(e, 'email', 255, 8)}
				{handleKeyDown}
			/>
		</div>
		<div class="mb-4">
			<Input
				lable_class="block text-gray-700 text-sm font-bold mb-2"
				input_name="password"
				lable_name="Password"
				input_class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				input_type="password"
				placeholder="Enter password."
				input_value={login_form_data.password}
				isRequired="true"
				error={login_form_data_error.password}
				handleChange={(e) => handleInputValue(e, 'password', 25, 8)}
				{handleKeyDown}
			/>
		</div>

		<div class="flex items-center justify-between">
			<Button
				text="Login"
				class_values="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			/>
		</div>
		<div class="mt-3 flex items-center justify-between">
			<a class="inline-block align-baseline text-sm font-bold" href={REGISTER}
				>Don't have an account?
				<span class="text-blue-500 hover:text-blue-800"> Sign Up </span>
			</a>
		</div>
	</form>
</div>
