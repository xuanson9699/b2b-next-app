import ALink from '../../common/ALink';
import OwlCarousel from "../../features/owl-carousel";

export default function ShopBanner() {
    return (
        <OwlCarousel adClass="home-slider category-home-slider owl-theme owl-carousel-lazy" options={{
            nav: false
        }}>
            <div className="home-slide home-slide1 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                <figure>
                    <img
                        alt="category-banenr"
                        src="images/home/banners/banner-4.jpg"
                        width={880}
                        height={280}
                    />
                </figure>
                <div className="banner-layer">
                    <h4 className="text-white mb-0">Find the Boundaries. Push Through!</h4>
                    <h2 className="text-white mb-0">Summer Sale</h2>
                    <h3 className="text-white text-uppercase m-b-3">30% Off</h3>
                    <h5 className="text-white text-uppercase d-inline-block mb-0 ls-n-20 align-text-bottom">
                        Starting At <b
                            className="coupon-sale-text bg-white text-secondary d-inline-block">$<em
                                className="align-text-top">199</em>99</b></h5>
                    <ALink href="/shop" className="btn btn-dark btn-md">GET YOURS!</ALink>
                </div>
            </div>

            <div className="home-slide home-slide2 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                <figure>
                    <img
                        alt="category-banenr"
                        src="images/home/banners/banner-5.jpg"
                        width={880}
                        height={280}
                    />
                </figure>
                <div className="banner-layer text-uppercase">
                    <h4 className="m-b-2">Over 200 products with discounts</h4>
                    <h2 className="m-b-3">Great Deals</h2>
                    <h5 className="d-inline-block mb-0 align-top mr-3 mb-2">Starting At
                                        <b>$<em>299</em>99</b>
                    </h5>
                    <ALink href="/shop" className="btn btn-dark btn-md">Get Yours!</ALink>
                </div>
            </div>

            <div className="home-slide home-slide3 banner banner-md-vw banner-sm-vw  d-flex align-items-center">
                <figure>
                    <img
                        alt="category-banenr"
                        src="images/home/banners/banner-6.jpg"
                        width={880}
                        height={280}
                    />
                </figure>
                <div className="banner-layer text-uppercase">
                    <h4 className="m-b-2">Up to 70% off</h4>
                    <h2 className="m-b-3">New Arrivals</h2>
                    <h5 className="d-inline-block mb-0 align-top mr-4 pr-3 mb-2 ml-0">Starting At
                                        <b>$<em>299</em>99</b>
                    </h5>
                    <ALink href="/shop" className="btn btn-dark btn-md">Get Yours!</ALink>
                </div>
            </div>

        </OwlCarousel>
    )
}