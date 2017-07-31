import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPassword, deletePassword } from '../actions/passwordActions'
import { ListPassword } from './ListPassword'

class ContainerList extends React.Component {
  componentDidMount() {
    this.props.getPassword()
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">React Password Manager List</h1>
        <div className="container">
          <div className="tabs is-boxed">
            <ul>
              <li className="is-active">
                <a>
                  <span className="icon is-small"><i className="fa fa-unlock-alt"></i></span>
                  <span>Password List</span>
                </a>
              </li>
              <li>
                <Link to="/form">
                  <span className="icon is-small"><i className="fa fa-plus"></i></span>
                  <span>Add New Password</span>
                </Link>
              </li>
            </ul>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>URL</th>
                <th>Username</th>
                <th>Password</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <ListPassword
              data={this.props.data}
              fetching={this.props.fetching}
              fetched={this.props.fetched}
              error={this.props.error}
              message={this.props.message}
              deletePassword={this.props.deletePassword}
            />
          </table>
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
    getPassword: () => dispatch(fetchPassword()),
    deletePassword: (id) => dispatch(deletePassword(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerList)
