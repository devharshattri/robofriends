import React from 'react';
const Card = ({id, name, email}) => {
	return (
		<div  className='tc bg-light-green dib br3 pa33 ma2 grow bw2 shadow-5'>
			<img style={{height:'180px', width:'180px'}} alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}
export default Card;