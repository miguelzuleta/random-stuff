export const H1 = ({defaultClass='o1 o2', elemClass='', overideDefault=false, children}) =>
	<h1 className={overideDefault ? elemClass : `${defaultClass} ${elemClass}`}>{children}</h1>

export const H2 = ({defaultClass='o1 o3', elemClass='', overideDefault=false, children}) =>
	<h2 className={overideDefault ? elemClass : `${defaultClass} ${elemClass}`}>{children}</h2>

export const H3 = ({defaultClass='yadda', elemClass='', overideDefault=false, children}) =>
	<h3 className={overideDefault ? elemClass : `${defaultClass} ${elemClass}`}>{children}</h3>

export const H4 = ({defaultClass='yadda', elemClass='', overideDefault=false, children}) =>
	<h4 className={overideDefault ? elemClass : `${defaultClass} ${elemClass}`}>{children}</h4>

export const H5 = ({defaultClass='yadda', elemClass='', overideDefault=false, children}) =>
	<h5 className={overideDefault ? elemClass : `${defaultClass} ${elemClass}`}>{children}</h5>

export const H6 = ({defaultClass='yadda', elemClass='', overideDefault=false, children}) =>
	<h6 className={overideDefault ? elemClass : `${defaultClass} ${elemClass}`}>{children}</h6>

export const P = ({defaultClass='balls', elemClass='', overideDefault=false, children}) =>
	<p className={overideDefault ? elemClass : `${defaultClass} ${elemClass}`}>{children}</p>
