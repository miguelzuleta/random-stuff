import { SkiDayRow } from './SkiDayRow'

export const SkiDayList = ({days}) => (
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Resort</th>
				<th>Powder</th>
				<th>Backcountry</th>
			</tr>
		</thead>
		<tbody>
			{days.map((day,i) =>
				<SkiDayRow
					key={i}
					{...day}
				/>
			)}
		</tbody>
	</table>
)

// import { TiWiFi, TiWorld, TiWaves } from 'react-icons/lib/ti'
// export const SkiDayList = ({days}) => (
// 	<table>
// 		<thead>
// 			<tr>
// 				<th>Date</th>
// 				<th>Resort</th>
// 				<th>Powder</th>
// 				<th>Backcountry</th>
// 			</tr>
// 		</thead>
// 		<tbody>
// 			{days.map((day,i) =>
// 				<tr key={i}>
// 					<td>{ day.date.getMonth() + 1 } / { day.date.getDate() } / { day.date.getFullYear() }</td>
// 					<td>{ day.resort }</td>
// 					<td>{ day.powder ? <TiWiFi/> : null }</td>
// 					<td>{ day.backcountry ? <TiWorld/> : null }</td>
// 				</tr>
// 			)}
// 		</tbody>
// 	</table>
// )