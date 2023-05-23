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
    height: '100vh',
    backgroundImage: 'linear-gradient(180deg, #C7C5F4, #776BCC)',
  },
  paper: {
    padding: '20px',
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

function MentorSignupPage() {
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
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    mobileNumber: "",
    email: "",
    role: "ROLE_MENTOR"
  }


  const formInitialValues = { ...initialValuesDefault };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!'),
    email: Yup.string().email('Invalid email').required('Email is required!'),
    firstName: Yup.string().required("First Name is required!"),
    lastName: Yup.string().required("Last Name is required!"),
    mobileNumber: Yup.string().required("Mobile Number is required!")
  });

  const handleSubmit = (values, resetForm, setSubmitting) => {
    // Handle form submission logic here
    console.log('Form submitted with value:', values);

    KriyaService.registerUser(values).then(response => {
      console.log("response ======================== ", response);
      if (response.status === 200)
        setSuccessOpen(true);
      else
        setFailureOpen(true);
    });
    setSubmitting(false);
    resetForm();
  };

  return (


    <Grid container className={classes.container}>
      <Paper className={classes.paper}>
        <Grid item>
          <Typography variant="h5" align="center" gutterBottom className={classes.title}>
            Mentor Sign Up
         </Typography>
        </Grid>
        <SuccessPopup open={successOpen} message="Success!" handleClose={handleSuccessClose} />
        <FailurePopup open={failureOpen} message="Failure!" handleClose={handleFailureClose} />
        <Grid item style={{ marginLeft: "10px" }}>
          <CommonForm
            fields={fields}
            submitLabel={"Sign Up"}
            submittingLabel={"Signing Up"}
            initialValues={initialValuesDefault}
            // validationSchema={validationSchema}
            // validateOnBlur={true}
            //   edit={!!props.match.params.id}
            // validateOnChange={true}
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



    // <div className={classes.container}>
    //   <Container maxWidth="sm">
    //     <Paper className={classes.paper} elevation={3}>
    //       <Typography variant="h5" align="center" className={classes.title}>
    //         Mentor Sign Up
    //       </Typography>
    //       <form onSubmit={handleSubmit}>
    //       <TextField
    //           className={classes.textField}
    //           label="Name"
    //           variant="outlined"
    //           fullWidth
    //           value={name}
    //           onChange={handleNameChange}
    //         />
    //         <TextField
    //           className={classes.textField}
    //           label="Username"
    //           variant="outlined"
    //           fullWidth
    //           value={username}
    //           onChange={handleUsernameChange}
    //         />
    //         <TextField
    //           className={classes.textField}
    //           label="Mobile Number"
    //           variant="outlined"
    //           fullWidth
    //           value={mobileNumber}
    //           onChange={handleMobileNumberChange}
    //         />
    //         <TextField
    //           className={classes.textField}
    //           label="Email"
    //           variant="outlined"
    //           fullWidth
    //           value={email}
    //           onChange={handleEmailChange}
    //         />
    //         <TextField
    //           className={classes.textField}
    //           label="Password"
    //           variant="outlined"
    //           fullWidth
    //           type="password"
    //           value={password}
    //           onChange={handlePasswordChange}
    //         />
    //         <Button
    //           className={classes.button}
    //           variant="contained"
    //           fullWidth
    //           type="submit"
    //         >
    //           Sign Up
    //         </Button>
    //       </form>
    //     </Paper>
    //   </Container>
    // </div>
  );
}

export default MentorSignupPage;
