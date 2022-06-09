import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    text-align: left;
    max-height: 80px;
    overflow: hidden;
    background: rgba(18, 24, 41, 0.8);
    backdrop-filter: blur(40px);
    color: #A8AEBF;
`

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: inline-block;
`

export const Item = styled.li`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: inline-block;
`

export const Link = styled.a`
    font-family: 'Poppins', sans-serif;
    color: #A8AEBF;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: block;
    padding: 20px;
    text-decoration: none;
`