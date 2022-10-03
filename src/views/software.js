import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './software.css'

const Software = (props) => {
  return (
    <div className="software-container">
      <Helmet>
        <title>Software - Perceptiv Digital Website</title>
        <meta
          property="og:title"
          content="Software - Perceptiv Digital Website"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
    </div>
  )
}

export default Software
