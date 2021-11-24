import React, { useState } from "react";

/**
* Styleds
*/
import { Item, Title, ControlButtons } from "./style.js"

/** 
* Material Icons
*/
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

/**
 * Modals
 */
import ViewMore from "components/Modals/ViewMore";
import Edite from "components/Modals/Edite";

function ScheduleItem() {
    
    const [isOpenModalViewMore, setIsOpenModalViewMore ] = useState(false);
    const [isOpenModalEdited, setIsOpenModalEdited ] = useState(false);
    
    const deleteSchedule = (id = 0) => {
        alert("Tem certeza que deseja excluir essa agenda? " + id);
        // const deleteSchedules = async () => {
        //     const data = await api.get("");
        //     setSchedules(data);
        // AditionalNew
        // }
    };

    // const addNewItemInShedule = (id = 0) => {
    //     setIsOpenModalNewItem(true);
    //     console.log(isOpenModalNewItem, id);
    // }

    return (
        <Item>
            <Title>Nome da Agenda</Title>
            <span><b>Ano:</b> 2021</span>
            <ControlButtons>
                <Button variant="contained" color="default" onClick={() => setIsOpenModalViewMore(true)} >
                    <MoreVertIcon />
                </Button>
            </ControlButtons>
            <ControlButtons>
                <Button variant="contained" color="secondary" onClick={() => deleteSchedule()}>
                    <DeleteIcon />
                </Button>
                <Button variant="contained" color="primary" onClick={() => setIsOpenModalEdited(true) }>
                    <EditIcon />
                </Button>
            </ControlButtons>
            <ViewMore isOpen={isOpenModalViewMore} closeModal={() => setIsOpenModalViewMore(false)} />
            <Edite isOpen={isOpenModalEdited} closeModal={() => setIsOpenModalEdited(false)} />
        </Item>

    );
}

export default ScheduleItem;