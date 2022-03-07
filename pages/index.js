import Head from 'next/head';
import Style from "./style.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8"/>
        <title>RightMove Solutions</title>
      </Head>

      <header id="header" className="fixed-top">
        <div className="container">
          <div className="logo float-left">
            <a href="#intro" className="scrollto">
              <div className={Style.logo}>
                <span className={Style.blueLogoText}>R</span>
                <span className={Style.greenLogoText}>ight</span>
                <span className={Style.blueLogoText}>M</span>
                <span className={Style.cyanLogoText}>ove</span>
                &nbsp;
                <span className={Style.blueLogoText}>S</span>
                <span className={Style.purpleLogoText}>olutions</span>
              </div>
            </a>
          </div>

          <nav className="main-nav float-right d-none d-lg-block">
            <ul>
              <li className="active"><a href="#intro">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src="img/intro-img.svg" alt="" className="img-fluid" />
          </div>

          <div className="intro-info">
            <h2>We provide<br/><span>solutions</span><br/>for your community!</h2>
            <div>
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
              <a href="#services" className="btn-services scrollto">Our Services</a>
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>About Us</h3>
              <p> Proven expertise in delivering virtual community engagement solutions</p>
            </header>

            <div className="row about-container">

              <div className="col-lg-6 content order-lg-1 order-2">
                <p>
                RightMove Solutions believe in the upliftment of Communities through Mobile and Web apps.
                Our deliverables stand out in excellence, with affordable pricing.
                </p>

                <div className="icon-box wow fadeInUp">
                  <div className="icon"><i className="fa-solid fa-hands-praying"></i></div>
                  <h4 className="title"><a href="">Faith engagement</a></h4>
                  <p className="description">
                    Apps that enable access to a variety of resources including Prayers with Audio accompaniment,
                    Calendar, Donate, and Video content.
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon"><i className="fa-solid fa-users"></i></div>
                  <h4 className="title"><a href="">Virtual Community</a></h4>
                  <p className="description">
                    Apps that fulfill the comprehensive needs of a community - Announcements, Directory, Calendar, Donate, and Messaging.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img src="img/about-img.svg" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInUp">
                <img src="img/about-extra-1.svg" className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                <h4> Technical forte</h4>
                <p>
                  Our Engineers are proficient in the industry latest, proven and performant technologies for both Mobile and Web development.
                  Our stack includes Node.js, React, React Native, Flutter, Material UI, and Next.js.
                </p>
                <p>
                  We build products for scale, reusablity and maintainability. We invest heavily in sound development and testing practices resulting in
                  performant and worry free products and services.
                </p>
              </div>
            </div>

            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
                <img src="img/about-extra-2.svg" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                <h4>Cloud presence</h4>
                <p>
                  RightMove Solutions have deployed Saas products in major cloud platforms including Google Cloud, Amazon Web Services, and Azure.
                  By using best of breed and cost efficient cloud products, we are able to deliver performant and scalable products for Saas models.
                </p>
                <p>
                  We insist on building Apps with Security as the top priority. Our Architects have expertise in choosing right Databases for scale and cost efficiency; choosing the right App Server model or Lambda functions for Server side processing; leverage CDN for serving static assests instead of App servers, etc.
                </p>
                <p>
                </p>
              </div>
              
            </div>

          </div>
        </section>
        <section id="services" className="section-bg">
          <div className="container">

            <header className="section-header">
              <h3>Services</h3>
              <p>Customer is always number 1. We take extreme efforts to fully understand your needs and we deliver services and products that exceed your expectations</p>
            </header>

            <div className="row">

           
              <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon"><i className="ion-ios-bookmarks-outline" style={{color: "#e9bf06"}}></i></div>
                  <h4 className="title"><a href="">Mobile Apps</a></h4>
                  <p className="description">
                    RightMove Solutions deploy Apps to both App Store and Play Store and has thousands of downloads across the World.
                    Our cross platform Apps are elegant, functional, performant and have 4.5+ ratings.
                  </p>
                  <br/>
                  <p className="description">
                    Our Engineers work on React Native and Flutter tech stack.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon"><i className="ion-ios-analytics-outline" style={{color: "#ff689b"}}></i></div>
                  <h4 className="title"><a href="">Web Apps</a></h4>
                  <p className="description">
                    We build Web apps for security, scale, maintainability and resusability.
                    We provide multi-cloud solutions on hosting, storage and security while maintaining low run time costs.
                  </p>
                  <br/>
                  <p className="description">
                    We are a Node.js shop and we leverage Next.js, Hapi and Express servers for server side requirements.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section id="contact">
      <div className="container-fluid">

        <div className="section-header">
          <h3>Contact Us</h3>
        </div>

        <div className="row wow fadeInUp justify-content-center">

          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6 info">
                <i className="ion-ios-location-outline"></i>
                <p>10386 Somerset Ct, Cupertino, CA 950154</p>
              </div>
              <div className="col-md-6 info">
                <i className="ion-ios-email-outline"></i>
                <p>sam@rightmovesolutions.com</p>
              </div>
            </div>

            <div className="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" className="contactForm">
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group col-lg-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validation"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div className="validation"></div>
                </div>
                <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
      </main>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-6 col-md-6 footer-info">
                <h3>RightMove Solutions</h3>
                <p>
                  Proven expertise in delivering virtual community engagement solutions
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#into">Home</a></li>
                  <li><a href="#about">About us</a></li>
                  <li><a href="#services">Services</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  10386 Somerset Ct <br/>
                  Cupertino, CA - 950154<br/>
                  United States <br />
                  <strong>Email:</strong> sam@rightmovesolutions.com<br/>
                </p>
              </div>
    
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>RightMove Solutions</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
