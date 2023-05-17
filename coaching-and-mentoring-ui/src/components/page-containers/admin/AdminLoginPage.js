import React, { useState, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, Grid, Paper, TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CommonForm from '../../common/CommonForm'
import '../LoginPage.css'
import * as Yup from 'yup';


// .login-page {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   margin-left: 30%;
// }

// .grid-container {
//   width: 100%;
//   height: 100%;
// }

// .paper-container {
//   width: 40%;
//   padding: 20px;
// }

// display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'linear-gradient(180deg, #C7C5F4, #776BCC)',
  },
  paper: {
    padding: theme.spacing(4),
    width: "30%",
    borderRadius: 10,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: 'linear-gradient(0deg, skyblue, lightgreen, lightgrey)'
  },
  textField: {
    height: "50px",
    marginBottom: "20px !important",
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#f50057',
    color: 'white',
    '&:hover': {
      backgroundColor: '#d5004f',
    },
  },
  title: {
    color: 'lightblack',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    padding: '0px 0px 10px 0px'
  },
}));


const textFieldStyles = {
  fontSize: '20px',
  border: 'none',
  padding: '8px' ,
  backgroundColor: '#f0f0f0',
  margin: '5px'
};


function AdminLoginPage() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  let formikForm = useRef(null);


  let fields = [
    {
      type: "text",
      name: "userName",
      label: "User Name",
      // placeholder: "User Name",
      grid: {
        xs: 12,
        sm: 12,
        style: textFieldStyles
      }
    },

    {
      type: "password",
      name: "password",
      label: "Password",
      // placeholder: "Password",
      grid: {
        xs: 12,
        sm: 12,
        style: textFieldStyles
      }
    },
    // {
    //     type: "fileUpload",
    //     name: "fileUpload",
    //     label: "File Upload",
    //     placeholder: "File Upload",
    //     grid: {
    //         xs: 12,
    //         sm: 3,
    //         className: ""
    //     }
    // }
  ]

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/admin/home');
  };

  let initialValuesDefault = {
    userName: null,
    password: null
  }

  const validationSchema = Yup.object().shape({
    userName: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formInitialValues = { ...initialValuesDefault };

  return (


    // <Grid className={classes.container}>
    //   <Paper className={classes.paper}>
    //     <Grid item>
    //       <Typography variant="h5" align="center" gutterBottom className={classes.title}>
    //         Student Login
    //    </Typography>
    //     </Grid>
    //     <h1>Welcome to the Login Page</h1>
    //     {/* Your form or content here */}
    //   </Paper>
    // </Grid>

    <Grid container className={classes.container}>
      <Paper className={classes.paper}>
        <Grid item>
          <Typography variant="h5" align="center" gutterBottom className={classes.title}>
            Admin Login
         </Typography>
        </Grid>
        <Grid item >
          <CommonForm
            fields={fields}
            submitLabel={"Login"}
            submittingLabel={"Logging In"}
            initialValues={formInitialValues}
            // validationSchema={validationSchema}
            // validateOnBlur={true}
            //   edit={!!props.match.params.id}
            // validateOnChange={true}
            enableReinitialize
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              console.log("on submit ================== ", values)
              // createSubOrganization(values, setSubmitting);
              handleSubmit()
            }}
            formikRef={formikForm}
            buttonSize={6}
            buttonPosition="center"
          />
        </Grid>
      </Paper>
    </Grid>






    // <div className={classes.container}>
    //   <Container maxWidth="sm" className="screen">
    //     <Paper className={classes.paper} elevation={3}>
    //       <Typography variant="h5" align="center" gutterBottom className={classes.title}>
    //         Student Login
    //       </Typography>
    //       <form onSubmit={handleSubmit}>
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
    //           color="primary"
    //           fullWidth
    //           type="submit"
    //         >
    //           Login
    //         </Button>

    //         {/* <Typography align="center" gutterBottom style={{marginTop:"10px"}}>

    //         Don't have an account ? 

    //       </Typography>
    //       <Button
    //           className={classes.button}
    //           variant="contained"
    //           color="error"
    //           fullWidth
    //           type="submit"
    //         >
    //           Sign Up
    //         </Button> */}
    //       </form>
    //     </Paper>
    //   </Container>
    // </div>
  );
}

export default AdminLoginPage;
