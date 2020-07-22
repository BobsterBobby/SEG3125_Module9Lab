import React from 'react';

const Cart = () => {
    return (
        <div className="container">
            <h4 className="center">Cart</h4>
            <table border="2">
                <tr>
                    <td>
                        Item no.
                    </td>
                    <td>
                        Item
                    </td>
                    <td>
                        Cost
                    </td>
                    <td>del.</td>
                </tr>
                <div className = "item collection">
                    
                </div>
            </table>
        </div>
    )
}

export default Cart