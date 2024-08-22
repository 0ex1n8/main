import { useState } from "react";
import { Link } from "react-router-dom";

import NavStyle from "./styles/NavStyle.module.css";

import menu from "./assets/menu.svg";
import close from "./assets/close.svg";
import home from "./assets/home.svg";
import info from "./assets/info.svg";
import check_box from "./assets/check_box.svg";

export default function Navigation() {
    let [notVisible, setVisible] = useState(false);

    return (
        <div className="navigation">
            <div className={NavStyle.logo_out}>
                <img onClick={() => setVisible(true)} src={menu} />
                <h1 className={NavStyle.out_h1}>WEB-FOLIO</h1>
            </div>
            {notVisible && (
                <div className={NavStyle.sidebar}>
                    <div className="up-part">
                        <div className={NavStyle.logo_in}>
                            <img
                                onClick={() => setVisible(false)}
                                src={close}
                            />
                            <h1 className={NavStyle.in_h1}>MENU</h1>
                        </div>

                        <div className={NavStyle.links}>
                            <ul className={NavStyle.side_content}>
                                <li className={NavStyle.side_links}>
                                    <img src={home} />
                                    <Link
                                        to="/"
                                        onClick={() => setVisible(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className={NavStyle.side_links}>
                                    <img src={check_box} />
                                    <Link
                                        to="/project"
                                        onClick={() => setVisible(false)}
                                    >
                                        Works
                                    </Link>
                                </li>
                                <li className={NavStyle.side_links}>
                                    <img src={info} />
                                    <Link
                                        to="./about"
                                        onClick={() => setVisible(false)}
                                    >
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={NavStyle.side_footer}>
                        <p className={NavStyle.sideFooter_p}>Made with Love</p>
                    </div>
                </div>
            )}

            <div className={NavStyle.big_nav}>
                <div className={NavStyle.big_logo}>
                    <h1>WEB-FOLIO</h1>
                </div>
                <ul className={NavStyle.nav_bar}>
                    <li className={NavStyle.nav_links}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={NavStyle.nav_links}>
                        <Link to="/project">Works</Link>
                    </li>
                    <li className={NavStyle.nav_links}>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <div className={NavStyle.msg}>
                    <p>Made with Love</p>
                </div>
            </div>
        </div>
    );
}
