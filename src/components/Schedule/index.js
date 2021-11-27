import { React, useEffect, useState } from 'react';

// import of components
import ScheduleItem from './ScheduleItem';

// import of styles
import {
    Header,
    Container,
    Schedules,
    PanelControl,
    Form,
    ButtonForm,
} from './style.js';

// import of Matarial Icons
import TextField from '@material-ui/core/TextField';

/**
 * Api
 * Desabilitado temporariamente
 */
// import api from "service/api";

// Dados fakes usado afim de demonstrar o funcionamento da api
const dataMok = [
    {
        year: '2021',
        resp: 'João Trajano',
        name: 'Ano 2021',
        id: 1,
    },
    {
        year: '2022',
        resp: 'Laís Santos da Cruz',
        name: 'Ano 2023',
        id: 2,
    },
    {
        year: '2023',
        resp: 'Laís Santos da Cruz',
        name: 'Ano 2024',
        id: 3,
    },
    {
        year: '2024',
        resp: 'Laís Santos da Cruz',
        name: 'Ano 2025',
        id: 4,
    },
];

function Schedule() {
    const [schedules, setSchedules] = useState([]);
    const [nameSchedule, setNameSchedules] = useState('');
    const [respForSchedule, setRespSchedules] = useState('');

    /**
     * Return alls schedules
     * @return void
     */
    const getSchedules = async () => {
        // const data = await api.get("https://localhost/");

        // dataMok pessando temporariamente.
        setSchedules(dataMok);
    };

    const addNewSchedule = e => {
        e.preventDefault();
        console.log(e);
        // const newSchedule = {

        // }
    };

    useEffect(() => {
        getSchedules();
    }, []);

    return (
        <Container>
            <Header>
                <PanelControl>
                    <Form onSubmit={addNewSchedule}>
                        <div>
                            <TextField
                                id="standard-basic"
                                label="Nome da Agenda"
                                onChange={event => setNameSchedules(event)}
                            />
                        </div>
                        <div>
                            <TextField
                                id="standard-basic"
                                label="Responsável pela Agenda"
                                onChange={event => setRespSchedules(event)}
                            />
                        </div>
                        <ButtonForm
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Adicionar
                        </ButtonForm>
                    </Form>
                    <TextField id="standard-basic" label="Filtrar por Data" />
                </PanelControl>
            </Header>
            <Schedules>
                {schedules.map((item, id) => {
                    return (
                        <ScheduleItem
                            key={id}
                            name={item.name}
                            year={item.year}
                            idSchedule={item.id}
                        />
                    );
                })}
            </Schedules>
        </Container>
    );
}

export default Schedule;
