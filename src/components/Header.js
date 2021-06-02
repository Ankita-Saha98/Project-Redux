import React from 'react'
function Header(props) {
    console.log(props.data);
    var count = 0;
    for (var j = 0; j < props.data.length; j++) {
        count = count + Math.floor(props.data[j].initialState.quantity)
    }
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">
                    {!props.data[0] ? <div>{props.data.length}</div> :
                        <div>
                            {count}
                        </div>
                    }
                </span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header;