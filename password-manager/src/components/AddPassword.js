import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux'
import '../stylesheets/AddPassword.css'
import { fetchPasswordAsync } from '../actions'
import {
  Link
} from 'react-router-dom'

class AddPassword extends Component {
  constructor() {
    super()
    this.state = {
      newListPassword: {
        url: 'default',
        username: 'default',
        password: 'default',
        created: '',
        updated: ''
      }
    }
  }
  render() {
    return (
      <div className="container">
      	<div className="row">
    	    <div className="col-md-6 col-md-offset-3">
        		<h1>Create post</h1>
      		    <div className="form-group has-error">
      		        <label>URL <span className="require">*</span></label>
      		        <input onChange={(e) => this.formChange(e)} value={this.state.url} type="text" className="form-control" name="url" />
      		    </div>

      		    <div className="form-group">
      		        <label>Username <span className="require">*</span></label>
      		        <input onChange={(e) => this.formChange(e)} value={this.state.username} type="text" className="form-control" name="username" />
      		    </div>

      		    <div className="form-group">
      		        <label>Password <span className="require">*</span></label>
      		        <input onChange={(e) => this.formChange(e)} value={this.state.password} type="password" className="form-control" name="password" />
      		    </div>

      		    <div className="form-group">
      		        <p><span className="require">*</span> - required fields</p>
      		    </div>

      		    <div className="form-group">
    		        <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => this.props.tambahListPassword(this.state.newListPassword)}
                >
    		            Create
    		        </button>
                <Link to="/home">
      		        <button
                    type="submit"
                    className="btn btn-primary"
                  >
      		            Back
      		        </button>
                </Link>
      		    </div>
      		</div>
      	</div>
      </div>
    )
  }

  formChange (e) {
    let newState = {}
    switch (e.target.name) {
      case 'url':
        newState = {...this.state.newListPassword, url: e.target.value}
        this.setState({newListPassword: newState})
        break
      case 'username':
        newState = {...this.state.newListPassword, username: e.target.value}
        this.setState({newListPassword: newState})
        break
      case 'password':
        newState = {...this.state.newListPassword, password: e.target.value}
        this.setState({newListPassword: newState})
        break
      default:
        console.log('Event target miss')
    }
  }
}

// store = store.getState()

const mapDispatchToProps = (dispatch) => {
  return {
    tambahListPassword: (newPassword) => dispatch(fetchPasswordAsync(newPassword))
  }
}

const mapStateToProps = (state) => {
  return  {
    currentPassword: state.StoreAddPassword
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPassword)
