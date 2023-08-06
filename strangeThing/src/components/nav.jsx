import {Link} from 'react-router-dom'

function Nav() {
    return <div id='nav'> 
    
        <nav>
            <Link to='/'>Login</Link>
            <Link to='/posts'>Posts</Link>

        </nav>
        </div>
    
}

export default Nav;