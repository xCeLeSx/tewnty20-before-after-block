var el = wp.element.createElement,
	registerBlockType = wp.blocks.registerBlockType,
	ServerSideRender = wp.components.ServerSideRender,
	TextControl = wp.components.TextControl,
	ToggleControl = wp.components.ToggleControl,
	RangeControl = wp.components.RangeControl,
	SelectControl = wp.components.SelectControl,
	InspectorControls = wp.editor.InspectorControls,
	PanelBody = wp.components.PanelBody;



registerBlockType( 'twenty20/before-after-block', {
	title: 'Before-After image',
	icon: 'image-flip-horizontal',
	category: 'media',


	edit: 
	
	function( props ) {
		
		return [

			el( ServerSideRender, {
				block: 'twenty20/before-after-block',
				attributes: props.attributes,
			} ),

			el( InspectorControls, {},
			   el( PanelBody, { title: 'Images', initialOpen: true },
				  el( TextControl, {
					label: 'First Image',
					value: props.attributes.img1,
					onChange: ( value ) => { props.setAttributes( { img1: value } ); },
				} ),
			    el( TextControl, {
					label: 'Second Image',
					value: props.attributes.img2,
					onChange: ( value ) => { props.setAttributes( { img2: value } ); },
				} )),
			el( PanelBody, { title: 'Settings', initialOpen: true },
			    el( SelectControl, {
					label: 'Direction',
												options : [
					{ label: 'Horizontal', value: 'horizontal' },
					{ label: 'Vertical', value: 'vertical' },
				],
					value: props.attributes.direction,
					onChange: ( value ) => { props.setAttributes( { direction: value } ); },
				} ),
			    el( RangeControl, {
					label: 'Offset',
					min: 0,
					max: 10,
					value: props.attributes.offset,
					onChange: ( value ) => { props.setAttributes( { offset: value } ); },
				} ),
			    el( SelectControl, {
					label: 'Align',
								options : [
					{ label: 'None', value: 'none' },
					{ label: 'Left', value: 'left' },
					{ label: 'Right', value: 'right' },
				],
					value: props.attributes.align,
					onChange: ( value ) => { props.setAttributes( { align: value } ); },
				} ),
			    el( RangeControl, {
					label: 'Width',
					min: 1,
					max: 100,
					value: props.attributes.width,
					onChange: ( value ) => {props.setAttributes( { width: value } );
				},
				value: props.attributes.width,
				} ),
			  el( ToggleControl, {
					label: 'Hover',
					onChange: ( value ) => { props.setAttributes( { hover: value } ); },
				checked: props.attributes.hover,
				} )),
			   el( PanelBody, { title: 'Captions', initialOpen: true },
			    el( TextControl, {
					label: 'Before',
					value: props.attributes.before,
					onChange: ( value ) => { props.setAttributes( { before: value } ); },
				} ),
			    el( TextControl, {
					label: 'After',
					value: props.attributes.after,
					onChange: ( value ) => { props.setAttributes( { after: value } ); },
				} ),
)
			),
		];
	},

	save: function(props) {
		
		return null
	},
} );