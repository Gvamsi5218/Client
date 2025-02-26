import React from 'react';

const NotFound = () => {
    return (
        <div>
            <head>
                <meta charSet="utf-8" />
                <title>CABXPRESS</title>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta content="" name="keywords" />
                <meta content="" name="description" />

                {/* Favicon */}
                <link href="img/favicon.ico" rel="icon" />

                {/* Google Web Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet" />

                {/* Icon Font Stylesheet */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

                {/* Libraries Stylesheet */}
                <link href="lib/animate/animate.min.css" rel="stylesheet" />
                <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

                {/* Customized Bootstrap Stylesheet */}
                <link href="css/bootstrap.min.css" rel="stylesheet" />

                {/* Template Stylesheet */}
                <link href="css/style.css" rel="stylesheet" />
            </head>

            <body>
                {/* Spinner Start */}
                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                {/* Spinner End */}

                {/* Topbar Start */}
                <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                    <div className="row gx-0">
                        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                                <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+91-9904500064</small>
                                <small className="text-light"><i className="fa fa-envelope-open me-2"></i>info@cabxpress.in</small>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square" href=""><i className="fab fa-youtube fw-normal"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}

                {/* Navbar & Hero Start */}
                <div className="container-fluid position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                        <a href="" className="navbar-brand p-0">
                            <img src="img/Logo.png" alt="Logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <a href="index.html" className="nav-item nav-link">Home</a>
                                <a href="about.html" className="nav-item nav-link">About</a>
                                <a href="service.html" className="nav-item nav-link">Services</a>
                                <a href="package.html" className="nav-item nav-link">Packages</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <a href="destination.html" className="dropdown-item">Destination</a>
                                        <a href="booking.html" className="dropdown-item">Booking</a>
                                        <a href="team.html" className="dropdown-item">Travel Guides</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="404.html" className="dropdown-item active">404 Page</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <a href="" className="btn btn-primary rounded-pill py-2 px-4">Call Us Now!!!</a>
                        </div>
                    </nav>

                    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                        <div className="container py-5">
                            <div className="row justify-content-center py-5">
                                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                    <h1 className="display-3 text-white animated slideInDown">Not Found</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                            <li className="breadcrumb-item text-white active" aria-current="page">404</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navbar & Hero End */}

                {/* 404 Start */}
                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                                <h1 className="display-1">404</h1>
                                <h1 className="mb-4">Page Not Found</h1>
                                <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                                <a className="btn btn-primary rounded-pill py-3 px-5" href="">Go Back To Home</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 404 End */}

                {/* Footer Start */}
                <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-white mb-3">Company</h4>
                                <a className="btn btn-link" href="">About Us</a>
                                <a className="btn btn-link" href="">Contact Us</a>
                                <a className="btn btn-link" href="">Privacy Policy</a>
                                <a className="btn btn-link" href="">Terms & Condition</a>
                                <a className="btn btn-link" href="">FAQs & Help</a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-white mb-3">Contact</h4>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>206,Runway Heights,Ayodhya Chowk, 150Ft. Ring Road, Rajkot</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91-9904500064</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@cabxpress.in</p>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 wow fadeInUp" data-wow-delay="0.3s">
                                <iframe className="position-relative rounded w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.4509256272964!2d70.76816513406831!3d22.32265416809067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9bf09eb9061%3A0x54d50f9517795c0f!2sCAB%20XPRESS%20%7C%20Rajkot%20Taxi%20Service%20%7C%20Rajkot%20Cab%20service%20%7C%20Taxi%20Service!5e0!3m2!1sen!2sin!4v1737568424172!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="container">
                                <div className="copyright">
                                    <div className="row">
                                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                            &copy; <a className="border-bottom" href="#">CABXPRESS</a>, All Right Reserved.

                                            Designed By <a className="border-bottom" href="https://cabxpress.in">CABXPRESS</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}

                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

                {/* JavaScript Libraries */}
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="lib/tempusdominus/js/moment.min.js"></script>
                <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
                <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

                <script src="js/main.js"></script>
            </body>
        </div>
    );
};

export default NotFound;