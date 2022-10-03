import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './team.css'

const Team = (props) => {
  return (
    <div className="team-container">
      <Helmet>
        <title>Team - Perceptiv Digital Website</title>
        <meta property="og:title" content="Team - Perceptiv Digital Website" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
    </div>
  )
}

export default Team
