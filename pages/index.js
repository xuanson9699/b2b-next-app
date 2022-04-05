import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import ServiceBox from "../components/partials/home/service-box";
import HomeSidebar from "../components/partials/home/home-sidebar";
import IntroSection from "../components/partials/home/home-slidebanner";
import BannerSection from "../components/partials/home/banner-section";
import FeaturedCollection from "../components/partials/home/featured-collection";
import BrandSection from "../components/partials/home/brand-section";
import ProductWidgetContainer from "../components/partials/home/product-widget-container";
import FeatureBoxSection from "../components/partials/home/featurebox-section";

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 9, postsCount: 3 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;
    const blog = data && data.posts.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` }>
                <div className="container mb-1">
                    <ServiceBox />

                    <div className="row">
                        <div className="col-lg-9">
                            <IntroSection />

                            <BannerSection />

                            <FeaturedCollection product={ featured } loading={ loading } homepage={ true } />

                            <BrandSection />

                            <ProductWidgetContainer featured={ featured } latest={ latest } bestSelling={ bestSelling } topRated={ topRated } loading={ loading } />

                            <hr className="mt-18 mb-3 pb-2" />

                            <FeatureBoxSection />
                        </div>

                        <HomeSidebar blog={ blog } loading={ loading } />

                    </div>
                </div>
            </main>

            <NewsletterModal />
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );