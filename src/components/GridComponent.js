import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "ag-grid-community"; // Import the required module
import { ModuleRegistry } from "ag-grid-community"; // Register the module
import "ag-grid-community/styles/ag-grid.min.css";
import "ag-grid-community/styles/ag-theme-alpine.min.css";
import '../styles/grid.css'; 

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const GridComponent = ({ rowData, onEdit }) => {
    const columns = [
        { field: "id", headerName: "ID", onCellClicked: onEdit },
        { field: "labName", headerName: "Lab Name" },
        { field: "location", headerName: "Location" },
        { field: "sampleType", headerName: "SampleType" },
      
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: 400 }}>
            <AgGridReact 
                rowData={rowData} 
                columnDefs={columns} 
                rowModelType="clientSide" // Set row model type
            />
        </div>
    );
};

export default GridComponent;
