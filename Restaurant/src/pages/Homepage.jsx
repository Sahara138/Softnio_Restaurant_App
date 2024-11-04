import { Link } from "react-router-dom";
import "../css/home/Header.css";
import "../css/home/Banner.css";
import "../css/home/Food.css";
import "../css/home/Customer.css";
import "../css/home/Footer.css";
import { LuPhoneCall } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { LuClock4 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Homepage = () => {
    return (
        <div>
            {/* Header Part Start */}
            <section className="Header">
                <div className="container">
                    {/* NavBar Part Start */}
                    <nav className="navBar">
                        <div className="logo_menu">
                            <Link to="/">
                                <div className="logo">
                                    <div className="image">
                                        <img src="../../public/images/Logo.png" alt="logo" />
                                    </div>
                                    <p>Restau<span>rant</span></p>
                                </div>
                            </Link>
                            <div className="menu">
                                <ul>
                                    <Link to='/'><li>Home</li></Link>
                                    <Link to='/'><li>About</li></Link>
                                    <Link to='/'><li>Portfolio</li></Link>
                                    <Link to='/'><li>Clients</li></Link>
                                    <Link to='/'><li>Blog</li></Link>
                                    <Link to='/'><li>Contact</li></Link>
                                </ul>
                            </div>
                        </div>
                        <div className="btn">
                            <button><Link to="#"><p>Book A Table</p></Link></button>
                        </div>
                    </nav>
                    {/* NavBar Part End */}
                    {/* Hero Part Start */}
                    <div className="Hero">
                        <div className="left">
                            <div className="content">
                                <div className="title">
                                    <h1>Taste The Authentic saudi cuisine</h1>
                                </div>
                                <p>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                                <div className="btn">
                                    <button><Link to="#"><span>Explore Menu</span></Link></button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img className="flower" src="../../public/images/flower.png" alt="flower" />
                            <div className="image">
                                <img src="../../public/images/Hero_image_1.png" alt="" />
                            </div>
                            <img className="offer" src="../../public/images/Offer.png" alt="flower" />

                        </div>
                    </div>
                    {/* Hero Part End */}
                    
                </div>
                
            </section>
            {/* Header Part End*/}

            {/* Banner Part Start*/}
            <div className="banner">
                <div className="container">
                    <img className="sideImg" src="../../public/images/banner_side.png" alt="" />
                    <div className="upper_part">
                        <div className="image">
                            <img src="../../public/images/Banner-image.png" alt="" />
                        </div>
                        <div className="banner_content">
                            <div className="banner_section">
                                <ul>
                                    <Link to="/"><li>About</li></Link>
                                    <Link to="/"><li>Experience</li></Link>
                                    <Link to="/"><li>Contact</li></Link>
                                </ul>
                                <div className="heading">
                                    <h1 className="title">Exceptional Culinary Experience And Delicious Food</h1>
                                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                                </div>
                                <div className="contact_section">
                                    <div className="btn">
                                        <button><Link to="#"><span>About More</span></Link></button>
                                    </div>
                                    <div className="contact">
                                        <p><LuPhoneCall /></p>
                                        <p>+88 3426 739 485</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lower_part">
                        <div className="cards">
                            <div className="card">
                                <div className="icon">
                                    <img src="../../public/images/package.png" alt="" />
                                </div>
                                <div className="info">
                                    <h5 className="title">Fast Delivery</h5>
                                    <p className="desc">Within 30 minutes</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src="../../public/images/medal.png" alt="" />
                                </div>
                                <div className="info">
                                    <h5 className="title">Absolute Dinning</h5>
                                    <p className="desc">Best buffet restaurant</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src="../../public/images/bag.png" alt="" />
                                </div>
                                <div className="info">
                                    <h5 className="title">PickUp Delivery</h5>
                                    <p className="desc">Grab your food order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Part End*/}

            {/* Popular Food Items Part Start*/}
            <section className="food">
                <img className="food_sideImg" src="../../public/images/Food_sideImg.png" alt="" />
                <div className="container">
                    <div className="heading">
                        <div className="content">
                            <div className="title">
                                <div className="square"></div>
                                <h5>Crispy, Every Bite Taste</h5>
                            </div>
                            <p>Popular Food Items</p>
                        </div>
                        <div className="arrow-icon">
                            <div className="left-arrow">
                                <IoIosArrowBack />
                            </div>
                            <div className="right-arrow">
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </div>
                    <div className="popular-food-item-cards">
                        <div className="card">
                            <div className="food-image">
                                <img src="../../public/images/classic-burger-with-beef-cutlet-vegetables-onions-isolated-white-background 1.png" alt="" />
                            </div>
                            <div className="line"></div>
                            <h5 className="title">Vegetables Burger</h5>
                            <p className="desc">Barbecue Italian cuisine pizza</p>
                        </div>
                        <div className="card">
                            <div className="food-image">
                                <img src="../../public/images/Pizza.png" alt="" />
                            </div>
                            <div className="line"></div>
                            <h5 className="title">Spacial Pizza</h5>
                            <p className="desc">Barbecue Italian cuisine pizza</p>
                        </div>
                        <div className="card">
                            <div className="food-image">
                                <img src="../../public/images/french-fries.png" alt="" />
                            </div>
                            <div className="line"></div>
                            <h5 className="title">Spacial French Fries</h5>
                            <p className="desc">Barbecue Italian cuisine</p>
                        </div>
                        <div className="card">
                            <div className="food-image">
                                <img src="../../public/images/fried-shrimp-prawn-cake-white-plate 1.png" alt="" />
                            </div>
                            <div className="line"></div>
                            <h5 className="title">Cuisine Chicken</h5>
                            <p className="desc">Japanese Cuisine Chicken</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Popular Food Items Part End*/}
            {/* Customer Part Start*/}
            <section className="customer">
                <img className="customer_sideImg_1" src="../../public/images/customer-sideImg-1.png" alt="" />
                <img className="customer_sideImg_2" src="../../public/images/customer-sideImg-2.png" alt="" />
                <div className="container">
                    <div className="heading">
                        <div className="content">
                            <div className="title">
                                <div className="square"></div>
                                <h5>Crispy, Every Bite Taste</h5>
                            </div>
                            <p>What some of my customers say</p>
                        </div>
                        <div className="arrow-icon">
                            <div className="left-arrow">
                                <IoIosArrowBack />
                            </div>
                            <div className="right-arrow">
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </div>
                    <div className="customer-card">
                        <img src="../../public/images/Group.png" alt="" className="quote_sideImg" />
                        <div className="quote">
                            <p><RiDoubleQuotesL /></p>                          <div>
                                <span className="text">You can't go wrong with Chicken Mandi, 
                                    I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</span>
                                <div className="customer-intro">
                                    <div className="info">
                                        <h5 className="name">Khalid Al Dawsry</h5>
                                        <p className="desc">Jeddah, Saudi</p>
                                    </div>
                                    <div className="image">
                                        <img src="../../public/images/Image (2).png" alt="" />
                                    </div>
                                    
                                </div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="video">
                                
                            <div className="image">
                                <img src="../../public/images/Video.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Customer Part End*/}
            {/* Footer Part Start*/}
            <section className="footer">
                <div className="container">
                    <h2>We ready to have you the best dining experiences</h2>
                    <div className="service-cards">
                        <div className="card">
                            <p><LuClock4 /></p>
                            <h5 className="title">Opening hours</h5>
                            <h6>Monday - Sunday</h6>
                            <h6>9:00 AM to 11:30 PM</h6>
                        </div>
                        <div className="card">
                            <p><LuPhoneCall /></p>
                            <h5 className="title">LET'S TALK</h5>
                            <h6>Phone: 1-800-222-4545</h6>
                            <h6>Fax: 1-800-222-4545</h6>
                        </div>
                        <div className="card">
                            <p><MdOutlineMail /></p>
                            <h5 className="title">BOOK A TABLE</h5>
                            <h6>Email: demo@website.com</h6>
                            <h6>Support: support@website.com</h6>
                        </div>
                        <div className="card">
                            <p><GrLocation /></p>
                            <h5 className="title">Our Address</h5>
                            <h6>123 Stree New York City , United States Of America.</h6>
                        </div>
                    </div>
                    <div className="social-media">
                        <div className="icon"><p><FaFacebook /></p></div>
                        <div className="icon"><p><FaSquareXTwitter /></p></div>
                        <div className="icon"><p><FaInstagramSquare /></p></div>
                        <div className="icon"><p><FaLinkedin /></p></div>
                    </div>
                    <div className="copyright">
                        <h6>© 2023 <span>Niomax </span> All Rights Reserved </h6>
                    </div>
                </div>
            </section>
            {/* Footer Part End*/}
        </div>
    );
};

export default Homepage;