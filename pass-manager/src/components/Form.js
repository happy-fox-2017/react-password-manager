import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'

import { postPassword } from '../actions'


const SimpleForm = props => {
  const { handleSubmit } =  props
  return (
    <form onSubmit={(x, e) => {reset('simple'),handleSubmit(e)}}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="username"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="password"
          />
        </div>
      </div>
      <div>
        <label>Url</label>
        <div>
          <Field
            name="url"
            component="input"
            type="email"
            placeholder="Url"
          />
        </div>
      </div>

      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (e) => dispatch(postPassword(e)),
    hapus: (x) => dispatch(reset(x))
  }
}

const mapStateToProps = state => {
  return {
    form: state.form
  }
}

const exampleForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SimpleForm);

export default reduxForm({
  form: 'simple'
})(exampleForm)