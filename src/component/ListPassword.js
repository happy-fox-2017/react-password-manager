import React from 'react'

export const ListPassword = (props) => {
  if(props.fetching === true) {
    return (
      <div>
        <p>Loading..</p>
        <p>Fetching Data..</p>
      </div>
    )
  } else if(props.fetching === false && props.error !== null) {
    return (
      <div>
        <p>Uh Oh..</p>
        <p>Error has occured..</p>
      </div>
    )
  } else {
    console.log(props, "Props");
    console.log(props.data, "Data");
    const passwords = props.data.map((element) => {
      return (
        <ul key={element.id}>
          <li>{element.url}</li>
          <li>{element.username}</li>
          <li>{element.password}</li>
        </ul>
      )
    })
    return (
      <div className="home">
        Welcome to Github User Info
        <br />
        <div>
          {passwords}
        </div>
      </div>
    )
  }
}
