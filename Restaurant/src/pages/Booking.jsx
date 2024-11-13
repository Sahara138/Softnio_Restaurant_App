import '../css/home/Header.css';
import '../css/home/Booking.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Booking = () => {
    const navigate = useNavigate();


    const handleButton = () =>{
        navigate("/contact")
    }
    return (
        <div>
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
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to='/home'>Home</NavLink></li>
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to='/about'>About</NavLink></li>
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to='/portfolio'>Portfolio</NavLink></li>
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to='/clients'>Clients</NavLink></li>
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to='/blog'>Blog</NavLink></li>
                                            <li><NavLink className={({ isActive}) =>  (isActive ? "active" : "")} to='/contact'>Contact</NavLink></li>
                            
                                            
                                        </ul>
                                    </div>
                            </div>
                            <div className="btn">
                                    <button><Link to="/contact"><p>Book A Table</p></Link></button>
                            </div>
                    </div>
                </div>
            </nav>
            {/* Book Table part Start */}
            <section className='bookTable' style={{display:"block"}}>
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
                            <button><Link to="#"><p>Book Now</p></Link></button>
                        </div>
                    </form>

                </div>
            </section>
            {/* Book Table part End */}
        </div>
    );
};

export default Booking;