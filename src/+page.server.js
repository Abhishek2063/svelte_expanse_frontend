import { LOGIN, REGISTER } from '$lib/index.js';
import { redirect } from '@sveltejs/kit';
export async function load({ url }) {
	const publicRoutes = [LOGIN, REGISTER];
	const privateRoutes = ['/dashboard', '/profile'];

	const accessToken = sessionStorage.getItem('ACCESS_TOKEN');

	// Check if the requested URL is a private route and access token is not available
	if (privateRoutes.includes(url.pathname) && !accessToken) {
		throw redirect(302, '/');
	}

	// Check if the requested URL is a public route and user is authenticated
	if (publicRoutes.includes(url.pathname) && accessToken) {
		throw redirect(302, '/dashboard');
	}
	// No redirection required
	return {};
}

export function redirect_url(url) {
    throw redirect(302, url);
}