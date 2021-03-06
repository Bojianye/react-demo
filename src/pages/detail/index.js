import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import {actionCreaters} from './store';
import {ContentWarpper, Container, CardWarpper, Content, Name, CreateDate} from "./style";

class Detail extends PureComponent {
    render() {
        return (
            <ContentWarpper>
                <CardWarpper>
                    <Container>
                        <img className='user-icon'
                             src={this.props.avatarUrl} alt=""/>
                        <Name>{this.props.userName}</Name>
                        <Content
                            dangerouslySetInnerHTML={{__html: this.props.text}}/>
                        <img className='main-image' src={this.props.mainImageUrl} alt=""/>
                        <CreateDate>
                            {this.props.createDate}
                        </CreateDate>
                    </Container>
                </CardWarpper>
            </ContentWarpper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.removed()
    }

}

const mapState = (state) => ({
    avatarUrl: state.getIn(['detail', 'avatarUrl']),
    userName: state.getIn(['detail', 'userName']),
    mainImageUrl: state.getIn(['detail', 'mainImageUrl']),
    text: state.getIn(['detail', 'text']),
    createDate: state.getIn(['detail', 'createDate'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreaters.getDetail(id));
    },
    removed(){
      dispatch(actionCreaters.removedData())
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));