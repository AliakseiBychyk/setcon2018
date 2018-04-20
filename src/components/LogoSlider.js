import React, { Fragment, Component } from 'react'
import { withGetScreen } from 'react-getscreen'
import { Carousel } from 'react-responsive-carousel'
import CompanyLogo from './CompanyLogo'
import companies from '../../assets/companies.json'

class LogoSlider extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isMobile() !== prevState.isMobile || nextProps.isTablet() !== prevState.isTablet) {
      return {
        isMobile: nextProps.isMobile(),
        isTablet: nextProps.isTablet()
      }
    }  
  }

  state = {
    isMobile: this.props.isMobile(),
    isTablet: this.props.isTablet()
  }

  settings = {
    autoPlay: true,
    showThumbs: false,
    showIndicators: false,
    showStatus: false,
    infiniteLoop: true,
    selectedItem: Math.floor(Math.random() * 6)  
  }
 
  render() {
    return (
      <Carousel className="logo-slider" {...this.settings}>
        {companies.map((company, i) => {
          const second = i !== (companies.length - 1)
            ? i + 1
            : 0
          return (<Fragment key={company.name}>
          
            <CompanyLogo {...company} />
          
            {this.state.isTablet &&
              <Fragment>
                <span style={{ margin: '10vh' }} />
                <CompanyLogo {...companies[second]} />
              </Fragment>
            }
            
          </Fragment>)
        }
        )}
      </Carousel>
    )
  }
}

const options = {mobileLimit: 600, tabletLimit: 1280}
export default withGetScreen(LogoSlider, options)
