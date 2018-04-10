import React, { Fragment } from 'react'
import companies from '../../assets/companies.json'
import { Carousel } from 'react-responsive-carousel'
import CompanyLogo from './CompanyLogo'

const LogoSlider = () => {
  const settings = {
    autoPlay: true,
    showThumbs: false,
    showIndicators: false,
    showStatus: false,
    infiniteLoop: true,
    selectedItem: Math.floor(Math.random() * 6)  
  };
  
  return (
    <Carousel className="logo-slider" {...settings} >   
      {companies.map(company => 
        <div
          className="logo-slider__logo-container"
          key={company.name}
          >
          <CompanyLogo
            {...company}
          />
        </div>  
      )}
    </Carousel>
  )
}

export default LogoSlider