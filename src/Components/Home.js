import React, { Component , Fragment} from 'react'
import Banner from './HomeComponents/Banner'
import ItemList from './HomeComponents/ItemList'

export default class HomeComponents extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <ItemList />
            </Fragment>
        )
    }
}