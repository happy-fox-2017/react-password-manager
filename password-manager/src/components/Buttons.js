import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../stylesheets/Button.css'

const Buttons = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <a href="#" className="btn btn-success"><span className="glyphicon glyphicon-plus-sign"></span> Add</a>
        </div>
      </div>
    </div>
  )
}

export default Buttons
