import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

/** 
 * Material Icons
*/
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { useStyles } from "./MakeStyles";
import { Form } from "./styleModals";

export default function ModalAddNewItem({isOpen, closeModal}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(isOpen);
  
    const handleClose = () => {
      closeModal();
    };

    const changeNameAndResp = (event) => {
      event.preventDefault();

    }
  
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={isOpen}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isOpen}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Editar Agenda</h2>

              <Form onSubmit={changeNameAndResp}> 
                <TextField id="standard-basic" label="Nome da Agenda" /> 
                <TextField id="standard-basic" label="Responsável pela Agenda" />

                <Button variant="contained" color="primary" startIcon={<EditIcon />}>
                  Alterar
                </Button>
              </Form>
              
            </div>
          </Fade>
        </Modal>
      </div>
    );
}