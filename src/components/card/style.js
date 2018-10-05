import styled from 'styled-components'

export const CardWarpper = styled.div`
  background-color: white;
  width: 500px;
  display: inline-block;
  border: 1px solid #ccc;
  padding: 15px;
  text-align: left;
  margin: 20px 0;
`;

export const Container = styled.div`
  margin-left: 58px;
  .user-icon{
    float: left;
    margin-left: -58px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .main-image{
    margin-top: 10px;
    width: 100%;
    border-radius: 5px;
  }

`;

export const Name = styled.div`
    word-break: break-all;
    color: #14171a;
    font-size: 14px;
    font-weight: bold;
    line-height: 21px;
`

export const Content = styled.div`
  font-size: 15px;
  line-height: 20px;
  margin-top: 5px;
  color: black;
`


