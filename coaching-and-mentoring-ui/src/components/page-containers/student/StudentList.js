import React, {useEffect} from 'react';
import { Header } from '../../common/HeaderFooter'
import TemplateForTables from '../../common/table/TemplateForTables'
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from '../../common/table/DynamicPaginationTable'
import {KriyaService} from '../../service/KriyaService'


export default function StudentList() {
    const breadcrumbs = [
        // { label: 'Home', link: '/home' },
        // { label: 'Products', link: '/products' },
        // { label: 'Category', link: '/products/category' },
        // { label: 'Product', link: '/products/category/product' },
    ];

    const [studentData, setStudentData] = React.useState([]);
    const [status, setStatus] = React.useState("true")


    useEffect(() => {
        KriyaService.fetchAllStudents().then(response => {
            setStudentData(response.data)
        });
    }, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "User Name",
                accessor: "userName",
                // Cell: ({ row, cell }) => {
                //   return (
                //     <>
                //       <Link
                //         to={`/configuration/SuborganizationList/${row.original.orgName}`}
                //       >
                //         <span>{cell.value}</span>
                //       </Link>
                //       <OrgTreeIcon organization={row.original.orgId} />
                //     </>
                //   );
                // }
            },
            {
                Header: "First Name",
                accessor: "firstName"
            },
            {
                Header: "Last Name",
                accessor: "lastName"
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "Mobile Number",
                accessor: "mobileNumber"
            },

            //   {
            //     Header: t("organization_configuration_list_header_actions"),
            //     Cell: ({ row }) => {
            //       let link = "/configuration/organization/" + row.original.orgId;
            //       return (
            //         <>
            //           <td>
            //             <Link to={link}>
            //               <IconButton>
            //                 <i className="fa fa-edit" aria-hidden="true"></i>
            //               </IconButton>
            //             </Link>
            //           </td>
            //           {/* <td>
            //             <IconButton>
            //               <i className="fa fa-trash" aria-hidden="true"></i>
            //             </IconButton>
            //           </td> */}
            //         </>
            //       );
            //     }
            //   }
        ],
        []
    );


    const data = React.useMemo(() => [...studentData]);


    return (
        <div style={{ width: "100%" }}>
            <Header title="KRIYA Student List"
                breadcrumbs={breadcrumbs} />

            <TemplateForTables
                // dropdownitems={dropitems}
                needDropdown={false}
                // importIcons
            >
                {status === "loading" ? (
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        style={{ height: "50vh" }}
                    >
                        <CircularProgress />
                    </Grid>
                ) : (
                        <Table
                            columns={columns}
                            data={data}
                            // paginationInfo={{
                            //     pageIndex: Number(query.get("page")),
                            //     nextPage,
                            //     previousPage,
                            //     pageSize: Number(query.get("size")),
                            //     setPageSize: handlePageSize,
                            //     pageInfo
                            // }}
                        />
                    )}
            </TemplateForTables>

        </div >
    )
}