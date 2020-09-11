import React from 'react'
import Pagination from './index'

export default {
    title: 'Pagination'
}  

export const withoutProps = () => (
    <Pagination />
)

export const withTotalAndActivePage = () => (
    <Pagination total={10} activePage={5}/>
)

export const withPageLink = () => (
    <Pagination total={3} activePage={1} pageLink={'http://mypage.com/page/%page%'}/>
)

export const withCallback = () => (
    <Pagination total={15} activePage={7} pageLink={'http://mypage.com/page/%page%'}
    onClick={(page)=>{window.alert(page)}}/>
)


