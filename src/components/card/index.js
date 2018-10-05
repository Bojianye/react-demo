import React from 'react'
import {
    CardWarpper,
    Container,
    Name,
    Content
} from "./style";

const Card = (props) => {
    return (
        <CardWarpper>
            <Container>
                <img className='user-icon'
                     src={props.avatarUrl} alt=""/>
                <Name>{props.userName}</Name>
                <Content
                    dangerouslySetInnerHTML={{__html: props.content}}/>
                <img className='main-image' src={props.mainImageUrl} alt=""/>
            </Container>
        </CardWarpper>
    )
};

export default Card