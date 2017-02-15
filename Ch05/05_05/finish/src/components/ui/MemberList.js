// import { CSS } from '../patterns/css-classes.js'
import { H1, H2, H3, H4, H5, H6, P } from '../patterns/atoms.js'
import { First, Second } from '../patterns/molecules.js'

const MemberList = () => (
	<div className="member-list">
    	<First>
    		<Second>second thing</Second>
    	</First>
    	<H2 overideDefault={true} elemClass="something yadda SKJDNFDS">this is in the h2</H2>
    	<H1>testing</H1>
    	<H3>hw33333</H3>
    	<H4>hw33333</H4>
    	<H5>hw33333</H5>
    	<H6>hw33333</H6>
    	<P>kjsdnf skdjnf</P>
    </div>
)

export default MemberList
