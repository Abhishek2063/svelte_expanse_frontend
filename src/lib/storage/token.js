export function getToken() {
	return sessionStorage.getItem('ACCESS_TOKEN');
}

export function setToken(token) {
	sessionStorage.setItem('ACCESS_TOKEN', token);
	return token;
}

export function removeLocalData() {
	sessionStorage.removeItem('ACCESS_TOKEN');
	sessionStorage.removeItem('typeData');
	sessionStorage.removeItem('entityData');
	return true;
}

export function getVerifyToken() {
	return sessionStorage.getItem('VERIFY_TOKEN');
}

export function setVerifyToken(token) {
	sessionStorage.setItem('VERIFY_TOKEN', token);
	return token;
}
