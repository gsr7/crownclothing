import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ( {title,items}) => (

	<div className='collection-preview'>
		
		<h1 className='title'> {title.toUpperCase()} </h1>

	<div className="preview">

          {/* here used filter to show only 4 items */}

	{   
		items.filter( (item,index)=> index < 4 )
		.map( ({id, ...otherItemProps})=>( 
			<CollectionItem key={id} {...otherItemProps} />
		))
	}


	</div>
	</div>


)

export default CollectionPreview;