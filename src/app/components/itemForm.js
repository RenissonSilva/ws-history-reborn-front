import React from 'react';
import { TextField, Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ItemForm = ({ newItem, setNewItem, handleSubmitSave }) => {
  return (
    <form onSubmit={handleSubmitSave}>
      <Box className="flex row gap-4">
        <TextField
          label="ID"
          variant="filled"
          focused
          value={newItem.item_id}
          InputProps={{
            style: { color: '#fff' },
            disableUnderline: true,
          }}
          InputLabelProps={{
            style: { color: '#aeaeff' },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "#212121",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333333",
              },
              "&.Mui-focused": {
                backgroundColor: "#333333",
                borderColor: "#aeaeff",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#aeaeff",
            },
          }}
          onChange={(e) => setNewItem({ ...newItem, item_id: e.target.value })}
        />

        <TextField
          label="Nome"
          variant="filled"
          focused
          value={newItem.name}
          InputProps={{
            style: { color: '#fff' },
            disableUnderline: true,
          }}
          InputLabelProps={{
            style: { color: '#aeaeff' },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "#212121",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333333",
              },
              "&.Mui-focused": {
                backgroundColor: "#333333",
                borderColor: "#aeaeff",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#aeaeff",
            },
          }}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />

        <TextField
          label="Refino"
          variant="filled"
          focused
          value={newItem.refinement}
          InputProps={{
            style: { color: '#fff' },
            disableUnderline: true,
          }}
          InputLabelProps={{
            style: { color: '#aeaeff' },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "#212121",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333333",
              },
              "&.Mui-focused": {
                backgroundColor: "#333333",
                borderColor: "#aeaeff",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#aeaeff",
            },
          }}
          onChange={(e) => setNewItem({ ...newItem, refinement: e.target.value })}
        />

        <TextField
          label="Preço"
          variant="filled"
          focused
          value={newItem.price}
          InputProps={{
            style: { color: '#fff' },
            disableUnderline: true,
          }}
          InputLabelProps={{
            style: { color: '#aeaeff' },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "#212121",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333333",
              },
              "&.Mui-focused": {
                backgroundColor: "#333333",
                borderColor: "#aeaeff",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#aeaeff",
            },
          }}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />

        <Button
          type="submit"
          className="rounded-full"
        >
          <AddCircleIcon sx={{ color: '#aeaeff' }} />
        </Button>
      </Box>
    </form>
  );
};

export default ItemForm;
