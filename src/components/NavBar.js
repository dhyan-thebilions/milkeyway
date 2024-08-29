import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Nav,
    NavItem,
    NavLink,
    Collapse,
} from "reactstrap";
import "./NavBar.css";

const NavBar = () => {
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => setOffcanvasOpen(!offcanvasOpen);
    return (
        <React.Fragment>
            <Navbar expand="md">
                <NavbarBrand href="/" className="nav-logo">
                    Milkyway
                </NavbarBrand>
                <NavbarToggler onClick={toggleOffcanvas} />
                <Collapse navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink href="/" className="nav-font">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/aboutus" className="nav-font">
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <button
                                className="rounded-pill nav-button mx-3"
                                type="submit"
                                onClick={() =>
                                    window.open(
                                        "https://www.facebook.com/profile.php?id=61564151433682",
                                        "_blank"
                                    )
                                }
                            >
                                Join Now
                            </button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <Offcanvas
                isOpen={offcanvasOpen}
                toggle={toggleOffcanvas}
                direction="end"
            >
                <OffcanvasHeader toggle={toggleOffcanvas}>
                    Offcanvas Title
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Nav vertical>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/aboutus">About Us</NavLink>
                        </NavItem>
                    </Nav>
                </OffcanvasBody>
            </Offcanvas>
        </React.Fragment>
    );
};

export default NavBar;
