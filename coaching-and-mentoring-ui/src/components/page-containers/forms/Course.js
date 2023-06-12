import React, { useState, useRef } from 'react';
import { Container, Paper, TextField, Button, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CommonForm from '../../common/CommonForm';
import { KriyaService } from '../../service/KriyaService';
import SuccessPopup from '../../common/SuccessPopup';
import FailurePopup from '../../common/FailurePopup';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '110vh',
    backgroundImage: 'linear-gradient(180deg, #C7C5F4, #776BCC)',
  },
  paper: {
    padding: '2rem',
    maxWidth: '90%',
    backgroundColor: '#f5f5f5',
    backgroundImage: 'linear-gradient(360deg, lightgreen, lightblue, lavender)',
  },
  textField: {
    marginBottom: "10px !important",
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#4caf50',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#45a049',
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    color: '#333333',
  },
}));

function Course() {
  const classes = useStyles();

  let formikForm = useRef(null);

  const [successOpen, setSuccessOpen] = useState(false)
  const [failureOpen, setFailureOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  const handleFailureClose = () => {
    setFailureOpen(false);
  };


  const textFieldStyles = {
    fontSize: '20px',
    border: 'none',
    padding: '4px',
    backgroundColor: '#f0f0f0',
    margin: '5px',
  };

  let fields = [
    {
      type: "text",
      name: "name",
      label: "Name",
      grid: {
        xs: 12,
        sm: 3,
        style: textFieldStyles
      }
    },
    {
      type: "text",
      name: "institute",
      label: "Institute",
      grid: {
        xs: 12,
        sm: 3,
        style: textFieldStyles
      }
    },
    {
      type: "text",
      name: "contactNumber",
      label: "Contact Number",
      grid: {
        xs: 12,
        sm: 3,
        style: textFieldStyles
      }
    },
    {
      type: "text",
      name: "contactEmail",
      label: "Contact Back Email",
      grid: {
        xs: 12,
        sm: 3,
        style: textFieldStyles
      }
    },
    {
      type: "text",
      name: "audienceType",
      label: "Audience Type",
      grid: {
        xs: 12,
        sm: 3,
        style: textFieldStyles
      }
    },

    // {
    //   type: "empty",
    //   name: "empty",
    //   label: "",
    //   grid: {
    //     xs: 12,
    //     sm: 3,
    //   }
    // },
    {
      type: "text",
      name: "instituteRelation",
      label: "How are you related to Institute ?",
      grid: {
        xs: 12,
        sm: 3,
        style: textFieldStyles
      }
    },
    {
        type: "textarea",
        name: "courseDescription",
        label: "Course/Curriculum Type Description",
        grid: {
          xs: 12,
          sm: 4,
          style: textFieldStyles
        }
      },
    {
      type: "textarea",
      name: "topic",
      label: "Which topic would you like to have the workshop on, and what would you like us to cover there?",
      grid: {
        xs: 12,
        sm: 3,
        style: textFieldStyles
      }
    },

    {
      type: "textarea",
      name: "additionalPoints",
      label: "Any additional points would you like us to know about you/your institute ?",
      grid: {
        xs: 12,
        sm: 4,
        style: textFieldStyles
      }
    }

  ]

  let initialValuesDefault = {
    name: "",
    institute: "",
    contactNumber:"",
    contactEmail:"",
    audienceType:"",
    instituteRelation: "",
    courseDescription:"",
    topic: "",
    additionalPoints: ""
  }


  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    contactNumber: Yup.string().required('Contact Number is required!'),
    contactEmail: Yup.string().email('Invalid email').required('Email is required!'),
    topic: Yup.string().required("Topic Name is required!"),
    // lastName: Yup.string().required("Last Name is required!"),
    // mobileNumber: Yup.string().required("Mobile Number is required!")
  });

  const handleSubmit = (values, resetForm, setSubmitting) => {
    // Handle form submission logic here
    console.log('Form submitted with value:', values);

    KriyaService.contactCourse(values).then(response => {
        console.log("response ======================== ", response);
        if (response.status === 200){
          setSuccessOpen(true);
          setMessage("Message sent Successfully! Our team will get back to you.")
        }
        else {
          setFailureOpen(true);
          setMessage("Failed to send the message! Please try after sometime")
        }
          
      });
    setSubmitting(false);
    resetForm();
  };

  return (


    <Grid container className={classes.container}>
      <Paper className={classes.paper}>
        <Grid item>
          <Typography variant="h5" align="center" gutterBottom className={classes.title}>
            Contact Us for Course
         </Typography>
        </Grid>
        <SuccessPopup open={successOpen} message={message} handleClose={handleSuccessClose} />
        <FailurePopup open={failureOpen} message={message} handleClose={handleFailureClose} />
        <Grid item style={{ marginLeft: "10px" }}>
          <CommonForm
            fields={fields}
            submitLabel={"Send Message"}
            submittingLabel={"Sending Message"}
            initialValues={initialValuesDefault}
            validationSchema={validationSchema}
            validateOnBlur={true}
            validateOnChange={true}
            enableReinitialize
            onSubmit={(
              values,
              { setSubmitting, resetForm, setFieldError }
            ) => {
              handleSubmit(values, resetForm, setSubmitting);
            }}
            formikRef={formikForm}
            buttonSize={6}
            buttonPosition="center"
          />
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Course;
