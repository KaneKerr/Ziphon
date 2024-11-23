import React from 'react';
import { useState, useEffect } from 'react';
import './newsTable.css';

function NewsTable() {
    const [headers, setHeaders] = useState([]); 
    const [rows, setRows] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/news") //Fetches data from the API 
         .then(response => response.json()) //Converts to JSON file
         .then(jsonData => {
            setHeaders(['Title', 'Source']); //Sets Headers from JSON file to corresponding table headers
            setRows(jsonData.map(row => [<a href = {row.link} target = "_blank" rel = "noopener noreferrer">{row.Title}</a>, row.Source])); //Sets rows to all the data of the headers, each title is linked
         })                                                                                                                                 //to corresponding links in the JSON file
         .catch(error => console.log(error, "Problem fetching data")); //Error handling for if the JSON file is not read properly or not fetched correctly
    }, []);

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th key = {header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key = {index}>
                            {row.map((cell, index) => (
                                <td key = {index}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NewsTable