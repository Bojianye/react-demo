import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card from '../../components/card'
import {actionCreaters} from './store'
import {Link} from 'react-router-dom'
import {HomeWrapper} from './style'

class Home extends PureComponent {
    render() {
        const {cardList} = this.props;
        return (
            <HomeWrapper>
                {
                    cardList.map((item, index) => (
                        <Link key={index} to={'/detail/' + item.get('id_str')}>
                            <Card
                                avatarUrl={item.getIn(['user', 'profile_image_url_https'])}
                                mainImageUrl={item.getIn(['entities', 'urls', 1, 'display_url'])}
                                userName={item.getIn(['user', 'name'])}
                                content={item.get('text')}
                            />
                        </Link>
                    ))}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeCardList()
    }
}

const mapState = (state) => ({
    cardList: state.getIn(['home', 'cardList'])
});


const mapDispatch = (dispatch) => ({
    changeCardList() {
        const action = actionCreaters.refreshCardList();
        dispatch(action)
    }
});

export default connect(mapState, mapDispatch)(Home)