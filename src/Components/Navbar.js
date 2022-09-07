import './Navbar.css';

function Navbar() {
    return(
        <div className="navbar-left">
            <div className='nav-item-main nav-item'>Navbar</div>
            <div className='navbar-right'>
                <a className='nav-item'>Home</a>
                <a className='nav-item'>About Me</a>
                <a className='nav-item'>Contact</a>
            </div>
        </div>
    )
}
export default Navbar