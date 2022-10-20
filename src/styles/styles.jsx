import styled from 'styled-components';

export const Title = styled.h1`
    margin: 30px;
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000;
`;

export const Line = styled.div`
    display: flex;
`;

export const Button = styled.button`
    margin: ${props => props.margin ? '5px 0 15px 0' : '4px 3px'};
    padding: 15px 23px;
    width: ${props => props.width ? '100%' : ''};
    height: ${props => props.height ? '70px' : ''};

    border-radius: ${props => props.radius ? '10px' : '50px'};

    font-weight: 500;
    background-color: ${props => props.primary ? '#F8C471' : '#A9A9A9'};
    color: black;

    :hover{
        background-color: ${props => props.primary ? '#F5B041' : '#808080'};
    }

    :disabled {
        padding: 0 20px;

        text-align: right;
        font-size: 30px;

        background-color: #343a40;

        cursor: not-allowed;
    }
`;