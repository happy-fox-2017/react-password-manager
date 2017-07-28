import React from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import '../stylesheets/Search.css'
import loading from '../loading.png'

import { getSearchByURL } from '../actions'

const Search = (props) => {
  return (
    <div className="row">
      <form action="" className="search-form">
        <div className="form-group has-feedback">
    		<label className="sr-only">Search</label>
          {
            props.dataPass === "wait"
            ?
            <img src={loading} className="App-logo" alt="logo"/>
            :
            props.dataPass.url.filter(x => {
              <input type="text" className="form-control" name="search" id="search" placeholder="search" />
            })
          }
      		<span className="glyphicon glyphicon-search form-control-feedback"></span>
      	</div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('my state in search: ', state.getStorePassword.StoreAddPassword);
  return {
    dataPass: state.getStorePassword.StoreAddPassword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchByURL: (SearchByName) => dispatch(getSearchByURL())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
