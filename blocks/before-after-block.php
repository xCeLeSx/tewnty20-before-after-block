<?php 
function before_after_block_init() {
	// Register our block editor script.
	wp_register_script(
		'before-after-block',
		plugins_url( 'before-after-block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-editor' )
	);

	// Register our block, and explicitly define the attributes we accept.
	register_block_type( 'twenty20/before-after-block', array(
		'attributes'      => array(
			'img1' => array(
				'type' => 'string',
				'default'=> '0',
			), 
			'img2' => array(
				'type' => 'string',
				'default'=> '0',
			), 
			'direction' => array(
				'type' => 'string',
				'default' => 'horizontal',
			), 
			'offset' => array(
				'type' => 'integer',
				'default' => 5,
			), 
			'align' => array(
				'type' => 'string',
				'default' => 'none',
			), 
			'width' => array(
				'type' => 'integer',
				'default' => 100,
			), 
			'before' => array(
				'type' => 'string',
				'default' => 'Before',
			), 
			'after' => array(
				'type' => 'string',
				'default' => 'After',
			), 
			'hover' => array(
				'type' => 'boolean',
				'default' => 'true',
			),
		),
		'editor_script'   => 'before-after-block', // The script name we gave in the wp_register_script() call.
		'render_callback' => 'before_after_block_render',
	) );

	// Define our shortcode, too, using the same render function as the block.
	add_shortcode( 'before_after_block', 'before_after_block_render' );
}
add_action( 'init', 'before_after_block_init' );

/**
 * Our combined block and shortcode renderer.
 *
 * For more complex shortcodes, this would naturally be a much bigger function, but
 * I've kept it brief for the sake of focussing on how to use it for block rendering.
 *
 * @param array $attributes The attributes that were set on the block or shortcode.
 */
function before_after_block_render( $attributes ) {
	return '[twenty20 img1="'.$attributes['img1'].'" img2="'.$attributes['img2'].'" direction="'.$attributes['direction'].'" offset="'.$attributes['offset'] / 10 .'" align="'.$attributes['align'].'" width="'.$attributes['width'].'%" before="'.$attributes['before'].'" after="'.$attributes['after'].'" hover="'.$attributes['hover'].'"]';
}

?>