import React from 'react';

const Home = () => {
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
            </table>
        </div>
    )
}

export default Home