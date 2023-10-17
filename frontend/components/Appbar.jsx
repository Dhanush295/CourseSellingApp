import './Appbar.css';

function AppBar() {

    return(
        <div className='container-nav'>
            <div className='logo-class'>
                <a className='logo' href="/">Course App</a>
            </div>
            
            <div>
                <input type="search" name="Search" id="SearchCourse" />
                <button className='Search-Course'>Search</button>
            </div>
            <div className='cred-button'>
                <button>Signup</button>
                <button>Login</button>
            </div>
        </div>
    )
}

export default AppBar;