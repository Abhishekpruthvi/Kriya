import React, { useState } from 'react';
import {Grid} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Header } from '../../common/HeaderFooter';
import './StudentTest.css';
import { CustomizedPrimaryButton } from '../../common/CustomizedPrimaryButton'

function StudentVAKTest() {


    const breadcrumbs = [
        { label: 'Home', link: '/student/home' },
        { label: 'Student VAK Test' },
        // { label: 'Category', link: '/products/category' },
        // { label: 'Product', link: '/products/category/product' },
    ];

    const questionList = [
        {
            questionId: 1,
            question: "1. I Prefer to have communication in a written form.",
            answer: "none",
            category: "V"

        },

        {
            questionId: 2,
            question: "2. I often hum to myself.",
            answer: "none",
            category: "K",
        },
        {
            questionId: 3,
            question: "3. I usually have high telephone bills.",
            answer: "none",
            category: "A",
        },
        {
            questionId: 4,
            question: "4. I can tell a lot about a person by the sound of his or her voice.",
            answer: "none",
            category: "A",
        },
        {
            questionId: 5,
            question: "5. I spend good time on looking good.",
            answer: "none",
            category: "V",
        },
        {
            questionId: 6,
            question: "6. I really enjoy getting a massage.",
            answer: "none",
            category: "K",
        },
        {
            questionId: 7,
            question: "7. People Watching is one of my favourite pastimes.",
            answer: "none",
            category: "V",
        },
        {
            questionId: 8,
            question: "8. I like to get up and stretch frequently",
            answer: "none",
            category: "K",
        },
        {
            questionId: 9,
            question: "9. When I've had a bad day, my body tenses up.",
            answer: "none",
            category: "K",
        },
        {
            questionId: 10,
            question: "10. I often read while I am eating.",
            answer: "none",
            category: "V",
        },
        {
            questionId: 11,
            question: "11. I think flowers are worth the expenses to brighten up a home/office.",
            answer: "none",
            category: "V",
        },
        {
            questionId: 12,
            question: "12. I enjoy and do take a hot bath at the end of the day.",
            answer: "none",
            category: "K",
        },
        {
            questionId: 13,
            question: "13. I prefer to rather hear poetry and songs than reading them.",
            answer: "none",
            category: "A",
        },
        {
            questionId: 14,
            question: "14. I have a tendency to gain weight.",
            answer: "none",
            category: "K",
        },
        {
            questionId: 15,
            question: "15. I usually write down my goals.",
            answer: "none",
            category: "V",
        },
        {
            questionId: 16,
            question: "16. I tend to talk to myself a lot.",
            answer: "none",
            category: "A",
        },
        {
            questionId: 17,
            question: "17. I judge a person by the way he or she dresses.",
            answer: "none",
            category: "V",
        },
        {
            questionId: 18,
            question: "18. I have a collection of audio albums, tapes and CDs.",
            answer: "none",
            category: "A",
        },
        {
            questionId: 19,
            question: "19. I often admire the artwork used in advertisements.",
            answer: "none",
            category: "V",
        },
        {
            questionId: 20,
            question: "20, I have a hard time falling asleep at night if I hear a clock ticking.",
            answer: "none",
            category: "A",
        },
        {
            questionId: 21,
            question: "21. In my family there is a lot of hugging and touching",
            answer: "none",
            category: "K",
        },
        {
            questionId: 22,
            question: "22. I am a damn good listener.",
            answer: "none",
            category: "A",
        },

        {
            questionId: 23,
            question: "23. When I have a spare time, I like to dance or exercise.",
            answer: "none",
            category: "K",
        },
        {
            questionId: 24,
            question: "24. I enjoy good conversations and long ones.",
            answer: "none",
            category: "A",
        },
        {
            questionId: 25,
            question: "25. I go to art museums and exhibits pretty often.",
            answer: "none",
            category: "V",
        },
        {
            questionId: 26,
            question: "26. When there is music playing. I can't help but tap my feet.",
            answer: "none",
            category: "K",
        },
        {
            questionId: 27,
            question: "27. I like to keep my house looking good.",
            answer: "none",
            category: "V",
        },
        {
            questionId: 28,
            question: "28. I talk to my dog or cat",
            answer: "none",
            category: "K",
        },
        {
            questionId: 29,
            question: "29. I tend to touch people when I am talking to them.",
            answer: "none",
            category: "K",
        },
        {
            questionId: 30,
            question: "30. I can tell lot about a person by the way he or she shakes hands.",
            answer: "none",
            category: "K",
        }

    ];

    const [qaList, setQaList] = useState(questionList);

    const handleAnswerChange = (question, answer) => {
        const updatedData = qaList.map(obj => {
            if (obj.questionId === question.questionId) {
                return {
                    ...obj,
                    answer: answer
                }
            }
            return obj;
        })
        setQaList(updatedData);
    };

    const [result, setResult] = useState('');
    const [visual, setVisual] = useState(0);
    const [kinesthetic, setKinesthetic] = useState(0);
    const [auditory, setAuditory] = useState(0);
    const [unAnswered, setUnAnswered] = useState(0);

    const handleSubmit = () => {
        // Handle the submit action here
        console.log('Form submitted');
        let V = 0;
        let K = 0;
        let A = 0;
        let unAnswered = 0;
        Object.values(qaList).forEach((qa) => {
            if (qa.answer === "Yes") {
                qa.category === "V" ? V = V + 1 : qa.category === "K" ? K = K + 1 : A = A + 1;
            }
            if (qa.answer === "none") {
                unAnswered = unAnswered + 1;
            }
        })
        setVisual(V);
        setKinesthetic(K);
        setAuditory(A);
        setUnAnswered(unAnswered);

        if (V > K && V > A)
            setResult("Visual");
        else if (K > V && K > A)
            setResult("Kinesthetic")
        else if (A > V && A > K)
            setResult("Auditory")
        else if (A === V && A === K)
            setResult("Auditory , Visual and Kinesthetic")
        else if (A === V)
            setResult("Auditory and Visual")
        else if (A === K)
            setResult("Auditory and Kinesthetic")
        else if (V === K)
            setResult("Visual and Kinesthetic")

        setIsPopupOpen(true);
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setQaList(questionList);
    };

    return (
        <>
            <div style={{ width: "100%" }}>
                <Header title="KRIYA Student Test"
                    breadcrumbs={breadcrumbs} />

                <div className="yes-no-question">
                    {qaList.map((question) => (
                        <div key={question.questionId} className="dashed-line">
                            <h4>{question.question}</h4>
                            <label key={"Yes"}>
                                <input
                                    type="radio"
                                    name={`question-${question.questionId}`}
                                    value={"Yes"}
                                    checked={question.answer === "Yes"}
                                    onChange={() => handleAnswerChange(question, "Yes")}
                                />
                                {"Yes"}
                            </label>
                            <label key={"No"}>
                                <input
                                    type="radio"
                                    name={`question-${question.questionId}`}
                                    value={"No"}
                                    checked={question.answer === "No"}
                                    onChange={() => handleAnswerChange(question, "No")}
                                />
                                {"No"}
                            </label>

                        </div>
                    ))}

                </div>
            
                <CustomizedPrimaryButton
                    fullWidth={true}
                    variant="contained"
                    color="primary"
                    label={"Submit"}
                    position={"center"}
                    onClick={() => handleSubmit()}
                    width="6"
                    fixedBUtton={true}
                ></CustomizedPrimaryButton>

            </div>

            <div>
                {isPopupOpen && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <h2>Result</h2>
                            <p>Visual Score : {visual}</p>
                            <p>Auditory Score : {auditory}</p>
                            <p>Kinesthetic Score : {kinesthetic}</p>
                            <p>Not Answered : {unAnswered}</p>
                            <p> Result : {result}</p>
                            <CustomizedPrimaryButton
                                onClick={closePopup}
                                variant="contained"
                                color="primary"
                                label={"Retake Test"}
                                width="6"
                                position="center"
                            ></CustomizedPrimaryButton>
                        </div>
                    </div>
                )}
            </div>


        </>

    )
}

export default StudentVAKTest;