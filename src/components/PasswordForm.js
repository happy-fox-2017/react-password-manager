import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class PasswordForm extends Component {

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {

    const title = (
      <h3>Password Form</h3>
    );

    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <Panel header={title}>
            <form className="form-horizontal" action="/action_page.php">
             <div className="form-group">
               <label className="control-label col-sm-2" htmlFor="url">URL:</label>
               <div className="col-sm-10">
                 <input type="text" className="form-control" id="url" placeholder="Enter URL" name="url" />
               </div>
             </div>
             <div className="form-group">
               <label className="control-label col-sm-2" htmlFor="username">Username:</label>
               <div className="col-sm-10">
                 <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" />
               </div>
             </div>
             <div className="form-group">
               <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
               <div className="col-sm-10">
                 <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
               </div>
             </div>
             <div className="form-group">
               <div className="col-sm-offset-2 col-sm-10">
                 <button type="submit" className="btn btn-default">Save</button>
               </div>
             </div>
           </form>
          </Panel>
        </div>
      </div>
    );
  }

}

export default PasswordForm;
