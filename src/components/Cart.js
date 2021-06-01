import React from 'react'
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event,i) {
        if (event > 0 && event != '') {
            this.setState({
                userInput: event
            });
        }
        this.props.setQuantityHandler({quantity: event , id: i});
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
                                                onChange={(e)=>this.handleChange(e.target.value,i)}
                                                value= {item.initialState.quantity}
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




/*import React from 'react'
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            temp: true,
        }); 
        console.log(event.target.name)
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
                                                name= {i}
                                                onChange={this.handleChange}
                                                value={this.state.temp ? this.state.i : item.initialState.quantity}
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



*/



