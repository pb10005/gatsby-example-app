import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/form'

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Form item="Financial" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
