import React from 'react'
import {connect} from 'react-redux'

const AllPasses = props => {
  // debugger
  // const {getAll} = props
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>URL</th>
          <th>Username</th>
          <th>Created at</th>
          <th>Updated at</th>
        </tr>
      </thead>
      <tbody>
      {
        (props.getAll === []) ? console.log(props.getAll) : props.getAll.map(d => {
        return (
          <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.url}</td>
            <td>{d.username}</td>
            <td>{d.created_at}</td>
            <td>{d.updated_at}</td>
          </tr>
        )
      })
    }
    </tbody>
    </table>
  )
}

const mapStateToProps = state => {
  return {getAll: state.getPass.passManager}
}

export default connect(mapStateToProps, null)(AllPasses)