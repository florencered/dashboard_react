import React from 'react'
import "./datatable.scss"
import { DataGrid} from '@mui/x-data-grid'; 
import {userColumns,userRows} from "../../datatablesource" 
import { Link } from 'react-router-dom';
// const columns= [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 90,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       renderCell:(params)=>{
//         return(
//             <>
//                 <span>{params.row.lastName}</span>
//                 <p>{params.row.firstName}</p>
//             </>
//         );
//       },
//     //   valueGetter: (params) => //params has the access to the properties of the ows objcts via the value getter method
//     //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     //     //we could alse use renderCell instead
//      },
//   ];
  
//   const rows = [
//     { id: 1, lastName: 'Dey', firstName: 'Dhriti', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];
  
//   export default function DataTable() {
//     return (
//       <div style={{ height: 400, width: '100%' }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 5 },
//             },
//           }}
//           pageSizeOptions={[5, 10]}
//           checkboxSelection
//         />
//       </div>
//     );
//   }


const Datatable = () => { 
    const actionColumn=[
        {
            field:"action",
            headerName:"Action",
            width:250,
            renderCell:()=>{
                return(
                    <div className="cellAction">
                        <div className="viewButton">
                            View 
                            </div>
                            <div className="deleteButton">
                                Delete
                            </div>
                        
                    </div>
                )
            }
        }
    ]
  return (
    <div className='datatable'> 
    <div className="datatableTitle">
      Add New User 
      <Link to="/users/new" className='link' > 
      Add NEW
      </Link> 
    </div> 
    

        <div style={{ height: '100%', width: '100%' }}>
      <DataGrid 
      className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
  )
}

export default Datatable