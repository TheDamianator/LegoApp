import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";

function AddLegoSet({ setLegosets }) {
  const [open, setOpen] = useState(false);
  const [newLegoSet, setNewLegoSet] = useState({
    name: "",
    price: 0,
    image: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAdd = () => {
    setLegosets((prevLegosets) => [...prevLegosets, newLegoSet]);
    setNewLegoSet({
      name: "",
      price: 0,
      image: "",
    });
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        + Add LEGO Set
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add LEGO Set</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={newLegoSet.name}
            onChange={(e) => setNewLegoSet({ ...newLegoSet, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            type="number"
            value={newLegoSet.price}
            onChange={(e) => setNewLegoSet({ ...newLegoSet, price: Number(e.target.value) })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image URL"
            value={newLegoSet.image}
            onChange={(e) => setNewLegoSet({ ...newLegoSet, image: e.target.value })}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddLegoSet;
