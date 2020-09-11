import React from 'react'
import UserInfo from './index'

export default {
  title: 'User Info'
}

export const UserInformation = () => (
  <UserInfo userinfo={
    {
      photo: 'https://avatars0.githubusercontent.com/u/29073073?v=4',
      login: 'joaoplay16',
      username: 'João Pedro',
      followers: 323020,
      following: 32,
      repos: 20
    }
  }
  />
)
