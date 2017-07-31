import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { addPassword } from '../actions/passwordActions'
import AddForm from './AddForm'

class ContainerAdd extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Add New Password</h1>
        <div className="container">
          <div className="tabs is-boxed">
            <ul>
              <li>
                <Link to="/">
                  <span className="icon is-small"><i className="fa fa-unlock-alt"></i></span>
                  <span>Password List</span>
                </Link>
              </li>
              <li className="is-active">
                <a>
                  <span className="icon is-small"><i className="fa fa-plus"></i></span>
                  <span>Add New Password</span>
                </a>
              </li>
            </ul>
          </div>
          <AddForm addPassword={this.props.addPassword}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPassword: (newPassword) => dispatch(addPassword(newPassword))
  }
}

export default connect(null, mapDispatchToProps)(ContainerAdd)
