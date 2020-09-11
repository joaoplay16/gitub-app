import React, { Component } from 'react'

import AppContent from 'components/app-content'
import ajax from '@fdaciuk/ajax'
// import axios from 'axios'

const initialReposState = {
  repos: [],
  pagination: {
    total: 1,
    activePage: 1
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: initialReposState,
      starred: initialReposState,
      isFetching: false
    }
    this.perPage = 3
  }

  getGitHubApiUrl(username = '', type = '', page = 1) {
    return `https://api.github.com/users${username}${type}?per_page=${this.perPage}&page=${page}`
  }

  getRepos(type, page) {
    return (e) => {
      const usuario = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(`/${usuario}`, `/${type}`, page))
        .then((result, xhr) => {
          const linkHeader = xhr.getResponseHeader('Link') || ''
          const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last"/)
         
          this.setState({
            [type]: {
              repos: result.map((repo) => ({
                name: repo.name,
                link: repo.html_url
              })),
              pagination: {
                total: totalPagesMatch ? +totalPagesMatch[1] : this.state[type].pagination.total,
                activePage: page
              }
            }
          })
        })
    }
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({
        isFetching: true
      })
      ajax().get(this.getGitHubApiUrl(`/${value}`))
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              login: result.login,
              photo: result.avatar_url,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: initialReposState,
            starred: initialReposState
          })
        }).always(() => {
          this.setState({
            isFetching: false
          })
        })
    }
  }

  render() {
    return (
      <AppContent
        {...this.state}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
        handlePagination={(type, page) =>
          this.getRepos(type, page)()
        }
      />
    )
  }
}

export default App
