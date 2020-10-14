<?php

/**
 * Plugin Name: WP Dark Mode Block
 * Plugin URI:  https://wppool.dev/wp-dark-mode
 * Description: Toggle between Darkmode and Normal mode with the Dark Mode Switch block.
 * Version:     1.0.0
 * Author:      WPPOOL
 * Author URI:  http://wppool.dev
 * Text Domain: wp-dark-mode-block
 * Domain Path: /languages/
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */


defined( 'ABSPATH' ) || exit;


/**
 * Register all the block assets so that they can be enqueued through the block editor
 * in the corresponding context
 */
add_action( 'init', 'register_dark_mode_block' );
function register_dark_mode_block() {
	// If block editor is not active, bail.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	// Register the block editor scripts
	wp_register_script( 'wp-dark-mode-block-editor-script', plugins_url( 'build/index.js', __FILE__ ),
		[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ], filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ) );

	// Register the block editor styles
	wp_register_style( 'wp-dark-mode-block-editor-style', plugins_url( 'build/editor.css', __FILE__ ), [],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' ) );

	// Register the front-end styles
	wp_register_style( 'wp-dark-mode-block-frontend-styles', plugins_url( 'build/style.css', __FILE__ ), [],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' ) );

	// Register the script
	wp_register_script( 'wp-dark-mode-block-frontend-script', plugins_url( 'build/script.js', __FILE__ ), [ 'jquery' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/script.js' ) );

	if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'wp-dark-mode/switcher' ) ) {
		register_block_type( 'wp-dark-mode-block/switch', [
			'editor_script' => [ 'wp-dark-mode-block-editor-script' ],
			'editor_style'  => [ 'wp-dark-mode-block-editor-style' ],
			'style'         => [ 'wp-dark-mode-block-frontend-styles' ],
			'script'        => [ 'wp-dark-mode-block-frontend-script' ],
		] );
	}

	if ( function_exists( 'wp_set_script_translations' ) ) {
		/**
		 * Adds internalization support
		 */
		wp_set_script_translations( 'wp-dark-mode-editor-script', 'wp-dark-mode-block' );
	}
}
