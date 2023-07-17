import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from '../../assets/circles.png';

const Footer = () => {
  return (
   <>
 <footer style={{backgroundColor:"#1c2331"}}>
  <div className="border-top space-top-3">
    <div className="border-bottom pb-5 space-bottom-lg-3">
      <div className="container pt-5">
      
        <div className="row">
          <div className="col-lg-4 mb-6 mb-lg-0">
            <div className="pb-6">
              <a href="#" className="d-inline-block mb-5">
                <img src="https://htmldemo.net/boighor/boighor/images/logo/logo.png" class="img-fluid rounded-top" alt=""/>
              </a>
              <address className="font-size-2 mb-5">
                <span className="mb-2 font-weight-normal text-white">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United States
                </span>
              </address>
              <div className="mb-4">
                <a href="#" className="font-size-2 d-block text-white mb-1">sale@book212.com</a>
                <a href="tel:+1246-345-0695" className="font-size-2 d-block text-white">+1 246-345-0695</a>
              </div>
              <ul className="list-unstyled mb-0 d-flex">
                <li className="btn pl-0">
                  <a className="text-white" href="#">
                    <span className="fab fa-instagram" />
                  </a>
                </li>
                <li className="btn">
                  <a className="text-white" href="#">
                    <span className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="btn">
                  <a className="text-white" href="#">
                    <span className="fab fa-youtube" />
                  </a>
                </li>
                <li className="btn">
                  <a className="text-white" href="#">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li className="btn">
                  <a className="text-white" href="#">
                    <span className="fab fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 mb-6 mb-lg-0">
            <h4 className="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1 text-white">Explore</h4>
            <ul className="list-unstyled mb-0">
              <li className="pb-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">About as</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Sitemap</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Bookmarks</a>
              </li>
              <li className="pt-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Sign in/Join</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mb-6 mb-lg-0">
            <h4 className="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1 text-white">Customer Service</h4>
            <ul className="list-unstyled mb-0">
              <li className="pb-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Help Center</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Returns</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Product Recalls</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Accessibility</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Contact Us</a>
              </li>
              <li className="pt-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Store Pickup</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mb-6 mb-lg-0">
            <h4 className="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1 text-white">Policy</h4>
            <ul className="list-unstyled mb-0">
              <li className="pb-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Return Policy</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Terms Of Use</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Security</a>
              </li>
              <li className="pt-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mb-6 mb-lg-0">
            <h4 className="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1 text-white">Categories</h4>
            <ul className="list-unstyled mb-0">
              <li className="pb-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Action</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Comedy</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Drama</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Horror</a>
              </li>
              <li className="py-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Kids</a>
              </li>
              <li className="pt-2">
                <a className="widgets-hover transition-3d-hover font-size-2 text-white" href="#">Romantic Comedy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="space-1">
      <div className="container">
        <div className="d-lg-flex text-center text-lg-left justify-content-between align-items-center">
          <p className="mb-3 mb-lg-0 font-size-2 text-white">©2020 Book. All rights reserved</p>
    
        </div>
      </div>
    </div>
  </div>
</footer>

   </>
  );
}

export default Footer;