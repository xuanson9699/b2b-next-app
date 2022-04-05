import StickyBox from 'react-sticky-box';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import BlogWidget from '../../partials/home/blog';

import { mainMenu } from '../../../utils/data/menu';

function HomeSidebar ( props ) {
    const { blog, loading } = props;

    function closeSidebar () {
        document.querySelector( 'body' ).classList.contains( 'sidebar-opened' ) && document.querySelector( 'body' ).classList.remove( 'sidebar-opened' );
    }

    function sidebarToggle ( e ) {
        let body = document.querySelector( 'body' );
        e.preventDefault();
        if ( body.classList.contains( 'sidebar-opened' ) ) {
            body.classList.remove( 'sidebar-opened' );
        } else {
            body.classList.add( 'sidebar-opened' );
        }
    }

    return (
        <>
            <div className="sidebar-overlay" onClick={ closeSidebar }></div>
            <div className="sidebar-toggle custom-sidebar-toggle" onClick={ e => sidebarToggle( e ) }><i className="fas fa-sliders-h"></i></div>

            <aside className={ `sidebar-home col-lg-3 order-lg-first  mobile-sidebar skeleton-body skel-shop-products ${ !loading ? 'loaded' : '' } ` }>
                <StickyBox className="sidebar-wrapper" offsetTop={ 70 }>
                    <div className="side-menu-wrapper text-uppercase mb-2 d-none d-lg-block">
                        <h2 className="side-menu-title bg-gray ls-n-25">Browse Categories</h2>

                        <nav className="side-nav">
                            <ul className="menu menu-vertical sf-arrows">
                                <li className="active"><ALink href="/"><i className="icon-home"></i>Home</ALink></li>
                                <li>
                                    <ALink href="/shop" className="sf-with-ul"><i
                                        className="sicon-badge"></i>Categories</ALink>
                                    <div className="megamenu megamenu-fixed-width megamenu-3cols mt-0">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <span className="nolink pl-0">VARIATION 1</span>
                                                <ul className="submenu">
                                                    {
                                                        mainMenu.shop.variation1.map( ( variations, index ) => (
                                                            <li key={ "menu-item" + index }>
                                                                <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                            </li>
                                                        ) )
                                                    }
                                                </ul>
                                            </div>
                                            <div className="col-lg-4">
                                                <span className="nolink pl-0">VARIATION 2</span>
                                                <ul className="submenu">
                                                    {
                                                        mainMenu.shop.variation2.map( ( variations, index ) => (
                                                            <li key={ "menu-item" + index }>
                                                                <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                            </li>
                                                        ) )
                                                    }
                                                </ul>
                                            </div>
                                            <div className="col-lg-4 p-0">
                                                <div className="menu-banner">
                                                    <figure>
                                                        <img src="images/menu-banner.jpg" width="192"
                                                            height="313" alt="Menu banner" />
                                                    </figure>
                                                    <div className="banner-content">
                                                        <h4>
                                                            <span>UP TO</span><br />
                                                            <b className="">50%</b>
                                                            <i>OFF</i>
                                                        </h4>
                                                        <ALink href="/shop" className="btn btn-sm btn-dark">SHOP
                                                                NOW</ALink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ALink href="/product/default/battery-charger" className="sf-with-ul"><i
                                        className="sicon-basket"></i>Products</ALink>
                                    <div className="megamenu megamenu-fixed-width mt-0">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <ALink href="/product/default/battery-charger" className="nolink pl-0">PRODUCT PAGES</ALink>
                                                <ul className="submenu">
                                                    {
                                                        mainMenu.product.pages.map( ( variations, index ) => (
                                                            <li key={ "menu-item" + index }>
                                                                <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                            </li>
                                                        ) )
                                                    }
                                                </ul>
                                            </div>

                                            <div className="col-lg-4">
                                                <span className="nolink pl-0">PRODUCT LAYOUTS</span>
                                                <ul className="submenu">
                                                    {
                                                        mainMenu.product.layout.map( ( variations, index ) => (
                                                            <li key={ "menu-item" + index }>
                                                                <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                            </li>
                                                        ) )
                                                    }
                                                    <li><ALink href="#">BUILD YOUR OWN</ALink></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4 p-0">
                                                <div className="menu-banner menu-banner-2">
                                                    <figure>
                                                        <img src="images/menu-banner-1.jpg" alt="Menu banner"
                                                            className="product-promo" />
                                                    </figure>
                                                    <i>OFF</i>
                                                    <div className="banner-content">
                                                        <h4>
                                                            <span className="">UP TO</span><br />
                                                            <b className="">50%</b>
                                                        </h4>
                                                    </div>
                                                    <ALink href="/shop" className="btn btn-sm btn-dark">SHOP
                                                            NOW</ALink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ALink href="#" className="sf-with-ul"><i className="sicon-envelope"></i>Pages</ALink>

                                    <ul className="megamenu w-auto mt-0">
                                        <li><ALink href="/pages/wishlist">Wishlist</ALink></li>
                                        <li><ALink href="/pages/cart">Shopping Cart</ALink></li>
                                        <li><ALink href="/pages/checkout">Checkout</ALink></li>
                                        <li><ALink href="/pages/account">Dashboard</ALink></li>
                                        <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                        <li><ALink href="/pages/login">Login</ALink></li>
                                        <li><ALink href="/pages/forgot-password">Forgot Password</ALink></li>
                                    </ul>
                                </li>
                                <li><ALink href="/pages/blog"><i className="sicon-book-open"></i>Blog</ALink></li>
                                <li><ALink href="/pages/about-us"><i className="sicon-users"></i>About Us</ALink></li>
                                <li><ALink href="#"><i className="icon-cat-gift"></i>Special Offer!</ALink></li>
                                <li><a href="https://1.envato.market/DdLk5" target="_blank"><i
                                    className="sicon-star"></i>Buy Porto!<span
                                        className="tip tip-hot">Hot</span></a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="widget widget-banners px-3 pb-3 text-center">
                        <OwlCarousel adClass="owl-theme dots-small" options={ {
                            nav: false,
                            dots: true
                        } }>
                            <div className="banner d-flex flex-column align-items-center">
                                <h3
                                    className="badge-sale bg-primary d-flex flex-column align-items-center justify-content-center text-uppercase">
                                    <em>Sale</em>Many Item
                                    </h3>

                                <h4 className="sale-text text-uppercase"><small>UP
                                            TO</small>50<sup>%</sup><sub>off</sub></h4>
                                <p>Bags, Clothing, T-Shirts, Shoes, Watches and much more...</p>
                                <ALink href="/shop" className="btn btn-dark btn-md">View Sale</ALink>
                            </div>
                            <div className="banner banner4">
                                <figure>
                                    <img src="images/home/banners/banner-7.jpg" alt="banner" />
                                </figure>

                                <div className="banner-layer">
                                    <div className="coupon-sale-content">
                                        <h4>DRONE + CAMERAS</h4>
                                        <h5 className="coupon-sale-text text-gray ls-n-10 p-0 font1"><i>UP
                                                    TO</i><b className="text-white bg-dark font1">$100</b> OFF</h5>
                                        <p className="ls-0">Top Brands and Models!</p>
                                        <ALink href="/shop"
                                            className="btn btn-inline-block btn-dark btn-black ls-0">VIEW
                                                SALE</ALink>
                                    </div>
                                </div>
                            </div>
                            <div className="banner banner5">
                                <h4>HEADPHONES SALE</h4>

                                <figure className="m-b-3">
                                    <img src="images/home/banners/banner-8.jpg" alt="banner" />
                                </figure>

                                <div className="banner-layer">
                                    <div className="coupon-sale-content">
                                        <h5 className="coupon-sale-text ls-n-10 p-0 font1"><i>UP
                                                    TO</i><b className="text-white bg-secondary font1">50%</b> OFF</h5>
                                        <ALink href="/shop"
                                            className="btn btn-inline-block btn-dark btn-black ls-0">VIEW
                                                SALE</ALink>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>

                    <div className="widget widget-newsletters bg-gray text-center">
                        <h3 className="widget-title text-uppercase m-b-3">Subscribe Newsletter</h3>
                        <p className="mb-2">Get all the latest information on Events, Sales and Offers. </p>
                        <form action="#">
                            <div className="form-group position-relative sicon-envolope-letter">
                                <input type="email" className="form-control" name="newsletter-email"
                                    placeholder="Email address" />
                            </div>
                            <input type="submit" className="btn btn-primary btn-md" value="Subscribe" />
                        </form>
                    </div>

                    <div className="widget widget-testimonials">
                        <OwlCarousel adClass="owl-theme dots-left dots-small" options={ {
                            nav: false,
                            dots: true
                        } }>
                            <div className="testimonial">
                                <div className="testimonial-owner">
                                    <figure>
                                        <img src="images/clients/client-1.jpg" alt="client" width="55" height="55" />
                                    </figure>

                                    <div>
                                        <h4 className="testimonial-title">john Smith</h4>
                                        <span>CEO &amp; Founder</span>
                                    </div>
                                </div>

                                <blockquote className="ml-4 pr-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.</p>
                                </blockquote>
                            </div>

                            <div className="testimonial">
                                <div className="testimonial-owner">
                                    <figure>
                                        <img src="images/clients/client-2.jpg" alt="client" width="55" height="55" />
                                    </figure>

                                    <div>
                                        <h4 className="testimonial-title">Dae Smith</h4>
                                        <span>CEO &amp; Founder</span>
                                    </div>
                                </div>

                                <blockquote className="ml-4 pr-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat
                                            mi.</p>
                                </blockquote>
                            </div>

                            <div className="testimonial">
                                <div className="testimonial-owner">
                                    <figure>
                                        <img src="images/clients/client-3.jpg" alt="client" width="55" height="55" />
                                    </figure>

                                    <div>
                                        <h4 className="testimonial-title">John Doe</h4>
                                        <span>CEO &amp; Founder</span>
                                    </div>
                                </div>

                                <blockquote className="ml-4 pr-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.</p>
                                </blockquote>
                            </div>
                        </OwlCarousel>
                    </div>

                    <div className="widget widget-posts post-date-in-media media-with-zoom mb-0 mb-lg-2 pb-lg-2 col-12">

                        <div className={ `blog-section row pt-0 pb-3 skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` }>
                            {
                                loading ?
                                    <div className="skel-pro skel-pro-grid"></div>
                                    :
                                    blog ?
                                        blog.length ?
                                            <OwlCarousel adClass="owl-theme dots-left dots-small" options={ {
                                                nav: false,
                                                dots: true,
                                                margin: 20,
                                                loop: false
                                            } }>
                                                {

                                                    blog.slice( 0, 3 ).map( ( blog, index ) => (
                                                        <div key={ "Blogkey" + index }>
                                                            <BlogWidget blog={ blog } />
                                                        </div>
                                                    ) )
                                                }
                                            </OwlCarousel>
                                            :
                                            <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                        : ''
                            }
                        </div>
                    </div>
                </StickyBox>
            </aside>
        </>
    )
}

export default HomeSidebar;