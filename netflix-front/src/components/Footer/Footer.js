import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <ul>
                        <li>
                            <Link to='/questions'>
                                Questions? Contact us.
                            </Link>
                        </li>
                        <li>
                            <Link to='/faq'>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to='/cookiepreferences'>
                                Cookie Preferences
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-content-center-left">
                    <ul>
                        <li className="link">
                            <Link to='/helpcenter' >
                                Help Center
                            </Link></li>
                        <li>
                            <Link to='/corporateinfo' >
                                Corporate Information
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-content-center-right">
                    <ul>
                        <li>
                            <Link to='/termsofuse'>
                                Terms of Use
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <ul>
                    <li>
                        <Link to='/privacy'>
                            Privacy
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;