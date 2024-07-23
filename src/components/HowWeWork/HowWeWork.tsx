import React from 'react'
import './HowWeWork.modules.css'
import pic1 from '../../../src/assets/imgs/pics/1.png'
import pic2 from '../../../src/assets/imgs/pics/2.png'
import pic3 from '../../../src/assets/imgs/pics/3.png'
import pic4 from '../../../src/assets/imgs/pics/4.png'

export default function HowWeWork() {
  return (
      <div className="container-fluid vh-100">
        <div className="row vh-100">
          <div className="col-lg-4 left ps-5">
              <p className='p-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the</p>
               
          </div>
          <div className="col-lg-8 right position-relative">
              <h1 className=''>How we<br/>
              work</h1>
              <div className="pics float-lg-start">
                  <img src={pic1}/>
                  <img src={pic2}/>
                  <img src={pic3}/>
                  <img src={pic4}/>
                </div>
                <button className='btn btn-warning'>CONTACT US</button>
          </div>
        </div>

      </div>
  )
}
