import React from 'react';
import uploadFile from '../helpers/uploadFiles';
import axios from 'axios';
import CrudCard from '../Components/CrudCard';
import CrudForm from '../Components/CrudForm';
import { Link } from 'react-router-dom';
import '../styles/crud.css';


class Crud extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditOn: false,
      id: -1,
      name: '',
      price: '',
      description: '',
      img: null,
      tipo: '',
      urlImg: null,
      recargar: false,
      productsList: []
    }
  }

  componentDidMount = () => {
    this.getProducts()
      .then(data => {
        this.setState({ productsList: data });
      });
  }

  shouldComponentUpdate(prevProps, prevState) {
    return (prevState.recargar != this.state.recargar);;
  }

  // Eventos 
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.isEditOn) this.editProduct();
    else{
      if (this.state.img) this.addProduct();
      else alert('Debes cargar una imagen');
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFileChange = event => {
    this.setState({ img: event.target.files[0] });
  }

  // Crud
  getProducts = async () => {
    const response = await axios.get('https://latienditaworkshop.herokuapp.com/products');
    return response.data;
  }

  getProduct = async (id) => {
    const response = await axios.get(`https://latienditaworkshop.herokuapp.com/products/${id}`);
    return response.data;
  }

  editProduct = async () => {
    const imgURL = (this.state.img
      ? await uploadFile(this.state.img)
      : this.state.urlImg);
      console.log(imgURL);

    const editData = {
      nombre: this.state.name,
      precio_kilo: this.state.price,
      descripcion: this.state.description,
      tipo: this.state.tipo,
      photo: imgURL
    };

    axios.put(`https://latienditaworkshop.herokuapp.com/products/${this.state.id}`, editData);
    this.resetForm();
  }

  addProduct = async () => {
    const imgURl = await uploadFile(this.state.img);
    const newData = {
      nombre: this.state.name,
      precio_kilo: this.state.price,
      descripcion: this.state.description,
      tipo: this.state.tipo,
      photo: imgURl
    };

    await axios.post(`https://latienditaworkshop.herokuapp.com/products`, newData);
    this.resetForm();
  }

  deleteProduct = async (id) => {
    axios.delete(`https://latienditaworkshop.herokuapp.com/products/${id}`)
    .then(()=> window.location.assign("crud"))
  }

  editOnForm = async (id) => {
    this.getProduct(id)
      .then(response => {
        this.setState({
          isEditOn: true,
          id: id,
          name: response.nombre,
          price: response.precio_kilo,
          description: response.descripcion,
          tipo: response.tipo,
          img: null,
          urlImg: response.photo
        })
      })
  }

  resetForm = () => {
    this.setState((state) => ({
      isEditOn: false,
      id: -1,
      name: '',
      price: '',
      description: '',
      tipo: '',
      img: null,
      recargar: !state.recargar,
      urlImg: null
    }));
  }

  render() {
    const productsList = this.state.productsList;
    return (
      <div className="div">
      <Link to="/" className="Link"/> 
        <div className="products-div">
          {
            productsList.map(product => (
              <CrudCard
                key={product.id}
                id={product.id}
                name={product.nombre}
                price={product.precio_kilo}
                img={product.photo}
                description={product.descripcion}
                editOnForm={this.editOnForm}
                deleteProduct={this.deleteProduct}

              />
            ))
          }
        </div>
        <CrudForm    
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleFileChange={this.handleFileChange}
          name={this.state.name}
          price={this.state.price}
          tipo={this.state.tipo}
          description={this.state.description}
          img={this.state.urlImg}
        />
      </div>
    )
  }
}

export default Crud;