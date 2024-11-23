import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Book-Carousel.css';
import book1 from '../../Assets/images book/book1.jpg';
import book2 from '../../Assets/images book/book2.jpg';
import book3 from '../../Assets/images book/book3.jpg';
import book4 from '../../Assets/images book/book4.jpg';
import book5 from '../../Assets/images book/book5.jpg';
import book6 from '../../Assets/images book/book6.jpg';


export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                <a href="https://www.amazon.co.uk/Energy-Efficient-Homes-Dummies-DeGunther/dp/0470376023">
  <button className="buttons hover2" >
  <img  className="img"src={book1} alt="Book Cover" />
  </button>
</a>

                </div>
                <div>

                <a href="https://www.amazon.co.uk/Future-Energy-guide-energy-transition/dp/1838388672/ref=asc_df_1838388672/?tag=googshopuk-21&linkCode=df0&hvadid=641694124023&hvpos=&hvnetw=g&hvrand=4134122760468423463&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9044965&hvtargid=pla-1943404503499&psc=1&th=1&psc=1">
  <button className="buttons hover2" >
  <img  className="img"src={book2} alt="Book Cover" />
  </button>
</a>
                </div>
                <div>
                <a href="https://www.amazon.co.uk/dp/147296912X?_encoding=UTF8&psc=1&ref_=cm_sw_r_cp_ud_dp_V8PEMFPWE5C2QQ0MWDBV">
  <button className="buttons hover2" >
  <img  className="img"src={book3} alt="Book Cover" />
  </button>
</a>
                </div>
                <div>
                <a href="goole.com">
  <button className="buttons hover2" >
  <img  className="img"src={book4} alt="Book Cover" />
  </button>
</a>

                </div>
                <div>
                <a href="goole.com">
  <button className="buttons hover2" >
  <img  className="img"src={book5} alt="Book Cover" />
  </button>
</a>

                </div>
                <div>
                <a href="goole.com" >
  <button className="buttons hover2" >
    <img  className="img"src={book6} alt="Book Cover" />
  </button>
</a>

                </div>
            </Carousel>
        </div>
    );
}