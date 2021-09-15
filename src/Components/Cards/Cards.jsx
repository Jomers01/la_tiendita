import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./StyledCard";
import Button from "@material-ui/core/Button";
//Modal
import { Modal } from "@material-ui/core";

const Cards = ({ list, set, get }) => {
  const { nombre, precio_kilo, photo, id, descripcion } = list;
  const classes = useStyles();

  //Carrito
  const anadirCarrito = () => {
    const canti = Number(document.querySelector('#cant').value);
    set([...get,{
      nombre: nombre,
      cantidad: canti,
      photo: photo,
      precio: precio_kilo
    }])

  }

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(get))
  }, [get])

  //Modal
  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);
  };

  const body = (
    <div className={classes.modal}>
      <div className={classes.divCont}>
        <div>
          <img
            className={classes.imgCon}
            src={photo}
            alt={nombre}
            width="200px"
            height="200px"
          />
        </div>
        <div className={classes.divDesc}>
          <h2 className={classes.titleModal}>{list.nombre}</h2>
          <h3>{precio_kilo}</h3>
          <p className={classes.iva}>Precios con iva incluidos</p>
          <p>{descripcion}</p>
          <div align="right">
            <input className={classes.input} type="number" id="cant" min="1" />
            <Button variant="contained" className={classes.btnAgregar} onClick={anadirCarrito}>
              Comprar
            </Button>
          </div>
        </div>
      </div>
      <img className={classes.imgClose} onClick={abrirCerrarModal} src="https://res.cloudinary.com/dpkaiokho/image/upload/v1631658170/latiendita/boton-de-quitar-cuadrado_s4jp1c.png" alt="" />
    </div>
  );

  //Fin del modal

  return (
    <>
      <Card
        id="1"
        className={classes.root}
        onClick={(e) => {
          abrirCerrarModal();
        }}
      >
        <CardMedia
          id={id}
          className={classes.media}
          image={photo}
          title={nombre}
        />
        <CardContent className={classes.contenedor}>
          <Typography className={classes.precio}>
            Precio: ${precio_kilo}/Kg
          </Typography>
        </CardContent>
        <CardContent className={classes.contenedor}>
          <Button className={classes.button}>Agregar</Button>
        </CardContent>
      </Card>

      {/* Modal */}
      <Modal open={modal}>{body}</Modal>
    </>
  );
};

export default Cards;
