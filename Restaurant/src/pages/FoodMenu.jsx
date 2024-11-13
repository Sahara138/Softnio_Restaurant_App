import '../css/home/Food.css';
import '../data/data';


const FoodMenu = (props) => {
    const {image,alt,title,desc} = props;
    return (
        <div className="popular-food-item-cards">
            <div className="card">
                <div className="food-image">
                    <img src={image} alt={alt} />
                </div>
                <div className="line"></div>
                <h5 className="title">{title}</h5>
                <p className="desc">{desc}</p>
            </div>
                        {/* <div className="card">
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
                        </div> */}
        </div>
    );
};

export default FoodMenu;