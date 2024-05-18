import React from 'react'

function Home() {
  return (
    <div className="container-homepage">
      <div className="topic">
        <h1 className="title">Support Medical & Healthcare</h1>
        <h4 className="details-topic">Is the web application designed to streamline the access and management of patient data for healthcare professionals.</h4>
      </div>
      <div className="about-us">
        <h1 className="about-title">About Us</h1>
        <h4 className="detail-about">The primary objective of Supmed is to gather and organize treatment data from both public and private healthcare institutions. By doing so, it empowers physicians with the ability to promptly and comprehensively treat patients, ensuring that they have access to vital information such as patient names, birthdays, and other standard details.</h4>
      </div>
      <div className="our-features">
        <div className="pic-features"></div>
        <div className="detail-features">
          <p className="details-inside">Secure Patient Identification -- Doctors can securely access patient data by entering the unique ID card number.</p>
          <p className="details-inside">Basic Patient Information -- View standard patient details, including name and birthday, for quick reference.</p>
          <p className="details-inside">Comprehensive Medical Data Access -- Gain access to a wealth of medical information, including CT scan results, X-rays, and detailed medical records.</p>
          <p className="details-inside">Efficient Data Retrieval -- Streamlined system for doctors to quickly retrieve the necessary patient information, enhancing overall efficiency.</p>
        </div>
      </div>
      <div className="our-team">
        <h1 className="title-team">Our Team</h1>
        <div className="name-each">
          <h2 className="roles">IT Support & Data Scientist</h2>
          <ul className='all-in-team'>
            <li className="name-member">Eexin</li>
            <li className="name-member">New</li>
            <li className="name-member">P_Tae</li>
            <li className="name-member">P_Guide</li>
          </ul>
          <h2 className="roles">IT Support & Data Scientist</h2>
          <ul className='all-in-team'>
            <li className="name-member">Gain</li>
            <li className="name-member">Tae</li>
            <li className="name-member">Nice</li>
            <li className="name-member">May</li>
            <li className="name-member">Kawpan</li>
            <li className="name-member">Ran</li>
            <li className="name-member">Tae-Tae</li>
          </ul>
          <h2 className="roles">IT Support & Data Scientist</h2>
          <ul className='all-in-team'>
            <li className="name-member">Haris</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home