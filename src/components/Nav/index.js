import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
        return (
        <header class="hero-header" id="hero-header">
            <div>
                <Navbar>
                        <ul>
                            <Nav>
                                <li><Nav.Link href="#about">About</Nav.Link></li>
                                <li><Nav.Link href="#services">Services</Nav.Link></li>
                                <li><Nav.Link href="#portfolio">Portfolio</Nav.Link></li>
                                <li><Nav.Link href="#contact">Contact Me</Nav.Link></li>
                            </Nav>
                        </ul>
                </Navbar>
            </div>
        </header>
    );
}

export default Navigation;