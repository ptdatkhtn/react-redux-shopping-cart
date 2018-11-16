import React, { Component } from 'react';
import * as Notifications from './../constants/Message';

class CartItem extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        quantity : 1
    }

  render() {
      let {item} = this.props;
console.log(item)
      let quantity = item.quantity;
let quantityMinus1 = quantity -1;
      let quantityPlus1 = quantity +1;
    return (

            <tr>
                <th scope="row">
                    <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72" alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={ () => this.onUpdate(item.product, quantityMinus1)}
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                            <a >—</a>
                        </label>
                        <label
                            onClick={ () => this.onUpdate(item.product, quantityPlus1)}
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                            <a >+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => this.onDelete(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
    );
  }
    onDelete = (product) => {
        let {onDeleteProductInCart, onChangeMessage} = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Notifications.MSG_DELETE_TO_CART_SUCESS);
    }

    onUpdate = (product, quantity) => {
        this.props.onUpdateProductInCart(product, quantity);
        this.props.onChangeMessage(Notifications.MSG_UPDATE_TO_CART_SUCESS);
    }
    showSubTotal = (price, quantity) => {
      return (price * quantity)
    }
}

export default CartItem;
