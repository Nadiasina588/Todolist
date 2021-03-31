import React, {useState} from 'react';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
        <nav className="navBar">
            <div className="navbar-container">
               <h1>NNM<i className='fab fa-typo3' /></h1>
               <div className='menu-icon' onClick={handleClick}>
                <h1 className={click ? 'MENU' : 'PLUS'} > </h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                        Home
                    </li>
                    <li className='nav-item'>
                        Services
                    </li>
                    <li className='nav-item'>
                        Products
                    </li>
                    <li className='nav-item'>
                        Sign Up
                    </li>
                </ul>
            </div>
            </div>
           
        </nav>
        </>
    )
}
export default Navbar