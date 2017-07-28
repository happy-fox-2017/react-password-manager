import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="columns" style={{width: "100%", margin: "0"}}>
          <div className="column is-6 is-offset-one-quarter" style={{textAlign: "center"}}>
            <div style={{margin:"150px 20px 0px 20px"}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8dKqwIBVmRqmm86TDEb6jxbS0Hb0316aoUvZckHNkxM-GeGw" style={{width:"200px"}}/>
              <h1 className="title is-10">Welcome To Password Manager Hacktiv8 </h1>
                 <Link to="/mainmenu"><button className="button is-success">Find Your Password</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;