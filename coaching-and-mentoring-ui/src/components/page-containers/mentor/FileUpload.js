import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Container } from '@mui/material';
import { Grid, Paper } from '@mui/material';
import CommonForm from '../../common/CommonForm'
import '../FormStyles.css'
import * as Yup from "yup";
import {Header} from '../../common/HeaderFooter'


const textFieldStyles = {
    fontSize: '15px',
    border: 'none',
    padding: '8px' ,
    backgroundColor: '#f0f0f0',
    margin: '5px'
  };



const FileUpload = () => {

    let formikForm = useRef(null);

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
    const handleSubmit = (values) => {
        // Handle form submission with file and field data
        console.log(values);
    };

    let initialValuesDefault = {
        fileName: null,
        fileDescription: null,
        fileUpload:null
    }

    const formInitialValues = { ...initialValuesDefault };

    const validationSchema = Yup.object().shape({
        // fileName: Yup.string().required('Name is required'),
        // fileDescription: Yup.string().required('Name is required'),
        // fileUpload: Yup.string().required('Name is required'),
        // email field without validation rule
      });

      console.log("values=============",formInitialValues)
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
                <Paper elevation={2} style={{ padding: "3em" , width:"100%" }}>
                    {/* <Grid item>
                        <h2>Mentor File Upload</h2>
                    </Grid> */}
                    <Grid item>
                        <CommonForm
                            fields={fields}
                            submitLabel={"Submit"}
                            submittingLabel={"Submitting"}
                            initialValues={formInitialValues}
                            // validationSchema={Yup.object().shape(validationSchema)}
                            // validateOnBlur={true}
                            //   edit={!!props.match.params.id}
                            // validateOnChange={true}
                            enableReinitialize
                            onSubmit={(values, { setSubmitting, setFieldError }) => {
                                console.log("on submit ================== ", values)
                                // createSubOrganization(values, setSubmitting);
                            }}
                            formikRef={formikForm}
                            buttonSize="3"
                            buttonPosition="right"
                        />
                    </Grid>
                </Paper>
            </Grid>
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

