import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Form = ({ item }) => (
  <div>
    <p>{item}</p>
    <div class="form">
      <input type="text" />
    </div>
  </div>
)

export default Form

Form.propTypes = {
  item: String,
}

Form.defaultProps = {
  item: 'Calendar',
}
