import React from 'react'
import { Link } from 'react-router-dom'

export const NoMatch = ({ location }) => (
  <div className="home">
    <h2>404</h2>
    <h3>Uh oh, there is nothing here..</h3>
    <Link to="/">
      <button className="btn-home">
        Back to Home
      </button>
    </Link>
  </div>
)
