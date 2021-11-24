import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { useStylesView } from "./MakeStyles";

export default function ModalAddNewItem({isOpen, closeModal}) {
    const classes = useStylesView();
    const [open, setOpen] = React.useState(isOpen);
  
    const handleClose = () => {
      closeModal();
    };
  
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
              <h2 id="transition-modal-title">Tarefas e Atividades</h2>
              
            </div>
          </Fade>
        </Modal>
      </div>
    );
}