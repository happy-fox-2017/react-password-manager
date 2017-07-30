import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPassword,setUrl,setUsername,setPassword,setId,reset,updatePassword } from '../actions'

class Form extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        backgroundColor='#00BCD4' hoverColor='#80DEEA' labelStyle={{color:'#ffffff'}}
      />
    ];
    return (
      <div className="col-3 menu" >
          <h1>Ini Halaman Form</h1>
      </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Form);
