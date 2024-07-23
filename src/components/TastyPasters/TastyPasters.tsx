import React from 'react'
import './TastyPasters.modules.css'
import w from '../../assets/imgs/bx_bxl-vk.png'
import f from '../../assets/imgs/brandico_facebook-rect.png'
import i from '../../assets/imgs/bx_bxl-instagram-alt.png'
import t from '../../assets/imgs/ant-design_twitter-outlined.png'
import bread from '../../assets/imgs/bread.png'

export default function TastyPasters() {
  return (
    <div className='container-fluid position-relative'>
      <div className="row vh-100">
          
  <div className="col-lg-8 tasty-left">

  <span className='ms-5'>PEACHY PUP<br /></span><span className='ms-5'>BAKERY</span>
  <h1 className='pt-5 pb-1 ms-5'>Tasty pastries</h1>
  <p className='ms-5'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/>industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the</p>
    <button className='btn btn-warning ms-5 mb-5'>SEE MORE</button>
  </div>
  <div className="col-lg-4 tasty-right"> 
  
  <img className='fixedImg' src={bread}/>
  </div>
  <div className='row socialAndTel'>
        <div className="col-lg-2 social">
          <img src={w}/><br/>
          <img src={f}/><br/>
          <img src={i}/><br/>
          <img src={t}/><br/>
        </div>
        <div className="col-lg-3 mt-5 text-white fs-5">
          <p>Telephone: +7 700 000 00 00</p>
        </div>
      </div>
      </div>
     
    </div>
  )
}
