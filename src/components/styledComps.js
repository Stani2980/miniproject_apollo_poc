import styled from 'styled-components';

const Form = styled.form`

`
const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: cyan;
    background: ${props => props.inputColor || '#3dc1d3'} ;
    border: none;
    border-radius: 3px;
`

const Button = styled.button`
background: #596275;
font-size: 1em;
margin: 1em;
color: cyan;
padding: 0.25em 1em;
border: 2px solid #3dc1d3;
border-radius: 3px;
`;

export {Form, Input, Button}