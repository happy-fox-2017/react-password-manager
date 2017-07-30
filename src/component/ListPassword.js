import React from 'react'

export const ListPassword = (props) => {
  if(props.fetching === true) {
    return (
      <tr>
        <th>
        </th>
        <td>
        </td>
        <td>
          Loading..
        </td>
        <td>
          Fetching Data..
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
    )
  } else if(props.fetching === false && props.error !== null) {
    return (
      <tr>
        <th>
        </th>
        <td>
        </td>
        <td>
          Uh Oh..
        </td>
        <td>
          Error has occured..
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
    )
  } else {
    console.log(props, "Props");
    console.log(props.data, "Data");
    const passwords = props.data.map((element, index) => {
      return (
        <tr>
          <th key={element.id}>
            {index + 1}
          </th>
          <td>
            {element.url}
          </td>
          <td>
            {element.username}
          </td>
          <td>
            {element.password}
          </td>
          <td><a className="button is-primary is-outlined">Edit</a></td>
          <td><a className="button is-danger is-outlined">Delete</a></td>
        </tr>
      )
    })
    return (
      <tbody>
        {passwords}
      </tbody>
    )
  }
}
