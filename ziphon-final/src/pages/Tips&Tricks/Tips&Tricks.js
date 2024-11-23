
import React from 'react';
import './TipsPageStyles.css';
import CarouselComponent from "../../components/Book-Carousel/Book-Carousel";
import FooterS from '../../components/footer/footer';
import QandA from '../../components/Q&A/QandA';




function Tips() {
    return (
<div classname="tips">
  <div className="tipscontainer">
    <div className="tips-text">
      <p>Tips & Tricks</p>
        <div className="monitor-wrapper">
          <div className="monitor">
            <div className="turn">
              <ul className="flip5">
                <li className='text-box'>Prepare</li>
                <li className='text-box'>Turn-Off</li>
                <li className='text-box'>Save</li>
                <li className='text-box'>Smart</li>
                <li className='text-box'>Improve</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
 
  
<div className='text-title'>
<p>Helpful-Books</p>
<CarouselComponent/>
</div>

<div>
<QandA/>
</div>

  <div>
  <FooterS/>
  </div>
</div>

    );
  };


  export default Tips;
