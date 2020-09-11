import React from 'react'
import PropTypes from 'prop-types'
import './search.css'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input
      type='text' type='search'
      placeholder='Digite o nome do usuário do GitHub'
      onKeyUp={handleSearch}
      disabled={isDisabled}
    />
  </div>
)
Search.defaultProps = {
  isDisabled: false
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
