import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {postPasswordManagerAsync as postPm,  putPasswordManagerAsync as putPm} from "../actions"

class AddPassword extends React.Component {
  constructor(){
    super()
    this.state = {
      newPassword: {
        url: "",
        username: "",
        password: ""
      }, 
      detailPassword: {
        url: "",
        username: "",
        password: ""
      }
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
  
  dataShow(){
    if(this.props.act === "update"){
      document.getElementById('url').value = this.props.detailPm.url
      document.getElementById('username').value = this.props.detailPm.username
      document.getElementById('password').value =this.props.detailPm.password 
    } else if(this.props.act === "add") {
      this.clearInput()
    }
  }
  
  componentWillUpdate () {
    this.dataShow()
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
                <button className="button is-primary" style={{margin : "0px 19px 0px 4px"}} onClick={() => (this.props.act === "add") ? this.props.postPm(this.state) : this.props.putPm(this.props.detailPm.id,this.state) }>Submit</button>
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
    postPm: (data) => dispatch(postPm(data)),
    putPm: (id, data) => dispatch(putPm(id, data))
  }
}

const mapStateToProps = (state) => {
  console.log('ini nih: ',state.passwordManager.password_detail.url);
  return {
    detailPm: state.passwordManager.password_detail,
    act: state.passwordManager.action_password_manager.action
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPassword);