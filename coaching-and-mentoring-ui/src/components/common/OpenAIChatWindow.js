import React, { useState, useRef, useEffect } from 'react';
import './ChatWindow.css'; // Import your CSS file for styling
import { Send } from '@mui/icons-material';
import { openAIService } from '../service/openAIService';

import { Formik, Form, Field, resetForm } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';



const ChatBotContainer = styled(Box)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f0f0f0;
  width: 40%;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 50%;
`;


function OpenAIChatWindow() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);

    const [qa, setQa] = useState([]);

    const messagesEndRef = useRef(null)

    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [qa]);


    const toggleChatWindow = () => {
        setIsOpen(!isOpen);
        inputRef.current.focus();
    };



    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (values, { resetForm }) => {
        // Handle form submission logic here
        console.log('Form submitted with value:', values);
        setQa([...qa, values.message])
        openAIService.getOpenAIResponse(values.message).then(response => {
            setQa([...qa, values.message, response.choices[0].message.content])
            resetForm();
        });

    };

    let initialValuesDefault = {
        message: null
    };
    let formInitialValues = { ...initialValuesDefault }
    return (
        <>
        <ContactSupportIcon color="primary" style={{fontSize:"50px"}} className="contact-support-icon"  onClick={()=>setIsOpen(!isOpen)}/>
        {isOpen ? 
        <ChatBotContainer className={`chat-window open`}>
            <div className="chat-header" onClick={toggleChatWindow}>
                How can I help you today ?
             </div>

            <div style={{ overflowY: 'auto', flex: 1 }}>

                {qa.map((qa, index) => {
                    return (
                        <>
                            <div ref={messagesEndRef} className={index % 2 == 0 ? "float-right" : "float-left"}>
                                {qa}
                            </div>
                            <div style={{height:"50px"}}>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className="chat-footer">
                {/* Chat input field, send button, etc. */}
            </div>

            <Formik initialValues={{ message: '' }} onSubmit={handleSubmit}>
                <Form>
                    <Field
                        as={TextField}
                        name="message"
                        variant="outlined"
                        placeholder="Type your message..."
                        inputRef={inputRef}
                        inputProps={{
                            style: { border: 'none' },
                        }}
                        sx={{
                            width: '95%', '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    border: 'none',
                                },
                            },
                        }}
                    />
                    <Button type="submit" className="submit-button" startIcon={<Send />} />
                </Form>
            </Formik>
        </ChatBotContainer>
        : null}
        </>






        // <div className={`chat-window ${isOpen ? 'open' : 'closed'}`}>
        //     <div className="chat-header" onClick={toggleChatWindow}>
        //         How can I help you today ?
        //     </div>
        //     <div className="chat-content">
        //         {/* Chat content */}

        //         {qa.map((qa, index) => {
        //             return (

        //                 <div ref={messagesEndRef} className={index % 2 == 0 ? "float-right" : "float-left"}>
        //                     {qa}
        //                 </div>
        //             )
        //         })}
        //     </div>

        //     <div className="chat-footer">
        //         {/* Chat input field, send button, etc. */}
        //     </div>

        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="text"
        //             value={value}
        //             onChange={handleChange}
        //             placeholder="Enter the message  "
        //             className="borderless-input"
        //             ref={inputRef}
        //         />
        //         <Button type="submit" className="submit-button" startIcon={<Send />} />
        //     </form>

        // </div>
    );
}

export default OpenAIChatWindow;
