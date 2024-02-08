import { LOGIN, REGISTER , DASHBOARD} from '$lib/index.js';


// src/routes/page.server.js
export async function load({ session, page }) {
	const publicRoutes = [LOGIN, REGISTER];
	const privateRoutes = [DASHBOARD];

  console.log(session, page);
	// if (publicRoutes.includes(page.path)) {
	//   return; // If it's a public route, continue to the route handler
	// } else {
	//   // If it's not a public route, check for an access token
	//   const token = session.accessToken;
  
	//   if (!token) {
	// 	// If no token, redirect to login
	// 	return { redirect: '/login' };
	//   }
  
	  // If there's a token, you could verify it here if necessary
	  // ...
  
	  // If the token is valid, continue to the route handler
	// }
  }

