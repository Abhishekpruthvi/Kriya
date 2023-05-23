import logo from './logo.svg';
import './App.css';
import Wrapper from './components/layout/Wrapper'
import StudentHome from './components/page-containers/student/StudentHome'
import StudentVAKTest from './components/page-containers/student/StudentVAKTest'
import StudentTest from './components/page-containers/student/StudentTest'
import LoginPage from './components/page-containers/LoginPage'
import MentorSignupPage from './components/page-containers/mentor/MentorSignUpPage'
import StudentSignupPage from './components/page-containers/student/StudentSignUpPage'
import FileUpload from './components/page-containers/mentor/FileUpload'
import AdminLoginPage from './components/page-containers/admin/AdminLoginPage'
import AdminHome from './components/page-containers/admin/AdminHome'
import MentorHome from './components/page-containers/mentor/MentorHome'
import MentorList from './components/page-containers/mentor/MentorList'
import StudentList from './components/page-containers/student/StudentList'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<LoginPage/>,
  },
  {
    path:"/admin/",
    element:<AdminLoginPage/>,
  },
  {
    path:"/admin/login",
    element:<AdminLoginPage/>,
  },
  {
    path:"/login",
    element:<LoginPage/>,
  },
  {
    path:"/mentor/signup",
    element:<MentorSignupPage/>,
  },
  {
    path:"/student/signup",
    element:<StudentSignupPage/>,
  },
  {
    path:"/",
    element:<Wrapper/>,
    children:[
      {
        path: "student/home",
        element: <StudentHome />,
      },
      {
        path: "mentor/home",
        element: <MentorHome />,
      },
      {
        path: "mentor/student/list",
        element: <StudentList />,
      },
      {
        path: "/admin/home",
        element: <AdminHome />,
      },
      {
        path: "/admin/mentor/list",
        element: <MentorList />,
      },
      {
        path: "/admin/student/list",
        element: <StudentList />,
      },
      {
        path: "/student/test1",
        element: <StudentTest />,
      },
      {
        path: "/student/test2",
        element: <StudentVAKTest />,
      },
      {
        path:"/mentor/file/list",
        element: <FileUpload />
      }
    ]
  }
  
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    </>
  );
}

export default App;
