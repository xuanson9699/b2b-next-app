import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { productSlider } from '../../../utils/data/slider';
import { fadeInRightShorter } from '../../../utils/data/keyframes'

export default function FeaturedCollection(props) {
    const { product, loading, homepage } = props;

    return (
        <section className="featured-products-section">
            <div className="container">
                <h2 className={`section-title ls-n-10 m-b-4 ${homepage ? 'index-products' : ''}`}>Featured Products</h2>

                <OwlCarousel adClass="products-slider owl-theme dots-top dots-small m-b-1 pb-1" options={productSlider}>
                    {
                        loading ?
                            [0, 1, 2, 3, 4].map((item, index) =>
                                <div className="skel-pro skel-pro-grid" key={"product-one" + index}></div>
                            )
                            :
                            product.map((item, index) => (
                                <Reveal keyframes={fadeInRightShorter} delay={100} duration={1000} triggerOnce
                                    key={"product-one" + index}>
                                    <ProductOne
                                        product={item}
                                    />
                                </Reveal>
                            ))
                    }
                </OwlCarousel>
            </div>
        </section>
    );
}