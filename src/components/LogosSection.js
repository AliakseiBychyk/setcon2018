import React from 'react'
import LogoSlider from './LogoSlider'
import CompanyLogo from './CompanyLogo'
import companies from '../../assets/companies.json'

const LogosSection = () => {
  return (
    <section className="logos-section">
      <LogoSlider />
      <div className="logos-section__logos">        
        {companies.map(company => 
          <CompanyLogo
            key={company.name}
            {...company}
          />
        )}     
      </div>
    </section>
  )
}

export default LogosSection