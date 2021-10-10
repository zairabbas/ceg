import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby"
import cn from "classnames";

import useOnScreen from "../hooks/useOnScreen";
import useLocoScroll from "../hooks/useLocoScroll";

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () =>
  {
    
	const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {

	gsap.registerPlugin(ScrollTrigger);
	var sec = document.querySelectorAll('#about')
	function imgins() {
		sec.forEach((sec, i) => { 
				let tl = gsap.timeline({
				scrollTrigger: {
					trigger: '#about',
					scroller: useLocoScroll,
					start: "top top",
					end: "+=200",
					markers: true,
				}
			});
			tl.from(sec.querySelectorAll('.slideup-a'), {
				opacity:0, duration: 1, y:30, stagger: 0.6,
			  }) 
			  .to(sec.querySelectorAll('.slideup-a'), {
				opacity:1, duration: 1, y:1, stagger: 0.6, ease: "Power2.easeInOut",
			  }) 
	  });
	}
	imgins();
	
	
    if (reveal) {
		gsap.set("body", { opacity: 0});
    }
  }, [reveal]);
  
  return (
  <>
  <Layout>
    <Seo title="CEG - Dubai" />
    <div data-scroll-section>
				  <section className="np-sec light-theme" id="home-welcome">
					  <div className="logo hero-logo" style={{ backgroundImage: `url(img/ceg-logo.png)` }}></div>
					  <div className="para-slide">
						  <div className="bg-slider">
							  <div className="full-bg" style={{ backgroundImage: `url(img/hero.jpeg)` }}></div>
						  </div>
					  </div>
					  <div className="center-content text-center">
						  <h1 className="h-font big-text slideup-h-text" data-scroll data-scroll-speed="4" data-scroll-position="top" data-scroll-direction="horizontal">CODES</h1>
						  <h1 className="h-font big-text slideup-h-text" data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal" data-scroll-position="top">ENGINEERING</h1>
						  <div className="slideup-h-text" data-scroll data-scroll-speed="-0.9" data-scroll-position="top">
							  <p>Backed by a long history, we consistently work to a high operational standard.<br />
								  Fully engaged with our clients for full MEP delivery.
							  </p>
						  </div>
					  </div>
					  <div className="scroll-btn" data-sec="home-about">
						  <div className="down-arrow" style={{ backgroundImage: `url(img/down-arrow.svg)` }}></div>
					  </div>
				  </section>
			  </div>
			  <div data-scroll-section>
				  <section className="body-sec about-us" id="about">
					  <div className="h-left-img" data-scroll data-scroll-speed="2">
						  <div className="o-image_wrapper" data-scroll data-scroll-repeat>
							  <div className={cn("o-image", { "is-reveal": reveal })} ref={ref} data-scroll data-scroll-speed="-2">
								  <img className="c-speed-block_image" alt="" src="img/about-us.jpeg" />
							  </div>
						  </div>
					  </div>
					  <div className="h-right-content">
						  <h1 className="h-font slideup-a">About us</h1>
						  <div className="sm-space"></div>
						  <p className="p-w slideup-a">We are a Responsible safe working contractor with a Focused commitment to building a strong company. A Trusted brand, backed by a history of 13 years, providing Smart, innovative and inspiring solutions, Passionate about every project we deliver. Our annual turnover is more than AED200 million.</p>
						  <p className="p-w slideup-a">Established in 2006, CEG | Codes Engineering operates across a diverse range of construction sectors, such as high-spec residential, hospitality, education, commercial fit-out, infrastructure and the fast-paced retail sector.</p>
						  <div className="sm-space"></div>
						  <Link to="/about" className="btn btn-primary slideup-a">Read More</Link>
						  {/* <a href="/" className="btn btn-primary slideup-a">Read More</a> */}
					  </div>
				  </section>
			  </div>
			  <div data-scroll-section>
				  <section className="body-sec project light-theme">
					  <div className="projects" data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">
						  <div className="p-img-1 slideup" style={{ backgroundImage: `url(img/hero-dubai.jpg)` }}></div>
						  <div className="p-img slideup" style={{ backgroundImage: `url(img/dubai-1.jpg)` }}></div>
						  <div className="p-img-1 slideup" style={{ backgroundImage: `url(img/hero-dubai-2.jpg)` }}></div>
					  </div>
					  <div className="Ycenter">
						  <h1 className="si-item h-font l-big-text slideup">Projects</h1>
					  </div>
					  <div className="scroll-btn" data-sec="home-about slideup">
						  <div>
							  <i className="mdi mdi-arrow-bottom-right"></i>
						  </div>
					  </div>
				  </section>
			  </div>
			  <div data-scroll-section>
				  <section className="body-sec light-theme" style={{ height: `100%` }}>
					  <div className="full-bg" style={{ backgroundImage: `url(img/hero-dubai.jpg)` }} data-scroll data-scroll-speed="4" data-scroll-direction="horizontal"></div>
					  <div className="fluid-container">
						  <div className="q-text">
							  <h2 className="slideup"><span>Codes Engineering</span><br /> HAS EVERYTHING TO LET YOU ENJOY YOURSELF AND THE COMPANY OF THOSE YOU LOVE</h2>
						  </div>
					  </div>
				  </section>
			  </div>
			  <section className="body-sec light-theme" data-scroll-section style={{ height: `100%` }}>
				  <div className="fluid-container">
					  <h1 className="h-font text-center f-color slideup">Our Services</h1>
					  <div className="md-space"></div>
					  <div className="row" data-scroll data-scroll-speed="6" data-scroll-direction="horizontal">
						  <div className="sui-card slideup">
							  <div className="sc-cont">
								  <h4>Design</h4>
							  </div>
							  <div className="sc-img" style={{ backgroundImage: `url(img/image-1.png)` }}></div>
						  </div>
						  <div className="sui-card slideup">
							  <div className="sc-cont">
								  <h4>Fit-Out</h4>
							  </div>
							  <div className="sc-img" style={{ backgroundImage: `url(img/image-2.png)` }}></div>
						  </div>
						  <div className="sui-card slideup">
							  <div className="sc-cont">
								  <h4>Development</h4>
							  </div>
							  <div className="sc-img" style={{ backgroundImage: `url(img/image-3.png)` }}></div>
						  </div>
					  </div>
					  <div className="md-space"></div>
					  <div className="row" data-scroll data-scroll-speed="-6" data-scroll-direction="horizontal">
						  <div className="sui-card slideup">
							  <div className="sc-cont">
								  <h4>Technology</h4>
							  </div>
							  <div className="sc-img" style={{ backgroundImage: `url(img/image-6.png)` }}></div>
						  </div>
						  <div className="sui-card slideup">
							  <div className="sc-cont">
								  <h4>Modular</h4>
							  </div>
							  <div className="sc-img" style={{ backgroundImage: `url(img/image-4.png)` }}></div>
						  </div>
						  <div className="sui-card slideup">
							  <div className="sc-cont">
								  <h4>Aftercare</h4>
							  </div>
							  <div className="sc-img" style={{ backgroundImage: `url(img/image-5.png)` }}></div>
						  </div>
					  </div>
				  </div>
			  </section>
			  <div data-scroll-section>
				  <section className="body-sec ui-light-color light-theme" style={{ height: `100%` }}>
					  <div className="fluid-container">
						  <div className="row">
							  <div className="w60">
								  <h1 className="h-font f-color slideup" data-scroll data-scroll-speed="2">Sectors</h1>
								  <div className="md-space"></div>
								  <div className="row">
									  <div className="s-item slideup" data-scroll data-scroll-speed="2">
										  <div className="item-title">
											  <div className="s-icon" style={{ backgroundImage: `url(img/icon/home.svg)` }}></div>
											  <h5>Residential</h5>
										  </div>
										  <p>Development capability with understanding of the importance of living experiences and spaces for residents and guests.</p>
									  </div>
									  <div className="s-item slideup" data-scroll data-scroll-speed="2">
										  <div className="item-title">
											  <div className="s-icon" style={{ backgroundImage: `url(img/icon/buildings.svg)` }}></div>
											  <h5>Commercial</h5>
										  </div>
										  <p>Works ranging from new builds, to fit-outs and refurbishments, built upon early projects within the office buildings.</p>
									  </div>
								  </div>
								  <div className="sm-space"></div>
								  <div className="row">
									  <div className="s-item slideup" data-scroll data-scroll-speed="2">
										  <div className="item-title">
											  <div className="s-icon" style={{ backgroundImage: `url(img/icon/setting.svg)` }}></div>
											  <h5>Specialist fit-out</h5>
										  </div>
										  <p>Providing data centre solutions to meet the increasing needs in data delivery, security and resilience.</p>
									  </div>
									  <div className="s-item slideup" data-scroll data-scroll-speed="2">
										  <div className="item-title">
											  <div className="s-icon" style={{ backgroundImage: `url(img/icon/handshake.svg)` }}></div>
											  <h5>Aftercare</h5>
										  </div>
										  <p>Delivery of support services and total/integrated facilities management, including bespoke solutions.</p>
									  </div>
								  </div>
								  <a href="/" className="btn btn-primary" data-scroll data-scroll-speed="2">Contact US</a>
							  </div>
							  <div className="w-40-right">
								  <div className="o-media-wrapper">
									  {/* <video muted autoplay loop playsinline src="video/video.mp4"></video> */}
								  </div>
							  </div>
						  </div>
					  </div>
				  </section>
			  </div>
			  <div data-scroll-section>
				  <section className="body-sec ui-black-background">
					  <div className="text-center" data-scroll data-scroll-speed="2">
						  <h1 className="h-font f-color big-text slideup">Request<br />Callback</h1>
						  <div className="md-space"></div>
						  <div className="form-group slideup">
							  <input type="text" placeholder="Your Name" className="f-field" />
							  <input type="number" placeholder="Phone Number" className="f-field" />
						  </div>
					  </div>
					  <a href="/" className="submit slideup">
						  <i className="mdi mdi-arrow-right"></i>
					  </a>
				  </section>
			  </div>
			  <div data-scroll-section>
				  <section className="body-sec">
					  <div className="w40 text-center" data-scroll data-scroll-speed="2">
						  <div className="logo slideup" style={{ backgroundImage: `url(img/ceg-logo.png)` }}></div>
						  <div className="md-space"></div>
						  <a href="tel:+97145463566" className="slideup"><h1 className="h-font f-color">+971 4 5463566</h1></a>
						  <div className="sm-space"></div>
						  <a href="mailto:info@codesengineering.com" className="slideup"><h4 className="f-color">info@codesengineering.com</h4></a>
						  <div className="sm-space"></div>
						  <p className="light-theme slideup"><span className="f-color">CODES Construction LLC</span> <br />Sheikh Zayed RoodAl Makateb Building,<br /> Suite 110 P.O.Box: 888185, Dubai, UAE</p>
						  <div className="social-media">
							  <a href="/" className="slideup"><i className="mdi mdi-facebook"></i></a>
							  <a href="/" className="slideup"><i className="mdi mdi-instagram"></i></a>
							  <a href="/" className="slideup"><i className="mdi mdi-twitter"></i></a>
						  </div>
					  </div>
				  </section>
			  </div>
  </Layout>
  </>
)
}

export default IndexPage
