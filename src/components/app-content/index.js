import Actions from 'components/actions'
import Repos from 'components/repos'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import PropTypes from 'prop-types'
import React from 'react'
import './app.css'

const AppContent = ({
  userinfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
  isFetching,
  handlePagination
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando.........</div>}
    {/* Para converter suas variáveis ​​JavaScript em booleanas, 
        basta usar dois sinais de exclamação: */}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions
      getRepos={(getRepos)} getStarred={getStarred}
    />}

    {!!repos.repos.length && <Repos
      className='repos'
      title='Repositórios:'
      repos={repos}
      handlePagination={(clicked) => handlePagination('repos', clicked)}
    />}

    {!!starred.repos.length && <Repos
      className='starred'
      title='Favoritos:'
      repos={starred}
      handlePagination={(clicked)=>handlePagination('starred', clicked)}
    />}
  </div>
)

const reposPropTypesShape = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object
}

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.shape(reposPropTypesShape).isRequired,
  starred: PropTypes.shape(reposPropTypesShape).isRequired,
  isFetching: PropTypes.bool.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,
}

export default AppContent
