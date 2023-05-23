import { useRef, useState } from "react";
import { IHomePageProps } from "../IHomePageProps";
import { Box, Button, Modal, Typography } from "@mui/material";

export function HomePage (props: IHomePageProps) {
  const newTitle = useRef<HTMLInputElement>(null);

  const handleNewTitle = () => {
    const title = newTitle.current?.value;
    props.changeAppTitleFromHomePage(title);
  }
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ status, setStatus ] = useState<boolean>(true);

  const changeStatus = (currentStatus: boolean) => currentStatus ? setStatus(true) : setStatus(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    return (
      <header className="App-header">
          <button onClick={() => changeStatus(!status)}
          style={{ background: status ? 'blue' : 'red' }}>
            {status ? 'ON': 'OFF'}
          </button>
          <input type="text" ref={newTitle}/>
          <button onClick={() => handleNewTitle()}>
            Change Title From HomePage.
          </button>
          <img src={props.logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      </header>
    )
}