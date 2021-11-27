import React, { useState } from 'react';

/**
 * Styleds
 */
import { Item, Title, ControlButtons } from './style.js';

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
import ViewMore from 'components/Modals/ViewMore';
import Edite from 'components/Modals/Edite';

function ScheduleItem({ ...restProps }) {
    const { name, year, idSchedule } = restProps;
    const [isOpenModalViewMore, setIsOpenModalViewMore] = useState(false);
    const [isOpenModalEdited, setIsOpenModalEdited] = useState(false);

    const deleteSchedule = async id => {
        alert('Tem certeza que deseja excluir essa agenda? ' + id);
        // const data = await api.get('');
        // setSchedules(data);
    };

    return (
        <Item>
            <Title>{name}</Title>
            <span>
                <b>Ano:</b> {year}
            </span>
            <ControlButtons>
                <Button
                    variant="contained"
                    color="default"
                    onClick={() => setIsOpenModalViewMore(true)}
                >
                    <MoreVertIcon />
                </Button>
            </ControlButtons>
            <ControlButtons>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteSchedule(idSchedule)}
                >
                    <DeleteIcon />
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setIsOpenModalEdited(true)}
                >
                    <EditIcon />
                </Button>
            </ControlButtons>
            <ViewMore
                isOpen={isOpenModalViewMore}
                closeModal={() => setIsOpenModalViewMore(false)}
                idSchedule={idSchedule}
            />
            <Edite
                isOpen={isOpenModalEdited}
                closeModal={() => setIsOpenModalEdited(false)}
                idSchedule={idSchedule}
            />
        </Item>
    );
}

export default ScheduleItem;
