import React, { useRef, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Container } from '@mui/material';
import { Grid, Paper } from '@mui/material';
import CommonForm from '../../common/CommonForm'
import '../FormStyles.css'
import * as Yup from "yup";
import { Header } from '../../common/HeaderFooter'
import TemplateForTables from '../../common/table/TemplateForTables'
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from '../../common/table/DynamicPaginationTable'
import { KriyaService } from '../../service/KriyaService'
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import SuccessPopup from '../../common/SuccessPopup';


const textFieldStyles = {
    fontSize: '15px',
    border: 'none',
    padding: '8px',
    backgroundColor: '#f0f0f0',
    margin: '5px'
};



const FileUpload = () => {

    let formikForm = useRef(null);

    const [files, setFiles] = React.useState([]);
    const [success, setSuccess] = React.useState(false);
    const [message, setMessage] = React.useState("Success");
    const [status, setStatus] = React.useState(false);
    const [refresh, setRefresh] = React.useState(false);

    let fields = [
        {
            type: "text",
            name: "fileName",
            label: "File Name",
            placeholder: "File Name",
            grid: {
                xs: 12,
                sm: 3,
                style: textFieldStyles
            }
        },

        {
            type: "text",
            name: "fileDescription",
            label: "File Description",
            placeholder: "File Description",
            grid: {
                xs: 12,
                sm: 3,
                style: textFieldStyles
            }
        },
        {
            type: "fileUpload",
            name: "fileUpload",
            label: "File Upload",
            grid: {
                xs: 12,
                sm: 3,
                // style: fileUploadButtonStyles
            }
        }
    ]

    useEffect(() => {
        KriyaService.fetchAllFiles().then(response => {
            setFiles(response.data)
        });
    }, [refresh]);


    const columns = React.useMemo(
        () => [

            {
                Header: "ID",
                accessor: "fileId"
            },
            {
                Header: "File Name",
                accessor: "fileName",
            },
            {
                Header: "Description",
                accessor: "description"
            },
            {
                Header: "Owner",
                accessor: "ownerName"
            },
            {
                Header: "Download",
                accessor: "download",
                Cell: ({ row, cell }) => {
                    return (
                        <>
                            <Button onClick={() => handleDownload(row.original.fileId, row.original.fileName)}
                            >
                                <DownloadIcon/>
                            </Button>
                        </>
                    );
                }
            },
            {
                Header: "Delete",
                accessor: "delete",
                Cell: ({ row, cell }) => {
                    return (
                        <>
                            <Button onClick={() => handleDelete(row.original.fileId)}
                            >
                                <DeleteIcon/>
                            </Button>
                        </>
                    );
                }
            }

        ],
        []
    );


    const data = React.useMemo(() => [...files]);


    const handleClose = () => {
        window.location.reload();
    }

    const handleDelete = (fileId) => {
        KriyaService.deleteFile(fileId);
        setSuccess(true);
        setMessage("File Deleted Successfully!")
    }

    const handleDownload = (fileId, fileName) => {
        console.log("handle download=====================", fileId)
        KriyaService.downloadFile(fileId).then((response) => {
            // Create a temporary URL for the downloaded file
            const url = window.URL.createObjectURL(new Blob([response.data]));

            // Create a link element and simulate a click to trigger the file download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();

            // Clean up the temporary URL and remove the link element
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
        })
            .catch((error) => {
                console.error('File download error:', error);
            });
    }

    const handleSubmit = (values, setSubmitting, resetForm) => {
        // Handle form submission with file and field data
        KriyaService.uploadFile(values);
        setSubmitting(false);
        resetForm();
        setSuccess(true);
        setMessage("File Uploaded Successfully!")
    };

    let initialValuesDefault = {
        fileName: "",
        fileDescription: "",
        fileUpload: ""
    }


    const validationSchema = Yup.object().shape({
        fileName: Yup.string().required('Name is required'),
        fileDescription: Yup.string().required('Description is required'),
        fileUpload: Yup.string().required('Name is required')
    });

    return (
        <Grid container>
            <Grid item xs={12}>
                <Header
                    title="Mentor File Upload"
                    breadcrumbs={[
                        { label: "Home", link: "/home" },
                        { label: "Mentor File Upload" }
                    ]}
                />
            </Grid>
            <Grid container>
                <Paper elevation={2} style={{ padding: "3em", width: "100%" }}>
                    {/* <Grid item>
                        <h2>Mentor File Upload</h2>
                    </Grid> */}
                    <Grid item>
                        <CommonForm
                            fields={fields}
                            submitLabel={"Submit"}
                            submittingLabel={"Submitting"}
                            initialValues={initialValuesDefault}
                            validationSchema={validationSchema}
                            validateOnBlur={true}
                            //   edit={!!props.match.params.id}
                            validateOnChange={true}
                            enableReinitialize
                            onSubmit={(values, { setSubmitting, setFieldError, resetForm }) => {
                                console.log("on submit ================== ", values)
                                handleSubmit(values, setSubmitting, resetForm);
                            }}
                            formikRef={formikForm}
                            buttonSize="3"
                            buttonPosition="right"
                        />
                    </Grid>
                </Paper>
            </Grid>

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
            <SuccessPopup 
                open={success}
                message={message}
                handleClose={handleClose}
                autoHideDuration={5000}
            />
        </Grid>

        // <div className="form-container">
        //     <h2>Formik Form</h2>
        //     <Formik initialValues={{ name: '', email: '', file: null }} onSubmit={handleSubmit}>
        //         {({ setFieldValue, values }) => (
        //             <Form className="my-form">
        //                 <div className="form-group">
        //                     <label htmlFor="name">Name</label>
        //                     <Field type="text" id="name" name="name" />
        //                     <ErrorMessage name="name" component="div" className="error-message" />
        //                 </div>

        //                 <div className="form-group">
        //                     <label htmlFor="email">Email</label>
        //                     <Field type="email" id="email" name="email" />
        //                     <ErrorMessage name="email" component="div" className="error-message" />
        //                 </div>

        //                 <div>
        //                     <Field type="file" name="file">
        //                         {({ field, form }) => (
        //                             <div>
        //                                 <input
        //                                     type="file"
        //                                     onChange={(event) => {
        //                                         form.setFieldValue(field.name, event.currentTarget.files[0]);
        //                                     }}
        //                                 />
        //                                 {values.file && (
        //                                     <div>
        //                                         <p>File Name: {values.file.name}</p>
        //                                         <p>File Size: {values.file.size} bytes</p>
        //                                     </div>
        //                                 )}
        //                             </div>
        //                         )}
        //                     </Field>
        //                 </div>

        //                 <Button type="submit" variant="contained" color="primary">
        //                     Submit
        //   </Button>
        //             </Form>)}
        //     </Formik>
        // </div>

        // <Container maxWidth="sm" className="container">
        //   <Formik
        //     initialValues={{
        //       name: '',
        //       email: '',
        //       file: null
        //     }}
        //     onSubmit={handleSubmit}
        //   >
        //     {({ setFieldValue, values }) => (
        //       <Form className="form">
        //         <Field name="name" type="text" placeholder="Name" />
        //         <Field name="email" type="email" placeholder="Email" />

        //         <Field type="file" name="file">
        //           {({ field, form }) => (
        //             <div>
        //               <input
        //                 type="file"
        //                 onChange={(event) => {
        //                   form.setFieldValue(field.name, event.currentTarget.files[0]);
        //                 }}
        //               />
        //               {values.file && (
        //                 <div>
        //                   <p>File Name: {values.file.name}</p>
        //                   <p>File Size: {values.file.size} bytes</p>
        //                 </div>
        //               )}
        //             </div>
        //           )}
        //         </Field>

        //         <Button type="submit" variant="contained" color="primary">
        //           Submit
        //         </Button>
        //       </Form>
        //     )}
        //   </Formik>
        // </Container>
    );
};

export default FileUpload;

