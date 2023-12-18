<template>
    <header id="header" style="padding-right: 150px; padding-left: 130px">
        <div class="container">

            <h1><a href="index.html">Divine Yabo</a></h1>
            <h2>I am a not so good developer who's trying the best!</h2>

            <nav id="navbar" class="navbar">
                <ul>
                    <li><a class="nav-link active" href="#header">Home</a></li>
                    <li><a class="nav-link" href="#about">About</a></li>
                    <li><a class="nav-link" href="#contact">Contact</a></li>
                    <li><a class="nav-link" href="../App.vue">Application</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>

            <div class="social-links">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="https://www.facebook.com/divine.yabo.3" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>

        </div>
        <img src="assets/img/divine.png" class="img-fluid rounded" alt="">
    </header>

    <div id="about">
        <div class="about-me container">
            <div class="section-title">
                <h2>About</h2>
                <p>Learn more about me</p>
            </div>
            <div class="row">
                <div class="col-lg-4" data-aos="fade-right">
                    <img src="assets/img/me.jpg" class="img-fluid rounded w-100" alt="">
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Web Developer</h3>
                    <p class="fst-italic">
                        Transforming ideas into immersive digital experiences through code, a web developer crafts the
                        language of the future one line at a time.
                    </p>
                    <div class="row">
                        <div class="col-lg-6">
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>December 25
                                        2002</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Cell Number:</strong>
                                    <span>09702243752</span>
                                </li>
                                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Cebu City</span></li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Information
                                        Technology Master</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Gmail:</strong>
                                    <span>divineyabo21@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        As a versatile and curious individual, I thrive on continuous learning and creative expression,
                        seeking to make a positive impact through the power of words and technology..
                        With a positive attitude as my compass, I navigate challenges with resilience, embrace opportunities
                        for growth, and inspire those around me with optimism and kindness.
                    </p>
                </div>
            </div>

        </div><!-- End About Me -->

    </div>

    <div id="contact" class="contact mt-5">
        <div class="container">

            <div class="section-title">
                <h2>Contact</h2>
                <p>Contact Me</p>
            </div>

            <div class="row mt-2">

                <div class="col-md-6 d-flex align-items-stretch">
                    <div class="info-box">
                        <i class="bx bx-map"></i>
                        <h3>My Address</h3>
                        <p>Sudtonggan Basak Lapu Lapu City</p>
                    </div>
                </div>

                <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                    <div class="info-box">
                        <i class="bx bx-share-alt"></i>
                        <h3>Social Profiles</h3>
                        <div class="social-links">
                            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                            <a href="https://www.facebook.com/divine.yabo.3" class="facebook"><i
                                    class="bi bi-facebook"></i></a>
                            <a href="" class="instagram"><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mt-4 d-flex align-items-stretch">
                    <div class="info-box">
                        <i class="bx bx-envelope"></i>
                        <h3>Email Me</h3>
                        <p>divineyabo21@gmail.com </p>
                    </div>
                </div>
                <div class="col-md-6 mt-4 d-flex align-items-stretch">
                    <div class="info-box">
                        <i class="bx bx-phone-call"></i>
                        <h3>Call Me</h3>
                        <p>09702243752</p>
                    </div>
                </div>
            </div>

            <form action="forms/contact.php" method="post" role="form" class="php-email-form mt-4">
                <div class="row">
                    <div class="col-md-6 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                    </div>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
                </div>
                <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

        </div>
    </div>

    <div class="credits">
        Designed by <span class="text-primary">Divine Yabo</span>
    </div>
</template>