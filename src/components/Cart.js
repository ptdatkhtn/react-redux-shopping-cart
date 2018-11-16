import React, { Component } from 'react';

class Cart extends Component {
  render() {
      let {children} = this.props;
    return (

            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                        <tr>
                            <th />
                            <th>Product</th>
                            <th>Price</th>
                            <th>Number</th>
                            <th>Total</th>
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        <React.Fragment>
                            {
                                children
                            }
                        </React.Fragment>

                        </tbody>
                    </table>
                </div>
            </section>

    );
  }
}

export default Cart;
