/**
* Styleds
*/
import { Item, Title, ControlButtons } from "./style.js"

/** 
* Material Icons
*/
import AddBoxIcon from '@material-ui/icons/AddBox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

function ScheduleItem() {
    
    return (
        <Item>
            <Title>Nome da Agenda</Title>
            <span><b>Data:</b> 20/02/2021</span>
            <ControlButtons>
                <Button variant="contained" color="default">
                    <AddBoxIcon /> 
                </Button>
                <Button variant="contained" color="default">
                    <MoreVertIcon />
                </Button>
            </ControlButtons>
            <ControlButtons>
                <Button variant="contained" color="secondary">
                    <DeleteIcon />
                </Button>
                <Button variant="contained" color="primary">
                    <EditIcon />
                </Button>
            </ControlButtons>
        </Item>
    );
}

export default ScheduleItem;