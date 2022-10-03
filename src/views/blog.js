import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Perceptiv Digital Website</title>
        <meta property="og:title" content="Blog - Perceptiv Digital Website" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
    </div>
  )
}

export default Blog
