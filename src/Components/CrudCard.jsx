import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../styles/crud.css';
const MySwal = withReactContent(Swal);


class CrudCard extends React.Component {

  handleDelete = (id) => {
    MySwal.fire({
      title: 'Estás seguro? ',
      text: "Esta acción es irrevertible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminalo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.deleteProduct(id);
      }
    });
  }

  render() {
    return (
      <div className="div_card">
        <div style={{backgroundImage: `url(${this.props.img})` }} className="card">
          <div className="div-button">
            <button
              className='activeBtnEdit'
              id={this.props.id}
              onClick={() => this.props.editOnForm(this.props.id)}
            >
              <i className="fas fa-edit"></i>
            </button>
            <button
              className='activeBtnDelete button'
              onClick={() => this.handleDelete(this.props.id)}
              id={this.props.id}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <p className="name"> {this.props.name} </p>
      </div>
    )
  }
}

export default CrudCard;
