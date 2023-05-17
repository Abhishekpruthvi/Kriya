import axios from 'axios';


async function getOpenAIResponse(message) {
    let url = process.env.REACT_APP_OPEN_AI_URL;
    let options = {
        method: 'POST',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`
        },
        data: {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
            temperature: 0.7
        }
    };
    let response = await axios(options);
    let responseOK = response && response.status === 200 && response.statusText === 'OK';
    if (responseOK) {
        return response.data;
    }
}

export const openAIService = {
    getOpenAIResponse
}