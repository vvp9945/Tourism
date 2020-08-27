import React from 'react';
import { FaInstagram,FaFacebookF,FaGooglePlusG,FaTwitter } from "react-icons/fa";
export default () =>(
<footer className="page-footer font-small bg-secondary text-white mdb-color pt-4">

  <div className="container text-center text-md-left">

    <div className="row text-center text-md-left mt-3 pb-3">

      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">SNOWBORNEEXPLORERS</h6>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>
      </div>

      <hr className="w-100 clearfix d-md-none" />

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
        <p>
          <a href="#!" className="text-light">Haikyu</a>
        </p>
        <p>
          <a href="#!" className="text-light">Death Note</a>
        </p>
        <p>
          <a href="#!" className="text-light">Naruto Shippuden</a>
        </p>
        <p>
          <a href="#!" className="text-light">Demon Slayer</a>
        </p>
      </div>

      <hr className="w-100 clearfix d-md-none" />

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <a href="#!" className="text-light">Your Account</a>
        </p>
        <p>
          <a href="#!" className="text-light">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!" className="text-light">Shipping Rates</a>
        </p>
        <p>
          <a href="#!" className="text-light">Help</a>
        </p>
      </div>

      <hr className="w-100 clearfix d-md-none" />

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <i className="fas fa-home mr-3">Shimla, HP, INDIA</i> </p>
        <p>
          <i className="fas fa-envelope mr-3"> info@snowborneexplorers.com</i></p>
        <p>
          <i className="fas fa-phone mr-3"> + 01 234 567 88</i></p>
        <p>
          <i className="fas fa-print mr-3"> + 01 234 567 89</i></p>
      </div>
    </div>
    <hr />

    <div className="row d-flex align-items-center">

      <div className="col-md-7 col-lg-8">

        
        <p class="text-center text-md-left">© 2020 Copyright:
          <a href="#">
            <strong className="text-light"> SnowborneExplorers</strong>
          </a>
        </p>

      </div>

      <div class="col-md-5 col-lg-4 ml-lg-0">

        <div class="text-center text-md-right">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-facebook-f"><FaFacebookF size='1rem'/></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-twitter"><FaTwitter size='1rem'/></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-google-plus-g"><FaGooglePlusG size='1.5rem'/></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-linkedin-in"><FaInstagram size='1rem'/></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</footer>
	)