import React from 'react'
// import Json from '../data/data-01.json'

let eh = [
	{
	  "id": 1,
	  "first_name": "Justin",
	  "last_name": "Rose",
	  "hex": "#4bbb18"
	}, {
	  "id": 2,
	  "first_name": "Timothy",
	  "last_name": "Burton",
	  "hex": "#feda16"
	}, {
	  "id": 3,
	  "first_name": "Andrew",
	  "last_name": "Dunn",
	  "hex": "#603555"
	}, {
	  "id": 4,
	  "first_name": "Lori",
	  "last_name": "Ross",
	  "hex": "#859b2f"
	}, {
	  "id": 5,
	  "first_name": "Joshua",
	  "last_name": "Greene",
	  "hex": "#2d0956"
	}, {
	  "id": 6,
	  "first_name": "Donna",
	  "last_name": "Williamson",
	  "hex": "#f2dbeb"
	}, {
	  "id": 7,
	  "first_name": "Lois",
	  "last_name": "Lee",
	  "hex": "#e8c09a"
	}, {
	  "id": 8,
	  "first_name": "Laura",
	  "last_name": "Knight",
	  "hex": "#e3d0b7"
	}, {
	  "id": 9,
	  "first_name": "Christine",
	  "last_name": "Kennedy",
	  "hex": "#ba4c6f"
	}, {
	  "id": 10,
	  "first_name": "Bobby",
	  "last_name": "Freeman",
	  "hex": "#5a7538"
	}
]

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
