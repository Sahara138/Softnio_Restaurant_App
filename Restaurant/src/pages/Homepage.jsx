import { Link, NavLink, useNavigate } from "react-router-dom";
import "../css/home/Header.css";
import "../css/home/Banner.css";
import "../css/home/Food.css";
import "../css/home/Customer.css";
import "../css/home/Footer.css";
import "../css/home/Booking.css";
import { LuPhoneCall } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { LuClock4 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaBars, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// import { useRef, useState } from "react";
import { bannerSection, foodMenu } from "../data/data";
import { customerFeedback } from "../data/data";
import FoodMenu from "./FoodMenu";
import { useRef, useState } from "react";


import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {Swiper, SwiperSlide } from "swiper/react";
import CustomerFeedBack from "./CustomerFeedBack";
import { RxCross2 } from "react-icons/rx";
import BannerHeading from "../components/BannerAbout";
import BannerAbout from "../components/BannerAbout";
import BannerExperience from "../components/BannerExperience";
import BannerContact from "../components/BannerContact";



const Homepage = () => {

    // const navigate = useNavigate();
    // const [value, setValue] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedBtn, setSelectedBtn] = useState("About");
    

    // const RenderComponent = ()=>{
    //     if(index == buttons[0]){
    //         return <BannerButton />
    //     }
    // }
    
    const [slideBegOrNot, handleSlideByState] = useState({
        isFirst: true,
        isLast: false,
     });

    const SlideRef= useRef()

    const handlePrev = ()=>{
        SlideRef.current.swiper.slidePrev();
    }

    const handleNext = ()=>{
        SlideRef.current.swiper.slideNext();
    }

    const onSlideChange = (swiper) => {
        handleSlideByState({
           isFirst: swiper.isBeginning,
           isLast: swiper.isEnd,
        });
     };
     const { isLast, isFirst } = slideBegOrNot;
   

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setValue(e.target.value);
    // };

    const handleButton = () =>{
        // navigate("/contact");
    }
    const renderComponent = () => {
        switch (selectedBtn) {
          case "About":
            return <BannerAbout />;
          case "Experience":
            return <BannerExperience />;
          case "Contact":
            return <BannerContact />;
          default:
            return <BannerAbout />;
        }
      };


    return (
        <div>
            {/* NavBar Part Start */}
            <nav>
                <div className="container">
                    <div className="navBar">
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
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/home">Home</NavLink></li>
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/about">About</NavLink></li>
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/portfolio">Portfolio</NavLink></li>
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/clients">Clients</NavLink></li>
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/blog">Blog</NavLink></li>
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/contact">Contact</NavLink></li>
                            
                                            
                                        </ul>
                                    </div>
                            </div>
                            
                            
                            <div className="btn">
                                    <button><Link to="/contact"><p>Book A Table</p></Link></button>
                            </div>
                            
                                <FaBars className="bar" onClick={()=>setSidebarOpen(!sidebarOpen)}  />
                                {
                                    sidebarOpen 
                                    &&
                                    (<div className="modal">
                                        <div className="nav-block">
                                            <Link to="/">
                                                <div className="logo">
                                                    <div className="image">
                                                        <img src="../../public/images/Logo.png" alt="logo" />
                                                    </div>
                                                    <p>Restau<span>rant</span></p>
                                                </div>
                                            </Link>
                                            <Link to="/home"><RxCross2 onClick={sidebarOpen}/></Link>
                                        </div>
                                        <div className="list">
                                            <ul onClick={sidebarOpen}>
                                                <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/home">Home</NavLink></li>
                                                <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/about">About</NavLink></li>
                                                <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/portfolio">Portfolio</NavLink></li>
                                                <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/clients">Clients</NavLink></li>
                                                <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/blog">Blog</NavLink></li>
                                                <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to="/contact">Contact</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>)
                                    
                                }
                                
                            
                    </div>
                </div>
            </nav>
            {/* NavBar Part End */}
            {/* Header Part Start */}
            <section className="Header">
                <img className="bg_Img" src="../../public/images/Hero.png" alt="" />
                {/* <div className="container"> */}
                {/* Hero Part Start */}
                <div className="container">
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
                                    <li onClick={() => setSelectedBtn("About")} style={
                                        {backgroundColor:selectedBtn == "About" ? "var(--red-1)" :"var(--White)",
                                            color:selectedBtn == "About" ? "var(--White)" :"var(--red-1)"
                                        }}>About</li>
                                    <li onClick={() => setSelectedBtn("Experience")}
                                        style={
                                            {backgroundColor:selectedBtn == "Experience" ? "var(--red-1)" :"var(--White)",
                                                color:selectedBtn == "Experience" ? "var(--White)" :"var(--red-1)"
                                            }}>Experience</li>
                                    <li onClick={() => setSelectedBtn("Contact")}
                                        style={
                                            {backgroundColor:selectedBtn == "Contact" ? "var(--red-1)" :"var(--White)",
                                                color:selectedBtn == "Contact" ? "var(--White)" :"var(--red-1)"
                                            }}>Contact</li>
                                    
                                </ul>
                                <div className="switchButton">{renderComponent()}</div>
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
                            <div className="left-arrow" onClick={handlePrev}>
                                <IoIosArrowBack className={`arrow ${isFirst ? 'disabled' : ''}`}/>
                            </div>
                            <div className="right-arrow" onClick={handleNext}>
                                <IoIosArrowForward className={`arrow ${isLast ? 'disabled' : ''}`}/>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={32}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{

                            300:{
                            slidesPerView: 1
                            },
                            576: {
                            slidesPerView: 2
                            },

                            992: {
                            slidesPerView: 3
                            },
                            1400: {
                            slidesPerView: 3
                            },
                            1900: {
                            slidesPerView: 4
                            },
                        }}
                        onSlideChange={onSlideChange}
                        pagination={{
                        el: '.swiper-paginations',
                        type: 'fraction',
                        }}
                        navigation={false} 
                        modules={[Autoplay,Pagination, Navigation]}
                        className="mySwiper"
                        ref={SlideRef}
                        >
                        {foodMenu.map((item,i)=>(
                            <SwiperSlide key={i}>
                                <FoodMenu 
                                image={item.image}
                                alt={item.alt}
                                title={item.title}
                                desc={item.desc}
                                
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="arrow-icon small_device_food_icon">
                            <div className="left-arrow" onClick={handlePrev}>
                                <IoIosArrowBack className={`arrow ${isFirst ? 'disabled' : ''}`}/>
                            </div>
                            <div className="right-arrow" onClick={handleNext}>
                                <IoIosArrowForward className={`arrow ${isLast ? 'disabled' : ''}`}/>
                            </div>
                        </div>

                </div>
            </section>
            {/* Popular Food Items Part End*/}
            {/* Book Table part Start */}
            <section className='bookTable'>
                <img src="../../public/images/Frame 1707478003.png" alt="" />
                <div className="container">
                    <div className="heading">
                        <div className="content">
                            <div className="title">
                                <div className="square"></div>
                                <h5>Book Now</h5>
                            </div>
                            <p>Book Your Table</p>
                            <span>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</span>
                        </div>
                    </div>
                    <form action="">
                        <input type="text" placeholder="Your Name*" />
                        <input type="email" placeholder="Your Email*" />
                        <input type="date" placeholder="Reservation Date" />
                        
                        <input type="number" placeholder="Total People" />
                        <textarea name="" id="" rows={5} placeholder="Message"></textarea>
                        <div className="btn" onClick={handleButton()}>
                            <button><Link to="/contact"><p>Book Now</p></Link></button>
                        </div>
                    </form>

                </div>
            </section>
            {/* Book Table part End */}
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
                            <div className="left-arrow" onClick={handlePrev}>
                                <IoIosArrowBack className={`arrow ${isFirst ? 'disabled' : ''}`}/>
                            </div>
                            <div className="right-arrow" onClick={handleNext}>
                                <IoIosArrowForward className={`arrow ${isLast ? 'disabled' : ''}`}/>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        onSlideChange={onSlideChange}
                        pagination={{
                        el: '.swiper-paginations',
                        type: 'fraction',
                        }}
                        navigation={false} 
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        ref={SlideRef}
                        >
                        {customerFeedback.map((item,i)=>(
                            <SwiperSlide key={i}>
                                <CustomerFeedBack 
                                sideImg={item.sideImg}
                                videoImg={item.videoImg}
                                text={item.text}
                                name={item.name}
                                desc={item.desc}
                                customerImg={item.customerImg}
                                
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="arrow-icon small_device_customer_icon">
                            <div className="left-arrow" onClick={handlePrev}>
                                <IoIosArrowBack className={`arrow ${isFirst ? 'disabled' : ''}`}/>
                            </div>
                            <div className="right-arrow" onClick={handleNext}>
                                <IoIosArrowForward className={`arrow ${isLast ? 'disabled' : ''}`}/>
                            </div>
                        </div>
                </div>
            </section>
            {/* Customer Part End*/}
            {/* Footer Part Start*/}
            <section className="footer">
                <img src="../../public/images/Footer.png" alt="" />
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
                            <h6>123 Stree New York City ,</h6>
                            <h6>United States Of America.</h6>
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