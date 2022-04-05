import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductThree from '../../features/products/product-three';

// Import Keyframes
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

export default function ProductWidgetContainer(props) {
    const { featured, latest, bestSelling, loading } = props;

    return (
        <section className="widgets-container custom-widget pb-2 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 pb-5 pb-lg-0">
                        {
                            loading ?
                                [0, 1, 2].map((item, index) =>
                                    <div className="skel-product-col skel-pro mb-2" key={"ProductThree" + index}></div>
                                )
                                :
                                <Reveal keyframes={fadeInLeftShorter} delay={200} duration={1000} triggerOnce>
                                    <div>
                                        <h4 className="section-sub-title ls-n-20">TOP RATED PRODUCTS</h4>
                                        {
                                            featured.slice(0, 3).map((product, index) => (
                                                <ProductThree product={product} key={`ProductThree`, index} />
                                            ))
                                        }
                                    </div>
                                </Reveal>
                        }
                    </div>

                    <div className="col-lg-4 col-sm-6 pb-5 pb-lg-0">
                        {
                            loading ?
                                [0, 1, 2].map((item, index) =>
                                    <div className="skel-product-col skel-pro mb-2" key={"ProductThree" + index}></div>
                                )
                                :
                                <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} triggerOnce>
                                    <div>
                                        <h4 className="section-sub-title ls-n-20">Best Selling Products</h4>
                                        {
                                            bestSelling.slice(0, 3).map((product, index) => (
                                                <ProductThree product={product} key={`ProductThree`, index} />
                                            ))
                                        }
                                    </div>
                                </Reveal>
                        }
                    </div>

                    <div className="col-lg-4 col-sm-6 pb-5 pb-sm-0">
                        {
                            loading ?
                                [0, 1, 2].map((item, index) =>
                                    <div className="skel-product-col skel-pro mb-2" key={"ProductThree" + index}></div>
                                )
                                :
                                <Reveal keyframes={fadeInLeftShorter} delay={800} duration={1000} triggerOnce>
                                    <div>
                                        <h4 className="section-sub-title ls-n-20">Latest Products</h4>

                                        {
                                            latest.slice(0, 3).map((product, index) => (
                                                <ProductThree product={product} key={`ProductThree`, index} />
                                            ))
                                        }
                                    </div>
                                </Reveal>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}