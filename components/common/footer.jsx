import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer bg-dark position-relative">
            <div className="footer-middle">
                <div className="container position-static">
                    <div className="footer-ribbon">Get in touch</div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6 pb-2 pb-sm-0">
                            <div className="widget">
                                <h4 className="widget-title">About Us</h4>
                                <ALink href="/">
                                    <img src="images/logo-footer.png" alt="Logo" className="logo-footer" />
                                </ALink>
                                <p className="m-b-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                                    vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.</p>
                                <ALink href="#" className="read-more text-white">read more...</ALink>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 pb-4 pb-sm-0">
                            <div className="widget mb-2">
                                <h4 className="widget-title mb-11 pb-1">Contact Info</h4>
                                <ul className="contact-info m-b-4">
                                    <li>
                                        <span className="contact-info-label">Address:</span>123 Street Name, City, England
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Phone:</span><ALink href="tel:">(123) 456-7890</ALink>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Email:</span> <ALink
                                            href="mailto:mail@example.com">mail@example.com</ALink>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Working Days/Hours:</span>
                                        Mon - Sun / 9:00 AM - 8:00 PM
                                    </li>
                                </ul>
                                <div className="social-icons">
                                    <ALink href="#" className="social-icon social-facebook icon-facebook"
                                        title="Facebook"></ALink>
                                    <ALink href="#" className="social-icon social-twitter icon-twitter"
                                        title="Twitter"></ALink>
                                    <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                        title="Linkedin"></ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 pb-2 pb-sm-0">
                            <div className="widget">
                                <h4 className="widget-title pb-1">Customer Service</h4>

                                <ul className="links">
                                    <li><ALink href="#">Help & FAQs</ALink></li>
                                    <li><ALink href="#">Order Tracking</ALink></li>
                                    <li><ALink href="#">Shipping & Delivery</ALink></li>
                                    <li><ALink href="#">Orders History</ALink></li>
                                    <li><ALink href="#">Advanced Search</ALink></li>
                                    <li><ALink href="/pages/account">My Account</ALink></li>
                                    <li><ALink href="#">Careers</ALink></li>
                                    <li><ALink href="/pages/about-us">About Us</ALink></li>
                                    <li><ALink href="#">Corporate Sales</ALink></li>
                                    <li><ALink href="#">Privacy</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 pb-0">
                            <div className="widget">
                                <h4 className="widget-title">Popular Tags</h4>

                                <div className="tagcloud">
                                    <ALink href={ { pathname: "/shop", query: { tag: "bag" } } } scroll={ false }>Bag</ALink>
                                    <ALink href={ { pathname: "/shop", query: { tag: "black" } } } scroll={ false }>Black</ALink>
                                    <ALink href={ { pathname: "/shop", query: { tag: "blue" } } } scroll={ false }>Blue</ALink>
                                    <ALink href={ { pathname: "/shop", query: { tag: "clothes" } } } scroll={ false }>Clothes</ALink>
                                    <ALink href={ { pathname: "/shop", query: { tag: "fashion" } } } scroll={ false }>Fashion</ALink>
                                    <ALink href={ { pathname: "/shop", query: { tag: "hub" } } } scroll={ false }>Hub</ALink>
                                    <ALink href={ { pathname: "/shop", query: { tag: "jean" } } } scroll={ false }>Jean</ALink>
                                    <ALink href={ { pathname: "/shop", query: { tag: "shirt" } } } scroll={ false }>Shirt</ALink>
                                    <ALink href={ { pathname: "/shop", query: { tag: "skirt" } } } scroll={ false }>Skirt</ALink>
                                    <ALink href={ { pathname: "/shop", query: { tag: "sports" } } } scroll={ false }>Sports</ALink>
                                    <ALink href={ { pathname: "/shop", query: { tag: "sweater" } } } scroll={ false }>Sweater</ALink>
                                    <ALink href={ { pathname: "/shop", query: { tag: "winter" } } } scroll={ false }>Winter</ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-bottom">
                    <div className="container d-sm-flex align-items-center">
                        <div className="footer-left">
                            <span className="footer-copyright">© Porto eCommerce. 2021. All Rights Reserved</span>
                        </div>

                        <div className="footer-right ml-auto mt-1 mt-sm-0">
                            <div className="payment-icons">
                                <span className="payment-icon visa" style={ { backgroundImage: `url("images/payments/payment-visa.svg")` } }></span>
                                <span className="payment-icon paypal" style={ { backgroundImage: `url("images/payments/payment-paypal.svg")` } }></span>
                                <span className="payment-icon stripe" style={ { backgroundImage: `url("images/payments/payment-stripe.png")` } }></span>
                                <span className="payment-icon verisign" style={ { backgroundImage: `url("images/payments/payment-verisign.svg")` } }></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );