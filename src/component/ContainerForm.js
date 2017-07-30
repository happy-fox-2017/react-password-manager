import React from 'react'
import { Link } from 'react-router-dom'

export const ContainerForm = ({ location }) => (
  <div className="home">
    Welcome to Github User Info
    <br />
    <Link to="github">
      <button className="btn-home">
        Get Started
      </button>
    </Link>
  </div>
)
