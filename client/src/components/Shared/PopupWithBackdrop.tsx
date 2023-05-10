import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";


const PopupWithBackdrop = (props:any) => {
    
    const [isOpen, setIsOpen] = useState(true);
  
    const handleClose = () => {
      setIsOpen(false);
      props.handleClose();
    };
  
    return (
      <div>
        <Dialog open={isOpen} aria-labelledby="popup-title">
          <DialogTitle id="popup-title">{props.title}</DialogTitle>
          <DialogContent>
            {props.content}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              {props.buttonText}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
};

export default PopupWithBackdrop;
  
