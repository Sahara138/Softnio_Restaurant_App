import { RiDoubleQuotesL } from 'react-icons/ri';
import '../css/home/Customer.css';
import { FaPlay } from 'react-icons/fa';

const CustomerFeedBack = (props) => {
    const {sideImg, videoImg, text, name, desc, customerImg} = props
    return (
        <div>
    <div className="customer-card">
                <img src={sideImg} alt="" className="quote_sideImg" />
                <div className="video small_device_video">
                    <div className="playButton"><FaPlay />
                    </div>
                    <div className="image">
                        <img src={videoImg} alt="" />
                    </div>
                </div>
                <div className="quote">
                            
                    <p><RiDoubleQuotesL /></p>                          
                    <div>
                        <span className="text">{text}</span>
                        <div className="customer-intro">
                            <div className="info">
                                <h5 className="name">{name}</h5>
                                <p className="desc">{desc}</p>
                            </div>
                            <div className="customer_image">
                                <div className="image">
                                    <img src={customerImg} alt="" />
                                </div>
                            </div>
                                    
                        </div>
                    </div>
                </div>
                <div className="video">
                    <div className="playButton"><FaPlay />
                    </div>        
                    <div className="image">
                        <img src={videoImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedBack;