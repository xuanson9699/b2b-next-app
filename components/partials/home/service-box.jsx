export default function ServiceBox() {
    return (
        <div className="info-boxes-container row row-joined mb-2 font2">
            <div className="info-box info-box-icon-left col-lg-4">
                <i className="icon-shipping"></i>

                <div className="info-box-content">
                    <h4>FREE SHIPPING &amp; RETURN</h4>
                    <p className="text-body">Free shipping on all orders over $99</p>
                </div>
            </div>

            <div className="info-box info-box-icon-left col-lg-4">
                <i className="icon-money"></i>

                <div className="info-box-content">
                    <h4>MONEY BACK GUARANTEE</h4>
                    <p className="text-body">100% money back guarantee</p>
                </div>
            </div>

            <div className="info-box info-box-icon-left col-lg-4">
                <i className="icon-support"></i>

                <div className="info-box-content">
                    <h4>ONLINE SUPPORT 24/7</h4>
                    <p className="text-body">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}