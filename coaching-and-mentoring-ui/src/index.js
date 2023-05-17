import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, createTheme } from '@mui/material/styles'


const theme = createTheme({
  overrides: {
    // MuiFormLabel: {
    //   root: {
    //     fontSize: 12
    //   }
    // },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: {}
        }
      }
    },
    MuiInputLabel: {
      root: {
        fontSize: 12
      },
      outlined: {},
      shrink: {
        "&&&": {
          transform: "translate(14px,-6px) scale(.9)",
          transformOrigin: "top center"
        }
      }
    },
    MuiTypography: {
      body1: {
        fontSize: 12
      }
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "rgba(63, 81, 181, 0.08)"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        fontSize: 12,
        "&$disabled": {
          backgroundColor: "#ddd"
        },
        "&:hover:not($disabled):not($focused) $notchedOutline": {
          borderColor: "#166aab"
        }
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
