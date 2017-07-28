import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../stylesheets/home.css'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import Search from './Search'
import Buttons from './Buttons'
import store from '../stores'
import { PasswordGetter, DeleteListPassword } from '../actions'
import loading from '../loading.png'

class Home extends Component {
  componentDidMount() {
    this.props.GetPasswordList()
    console.log('ada ga nih: ', this.props.GetPasswordList());
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>PASSWORD MANAGER DASHBOARD</h1>
          <div className="container">
            <h2>Password List</h2>
            <hr/>
            <div className="row">
              <div className="col-md-4">
                <Buttons></Buttons>
              </div>
              <div className="col-md-4 col-md-offset-4">
                <Search></Search>
              </div>
            </div>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>URL</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>CraetedAt</th>
                  <th>UpdatedAt</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>

              {
                this.props.dataPass === ""
                ?
                "wait.."
                :
                this.props.dataPass === "wait"
                ?
                <div>
                  <img src={loading} className="App-logo" alt="logo"

                  />
                </div>
                :
                this.props.dataPass.map((listPassword, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><a href={listPassword.url}>{listPassword.url}</a></td>
                      <td>{listPassword.username}</td>
                      <td>{listPassword.password}</td>
                      <td>{listPassword.created}</td>
                      <td>{listPassword.updated}</td>
                      <td className="tdButton"><button className="btn btn-primary edit"><span className="glyphicon glyphicon-pencil"></span> Edit</button></td>
                      <td className="tdButton"><button onClick={(id) => this.props.hapusListPassword(listPassword.id) } className="btn btn-danger-delete"><span className="glyphicon glyphicon-trash"></span> Delete</button></td>
                    </tr>


                  )
                })
              }
              </tbody>

            </table>
          </div>
        </div>
      </Provider>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('ini map : ', state);
  return {
    dataPass: state.getStorePassword.StorePassword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetPasswordList: () => dispatch(PasswordGetter()),
    hapusListPassword: (id) => dispatch(DeleteListPassword(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
