import React from "react";
import './Table.css';
import dateFormat from 'dateformat';

function DataTable(props) {
    return (

        <table className="table table-striped">
            <thead>
                <tr className="tr-header">
                    {props.columns.map(column => (                        
                        <th onClick={() => props.handleSort(column.colName)} scope="col" key={column.colName}>{column.colName} <i className="fa fa-fw fa-sort"></i></th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.filteredEmployees.map(employee => (
                    <tr className="tr-stuff" key={employee.email}>
                        <td><img alt="employee" src={employee.picture.thumbnail}/></td>
                        <td>{employee.name.first + " " + employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td><a href={employee.email}>{employee.email}</a></td>                        
                        <td>{dateFormat(`${employee.dob.date}`,"dd/mm/yyyy")}</td>  
                    </tr>
                ))}
            </tbody>
        </table>
      );
}

export default DataTable;