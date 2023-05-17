import React, { useState, useRef } from 'react';
import { Container, Paper, TextField, Button, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CommonForm from '../../common/CommonForm'
import { KriyaService } from '../../service/KriyaService';
import SuccessPopup from '../../common/SuccessPopup';
import FailurePopup from '../../common/FailurePopup';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'linear-gradient(180deg, #C7C5F4, #776BCC)',
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 400,
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

function StudentSignupPage() {
  const classes = useStyles();

  let formikForm = useRef(null);

  const [successOpen, setSuccessOpen] = useState(false)
  const [failureOpen, setFailureOpen] = useState(false);

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  const handleFailureClose = () => {
    setFailureOpen(false);
  };


  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log('Form submitted with value:', values);

    KriyaService.registerUser(values).then(response => {
      console.log("response ======================== ", response);
      if (response.status === 200)
        setSuccessOpen(true);
      else
        setFailureOpen(true);

      resetForm();
    });


  };

  const textFieldStyles = {
    fontSize: '20px',
    border: 'none',
    padding: '8px',
    backgroundColor: '#f0f0f0',
    margin: '5px'
  };

  let fields = [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      grid: {
        xs: 12,
        sm: 12,
        style: textFieldStyles
      }
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      grid: {
        xs: 12,
        sm: 12,
        style: textFieldStyles
      }
    },
    {
      type: "text",
      name: "userName",
      label: "User Name",
      grid: {
        xs: 12,
        sm: 12,
        style: textFieldStyles
      }
    },
    {
      type: "text",
      name: "password",
      label: "Password",
      grid: {
        xs: 12,
        sm: 12,
        style: textFieldStyles
      }
    },
    {
      type: "text",
      name: "email",
      label: "Email",
      grid: {
        xs: 12,
        sm: 12,
        style: textFieldStyles
      }
    },
    {
      type: "text",
      name: "mobileNumber",
      label: "Mobile Number",
      grid: {
        xs: 12,
        sm: 12,
        style: textFieldStyles
      }
    }

  ]

  let initialValuesDefault = {
    firstName: null,
    lastName: null,
    userName: null,
    password: null,
    mobileNumber: null,
    email: null,
    role: "ROLE_STUDENT"
  }


  const formInitialValues = { ...initialValuesDefault };


  return (
    <Grid container className={classes.container}>
      <Paper className={classes.paper}>
        <Grid item>
          <Typography variant="h5" align="center" gutterBottom className={classes.title}>
            Student Sign Up
         </Typography>
        </Grid>
        <SuccessPopup open={successOpen} message="Success!" handleClose={handleSuccessClose} />
        <FailurePopup open={failureOpen} message="Failure!" handleClose={handleFailureClose} /> 
        <Grid item style={{ marginLeft: "10px" }}>
          <CommonForm
            fields={fields}
            submitLabel={"Sign Up"}
            submittingLabel={"Signing Up"}
            initialValues={formInitialValues}
            // validationSchema={validationSchema}
            // validateOnBlur={true}
            //   edit={!!props.match.params.id}
            // validateOnChange={true}
            enableReinitialize
            onSubmit={handleSubmit}
            formikRef={formikForm}
            buttonSize={6}
            buttonPosition="center"
          />
        </Grid>
      </Paper>
    </Grid>

  );
}

export default StudentSignupPage;