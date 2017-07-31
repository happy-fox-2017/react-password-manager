import React from 'react'

export default class AddForm extends React.Component {
  _date_converter() {
    let d = new Date()
    let m_names = ["January", "February", "March",
    "April", "May", "June", "July", "Augustus", "Sepetember",
    "October", "November", "December"]
    let date = d.getDate()
    let month = m_names[d.getMonth()]
    let year = d.getFullYear()
    return `${date} ${month} ${year}`
  }

  _handleForm(e) {
    e.preventDefault()
    console.log(this.refs.url.value)
    let newPassword = {
      "url": this.refs.url.value,
      "username": this.refs.username.value,
      "password": this.refs.password.value,
      "created_at": this._date_converter(),
      "updated_at": null
    }
    console.log(newPassword)
    this.props.addPassword(newPassword)
    this.refs.url.value = ''
    this.refs.username.value = ''
    this.refs.password.value = ''
  }

  render() {
    return (
      <div className="box">
        <h2 className="subtitle">Password Form</h2>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">URL</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="url" ref="url" placeholder="Http://" />
                <span className="icon is-small is-left">
                  <i className="fa fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Username</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="text" ref="username" placeholder="Your username here.." />
                <span className="icon is-small is-left">
                  <i className="fa fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Password</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="password" ref="password" placeholder="Your password here.." />
                <span className="icon is-small is-left">
                  <i className="fa fa-unlock-alt"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <a onClick={(e) => this._handleForm(e)} className="button is-info">
              Submit
            </a>
          </p>
          <p className="control">
            <a className="button is-danger">
              Clear
            </a>
          </p>
        </div>
        <br />
      </div>
    )
  }
}
