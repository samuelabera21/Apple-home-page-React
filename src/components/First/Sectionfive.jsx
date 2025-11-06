import React from 'react'
import appletv from '../../../apple-html-css-replica/images/icons/apple-tv-logo.png'
import servant from '../../../apple-html-css-replica/images/icons/servant-logo.png'

export default function Sectionfive() {
  return (
    <section className="fifth-heghlight-wrapper"> 
      <div className="left-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={appletv} alt="Apple TV Logo" />
          </div>
        </div>

        <div className="tvshow-logo-wrapper">
          <img src={servant} alt="Servant TV Show Logo" />
        </div>

        <div className="watch-more-wrapper">
          <a href="#">Watch the trailer</a>
        </div>
      </div>

      <div className="right-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            AirPods Pro
          </div>
        </div>

        <div className="description-wrapper">
          Magic like you’ve never heard.
        </div>

        <div className="links-wrapper">
          <ul>
            <li><a href="#">Learn more</a></li>
            <li><a href="#">Buy</a></li>
          </ul> 
        </div>
      </div>	
    </section>
  )
}
