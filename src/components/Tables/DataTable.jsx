import React from "react";
import { BASE_STYLE_TABLE, DIV_STYLE_TABLE } from "./Style";

const DataTable = ({
    style,
    divStyle,
    name,
    thead,
    tfoot,
    type,
    ...otherProps
}) => (
  <div className={DIV_STYLE_TABLE + divStyle}>
        <table 
            id="zero_config" 
            className={BASE_STYLE_TABLE + style}>
            <thead>
                <tr>
                    {thead && thead.map((th) =>  (
                        <th>{th}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    {tfoot && tfoot.map((th) =>  (
                        <th>{th}</th>
                    ))}
                </tr>
            </tfoot>
        </table>
    </div>
);

export default DataTable;