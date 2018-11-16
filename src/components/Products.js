import React, { Component } from 'react';
import Product from "./Product";


class Products extends Component {
  render() {
    return (
            <section className="section">
                <h1 className="section-heading">All Products</h1>
                <div className="row">
                    {
                        this.props.children
                    }
                </div>
            </section>

    );
  }




}
export default Products;
