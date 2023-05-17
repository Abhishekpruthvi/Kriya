import axios from 'axios';

function getBaseUsrl() {
    return process.env.REACT_APP_KRIYA_BASE_URL;
}
async function registerUser(data) {
    let url = `${getBaseUsrl()}${process.env.REACT_APP_OPEN_API_REGISTER}`
    let options = {
        method: 'POST',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            // Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`
        },
        data: data
    };
    let response = await axios(options);
    return response;
}

async function login(data) {
    let url = `${getBaseUsrl()}${process.env.REACT_APP_OPEN_API_LOGIN}`
    let options = {
        method: 'POST',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            // Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`
        },
        data: data
    };
    try{
        let response = await axios(options);
    return response;
    } catch(error) {
        console.log('Error', error);
        return error;
    }
    
}


export const KriyaService = {
    registerUser,
    login
}