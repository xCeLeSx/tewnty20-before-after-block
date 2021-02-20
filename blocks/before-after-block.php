<?php 
function before_after_block_init() {
	wp_register_script(
		'before-after-block',
		plugins_url( 'before-after-block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-editor' )
	);

	register_block_type( 'twenty20/before-after-block', array(
		'attributes'      => array(
			'img1' => array(
				'type' => 'string',
			), 
			'img2' => array(
				'type' => 'string',
			), 
			'img1url' => array(
				'type' => 'string',
			), 
			'img2url' => array(
				'type' => 'string',
			), 
			'direction' => array(
				'type' => 'string',
				'default' => 'horizontal',
			), 
			'offset' => array(
				'type' => 'decimalPoint',
				'default' => 0.5,
			), 
			'align' => array(
				'type' => 'string',
				'default' => 'none',
			), 
			'width' => array(
				'type' => 'string',
				'default' => '50%',
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
				'type' => 'string',
				'default' => 'true',
			),
		),
		'editor_script'   => 'before-after-block', 
		'render_callback' => 'twenty20_shortcode_init',
		
		
	) );
}
add_action( 'init', 'before_after_block_init'  );
