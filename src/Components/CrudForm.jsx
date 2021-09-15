import React from 'react';
import { Button, TextField } from '@material-ui/core';
import '../styles/crud.css';

/* Componentes */
function CrudForm (props) {
  return (
    <form onSubmit={props.handleSubmit} method="POST" className="form">
      <TextField
        className="input"
        variant="outlined"
        name="name"
        onChange={props.handleChange}
        value={props.name}
        label="Nombre"
        maxLength="30"
        size="small"
        mb="20rem"
        required
      />      
      <TextField
        className="input"
        variant="outlined"
        type="number"
        name="price"
        onChange={props.handleChange}
        value={props.price}
        label="Precio"
        min="0"
        max="1000000"
        step="0.050"
        size="small"
        required
      />
      <TextField
        className="input"
        variant="outlined"
        name="tipo"
        onChange={props.handleChange}
        value={props.tipo}
        label="Tipo"
        maxLength="30"
        size="small"
        required
      />
      <TextField
        className="input"
        variant="outlined"
        type="file"
        accept="Image/*"
        name="img"
        onChange={props.handleFileChange}
        size="small"
      />
      <TextField
        className="input"
        variant="outlined"
        name="description"
        onChange={props.handleChange}
        value={props.description}
        label="Descripción"
        rows={3}
        multiline
        required
      />
      <Button variant="contained" color="secondary" type="submit"> Hecho</Button>
    </form>
  )
}

export default CrudForm;