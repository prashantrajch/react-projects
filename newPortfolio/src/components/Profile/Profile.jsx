import React from 'react'

function Profile() {
  return (
    <div className='px-8 py-10 bg-white rounded-md text-center w-[400px]'>
      <div className="personal-info-img w-[240px] h-[240px] rounded-[20px] overflow-hidden -mt-[180px] mx-[50px] mb-[21px]  ">
        <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" width={'100%'} height={'100%'} />
      </div>
      <h4 className="personal-info-name">Prashant Raj</h4>
      <span className="personal-info-bio">Web Develober</span>
      <ul className="personal-info-social-link w-[230px] px-[7.5px] mb-[30px] mx-auto ">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="personal-info-contact">

      </div>
      <div className="personal-info-btn">

      </div>
      </div>
  )
}

export default Profile