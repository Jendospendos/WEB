import React, { Component } from 'react'

export class classNamef extends Component {
  render() {
    return (
      <div className='full-item'>
        <div >
        <img src={"./img/"+this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.desc}</b>
        <p>{this.props.item.price}$</p>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default classNamef
