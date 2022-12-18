import React from 'react';

const Table = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>SurName</th>
                        <th>Email</th>
                    </tr>
                    {props.data.map((item)=>{return(<>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                        </tr>
                        </> )})}

                </tbody>
            </table>
        </div>
    );
};

export default Table;