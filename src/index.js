import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';

const loginBlockAttributes = {
	labelUsername: {
		type: 'string',
		default: __( 'Username or Email Address', 'twst-login-block' ),
	},
	defaultUsername: {
		type: 'string',
		default: '',
	},
	labelPassword: {
		type: 'string',
		default: __( 'Password', 'twst-login-block' ),
	},
	labelRememberMe: {
		type: 'string',
		default: __( 'Remember Me', 'twst-login-block' ),
	},
	defaultRememberMe: {
		type: 'boolean',
		default: false,
	},
	labelLogIn: {
		type: 'string',
		default: __( 'Log In', 'twst-login-block' ),
	},
};

registerBlockType( 'twst/login', {
	title: __( 'Login', 'twst-login-block' ),
	description: __( 'Easily insert a login form block into your post or page!', 'twst-login-block' ),
	category: 'widgets',
	icon: 'lock',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	attributes: loginBlockAttributes,

	example: {},
	edit: ( props ) => Edit( props, loginBlockAttributes ),
} );
