import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {postPasswordManagerAsync as postPm} from "../actions"

class AddPassword extends React.Component {
  constructor(){
    super()
    this.state = {
      url: "",
      username: "",
      password: ""
    }
  }
  changeInput(event){
    this.setState({[event.target.name]: event.target.value})
  }
  
  clearInput(){
    this.setState({...this.state, url : "", username: "", password: ""})
    document.getElementById('url').value = ""
    document.getElementById('username').value = ""
    document.getElementById('password').value = ""
  }
  
  render () {
    let data = this.state
    return(
      <div>
        <div style= {{margin:"10px 0px 0px 100px"}} className="container">
          <div className="column is-12" >
            <img style= {{margin:"0px 0px 0px 39%", width:"20%"}} alt="http://www.bozico.com/image-data/480-576/www.bozico.comCh%E1%BB%8Dn%20h%C3%ACnh%20l%E1%BB%9Bn%20c%E1%BB%A7a%20s%E1%BA%A3n%20ph%E1%BA%A9m..." src="https://www.shareicon.net/download/2016/10/05/838433_locked_512x512.png"/>
            <h1 style={{textAlign:"center"}} className="title is-12" >Add Your Password Here </h1>
          </div>
          <div className="column is-half is-offset-one-quarter">
            <div className="field">
              <label className="label">Url</label>
              <div className="control">
                <input className="input" type="text" placeholder="Url input" id="url" name="url" value={this.state.Url} onChange={e => {this.changeInput(e)}}/>
              </div>
            </div>
            <label className="label">Username</label>
            <div className="control">
              <input className="input" type="text" name="username" id="username" value={this.state.Username} onChange={e => {this.changeInput(e)}} placeholder="Username input"/>
            </div>
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" id="password" name="password" value={this.state.Password} onChange={e => {this.changeInput(e)}} placeholder="Password input"/>
            </div>
            <div style={{margin: "40px 0px 0px 160px"}}>
              <Link to= "/mainmenu">
                <button className="button is-info" style={{margin : "0px 19px 0px -36px"}}>Back</button>
                <button className="button is-primary" style={{margin : "0px 19px 0px 4px"}} onClick={() => this.props.postPm(this.state)}>Submit</button>
              </Link>
              <button className="button is-danger" onClick={() => this.clearInput()}>Reset</button>
            </div>
          </div>
        </div>
      </div>  
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postPm: (data) => dispatch(postPm(data))
  }
}

export default connect(null,mapDispatchToProps)(AddPassword);