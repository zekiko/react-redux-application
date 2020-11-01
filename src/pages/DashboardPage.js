import React from 'react'
import { Link } from 'react-router-dom'
import XContainer from '../containers/xContainer'

const DashboardPage = () => (
  <section>
    <h1>Dashboard</h1>
    <p>This is the dashboard.</p>
    <Link to="/posts" className="button">
      View Posts
    </Link>
    <XContainer />
  </section>
)

export default DashboardPage
