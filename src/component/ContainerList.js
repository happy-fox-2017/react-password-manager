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
      <ListPassword
        data={this.props.data}
        fetching={this.props.fetching}
        fetched={this.props.fetched}
        error={this.props.error}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.passwordList.data,
    fetching: state.passwordList.fetching,
    fetched: state.passwordList.fetched,
    error: state.passwordList.error
  };
}

function mapDispatchToProps(dispatch) {
  return { getPassword: () => {dispatch(fetchPassword())} }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerList);
