import React from 'react';
import {Link} from 'react-router-dom';

class Mainmenu extends React.Component {
  date_converter (Tanggal){    
    var d = new Date(Tanggal);
    var m_names = new Array("January", "February", "March", 
    "April", "May", "June", "July", "Augustus", "Sepetember", 
    "October", "November", "December");
    var date = d.getDate();
    var month = m_names[d.getMonth()];
    var year = d.getFullYear();
    return `${date} ${month} ${year}`;
  }
  
  render() {
    return (
      <div className="container">
        <div className="column is-12" style={{textAlign:"center"}}>
          <h1 className="title is-10">Welcome To Main Menu </h1>
        </div>
        <div className="column is-12">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="text" placeholder="Find your Url"/>
            </div>
            <div className="control">
              <a className="button is-info">
                Search
              </a>
            </div>
          </div>
        </div>
        <div className="column is-12">
          <table className="table">
            <thead>
              <tr>
                <th>Number</th>
                <th>URL</th>
                <th>Username</th>
                <th>Password</th>
                <th>CreatedAt</th>
                <th>UpdatedAt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><a href="https:www.google.com" title="Google">www.google.com</a></td>
                <td>Angga</td>
                <td>1234456</td>
                <td>{this.date_converter(new Date())}</td>
                <td>{this.date_converter(new Date())}</td>
              </tr>
            </tbody>
          </table>
          <div className="block">
            <Link to="/"> <button className="button is-danger" 
              style={{margin:"0px 10px"}}> Back </button> </Link>
            <Link to="/addpassword"><button className="button is-warning">Add Password</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Mainmenu;