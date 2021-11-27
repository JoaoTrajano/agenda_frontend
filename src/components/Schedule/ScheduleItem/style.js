import style from "styled-components";

export const Item = style.div`
    display: grid;
    align-items: center;
    text-align: center;
    max-height: 240px;
    width: 240px;
    background-color: #424242;
    color: #fff;
    padding: 16px;
    border-radius: 10px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

export const Title = style.h3`
`;
export const ControlButtons = style.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    row-gap: 32px;
`;
