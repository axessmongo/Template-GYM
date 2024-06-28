import React from 'react';
import { IonIcon } from '@ionic/react';
import heroBanner from '../Assets/images/hero-banner.png';
import heroCircleOne from '../Assets/images/hero-circle-one.png';
import heroCircleTwo from '../Assets/images/hero-circle-two.png';
import heartRate from '../Assets/images/heart-rate.svg';
import calories from '../Assets/images/calories.svg';
import aboutBanner from '../Assets/images/about-banner.png';
import aboutCircleOne from '../Assets/images/about-circle-one.png';
import aboutCircleTwo from '../Assets/images/about-circle-two.png';
import fitness from '../Assets/images/fitness.png';
import aboutCoach from '../Assets/images/about-coach.jpg';
import videoBanner from '../Assets/images/video-banner.jpg';
import class1 from '../Assets/images/class-1.jpg';
import class2 from '../Assets/images/class-2.jpg';
import class3 from '../Assets/images/class-3.jpg';
import class4 from '../Assets/images/class-4.jpg';
import classIcon1 from '../Assets/images/class-icon-1.png';
import classIcon2 from '../Assets/images/class-icon-2.png';
import classIcon3 from '../Assets/images/class-icon-3.png';
import classIcon4 from '../Assets/images/class-icon-4.png';
import classesBg from '../Assets/images/classes-bg.png';
import blog1 from '../Assets/images/blog-1.jpg';
import blog2 from '../Assets/images/blog-2.jpg';
import blog3 from '../Assets/images/blog-3.jpg';
import footerBg from '../Assets/images/footer-bg.png';
import footerClock from '../Assets/images/footer-clock.png';
import logo from '../Assets/images/logo.png'
import { playSharp, barbellSharp, location, call, mail, chevronForwardSharp, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

function Home() {

    const classes = [
        {
            img: class1,
            icon: classIcon1,
            title: "Strength Training",
            text: "Build muscle and increase your strength with our comprehensive strength training programs. Perfect for all levelsour sessions focus on weightlifting, resistance exercises, and functional movements.",
            progress: 85,
        },
        {
            img: class2,
            icon: classIcon2,
            title: "Cardio Workouts",
            text: "Boost your heart health and burn calories with our energetic cardio workouts. From cycling to HIIT, our classesare designed to keep your heart rate up and your energy levels high.",
            progress: 70,
        },
        {
            img: class3,
            icon: classIcon3,
            title: "Flexibility and Mobility Training",
            text: "Enhance your range of motion and prevent injuries with our flexibility and mobility training. Our yoga and stretching sessions are perfect for improving balance, reducing stress, and increasing overall flexibility.",
            progress: 90,
        },
        {
            img: class4,
            icon: classIcon4,
            title: "The Fitness Pack",
            text: "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
            progress: 60,
        },
        {
            img: class1,
            icon: classIcon1,
            title: "Weight Lifting",
            text: "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
            progress: 85,
        },
        {
            img: class2,
            icon: classIcon2,
            title: "Cardio & Strength",
            text: "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
            progress: 70,
        }
    ];


    const blogs = [
        {
            img: blog1,
            date: "2022-07-07",
            title: "Going to the gym for the first time",
            text: "Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.",
        },
        {
            img: blog2,
            date: "2022-07-07",
            title: "Parturient accumsan cacus pulvinar magna",
            text: "Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.",
        },
        {
            img: blog3,
            date: "2022-07-07",
            title: "Risus purus namien parturient accumsan cacus",
            text: "Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.",
        },
    ];


    return (

        <>
            <header className="headers" data-header>
                <div className="container">

                    <a class="navbar-brand " href="index.html"><img src={logo} alt="logo" class="logo1" /></a>

                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav fs-3">
                                <li className="nav-item">
                                    <a href="#home" className="nav-link active">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" className="nav-link">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#class" className="nav-link">Classes</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="#blog" className="nav-link">Blog</a>
                                </li> */}
                                <li className="nav-item">
                                    <a href="#footer" className="nav-link">Contact Us</a>
                                </li>
                            </ul>
                            <a href="#" className="btn btn-secondary">Join Now</a>
                        </div>
                    </nav>

                </div>
            </header>

            <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section style={{ backgroundImage: "url('./assets/images/hero-bg.png')" }}>
                <div className="container">

                    <div className="hero-content">

                        <p className="hero-subtitle">
                            <strong className="strong">The Best</strong>Fitness Club
                        </p>

                        <h1 className=" hero-title display-1 text-light">Push Yourself for a Healthier Life</h1>

                        <p className="section-text">
                            Transform Yourself, One Workout at a Time
                        </p>

                        {/* <a href="#" className="btn btn-primary">Get Started</a> */}

                    </div>

                    <div className="hero-banner">
                        <img src={heroBanner} width="660" height="753" alt="hero banner" className="w-100" />
                        <img src={heroCircleOne} width="666" height="666" aria-hidden="true" alt="" className="circle circle-1" />
                        <img src={heroCircleTwo} width="666" height="666" aria-hidden="true" alt="" className="circle circle-2" />
                        <img src={heartRate} width="255" height="270" alt="heart rate" className="abs-img abs-img-1" />
                        <img src={calories} width="348" height="224" alt="calories" className="abs-img abs-img-2" />
                    </div>

                </div>
            </section>

            <section className="section about" id="about" aria-label="about">
                <div className="container">

                    <div className="about-banner has-after">
                        <img src={aboutBanner} width="660" height="648" loading="lazy" alt="about banner" className="w-100" />
                        <img src={aboutCircleOne} width="660" height="534" loading="lazy" aria-hidden="true" alt="" className="circle circle-1" />
                        <img src={aboutCircleTwo} width="660" height="534" loading="lazy" aria-hidden="true" alt="" className="circle circle-2" />
                        <img src={fitness} width="650" height="154" loading="lazy" alt="fitness" className="abs-img w-100" />
                    </div>

                    <div className="about-content">
                        <p className="section-subtitle">About Us</p>
                        <h2 className="h2 section-title display-1">Welcome to Your Fitness Journey</h2>
                        <p className="section-text">
                            Welcome to our fitness gym, where your health and well-being are our top priorities. We offer state-of-the-art
                            equipment, expert trainers, and a variety of classes to suit all fitness levels. Whether you're looking to build
                            strength, lose weight, or improve overall fitness, we're here to support you every step of the way. Join us and start
                            transforming your life today!
                        </p>
                        <p className="section-text">
                            Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante
                            ipsum primis.
                        </p>

                        <div className="wrapper">
                            <div className="about-coach">
                                <figure className="coach-avatar">
                                    <img src={aboutCoach} width="65" height="65" loading="lazy" alt="Trainer" />
                                </figure>
                                <div>
                                    <h3 className="h3 coach-name">Anand</h3>
                                    <p className="coach-title">Our Coach</p>
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary">Explore More</a>
                        </div>

                    </div>

                </div>
            </section>

            <section className="section video" aria-label="video">
                <div className="container">
                    <div className="video-card has-before has-bg-image" style={{ backgroundImage: `url(${videoBanner})` }}>
                        <h2 className="h2 card-title">Explore Fitness Life</h2>
                        <button className="play-btn" aria-label="play video">
                            <IonIcon icon={playSharp} />
                        </button>
                        <a href="#" className="btn-link has-before">Watch More</a>
                    </div>
                </div>
            </section>

            <section className="section class bg-dark has-bg-image" id="class" aria-label="class" style={{ backgroundImage: `url(${classesBg})` }}>
                <div className="container">
                    <p className="section-subtitle">Our Classes</p>
                    <h2 className="h2 section-title text-center display-1">Fitness classes designed for every goal</h2>
                    <ul className="class-list has-scrollbar">
                        {classes.map((item, index) => (
                            <li key={index} className="scrollbar-item">
                                <div className="class-card">
                                    <figure className="card-banner img-holder" style={{ '--width': 416, '--height': 240 }}>
                                        <img src={item.img} width="416" height="240" loading="lazy" alt={item.title} className="img-cover" />
                                    </figure>
                                    <div className="card-content">
                                        <div className="title-wrapper">
                                            <img src={item.icon} width="52" height="52" aria-hidden="true" alt="" className="title-icon" />
                                            <h3 className="h3">
                                                <a href="#" className="card-title">{item.title}</a>
                                            </h3>
                                        </div>
                                        <p className="card-text">{item.text}</p>
                                        <div className="card-progress">
                                            <div className="progress-wrapper">
                                                <p className="progress-label">Class Full</p>
                                                <span className="progress-value">{item.progress}%</span>
                                            </div>
                                            <div className="progress-bg">
                                                <div className="progress-bar" style={{ width: `${item.progress}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* <section className="section blog" id="blog" aria-label="blog">
                <div className="container">
                    <p className="section-subtitle">Our News</p>
                    <h2 className="h2 section-title text-center display-1">Latest Blog Feed</h2>
                    <ul className="blog-list has-scrollbar">
                        {blogs.map((blog, index) => (
                            <li key={index} className="scrollbar-item">
                                <div className="blog-card">
                                    <div className="card-banner img-holder" style={{ '--width': 440, '--height': 270 }}>
                                        <img src={blog.img} width="440" height="270" loading="lazy" alt={blog.title} className="img-cover" />
                                        <time className="card-meta" dateTime={blog.date}>{new Date(blog.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="h3">
                                            <a href="#" className="card-title">{blog.title}</a>
                                        </h3>
                                        <p className="card-text">{blog.text}</p>
                                        <a href="#" className="btn-link has-before">Read More</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section> */}

            <footer className="footer" id='footer'>
                <div className="section footer-top bg-dark has-bg-image" style={{ backgroundImage: `url(${footerBg})` }}>
                    <div className="container">
                        <div className="footer-brand">
                        <a class="navbar-brand " href="index.html"><img src={logo} alt="logo" class="logo1" /></a>

                            <p className="footer-brand-text">
                            Transform Yourself, One Workout at a Time
                            </p>
                            <div className="wrapper">
                                <img src={footerClock} width="34" height="34" loading="lazy" alt="Clock" />
                                <ul className="footer-brand-list">
                                    <li>
                                        <p className="footer-brand-title">Monday - Friday</p>
                                        <p>7:00Am - 10:00Pm</p>
                                    </li>
                                    <li>
                                        <p className="footer-brand-title">Saturday - Sunday</p>
                                        <p>7:00Am - 2:00Pm</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title has-before">Our Links</p>
                            </li>
                            <li>
                                <a href="#home" className="footer-link">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="footer-link">About Us</a>
                            </li>
                            <li>
                                <a href="#class" className="footer-link">Classes</a>
                            </li>
                            {/* <li>
                                <a href="#" className="footer-link">Blog</a>
                            </li> */}
                            <li>
                                <a href="#contact" className="footer-link">Contact Us</a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title has-before">Contact Us</p>
                            </li>
                            <li className="footer-list-item">
                                <div className="icon">
                                    <IonIcon icon={location} />
                                </div>
                                <address className="address footer-link">
                                    1247/Plot No. 39, 15th Phase, Chennai.
                                </address>
                            </li>
                            <li className="footer-list-item">
                                <div className="icon">
                                    <IonIcon icon={call} />
                                </div>
                                <div>
                                    <a href="tel:18001213637" className="footer-link">1800-121-3637</a>
                                    <a href="tel:+915552348765" className="footer-link">+91 555 234-8765</a>
                                </div>
                            </li>
                            <li className="footer-list-item">
                                <div className="icon">
                                    <IonIcon icon={mail} />
                                </div>
                                <div>
                                    <a href="mailto:info@fitlife.com" className="footer-link">info@bodytemple.com</a>
                                    <a href="mailto:services@fitlife.com" className="footer-link">services@bodytemple.com</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title has-before">Our Newsletter</p>
                            </li>
                            <li>
                                <form action="" className="footer-form">
                                    <input
                                        type="email"
                                        name="email_address"
                                        aria-label="email"
                                        placeholder="Email Address"
                                        required
                                        className="input-field"
                                    />
                                    <button type="submit" className="btn btn-primary" aria-label="Submit">
                                        <IonIcon icon={chevronForwardSharp} />
                                    </button>
                                </form>
                            </li>
                            <li>
                                <ul className="social-list">
                                    <li>
                                        <a href="#" className="social-link">
                                            <IonIcon icon={logoFacebook} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-link">
                                            <IonIcon icon={logoInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-link">
                                            <IonIcon icon={logoTwitter} />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">
                            &copy; 2022 bodytemple. All Rights Reserved By <a href="#" className="copyright-link">Body Temple</a>
                        </p>
                        <ul className="footer-bottom-list">
                            {/* <li>
                                <a href="#" className="footer-bottom-link has-before">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="footer-bottom-link has-before">Terms & Condition</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </footer>


        </>
    );
}

export default Home;