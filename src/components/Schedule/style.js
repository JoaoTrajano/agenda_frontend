import style from "styled-components";
import Button from '@material-ui/core/Button';

export const Container = style.div`
    display: grid;
    flex-direction: column;
    align-items: center;    
`;

export const Header = style.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #cccccc;
    padding: 16px;
`;

export const PanelControl = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vh;
    padding: 16px;
`;

export const Form = style.form`
    display: grid;
    row-gap: 16px;
`;

export const Schedules = style.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 100vh;
    column-gap: 16px;
    padding: 16px;
`;

export const ButtonForm = style(Button)`
    display: flex;
    row-gap: 16px;
`