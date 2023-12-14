import "../../App.css";
import React from "react";
import MenuItem from "./components/MenuItem";

const Header = () =>{
    let menuItems = [
        {
            text: "Services",
            link:"#"
        },
        {
            text: "Work",
            link:"#"
        },
        {
            text: "Blog",
            link:"#"
        },
        {
            text: "Contact",
            link:"#"
        }
    ];

    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h1>Logo</h1>
                </div>
                <nav className="col d-flex align-items-center">
                    <ul className="d-flex list-unstyled align-items-center gap-3">
                        {/*<MenuItem text="Services" link="#"/>*/}
                        {/*<MenuItem text="Work" link="#"/>*/}
                        {/*<MenuItem text="Blog" link="#"/>*/}
                        {/*<MenuItem text="Contact" link="#"/>*/}

                        {/*Both ways valid ^ v*/}

                        {menuItems.map((menuItem) =>(
                                <MenuItem text={menuItem.text} link={menuItem.link} />
                            ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;