
const Header = (prop) =>{

    return(
        <>
            <div className="container-fluid shadow-sm">
                <div className="container p-2 text-center">
                    <h1 style={{margin:"auto"}}>{prop.title}</h1>
                </div>
            </div>
        </>
    );
}
export default Header;