import '../stylesheets/ui.scss'
import { FaBattery0, FaBattery1, FaBattery2, FaBattery3, FaBattery4 } from 'react-icons/lib/fa'
import TiPointOfInterest from 'react-icons/lib/ti/point-of-interest'

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<FaBattery0 />
				<TiPointOfInterest />
				<span>{total}</span>
				<span>days</span>
			</div>
			<div className="powder-days">
				<FaBattery1 />
				<span>{powder}</span>
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<FaBattery2 />
				<span>{backcountry}</span>
				<span>days</span>
			</div>
			<div>	
				<FaBattery3 />
				<span>
					{calcGoalProgress(
						total, 
						goal
					)}
				</span>
			</div>
		</div>
)
