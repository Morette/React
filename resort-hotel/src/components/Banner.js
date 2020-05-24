import React from 'react';

const Banner = ({ children, title, substitle }) => (
	<div className='banner'>
		<h1>{title}</h1>
		<div></div>
		<p>{substitle}</p>
		{children}
	</div>
);

export default Banner;
