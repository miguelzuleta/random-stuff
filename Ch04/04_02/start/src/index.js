import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
	<SkiDayList days={[
		{
			resort: "yadda",
			date: new Date("1/3/2017"),
			powder: true,
			backcountry: false
		},
		{
			resort: "chapalum",
			date: new Date("1/6/2017"),
			powder: false,
			backcountry: false
		},
		{
			resort: "Nee",
			date: new Date("2/19/2017"),
			powder: true,
			backcountry: true
		}
	]}/>,
	document.getElementById('react-container')
)