const Header = () => {
    return (
        <header>
            {/* <span>LOGO</span> */}
            <label>FeatureFlag Management</label>
            <div className="gap"></div>
            <div className="header-dropdown">
                Project
            </div>
            <div className="header-dropdown">
                Environment
            </div>

            <div className="header-dropdown right">
                Profile (Icon)
            </div>
        </header>
    );
}

export default Header;