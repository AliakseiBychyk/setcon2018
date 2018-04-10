import React from 'react'

const CompanyLogo = ({ name, className, url, logo }) => {
  const companyLogo = logo ? require('../img/' + logo) : ''

  return (  
    <a href={url} target="_blank">
      <img
        src={companyLogo}
        alt={name}
        className={className}
      /> 
    </a>
  )
}

export default CompanyLogo