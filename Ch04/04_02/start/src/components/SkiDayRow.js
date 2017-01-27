import { TiWiFi, TiWorld, TiWaves } from 'react-icons/lib/ti' 

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
	<tr>
		<td>{ date.getMonth() + 1 } / { date.getDate() } / { date.getFullYear() }</td>
		<td>{ resort }</td>
		<td>{ powder ? <TiWiFi/> : null }</td>
		<td>{ backcountry ? <TiWorld/> : null }</td>
	</tr>
)