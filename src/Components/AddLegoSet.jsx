import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

function AddLegoSet({ setLegosets }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = () => {
    setLegosets((prevLegosets) => [
      ...prevLegosets,
      {
        id: Date.now(),
        name,
        price: parseFloat(price),
        image,
      },
    ]);
    handleClose();
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleClickOpen} variant="contained" style={{ marginBottom: "16px" }}>
        + Add LEGO Set
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add LEGO Set</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Price"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
          />
          <TextField
            margin="dense"
            label="Image URL"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddLegoSet;
