import {React, useEffect, useState} from "react";

/**
 * Components
 */
import  ScheduleItem from "./ScheduleItem";

/**
 * Styleds
 */
import { Header, Container, Schedules, PanelControl, Form, ButtonForm } from "./style.js";

/** 
 * Material Icons
*/
import TextField from '@material-ui/core/TextField';

/**
 * Api
 */
import api from "../../service";

function Schedule(){

    const [schedules, setSchedules] = useState([]);

    // const getSchedules = async () => {
    //     const data = await api.get("");
    //     setSchedules(data);
    // }

    const sendNewSchedule = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        // getSchedules();
    }, []);
    
    return(
        <Container>
            <Header>
                <PanelControl>
                    <Form onSubmit={sendNewSchedule}>
                        <div>
                            <TextField id="standard-basic" label="Nome da Agenda" /> 
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Responsável pela Agenda" /> 
                        </div>
                        <ButtonForm variant="contained" color="primary">
                            Adicionar
                        </ButtonForm>
                    </Form>
                    <TextField id="standard-basic" label="Filtrar por Data" />
                </PanelControl>
            </Header>
            <Schedules>
                <ScheduleItem />
            </Schedules>
        </Container>
    );
}

export default Schedule;