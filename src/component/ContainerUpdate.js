import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updatePassword } from '../actions/passwordActions'
import UpdateForm from './UpdateForm'

class ContainerForm extends React.Component {
  render() {
    let param = Number(this.props.match.params.id)
    let tempPassword = this.props.data.find( element => element.id === param)
    return (
      <div className="container">
        <h1 className="title">Update Password</h1>
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
                  <span className="icon is-small"><i className="fa fa-pencil-square-o"></i></span>
                  <span>Update Password</span>
                </a>
              </li>
            </ul>
          </div>
          <UpdateForm updatePassword={this.props.updatePassword} tempPassword={tempPassword}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.passwordList.data,
    fetching: state.passwordList.fetching,
    fetched: state.passwordList.fetched,
    error: state.passwordList.error,
    message: state.passwordList.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePassword: (id, newPassword) => dispatch(updatePassword(id, newPassword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerForm)
