import React from 'react';

import './navbar.css'
function Navbar(){
    return(
<nav className='main-nav'>
    
<div className='menu-link'>
<ul>
    <li>
        <a href='/'>Home</a>
    </li>
    <li>
        <a href='/project'>Project</a>
    </li>
    <li>
        <a href='/contact'>contact</a>
    </li>
    <li>
        <a href='/about'>About</a>
    </li>
</ul>
</div>
</nav>
    )
}
export default Navbar;