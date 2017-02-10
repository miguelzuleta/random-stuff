import { Link } from 'react-router'

const About = () => (
   <div className="about">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit am vel ultrices. Aenean neque nibh, tempor in tincidunt nec, ullamcorper quam erat volutpat. Aenean vitae sapien at nibh lacinia accumsan maximus sit amet risus.</p>
        <Link to="/broken-link">Broken Link</Link>
   </div>
)

export default About
