import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import { fadeInUpShorter, fadeInLeftShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

export default function BannerSection() {
    return (
        <OwlCarousel adClass="home-slider banners-container owl-theme" options={{
            nav: false,
            dots: false,
            loop: false,
            margin: 20,
            responsive: {
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        }}>
            <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} triggerOnce>
                <div className="banner banner1 banner-hover-shadow d-flex align-items-center mb-2 w-100">
                    <LazyLoadImage
                        alt="banner"
                        src="images/home/banners/banner-1.jpg"
                        width={265}
                        height={170}
                    />
                    <div className="banner-layer">
                        <h3 className="m-b-2">Porto Watches</h3>
                        <h4 className="m-b-4 text-primary"><sup
                            className="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                        <ALink href="/shop" className="text-dark text-uppercase ls-10">Shop Now</ALink>
                    </div>
                </div>
            </Reveal>

            <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000} triggerOnce>
                <div className="banner banner2 text-uppercase banner-hover-shadow d-flex align-items-center mb-2 w-100">
                    <LazyLoadImage
                        alt="banner"
                        src="images/home/banners/banner-2.jpg"
                        width={265}
                        height={170}
                    />
                    <div className="banner-layer text-center">
                        <h3 className="m-b-1 ls-n-20">Deal Promos</h3>
                        <h4 className="text-body">Starting at $99</h4>
                        <ALink href="/shop" className="text-dark text-uppercase ls-10">Shop Now</ALink>
                    </div>
                </div>
            </Reveal>

            <Reveal keyframes={fadeInRightShorter} delay={500} duration={1000} triggerOnce>
                <div className="banner banner3 banner-hover-shadow d-flex align-items-center mb-2 w-100">
                    <LazyLoadImage
                        alt="banner"
                        src="images/home/banners/banner-3.jpg"
                        width={265}
                        height={170}
                    />
                    <div className="banner-layer text-right">
                        <h3 className="m-b-2">Handbags</h3>
                        <h4 className="mb-3 text-secondary text-uppercase">Starting at $99</h4>
                        <ALink href="/shop" className="text-dark text-uppercase ls-10">Shop Now</ALink>
                    </div>
                </div>
            </Reveal>
        </OwlCarousel>
    )
}