import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    productName: 'iphone 11',
                    productPrice: '$1000.00',
                    imgSrc: 'https://media.istockphoto.com/photos/two-apple-iphone-5-picture-id458412137'
                },
                {
                    productName: 'Oneplus 8 pro',
                    productPrice: '$800.00',
                    imgSrc: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-1.jpg'
                },
                {
                    productName: 'Oneplus nord',
                    productPrice: '$600.00',
                    imgSrc:'https://images-na.ssl-images-amazon.com/images/I/61JF1PsOvnL._SL1000_.jpg'
                },
                {
                    productName: 'iphone 12',
                    productPrice: '$1100.00',
                    imgSrc:'https://images-na.ssl-images-amazon.com/images/I/71sNNCTfMuL._SL1500_.jpg'
                },
                {
                    productName: 'samsung s20',
                    productPrice: '$500.00',
                    imgSrc: 'https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Plus-500x500.jpg'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>Home Component</h1>

                {this.state.products.map((item, i) => {
                    return (
                        <div>
                            <div className="cart-wrapper">
                                <div className="img-wrapper item">
                                    <img src= {item.imgSrc} />
                                </div>
                                <div className="text-wrapper item">
                                    <span key={i}>
                                        Product Name: {item.productName} <br />
                                Product Price: {item.productPrice} <br />
                                    </span>
                                </div>
                                <div className="btn-wrapper item">
                                    <button className="add_to_cart_style"
                                        onClick={
                                            () => { this.props.addToCartHandler({ price: item.productPrice, name: item.productName , id:i, quantity:1  }) }
                                        }>
                                        Add To Cart</button>
                                    <button className="remove_to_cart_style"
                                        onClick={
                                            () => { this.props.removeToCartHandler(i) }
                                        }>
                                        Remove To Cart</button>
                                </div>
                            </div>
                            <div><br /></div>
                        </div>
                        
                    );
                })}

            </div>
        )
    }
}
export default Home;


