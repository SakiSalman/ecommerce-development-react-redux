import React from "react";
import image from "../../assets/images/blog/1.jpg";
const Home = () => {
  return (
    <>
      {/* Start of Main */}
    
      <main className="main">
        <section className="intro-section">
          <div className="swiper-container swiper-theme nav-inner pg-inner swiper-nav-lg animation-slider pg-xxl-hide nav-xxl-show nav-hide">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide banner banner-fixed intro-slide intro-slide1"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundColor: "#ebeef2",
                }}
              >
                <div className="container">
                  <figure className="slide-image skrollable slide-animate">
                    <img
                      src={image}
                      data-bottom-top="transform: translateY(10vh);"
                      data-top-bottom="transform: translateY(-10vh);"
                      width={474}
                      height={397}
                    />
                  </figure>
                  <div className="banner-content y-50 text-right">
                    <h5 className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate">
                      Custom{" "}
                      <span className="p-relative d-inline-block">Men’s</span>
                    </h5>
                    <h3 className="banner-title font-weight-bolder ls-25 lh-1">
                      RUNNING SHOES
                    </h3>
                    <p className="font-weight-normal text-default slide-animate">
                      Sale up to{" "}
                      <span className="font-weight-bolder text-secondary">
                        30% OFF
                      </span>
                    </p>
                    <a
                      href="shop-list.html"
                      className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
                    >
                      SHOP NOW
                      <i className="w-icon-long-arrow-right" />
                    </a>
                  </div>
                  {/* End of .banner-content */}
                </div>
                {/* End of .container */}
              </div>
            </div>
          </div>
          {/* End of .swiper-container */}
        </section>

        {/* Deals Section starts */}
        <div classname="row deals-wrapper appear-animate mb-8">
          <div classname="col-lg-9 mb-4">
            <div classname="single-product h-100 br-sm">
              <h4 classname="title-sm title-underline font-weight-bolder ls-normal">
                Deals Hot of The Day
              </h4>
              <div classname="swiper">
                <div
                  classname="product-gallery product-gallery-sticky product-gallery-verticalswiper-container swiper-theme nav-top swiper-nav-lg"
                  data-swiper-options="{
                              'spaceBetween': 20,
                              'slidesPerView': 1
                          }"
                >
                  <div classname="swiper-wrapper row cols-1 gutter-no">
                    <div classname="swiper-slide">
                      <div classname="product product-single row">
                        <div classname="col-md-6">
                          <div classname="product-gallery product-gallery-sticky product-gallery-vertical">
                            <div classname="swiper-container product-single-swiper swiper-theme nav-inner">
                              <div classname="swiper-wrapper row cols-1 gutter-no">
                                <div classname="swiper-slide">
                                  <figure classname="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/1-1-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/1-1-800x900.jpg"
                                      alt="Product Image"
                                      width={800}
                                      height={900}
                                    />
                                  </figure>
                                </div>
                                <div classname="swiper-slide">
                                  <figure classname="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/1-2-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/1-2-800x900.jpg"
                                      alt="Product Image"
                                      width={800}
                                      height={900}
                                    />
                                  </figure>
                                </div>
                                <div classname="swiper-slide">
                                  <figure classname="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/1-3-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/1-3-800x900.jpg"
                                      alt="Product Image"
                                      width={800}
                                      height={900}
                                    />
                                  </figure>
                                </div>
                                <div classname="swiper-slide">
                                  <figure classname="product-image">
                                    <img
                                      src="assets/images/demos/demo1/products/1-4-600x675.jpg"
                                      data-zoom-image="assets/images/demos/demo1/products/1-4-800x900.jpg"
                                      alt="Product Image"
                                      width={800}
                                      height={900}
                                    />
                                  </figure>
                                </div>
                              </div>
                              <button classname="swiper-button-next" />
                              <button classname="swiper-button-prev" />
                              <div classname="product-label-group">
                                <label classname="product-label label-discount">
                                  25% Off
                                </label>
                              </div>
                            </div>
                            <div
                              classname="product-thumbs-wrap swiper-container"
                              data-swiper-options="{
                                                      'direction': 'vertical',
                                                      'breakpoints': {
                                                          '0': {
                                                              'direction': 'horizontal',
                                                              'slidesPerView': 4
                                                          },
                                                          '992': {
                                                              'direction': 'vertical',
                                                              'slidesPerView': 'auto'
                                                          }
                                                      }
                                                  }"
                            >
                              <div classname="product-thumbs swiper-wrapper row cols-lg-1 cols-4 gutter-sm">
                                <div classname="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/1-1-600x675.jpg"
                                    alt="Product thumb"
                                    width={60}
                                    height={68}
                                  />
                                </div>
                                <div classname="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/1-2-600x675.jpg"
                                    alt="Product thumb"
                                    width={60}
                                    height={68}
                                  />
                                </div>
                                <div classname="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/1-3-600x675.jpg"
                                    alt="Product thumb"
                                    width={60}
                                    height={68}
                                  />
                                </div>
                                <div classname="product-thumb swiper-slide">
                                  <img
                                    src="assets/images/demos/demo1/products/1-4-600x675.jpg"
                                    alt="Product thumb"
                                    width={60}
                                    height={68}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div classname="col-md-6">
                          <div classname="product-details scrollable">
                            <h2 classname="product-title mb-1">
                              <a href="product-default.html">
                                Coat Pool Comfort Jacket
                              </a>
                            </h2>
                            <hr classname="product-divider" />
                            <div classname="product-price">
                              <ins classname="new-price ls-50">
                                $150.00 - $180.00
                              </ins>
                            </div>
                            <div classname="product-countdown-container flex-wrap">
                              <label classname="mr-2 text-default">
                                Offer Ends In:
                              </label>
                              <div
                                classname="product-countdown countdown-compact"
                                data-until="2022, 12, 31"
                                data-compact="true"
                              >
                                629 days, 11: 59: 52
                              </div>
                            </div>
                            <div classname="ratings-container">
                              <div classname="ratings-full">
                                <span
                                  classname="ratings"
                                  style={{ width: "80%" }}
                                />
                                <span classname="tooltiptext tooltip-top" />
                              </div>
                              <a href="#" classname="rating-reviews">
                                (3 Reviews)
                              </a>
                            </div>
                            <div classname="product-form product-variation-form product-size-swatch mb-3">
                              <label classname="mb-1">Size:</label>
                              <div classname="flex-wrap d-flex align-items-center product-variations">
                                <a href="#" classname="size">
                                  Extra Large
                                </a>
                                <a href="#" classname="size">
                                  Large
                                </a>
                                <a href="#" classname="size">
                                  Medium
                                </a>
                                <a href="#" classname="size">
                                  Small
                                </a>
                              </div>
                              <a href="#" classname="product-variation-clean">
                                Clean All
                              </a>
                            </div>
                            <div classname="product-variation-price">
                              <span />
                            </div>
                            <div classname="product-form pt-4">
                              <div classname="product-qty-form mb-2 mr-2">
                                <div classname="input-group">
                                  <input
                                    classname="quantity form-control"
                                    type="number"
                                    min={1}
                                    max={10000000}
                                  />
                                  <button classname="quantity-plus w-icon-plus" />
                                  <button classname="quantity-minus w-icon-minus" />
                                </div>
                              </div>
                              <button classname="btn btn-primary btn-cart">
                                <i classname="w-icon-cart" />
                                <span>Add to Cart</span>
                              </button>
                            </div>
                            <div classname="social-links-wrapper mt-1">
                              <div classname="social-links">
                                <div classname="social-icons social-no-color border-thin">
                                  <a
                                    href="#"
                                    classname="social-icon social-facebook w-icon-facebook"
                                  />
                                  <a
                                    href="#"
                                    classname="social-icon social-twitter w-icon-twitter"
                                  />
                                  <a
                                    href="#"
                                    classname="social-icon social-pinterest fab fa-pinterest-p"
                                  />
                                  <a
                                    href="#"
                                    classname="social-icon social-whatsapp fab fa-whatsapp"
                                  />
                                  <a
                                    href="#"
                                    classname="social-icon social-youtube fab fa-linkedin-in"
                                  />
                                </div>
                              </div>
                              <span classname="divider d-xs-show" />
                              <div classname="product-link-wrapper d-flex">
                                <a
                                  href="#"
                                  classname="btn-product-icon btn-wishlist w-icon-heart"
                                />
                                <a
                                  href="#"
                                  classname="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                 
                  </div>
                  <button classname="swiper-button-prev" />
                  <button classname="swiper-button-next" />
                </div>
              </div>
            </div>
          </div>
          <div classname="col-lg-3 mb-4">
            <div classname="widget widget-products widget-products-bordered h-100">
              <div classname="widget-body br-sm h-100">
                <h4 classname="title-sm title-underline font-weight-bolder ls-normal mb-2">
                  Top 20 Best Seller
                </h4>
                <div classname="swiper">
                  <div
                    classname="swiper-container swiper-theme nav-top"
                  >
                    <div classname="swiper-wrapper row cols-lg-1 cols-md-3">
                      <div classname="swiper-slide product-widget-wrap">
                        <div classname="product product-widget bb-no">
                          <figure classname="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-1.jpg"
                                alt="Product"
                                width={105}
                                height={118}
                              />
                            </a>
                          </figure>
                          <div classname="product-details">
                            <h4 classname="product-name">
                              <a href="product-default.html">Kitchen Cooker</a>
                            </h4>
                            <div classname="ratings-container">
                              <div classname="ratings-full">
                                <span
                                  classname="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span classname="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div classname="product-price">
                              <ins classname="new-price">$150.60</ins>
                            </div>
                          </div>
                        </div>
                        <div classname="product product-widget bb-no">
                          <figure classname="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-2.jpg"
                                alt="Product"
                                width={105}
                                height={118}
                              />
                            </a>
                          </figure>
                          <div classname="product-details">
                            <h4 classname="product-name">
                              <a href="product-default.html">
                                Professional Pixel Camera
                              </a>
                            </h4>
                            <div classname="ratings-container">
                              <div classname="ratings-full">
                                <span
                                  classname="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span classname="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div classname="product-price">
                              <ins classname="new-price">$215.68</ins>
                              <del classname="old-price">$230.45</del>
                            </div>
                          </div>
                        </div>
                        <div classname="product product-widget">
                          <figure classname="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-3.jpg"
                                alt="Product"
                                width={105}
                                height={118}
                              />
                            </a>
                          </figure>
                          <div classname="product-details">
                            <h4 classname="product-name">
                              <a href="product-default.html">
                                Sport Women’s Wear
                              </a>
                            </h4>
                            <div classname="ratings-container">
                              <div classname="ratings-full">
                                <span
                                  classname="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span classname="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div classname="product-price">
                              <ins classname="new-price">$220.20</ins>
                              <del classname="old-price">$300.62</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div classname="swiper-slide product-widget-wrap">
                        <div classname="product product-widget bb-no">
                          <figure classname="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-4.jpg"
                                alt="Product"
                                width={105}
                                height={118}
                              />
                            </a>
                          </figure>
                          <div classname="product-details">
                            <h4 classname="product-name">
                              <a href="product-default.html">Latest Speaker</a>
                            </h4>
                            <div classname="ratings-container">
                              <div classname="ratings-full">
                                <span
                                  classname="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span classname="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div classname="product-price">
                              <ins classname="new-price">$250.68</ins>
                            </div>
                          </div>
                        </div>
                        <div classname="product product-widget bb-no">
                          <figure classname="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-5.jpg"
                                alt="Product"
                                width={105}
                                height={118}
                              />
                            </a>
                          </figure>
                          <div classname="product-details">
                            <h4 classname="product-name">
                              <a href="product-default.html">
                                Men's Black Wrist Watch
                              </a>
                            </h4>
                            <div classname="ratings-container">
                              <div classname="ratings-full">
                                <span
                                  classname="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span classname="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div classname="product-price">
                              <ins classname="new-price">$135.60</ins>
                              <del classname="old-price">$155.70</del>
                            </div>
                          </div>
                        </div>
                        <div classname="product product-widget">
                          <figure classname="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-6.jpg"
                                alt="Product"
                                width={105}
                                height={118}
                              />
                            </a>
                          </figure>
                          <div classname="product-details">
                            <h4 classname="product-name">
                              <a href="product-default.html">Wash Machine</a>
                            </h4>
                            <div classname="ratings-container">
                              <div classname="ratings-full">
                                <span
                                  classname="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span classname="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div classname="product-price">
                              <ins classname="new-price">$215.68</ins>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div classname="swiper-slide product-widget-wrap">
                        <div classname="product product-widget bb-no">
                          <figure classname="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-7.jpg"
                                alt="Product"
                                width={105}
                                height={118}
                              />
                            </a>
                          </figure>
                          <div classname="product-details">
                            <h4 classname="product-name">
                              <a href="product-default.html">Security Guard</a>
                            </h4>
                            <div classname="ratings-container">
                              <div classname="ratings-full">
                                <span
                                  classname="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span classname="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div classname="product-price">
                              <ins classname="new-price">$320.00</ins>
                            </div>
                          </div>
                        </div>
                        <div classname="product product-widget bb-no">
                          <figure classname="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-8.jpg"
                                alt="Product"
                                width={105}
                                height={118}
                              />
                            </a>
                          </figure>
                          <div classname="product-details">
                            <h4 classname="product-name">
                              <a href="product-default.html">
                                Apple Super Notecom
                              </a>
                            </h4>
                            <div classname="ratings-container">
                              <div classname="ratings-full">
                                <span
                                  classname="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span classname="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div classname="product-price">
                              <ins classname="new-price">$243.30</ins>
                              <del classname="old-price">$253.50</del>
                            </div>
                          </div>
                        </div>
                        <div classname="product product-widget">
                          <figure classname="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/2-9.jpg"
                                alt="Product"
                                width={105}
                                height={118}
                              />
                            </a>
                          </figure>
                          <div classname="product-details">
                            <h4 classname="product-name">
                              <a href="product-default.html">HD Television</a>
                            </h4>
                            <div classname="ratings-container">
                              <div classname="ratings-full">
                                <span
                                  classname="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span classname="tooltiptext tooltip-top" />
                              </div>
                            </div>
                            <div classname="product-price">
                              <ins classname="new-price">$450.68</ins>
                              <del classname="old-price">$500.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button classname="swiper-button-next" />
                    <button classname="swiper-button-prev" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Deals Wrapper */}
      </main>
      {/* End of Main */}
    </>
  );
};

export default Home;
