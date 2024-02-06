export const appURL = process.env.NODE_ENV === 'development'
	? process.env.REACT_APP_STAGING_URL
	: process.env.REACT_APP_PROD_URL
