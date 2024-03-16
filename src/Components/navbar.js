//FUNCTION TO ANIMATE MENU-BAR ON CLICK
const menuClicked = ()=>{
    const menubar = document.getElementById("menu-bar");
    const dropdownBar = document.querySelector(".dropdown-bar");
    menubar.classList.toggle("change");
    dropdownBar.classList.toggle("visible"); 
}

const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <div id="navbar">
                <div className="left-nav">
                    <span className="logo">E</span><span className="brand">ventsbrite</span>
                </div>
                <div className="right-nav">
                    <li><a href='#home'>HOME</a></li>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href='#devices'>DOWNLOAD</a></li>
                    <li><a href='#card'>DISCOVER</a></li>
                    <li><a href='#accordionFlushExample'>FAQ</a></li>
                    <li><a href='#resources'>RESOURCES</a></li>
                    <button id='menu-bar' onClick={menuClicked}>
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;