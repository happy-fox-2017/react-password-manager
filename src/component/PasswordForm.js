import React from 'react'

export default class PasswordForm extends React.Component {
  _handleForm(e) {
    e.preventDefault()
    let newPassword = {
      "username": this.refs.username.value,
      "created_at": new Date(),
      "updated_at": null
    }
    this.props.addPassword(newPassword)
    this.refs.username.value = ''
  }

  render() {
    return (
      <form onSubmit={this._handleForm.bind(this)}>
        <label><input type="search" ref="username" placeholder="Type Username + Enter"/></label>
      </form>
    )
  }
}
