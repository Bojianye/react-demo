import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Get} from '../../http'
import {
    HeaderWrapper

} from "./style";


class Header extends Component {
    render() {
        // Get('timeline', { userId: '123456', name: 'basil' })
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        return (
            <HeaderWrapper>TWITTER</HeaderWrapper>
        )
    }
}

export default Header