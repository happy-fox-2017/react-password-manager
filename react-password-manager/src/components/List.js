import React, { Component } from 'react'

class List extends Component {

  render () {
    return (
      <div>
        {this.props.passList.map((pass) => {
          return <tr>
            <td>{pass.url}</td>
            <td>{pass.username}</td>
            <td>{pass.password}</td>
            <td>{pass.createdAt}</td>
            <td>{pass.UpdatedAt}</td>
          </tr>
        })}
      </div>
    )
  }
}

export default List
