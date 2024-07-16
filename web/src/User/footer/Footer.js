import React from "react";

const Footer = () => {
  return (
    <>
      <div class="footer-outer pt-120 gray-300">
        <div class="footer-area">
          <div class="container">
            <div class="footer-wrapper">
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-5 order-1">
                  <div class="footer-widget mt-0">
                    <h5 class="footer-widget-title">Quick Link</h5>
                    <div class="footer-links">
                      <ul class="link-list">
                        <li>
                          <a href="/" class="footer-link">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="/" class="footer-link">
                            Event
                          </a>{" "}
                        </li>
                        <li>
                          <a href="/" class="footer-link">
                            Schedule
                          </a>
                        </li>
                        <li>
                          <a href="/" class="footer-link">
                            Our Support
                          </a>
                        </li>
                        <li>
                          <a href="/" class="footer-link">
                            Speaker
                          </a>
                        </li>
                        <li>
                          <a href="/" class="footer-link">
                            Sponsor
                          </a>
                        </li>
                        <li>
                          <a href="/" class="footer-link">
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 order-lg-2 order-3">
                  <div class="footer-newslatter-wrapper text-center">
                    <h3>Subscribe Our Newsletter</h3>
                    <h5>Don’t Miss Our Feature Update</h5>
                    <form
                      class="newslatter-form"
                      action="#"
                      id="newslatter-form"
                    >
                      <div class="newslatter-input-group d-flex">
                        <input type="email" placeholder="Enter Your Email" />
                        <button type="submit">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-7 order-lg-3 order-2 ">
                  <div class="footer-widget">
                    <h5 class="footer-widget-title">Contact</h5>
                    <div class="footer-links">
                      <ul class="link-list">
                        <li class="contact-box">
                          <div class="contact-icon">
                            <i class="bi bi-telephone-plus"></i>
                          </div>
                          <div class="contact-links">
                            <a href="tel:+917043468230">+91 704-346-8230</a>
                          </div>
                        </li>
                        <li class="contact-box">
                          <div class="contact-icon">
                            <i class="bi bi-envelope-open"></i>
                          </div>
                          <div class="contact-links">
                            <a>
                              {" "}
                              <span
                                class="__cf_email__"
                                data-cfemail="b5dcdbd3daf5d0cdd4d8c5d9d09bd6dad8"
                              >
                                kartiksojitra02@gmail.com
                              </span>
                            </a>
                          </div>
                        </li>
                        <li class="contact-box">
                          <div class="contact-icon">
                            <i class="bi bi-geo-alt"></i>
                          </div>
                          <div class="contact-links">
                            <a href="/">Ahmedabad </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-bottom">
              <div class="row align-items-center">
                <div class="col-lg-5  order-3 order-lg-1">
                  <div class="footer-copyright">
                    <p>
                      Copyright 2024 EventLab| Design By{" "}
                      <a href="/">Egens Lab</a>
                    </p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 order-1 order-lg-2">
                  <div class="footer-logo">
                    <a href="/">
                      <img
                        src="https://demo.egenslab.com/html/eventlab/assets/images/logo-v2.png"
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 order-2 order-lg-3">
                  <ul class="d-flex footer-social-links justify-content-lg-end justify-content-center">
                    <li>
                      <a href="/">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
