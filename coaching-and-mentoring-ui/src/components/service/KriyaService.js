import axios from 'axios';

function getBaseUsrl() {
    return process.env.REACT_APP_KRIYA_BASE_URL;
}

function getUserDetails() {
    const currentUser = JSON.parse(localStorage.getItem("kriyaUser"));
    return currentUser;
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

async function fetchAllMentors() {
    const user = getUserDetails();
    console.log("User details fetched", user);
    let url = `${getBaseUsrl()}${process.env.REACT_APP_FETCH_ALL_MENTORS}`
    let options = {
        method: 'GET',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${user.token}`
        },
    };
    try{
        let response = await axios(options);
    return response;
    } catch(error) {
        console.log('Error', error);
        return error;
    }
    
}


async function fetchAllStudents() {
    const user = getUserDetails();
    console.log("User details fetched", user);
    let url = `${getBaseUsrl()}${process.env.REACT_APP_FETCH_ALL_STUDENTS}`
    let options = {
        method: 'GET',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${user.token}`,
        },
    };
    try{
        let response = await axios(options);
    return response;
    } catch(error) {
        console.log('Error', error);
        return error;
    }
    
}

async function fetchAllFiles() {
    const user = getUserDetails();
    console.log("User details fetched", user);
    let url = `${getBaseUsrl()}${process.env.REACT_APP_FETCH_ALL_FILES}`
    let options = {
        method: 'GET',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${user.token}`,
            userName: user.userName
        },
    };
    try{
        let response = await axios(options);
    return response;
    } catch(error) {
        console.log('Error', error);
        return error;
    }
    
}

async function downloadFile(fileId) {
    const user = getUserDetails();
    console.log("User details fetched", user);
    let url = `${getBaseUsrl()}${process.env.REACT_APP_DOWNLOAD_FILE}/${fileId}`
    let options = {
        method: 'GET',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${user.token}`,
            userName: user.userName
        },
        responseType: 'blob'
    };
    try{
        let response = await axios(options);
    return response;
    } catch(error) {
        console.log('Error', error);
        return error;
    }

}

async function uploadFile(file) {
    console.log("file ========================", file)
    const user = getUserDetails();
    console.log("User details fetched", user);
    let url = `${getBaseUsrl()}${process.env.REACT_APP_UPLOAD_FILE}`
    
    const formData = new FormData();
    formData.append('file', file.fileUpload);
    formData.append('name', file.fileName);
    formData.append('description', file.fileDescription);
    formData.append('owner', user.userName);

    let options = {
        method: 'POST',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user.token}`,
            userName: user.userName
        },
        data:formData
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
    login,
    fetchAllMentors,
    fetchAllStudents,
    fetchAllFiles,
    downloadFile,
    uploadFile
}