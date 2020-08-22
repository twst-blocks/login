<?php
namespace TWST\WordPressBlock\Login;

/**
 * Plugin Name:     TWST Login Block
 * Description:     Easily insert a login block into your post or page!
 * Version:         0.1.0
 * Author:          TWST
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     twst-login-block
 *
 * @package         twst
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";

	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'twst-login-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'twst-login-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'twst-login-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'twst/block', array(
		'editor_script' => 'twst-login-block-editor',
		'editor_style'  => 'twst-login-block-editor',
		'style'         => 'twst-block-block',
	) );
}
add_action( 'init', __NAMESPACE__ . '\init' );

