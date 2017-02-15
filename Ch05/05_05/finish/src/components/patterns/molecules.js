import { H1, H2, H3, H4, H5, H6, P } from './atoms.js'

export const First = ({children}) =>
	<section>
		<H4 elemClass="something else">{children}</H4>
	</section>

export const Second = ({children}) =>
	<P>{children}</P>