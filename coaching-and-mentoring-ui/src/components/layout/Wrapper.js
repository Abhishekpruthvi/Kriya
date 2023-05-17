
import Layout from './Layout';
import Box from '@mui/material/Box';
import { Outlet } from "react-router-dom";
export default function Wrapper(props) {

    return (
        <>
        <Box sx={{ display: 'flex' }}>
        <Layout/>
        <Outlet />
        </Box>
    
      </>
    )
}