import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Perceptiv Digital Website</title>
        <meta property="og:title" content="Perceptiv Digital Website" />
      </Helmet>
      <Header></Header>
      <section className="home-container1">
        <div className="home-container2 background-overlay"></div>
        <div className="home-container3">
          <span className="home-text">
            <span>
              Get more traffic, acquire more
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>customers, sell more.</span>
          </span>
          <span className="home-text4">
            We help eCommerce brands outsmart their competition
          </span>
          <button className="home-button button uppercase">
            i want to increase my revenue
          </button>
          <span className="home-text5">
            Not sure what&apos;s working or just not growing fast enough?
            Contact us.
          </span>
        </div>
      </section>
    </div>
  )
}

export default Home
