import React from 'react'
class Cart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="cart-items">
                    <span>
                        {!this.props.data[0] ? <div></div> :
                            <table>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Quantity</th>
                                </tr>
                                {this.props.data.map((item, i) => {
                                        
                                    return (
                                        <tr key={i}>
                                            <td>{item.initialState.name}</td>
                                            <td>{item.initialState.price}</td>
                                            <td>{item.initialState.quantity}</td>
                                        </tr>
                                    );
                                })}
                            </table>
                        }</span>
                </div>
            </div>
        )

    }


}
export default Cart;



