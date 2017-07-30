import React from 'react'
import { connect } from 'react-redux'

import { fetchPassword } from '../actions/passwordActions'
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
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>URL</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <ListPassword
              data={this.props.data}
              fetching={this.props.fetching}
              fetched={this.props.fetched}
              error={this.props.error}
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
    error: state.passwordList.error
  };
}

const mapDispatchToProps = (dispatch) => {
  return { getPassword: () => {dispatch(fetchPassword())} }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerList);
