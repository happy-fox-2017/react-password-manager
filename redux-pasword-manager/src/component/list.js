import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux'
import tgl from 'tgl'
import FlatButton from 'material-ui/FlatButton';

import { reset,seedpassword,addpassword,deletepassword,seturl,setusername,setpassword,setid,setindex,setcreated } from '../actions'

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      obj:{}
    };
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose1}
        backgroundColor='#00BCD4' hoverColor='#80DEEA' labelStyle={{color:'#ffffff'}}
        style={{marginRight:5}}
      />,
      <FlatButton
        label="Delete"
        onTouchTap={this.handleClose2}
        backgroundColor='#00BCD4' hoverColor='#80DEEA' labelStyle={{color:'#ffffff'}}
      />,
    ];
    return (
        <div style={{border:'2px solid #00BCD4'}}>
        <h1>Ini List</h1>
        </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(List);
