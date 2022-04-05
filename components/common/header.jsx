// Import Custom Component
import { useRouter } from "next/router";

import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";
import LoginModal from "../features/modals/login-modal";

export default function Header ( { adClass = '' } ) {
    const path = useRouter().pathname;

    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header ${ adClass }` }>
            <div className="header-top bg-primary text-uppercase">
                <div className="container">
                    <div className="header-left">
                        <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                            <ALink href="#" className="pl-0"><i className="flag-us flag"></i>ENG</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#"><i className="flag-us flag mr-2"></i>ENG</ALink>
                                    </li>
                                    <li><ALink href="#"><i className="flag-fr flag mr-2"></i>FRA</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown ml-3 pl-1">
                            <ALink href="#">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-right header-dropdowns ml-0 ml-sm-auto">
                        <p className="top-message mb-0 d-none d-sm-block">Welcome To Porto!</p>
                        <div className="header-dropdown dropdown-expanded mr-3">
                            <ALink href="#">Links</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="/pages/account">My Account</ALink></li>
                                    <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                    <li><ALink href="/pages/wishlist">My Wishlist</ALink></li>
                                    <li><ALink href="#">Site Map</ALink></li>
                                    <li><ALink href="/pages/cart">Cart</ALink></li>
                                    <LoginModal />
                                </ul>
                            </div>
                        </div>

                        <span className="separator"></span>

                        <div className="social-icons">
                            <ALink href="#" className="social-icon social-facebook icon-facebook"></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                            <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ `header-middle text-dark sticky-header ${ path !== '/' ? 'mobile-sticky' : '' }` }>
                <div className="container">
                    <div className="header-left col-lg-2 w-auto pl-0">
                        <button className="mobile-menu-toggler mr-2" type="button" type="button" onClick={ openMobileMenu }>
                            <i className="fas fa-bars"></i>
                        </button>
                        <ALink href="/" className="logo">
                            <img src="images/logo.png" width="111" height="44" alt="Porto Logo" />
                        </ALink>
                    </div>

                    <div className="header-right w-lg-max pl-2">

                        <SearchForm />

                        <div className="header-contact d-none d-lg-flex align-items-center pr-xl-5 mr-5 mr-xl-3 ml-5">
                            <i className="icon-phone-2"></i>
                            <h6 className="pt-1 line-height-1">Call us now<ALink href="tel:#"
                                className="d-block text-dark ls-10 pt-1">+123 5678 890</ALink></h6>
                        </div>

                        <ALink href="/pages/login" className="header-icon header-icon-user"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon"><i className="icon-wishlist-2"></i></ALink>

                        <CartMenu />
                    </div>
                </div>
            </div >
            {
                path !== '/' ?
                    <div className="sticky-wrapper">
                        <div className="header-bottom sticky-header d-none d-lg-block bg-gray desktop-sticky">
                            <div className="container">
                                <div className="header-left">
                                    <ALink href="/" className="logo">
                                        <img src="images/logo.png" alt="Porto Logo" />
                                    </ALink>
                                </div>
                                <div className="header-center">
                                    <MainMenu />
                                </div>
                                <div className="header-right">
                                    <SearchForm />

                                    <ALink href="/pages/login" className="header-icon header-icon-user"><i className="icon-user-2"></i></ALink>

                                    <ALink href="/pages/wishlist" className="header-icon"><i className="icon-wishlist-2"></i></ALink>

                                    <CartMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                    : ''
            }
        </header >
    )
}