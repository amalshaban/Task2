import React from 'react'
import chief from '../../assets/imgs/chief.png'
export default function AboutUs() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 right">
          <h1>About<br/>
          us</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen
             book. It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
             sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className='btn btn-warning'>CONTACT US</button>
        </div>
        <div className="col-lg-4 left position-relative">
          <img src={chief}/>
        </div>
      </div>
    </div>
  )
}
