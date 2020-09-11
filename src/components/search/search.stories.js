import React from 'react'
import Search from './index'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Search'
}

export const SearchField = () => (
  <Search handleSearch={
    action('pesquisando')
  }
  />
)
