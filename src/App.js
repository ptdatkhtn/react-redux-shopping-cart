import React, { Component } from 'react';
import ProductsContainers from "./containers/ProductsContainers";
import CartContainers from "./containers/CartContainers";
import MessageContainers from "./containers/MessageContainers";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
        <div>
            {/* Header */}
           <Header/>
            <main id="mainContainer">
                <div className="container">
                    <ProductsContainers/>
                    {/* Message */}
                    <MessageContainers/>
                    {/* Cart */}
                    <CartContainers/>
                </div>
            </main>
            <Footer/>
        </div>
    );
  }
}

export default App;
