import React from "react";

const Footer = () => {
    return (
        <nav className="navbar fixed-bottom navbar-light bg-light">
            <div className="navbar-text w-100 text-center">
                Made with{" "}
                <span>
                    <i className="fas fa-heart"></i>
                </span>{" "}
                and{" "}
                <span>
                    <i className="fas fa-mug-hot"></i>
                </span>{" "}
                by{" "}
                <a
                    href="https://www.arccoder.in"
                    target="_blank"
                    rel="noreferrer"
                >
                    Arc Coder | Harsh Patel
                </a>
            </div>
        </nav>
    );
};

export default Footer;
