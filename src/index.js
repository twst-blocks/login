import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';

registerBlockType( 'twst/login', {
	title: __( 'Login', 'twst-login-block' ),
	description: __( 'Easily insert a login form block into your post or page!', 'twst-login-block' ),
	category: 'widgets',
	icon: 'lock',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	attributes: {
		labelUsername: {
			type: 'string',
			default: '',
		},
		defaultUsername: {
			type: 'string',
			default: '',
		},
		labelPassword: {
			type: 'string',
			default: '',
		},
		labelRememberMe: {
			type: 'string',
			default: '',
		},
		defaultRememberMe: {
			type: 'boolean',
			default: false,
		},
		labelLogIn: {
			type: 'string',
			default: '',
		},
	},

	example: {},
	edit: Edit,
} );
