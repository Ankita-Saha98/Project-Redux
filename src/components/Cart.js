import React from 'react'
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event,id) {
        let temp;
        if(event > 0){
            temp=event;
        }
        this.props.setQuantityHandler({quantity: temp , id: id});
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
                                            <td>
                                                <input
                                                onChange={(e)=>this.handleChange(e.target.value,item.initialState.id)}
                                                value={item.initialState.quantity}
                                                type= "number"
                                                />
                                            </td>
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
