import React, { Component } from 'react';
import Signin from './Signin';

class Landing extends Component {
render() {
    return (
        <div>
        {/* Navigation */}
        <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">
            <div className="container">
                {/*Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">Ryan Freude - Web Developer/Coder</a>
                </div>

                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#services">Specialties</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#about">About</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#team">Team</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                {/*  /.navbar-collapse */}
            </div>
            {/* /.container-fluid */}
        </nav>

        {/* Header */}
        <header>
            <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in">Welcome! I'm Ryan, a freelance web developer and coder. </div>
                    <div className="intro-heading">Currently Seeking New Opportunities!</div>
                    <a href="#services" className="page-scroll btn btn-xl">Learn more</a>
                    <Signin />
                </div>
            </div>
        </header>

        {/* Services Section */}
        <section id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Specialties</h2>
                        <h3 className="section-subheading text-muted">These are the areas I'm most passionate about but I am constantly exploring new tech and can apply new concepts quickly.</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-user fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Front-end</h4>
                        <div className="text-muted">
                         <p>React - Redux - Flow</p>
                         <p>AngularJS</p>
                         <p>Enzyme - Jest - Chai - Mocha</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Responsive Design</h4>
                        <div className="text-muted">
                         <p>React - Redux - Flow</p>
                         <p>AngularJS</p>
                         <p>Enzyme - Jest - Chai - Mocha</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-cog fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Backend</h4>
                        <div className="text-muted">
                         <p>React - Redux - Flow</p>
                         <p>AngularJS</p>
                         <p>Enzyme - Jest - Chai - Mocha</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Portfolio Grid Section */}
        <section id="portfolio" className="bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src="img/portfolio/roundicons.png" className="img-responsive" alt="" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Round Icons</h4>
                            <p className="text-muted">Graphic Design</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src="img/portfolio/startup-framework.png" className="img-responsive" alt="" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Startup Framework</h4>
                            <p className="text-muted">Website Design</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src="img/portfolio/treehouse.png" className="img-responsive" alt="" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Treehouse</h4>
                            <p className="text-muted">Website Design</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src="img/portfolio/golden.png" className="img-responsive" alt="" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Golden</h4>
                            <p className="text-muted">Website Design</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src="img/portfolio/escape.png" className="img-responsive" alt="" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Escape</h4>
                            <p className="text-muted">Website Design</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src="img/portfolio/dreams.png" className="img-responsive" alt="" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Dreams</h4>
                            <p className="text-muted">Website Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Section */}
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">About</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="timeline">
                            <li>
                                <div className="timeline-image">
                                    <img className="img-circle img-responsive" src="img/about/1.jpg" alt="" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2009-2011</h4>
                                        <h4 className="subheading">Our Humble Beginnings</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className="img-circle img-responsive" src="img/about/2.jpg" alt="" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>March 2011</h4>
                                        <h4 className="subheading">An Agency is Born</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-image">
                                    <img className="img-circle img-responsive" src="img/about/3.jpg" alt="" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>December 2012</h4>
                                        <h4 className="subheading">Transition to Full Service</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className="img-circle img-responsive" src="img/about/4.jpg" alt="" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>July 2014</h4>
                                        <h4 className="subheading">Phase Two Expansion</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>Be Part
                                        <br />Of Our
                                        <br />Story!
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section id="team" className="bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img src="img/team/1.jpg" className="img-responsive img-circle" alt="" />
                            <h4>Kay Garland</h4>
                            <p className="text-muted">Lead Designer</p>
                            <ul className="list-inline social-buttons">
                                <li><a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img src="img/team/2.jpg" className="img-responsive img-circle" alt="" />
                            <h4>Larry Parker</h4>
                            <p className="text-muted">Lead Marketer</p>
                            <ul className="list-inline social-buttons">
                                <li><a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img src="img/team/3.jpg" className="img-responsive img-circle" alt="" />
                            <h4>Diana Pertersen</h4>
                            <p className="text-muted">Lead Developer</p>
                            <ul className="list-inline social-buttons">
                                <li><a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 text-center">
                        <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Clients Aside */}
        <aside className="clients">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <a href="#">
                            <img src="img/logos/envato.jpg" className="img-responsive img-centered" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="#">
                            <img src="img/logos/designmodo.jpg" className="img-responsive img-centered" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="#">
                            <img src="img/logos/themeforest.jpg" className="img-responsive img-centered" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="#">
                            <img src="img/logos/creative-market.jpg" className="img-responsive img-centered" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </aside>

        {/* Contact Section */}
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button type="submit" className="btn btn-xl">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <span className="copyright">Copyright &copy; Your Website 2016</span>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li><a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li><a href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                            <li><a href="#">Privacy Policy</a>
                            </li>
                            <li><a href="#">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        {/* Portfolio Modals */}
        {/* Use the modals below to showcase details about your portfolio projects! */}

        {/* Portfolio Modal 1 */}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">
                                <div className="modal-body">
                                    {/* Project Details Go Here */}
                                    <h2>Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-responsive img-centered" src="img/portfolio/roundicons-free.png" alt="" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <p>
                                        <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p>
                                    <ul className="list-inline">
                                        <li>Date: July 2014</li>
                                        <li>Client: Round Icons</li>
                                        <li>Category: Graphic Design</li>
                                    </ul>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Portfolio Modal 2 */}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">
                                <div className="modal-body">
                                    <h2>Project Heading</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-responsive img-centered" src="img/portfolio/startup-framework-preview.png" alt="" />
                                    <p><a href="http://designmodo.com/startup/?u=787">Startup Framework</a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.</p>
                                    <p>You can preview Startup Framework <a href="http://designmodo.com/startup/?u=787">here</a>.</p>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Portfolio Modal 3 */}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">
                                <div className="modal-body">
                                    {/* Project Details Go Here */}
                                    <h2>Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-responsive img-centered" src="img/portfolio/treehouse-preview.png" alt="" />
                                    <p>Treehouse is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.</p>
                                    <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/">FreebiesXpress.com</a>.</p>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*Portfolio Modal 4 */}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">
                                <div className="modal-body">
                                    {/*Project Details Go Here */}
                                    <h2>Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-responsive img-centered" src="img/portfolio/golden-preview.png" alt="" />
                                    <p>Start Bootstrap's Agency theme is based on Golden, a free PSD website template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Golden is a modern and clean one page web template that was made exclusively for Best PSD Freebies. This template has a great portfolio, timeline, and meet your team sections that can be easily modified to fit your needs.</p>
                                    <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/golden-free-one-page-web-template/">FreebiesXpress.com</a>.</p>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*Portfolio Modal 5 */}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">
                                <div className="modal-body">
                                    {/* Project Details Go Here */}
                                    <h2>Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-responsive img-centered" src="img/portfolio/escape-preview.png" alt="" />
                                    <p>Escape is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Escape is a one page web template that was designed with agencies in mind. This template is ideal for those looking for a simple one page solution to describe your business and offer your services.</p>
                                    <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/">FreebiesXpress.com</a>.</p>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Portfolio Modal 6 */}
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">
                                <div className="modal-body">
                                    {/* Project Details Go Here */}
                                    <h2>Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-responsive img-centered" src="img/portfolio/dreams-preview.png" alt="" />
                                    <p>Dreams is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.</p>
                                    <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">FreebiesXpress.com</a>.</p>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
}

export default Landing;




