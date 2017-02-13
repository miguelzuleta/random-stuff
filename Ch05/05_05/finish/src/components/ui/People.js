import React from 'react'
import eh from 'json!../data/data-01.json'

const all = eh.map((element, index) => {

	let hex = element['hex']
	let rgb = parseInt(hex.substr(1), 16)
	let r = (rgb >> 16) & 0xff;
	let g = (rgb >>  8) & 0xff;
	let b = (rgb >>  0) & 0xff;

	let luminescence = 0.2126 * r + 0.7152 * g + 0.0722 * b

	let brightness = () => luminescence < 126.5 ? '#fff' : '#000'

	return (
		<section key={ index } style={{ backgroundColor: hex }}>
			<h6 style={{ color: brightness() }}>Person { element['id'] }</h6>
			<h5 style={{ color: brightness() }}>{ element['first_name'] } { element['last_name'] }</h5>
		</section>
	)
})

const People = () => {
	return (
		<div className="people">
	    	<h1>Here are some people</h1>
	    	{ all }
	    </div>
	)
}

export default People
