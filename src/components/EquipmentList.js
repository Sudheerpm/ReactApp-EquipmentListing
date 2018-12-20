import React from 'react';
import { NavLink, Link, Switch, Route } from "react-router-dom";
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";

const EquipmentList = ({Equipments, onDeleteEquipment}) => {
    return (
        !Equipments.length ?
            <p className="alert alert-warning text-center">No Equipments found.</p>
            :
            <div>
                    <table >
                        <tr>
                            <th>Device Name</th>
                        </tr>
                        <tbody>
                        {Equipments.map(Equipment =>
                            <tr key={Equipment.serialno}>
                                <td>
                                    <ul>
                                        <li><Link className="btn btn-primary" to={'/edit/' + Equipment.serialno}>{Equipment.equipmentName}</Link></li>
                                    </ul>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
            </div>
    )
};
  
  

export default EquipmentList;