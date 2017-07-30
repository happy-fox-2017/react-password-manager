import React, { Component } from 'react';

import { connect } from 'react-redux';
import {searchPasword,seedPassword} from '../actions'

class FormSearch extends Component {
  constructor(props){
    super(props)
    this.state={leng:0,
    value: 'url'}
  }

  render() {
    return (
      <div >
          <h1>Ini Halaman Form Search</h1>
      </div>
    );
  }
}


export default connect(null,mapDispatchToProps)(FormSearch);
