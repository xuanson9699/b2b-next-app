import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function IntroSection() {
    return (
        <OwlCarousel adClass="home-slider owl-theme mb-2" options={{
            nav: false,
            dots: true,
            loop: false,
            navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">']
        }}>
            <div className="home-slide home-slide1 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                <LazyLoadImage
                    alt="slider image"
                    src="images/home/slider/slide-1.png"
                    threshold={500}
                    width={880}
                    height={428}
                />
                <div className="banner-layer">
                    <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000}>
                        <h4 className="text-white mb-0">Find the Boundaries. Push Through!</h4>
                        <h2 className="text-white mb-0">Summer Sale</h2>
                        <h3 className="text-white text-uppercase m-b-3">70% Off</h3>
                        <div className="price-range">
                            <h5 className="text-white text-uppercase d-inline-block mb-0 ls-n-20 align-text-bottom">
                                Starting At <b className="coupon-sale-text bg-secondary text-white d-inline-block"> $
                            <em className="align-text-top">199</em>99</b></h5>
                            <ALink href="/shop" className="btn btn-dark btn-md ls-10">Shop Now!</ALink>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className="home-slide home-slide2 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                <LazyLoadImage
                    alt="slider image"
                    src="images/home/slider/slide-2.jpg"
                    threshold={500}
                    width={880}
                    height={428}
                />
                <div className="banner-layer text-uppercase">
                    <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000}>
                        <h4 className="m-b-2">Over 200 products with discounts</h4>
                        <h2 className="m-b-3">Great Deals</h2>
                        <div className="price-range">
                            <h5 className="d-inline-block mb-0 align-top m-r-5 mb-2">Starting At <b> $<em>299</em>99</b></h5>
                            <ALink href="/shop" className="btn btn-dark btn-md ls-10">Get Yours!</ALink>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className="home-slide home-slide3 banner banner-md-vw banner-sm-vw  d-flex align-items-center">
                <LazyLoadImage
                    alt="slider image"
                    src="images/home/slider/slide-3.jpg"
                    threshold={500}
                    width={880}
                    height={428}
                />
                <div className="banner-layer text-uppercase">
                    <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000}>
                        <h4 className="m-b-2">Up to 70% off</h4>
                        <h2 className="m-b-3">New Arrivals</h2>
                        <div className="price-range">
                            <h5 className="d-inline-block mb-0 align-top m-r-5 mb-2">Starting At <b> $<em>299</em>99</b></h5>
                            <ALink href="/shop" className="btn btn-dark btn-md ls-10">Get Yours!</ALink>
                        </div>
                    </Reveal>
                </div>
            </div>
        </OwlCarousel>
    )
}