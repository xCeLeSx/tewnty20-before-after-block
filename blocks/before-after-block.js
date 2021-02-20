(function (blocks, editor, components, i18n, element) {

	var el = wp.element.createElement,
	registerBlockType = wp.blocks.registerBlockType,
	ServerSideRender = wp.components.ServerSideRender,
	TextControl = wp.components.TextControl,
	RangeControl = wp.components.RangeControl,
	SelectControl = wp.components.SelectControl,
	InspectorControls = wp.editor.InspectorControls,
	MediaUpload = wp.editor.MediaUpload,
	PanelBody = wp.components.PanelBody;


registerBlockType( 'twenty20/before-after-block', {
	title: 'Before-After image',
	icon: 'image-flip-horizontal',
	category: 'media',

	edit: 
	
	function( props ) {
		
      var onSelectImage = function (media) {
        return props.setAttributes({
        	img1: media.id.toString(),
			img1url: media.url
        })
      }
	        var onSelectImage2 = function (media) {
        return props.setAttributes({
        	img2: media.id.toString(),
			img2url: media.url
        })
      }
		
		return [
			
			el( ServerSideRender, {
				block: 'twenty20/before-after-block',
				attributes: props.attributes,
			} ),

			el( InspectorControls, {},
			   el( PanelBody, { title: 'Images', initialOpen: true },
				  el('p', {}, __('First Image:')),
          el(MediaUpload, {
			onSelect: onSelectImage,
              type: 'image',
              render: function (obj) {
                return el(wp.components.Button, {
                  className: !props.attributes.img1 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
                  onClick: obj.open
                },
         		!props.attributes.img1 ?					
    									el( 'span', {},
    									    'Select image'
    									): el('img', { src: props.attributes.img1url }))
              }}),
				  el('p', {}, __('Second Image:')),
				  el(MediaUpload, {
			onSelect: onSelectImage2,
              type: 'image',
              render: function (obj) {
                return el(wp.components.Button, {
                  className: !props.attributes.img2 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
                  onClick: obj.open
                },
         		!props.attributes.img2 ?			
    									el( 'span', {},
    									    'Select image'
    									): el('img', { src: props.attributes.img2url }))
              }
            }),
				 ),
			el( PanelBody, { title: 'Display', initialOpen: true },
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
					min: 0.0,
					max: 1.0,
					step: 0.1,
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
					value: parseInt(props.attributes.width.slice(0, -1)),
					onChange: ( value ) => {props.setAttributes( { width: value + '%' } );
				},
				} ),			   
			   el( SelectControl, {
					label: 'Hover',
					options : [
					{ label: 'True', value: 'true' },
					{ label: 'False', value: 'false' },
				],
					value: props.attributes.hover,
					onChange: ( value ) => { props.setAttributes( { hover: value } ); },
				} ),
			   ),
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
		return null;
	},
} );
} )();