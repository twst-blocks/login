<?php
/**
 * Plugin Name:     TWST Login Block
 * Description:     Easily insert a login form block into your post or page!
 * Version:         1.0
 * Author:          TWST
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     twst-login-block
 */

namespace TWST\WordPressBlock\Login;
const SLUG  = 'twst-login-block';
const BLOCK = 'twst/login';
const DIR   = __DIR__ . '/';

function init() {
	$script_asset = require( DIR . 'build/index.asset.php' );
	wp_register_script(
		SLUG . '-editor',
		plugins_url( 'build/index.js', __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	wp_register_style(
		SLUG . '-editor',
		plugins_url( 'build/index.css', __FILE__ ),
		[],
		filemtime( DIR . 'build/index.css' )
	);

	register_block_type( 'twst/login', array(
		'editor_script'   => SLUG . '-editor',
		'editor_style'    => SLUG . '-editor',
		'uses_context' => [ 'postId' ],
		'render_callback' => __NAMESPACE__ . '\render',
	) );
}
add_action( 'init', __NAMESPACE__ . '\init' );

function render( $attributes, $rendered_html, $block ) {
	if ( is_user_logged_in() ) {
		return '';
	}

	$attribute_to_form_arg = [
		'labelUsername'     => 'label_username',
		'defaultUsername'   => 'value_username',
		'labelPassword'     => 'label_password',
		'labelRememberMe'   => 'label_remember',
		'hideRememberMe'    => 'remember',
		'defaultRememberMe' => 'value_remember',
		'labelLogIn'        => 'label_log_in',
	];

	$output = '<div class="twst-login login-block">';

	$args = [
		'form_id' => SLUG,
		'echo'    => false,
	];

	if ( ! empty( $block->context['postId'] ) ) {
		$args['redirect'] = get_permalink( $block->context['postId'] );
	}

	foreach ( $attribute_to_form_arg as $attribute => $arg ) {
		if ( isset( $attributes[ $attribute ] ) && '' !== $attributes[ $attribute ] ) {
			$args[ $arg ] = $attributes[ $attribute ];
		}
	}

	$output .= wp_login_form( $args );

	$output .= '</div>';

	return $output;
}