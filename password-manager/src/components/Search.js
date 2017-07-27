import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../stylesheets/Search.css'

const Search = () => {
  return (
    <div className="row">
      <form action="" className="search-form">
        <div className="form-group has-feedback">
    		<label className="sr-only">Search</label>
    		<input type="text" className="form-control" name="search" id="search" placeholder="search" />
      		<span className="glyphicon glyphicon-search form-control-feedback"></span>
      	</div>
      </form>
    </div>
  )
}
export default Search
