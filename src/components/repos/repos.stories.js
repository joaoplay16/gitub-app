import React from 'react'
import Repos from './index'

export default {
  title: 'Repos'
}

export const withTitle = () => (
  <Repos title='Favoritos' />
)

export const withRepos = () => (
  <Repos
    title='Favoritos'
    repos={[{
      link: 'http://subarashi.herokuapp.com',
      name: 'Subarashi'
    }]}
  />
)

Repos.story = {
  name: 'with title prop'
}
