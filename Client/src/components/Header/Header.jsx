import React from 'react'
import FashionMega from '../MegaMenus/FashionMega'
import HomeGardenMega from '../MegaMenus/Home&Garden'
import MainMenu from '../MegaMenus/Menus/MainMenu'

const Header = () => {
  return (
    <>
           <header className="header">
  <div className="header-top">
    <div className="container">
      <div className="header-left">
        <p className="welcome-msg">Welcome to Wolmart Store message or remove it!</p>
      </div>
      <div className="header-right">
        <div className="dropdown">
          <a href="#currency">USD</a>
          <div className="dropdown-box">
            <a href="#USD">USD</a>
            <a href="#EUR">EUR</a>
          </div>
        </div>
        {/* End of DropDown Menu */}
        <div className="dropdown">
          <a href="#language"><img src="assets/images/flags/eng.png" alt="ENG Flag" width={14} height={8} className="dropdown-image" /> ENG</a>
          <div className="dropdown-box">
            <a href="#ENG">
              <img src="assets/images/flags/eng.png" alt="ENG Flag" width={14} height={8} className="dropdown-image" />
              ENG
            </a>
            <a href="#FRA">
              <img src="assets/images/flags/fra.png" alt="FRA Flag" width={14} height={8} className="dropdown-image" />
              FRA
            </a>
          </div>
        </div>
        {/* End of Dropdown Menu */}
        <span className="divider d-lg-show" />
        <a href="blog.html" className="d-lg-show">Blog</a>
        <a href="contact-us.html" className="d-lg-show">Contact Us</a>
        <a href="my-account.html" className="d-lg-show">My Account</a>
        <a href="assets/ajax/login.html" className="d-lg-show login sign-in"><i className="w-icon-account" />Sign In</a>
        <span className="delimiter d-lg-show">/</span>
        <a href="assets/ajax/login.html" className="ml-0 d-lg-show login register">Register</a>
      </div>
    </div>
  </div>
  {/* End of Header Top */}
  <div className="header-middle">
    <div className="container">
      <div className="header-left mr-md-4">
        <a href="#" className="mobile-menu-toggle  w-icon-hamburger" aria-label="menu-toggle">
        </a>
        <a href="demo1.html" className="logo ml-lg-0">
          <img src="assets/images/logo.png" alt="logo" width={144} height={45} />
        </a>
        <form method="get" action="#" className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper">
          <div className="select-box">
            <select id="category" name="category">
              <option value>All Categories</option>
              <option value={4}>Fashion</option>
              <option value={5}>Furniture</option>
              <option value={6}>Shoes</option>
              <option value={7}>Sports</option>
              <option value={8}>Games</option>
              <option value={9}>Computers</option>
              <option value={10}>Electronics</option>
              <option value={11}>Kitchen</option>
              <option value={12}>Clothing</option>
            </select>
          </div>
          <input type="text" className="form-control" name="search" id="search" placeholder="Search in..." required />
          <button className="btn btn-search" type="submit"><i className="w-icon-search" />
          </button>
        </form>
      </div>
      <div className="header-right ml-4">
        <div className="header-call d-xs-show d-lg-flex align-items-center">
          <a href="tel:#" className="w-icon-call" />
          <div className="call-info d-lg-show">
            <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
              <a href="mailto:#" className="text-capitalize">Live Chat</a> or :</h4>
            <a href="tel:#" className="phone-number font-weight-bolder ls-50">0(800)123-456</a>
          </div>
        </div>
        <a className="wishlist label-down link d-xs-show" href="wishlist.html">
          <i className="w-icon-heart" />
          <span className="wishlist-label d-lg-show">Wishlist</span>
        </a>
        <a className="compare label-down link d-xs-show" href="compare.html">
          <i className="w-icon-compare" />
          <span className="compare-label d-lg-show">Compare</span>
        </a>
        <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
          <div className="cart-overlay" />
          <a href="#" className="cart-toggle label-down link">
            <i className="w-icon-cart">
              <span className="cart-count">2</span>
            </i>
            <span className="cart-label">Cart</span>
          </a>
          <div className="dropdown-box">
            <div className="cart-header">
              <span>Shopping Cart</span>
              <a href="#" className="btn-close">Close<i className="w-icon-long-arrow-right" /></a>
            </div>
            <div className="products">
              <div className="product product-cart">
                <div className="product-detail">
                  <a href="product-default.html" className="product-name">Beige knitted
                    elas<br />tic
                    runner shoes</a>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$25.68</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/cart/product-1.jpg" alt="product" height={84} width={94} />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times" />
                </button>
              </div>
              <div className="product product-cart">
                <div className="product-detail">
                  <a href="product-default.html" className="product-name">Blue utility
                    pina<br />fore
                    denim dress</a>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$32.99</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="product-default.html">
                    <img src="assets/images/cart/product-2.jpg" alt="product" width={84} height={94} />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="cart-total">
              <label>Subtotal:</label>
              <span className="price">$58.67</span>
            </div>
            <div className="cart-action">
              <a href="cart.html" className="btn btn-dark btn-outline btn-rounded">View Cart</a>
              <a href="checkout.html" className="btn btn-primary  btn-rounded">Checkout</a>
            </div>
          </div>
          {/* End of Dropdown Box */}
        </div>
      </div>
    </div>
  </div>
  {/* End of Header Middle */}
  <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
    <div className="container">
      <div className="inner-wrap">
        <div className="header-left">
          <div className="dropdown category-dropdown has-border" data-visible="true">
            <a href="#" className="category-toggle text-dark" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-display="static" title="Browse Categories">
              <i className="w-icon-category" />
              <span>Browse Categories</span>
            </a>
            <div className="dropdown-box">
              <ul className="menu vertical-menu category-menu">
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-tshirt2" />Fashion
                  </a>
                    {/* Mega Menu for Fashion */}
                    <FashionMega></FashionMega>
                    {/* Mega Menu ENd */}
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-home" />Home &amp; Garden
                  </a>
                  {/* Home & garden Mega Menu */}

                  <HomeGardenMega></HomeGardenMega>
                  {/* Home & garden Mega Menu  End */}
                </li>

              </ul>
            </div>
          </div>

         {/* Main Menu Start */}
         
         <nav className="main-nav">
            <MainMenu/>
          </nav>

         {/* Main Menu End */}

        </div>
        <div className="header-right">
          <a href="#" className="d-xl-show"><i className="w-icon-map-marker mr-1" />Track Order</a>
          <a href="#"><i className="w-icon-sale" />Daily Deals</a>
        </div>
      </div>
    </div>
  </div>
</header>

    
    
    </>
  )
}

export default Header