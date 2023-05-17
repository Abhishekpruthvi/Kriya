import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { Header } from '../../common/HeaderFooter';
import './StudentTest.css';
import {CustomizedPrimaryButton} from '../../common/CustomizedPrimaryButton'

function StudentTest() {


    const breadcrumbs = [
        { label: 'Home', link: '/student/home' },
        { label: 'Student Test' },
        // { label: 'Category', link: '/products/category' },
        // { label: 'Product', link: '/products/category/product' },
    ];

    const questionList = [
        {
            questionId: 1,
            question: "1. People are impressed by me",
            answer: "none",
            category: "Significance"
        },
        {
            questionId: 2,
            question: "2. Feeling that I \"belong\" is important to me",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 3,
            question: "3. I need to feel grounded",
            answer: "none",
            category: "Comfort"
        },
        {
            questionId: 4,
            question: "4. I don't mind taking risks",
            answer: "none",
            category: "Variety"
        },
        {
            questionId: 5,
            question: "5. I don't fear change",
            answer: "none",
            category: "Variety"
        },
        {
            questionId: 6,
            question: "6. A failure is not a failure if you keep trying",
            answer: "none",
            category: "Growth"
        },
        {
            questionId: 7,
            question: "7. I believe in giving back",
            answer: "none",
            category: "Contribution"
        },
        {
            questionId: 8,
            question: "8. I am good at taking care of people",
            answer: "none",
            category: "love and connection"
        },
        {
            questionId: 9,
            question: "9. I often worry about what, people are saying about me",
            answer: "none",
            category: "Significance"
        },
        {
            questionId: 10,
            question: "10. It's important to contribute to your community ",
            answer: "none",
            category: "Comfort"
        },

        {
            questionId: 11,
            question: "11.I like to have as much stability in my life as possible ",
            answer: "none",
            category: "Contribution"
        },


        {
            questionId: 12,
            question: "12. I like to develop new ideas and project",
            answer: "none",
            category: "Variety"
        },
        {
            questionId: 13,
            question: "13. I am security conscious",
            answer: "none",
            category: "Comfort"
        },
        {
            questionId: 14,
            question: "14. I like to be an example to others",
            answer: "none",
            category: "Contribution"
        },
        {
            questionId: 15,
            question: "15. I am competitive",
            answer: "none",
            category: "Significance"
        },
        {
            questionId: 16,
            question: "16. I hate the feeling of boredom",
            answer: "none",
            category: "Variety"
        },
        {
            questionId: 17,
            question: "17. I know how to make connections with people",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 18,
            question: "18. I constantly aspire to improve",
            answer: "none",
            category: "Growth"
        },
        {
            questionId: 19,
            question: "19. Danger is never exciting to me",
            answer: "none",
            category: "Comfort"
        },
        {
            questionId: 20,
            question: "20. In most close relationship, I am usually the giver ",
            answer: "none",
            category: "love and Connection"
        },

        {
            questionId: 21,
            question: "21. There is always something new to be learnt",
            answer: "none",
            category: "Growth"
        },
        {
            questionId: 22,
            question: "22. I need to feel fulfilled",
            answer: "none",
            category: "Contribution"
        },
        {
            questionId: 23,
            question: "23. I frequently evaluate myself",
            answer: "none",
            category: "Significance"
        },
        {
            questionId: 24,
            question: "24. I like things to be predictable",
            answer: "none",
            category: "Comfort"
        },
        {
            questionId: 25,
            question: "25. I am more loving than most people",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 26,
            question: "26. Recognition is very important to me ",
            answer: "none",
            category: "Significance"
        },

        {
            questionId: 27,
            question: "27. I like the feeling of exertion",
            answer: "none",
            category: "Variety"
        },

        {
            questionId: 28,
            question: "28. I am very careful of not over spending",
            answer: "none",
            category: "Comfort"
        },
        {
            questionId: 29,
            question: "29. Education is important to me",
            answer: "none",
            category: "Growth"
        },
        {
            questionId: 30,
            question: "30. I am a leader",
            answer: "none",
            category: "Contribution"
        },
        {
            questionId: 31,
            question: "31. I am always looking for new experiences",
            answer: "none",
            category: "Variety"
        },
        {
            questionId: 32,
            question: "32. I sometimes over extend myself in trying to help people",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 33,
            question: "33. My routines and habits are important to me ",
            answer: "none",
            category: "Comfort"
        },

        {
            questionId: 34,
            question: "34. I take pride in who I am",
            answer: "none",
            category: "Significance"
        },

        {
            questionId: 35,
            question: "35. I like how learning something new changes my perspective ",
            answer: "none",
            category: "Growth"
        },
        {
            questionId: 36,
            question: "36. Sometimes the most important work is not what you are being paid for.",
            answer: "none",
            category: "Contribution"
        },
        {
            questionId: 37,
            question: "37. I am not an adventurous person",
            answer: "none",
            category: "Comfort"
        },
        {
            questionId: 38,
            question: "38. One would say that I am selfish",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 39,
            question: "39. I tend to spend beyond my limits",
            answer: "none",
            category: "Variety"
        },
        {
            questionId: 40,
            question: "40. I like to feel important",
            answer: "none",
            category: "Significance"
        },
        {
            questionId: 41,
            question: "41. Every failure is a learning experience ",
            answer: "none",
            category: "Growth"
        },
        {
            questionId: 42,
            question: "42. I like to learn in order to teach what I learn",
            answer: "none",
            category: "Contribution"
        },
        {
            questionId: 43,
            question: "43. I seek unity in my relationship",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 44,
            question: "44. I like to make a difference",
            answer: "none",
            category: "Contribution"
        },
        {
            questionId: 45,
            question: "45. I refrain from acting when I am not sure about all the consequences of my actions",
            answer: "none",
            category: "Comfort"
        },
        {
            questionId: 46,
            question: "46. I suffer when I feel blocked",
            answer: "none",
            category: "Growth"
        },
        {
            questionId: 47,
            question: "47. I enjoy suspense ",
            answer: "none",
            category: "Variety"
        },


        {
            questionId: 48,
            question: "48. Prestige is very important to me",
            answer: "none",
            category: "Significance"
        },


        {
            questionId: 49,
            question: "49. I am romantic",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 50,
            question: "50. I am constantly learning",
            answer: "none",
            category: "Growth"
        },
        {
            questionId: 51,
            question: "51. Giving is more important to me than receiving",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 52,
            question: "52. I like to be number one",
            answer: "none",
            category: "Significance"
        },
        {
            questionId: 53,
            question: "53. I hate taking risk of any kind",
            answer: "none",
            category: "Comfort"
        },
        {
            questionId: 54,
            question: "54. I like to constantly develop myself",
            answer: "none",
            category: "Growth"
        },
        {
            questionId: 55,
            question: "55. I like to give my time and energy to good causes",
            answer: "none",
            category: "Contribution"
        },
        {
            questionId: 56,
            question: "56. I like to be admired by others",
            answer: "none",
            category: "Significance"
        },
        {
            questionId: 57,
            question: "57. I am proud of my ability to learn new things ",
            answer: "none",
            category: "Growth"
        },

        {
            questionId: 58,
            question: "58. We are here to make this world a better place",
            answer: "none",
            category: "Contribution"
        },
        {
            questionId: 59,
            question: "59. I like to grow and develop in different areas",
            answer: "none",
            category: "Growth"
        },



        {
            questionId: 60,
            question: "60. Personal relationships are most important things in my life",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 61,
            question: "61. Sometimes I can be intimidating ",
            answer: "none",
            category: "Significance"
        },

        {
            questionId: 62,
            question: "62. I often look for new forms of entertainment",
            answer: "none",
            category: "Variety"
        },

        {
            questionId: 63,
            question: "63. I am concerned about anything that might be risky",
            answer: "none",
            category: "Comfort"
        },
        {
            questionId: 64,
            question: "64. Being fulfilled in your work is more important than being admired ",
            answer: "none",
            category: "Contribution"
        },

        {
            questionId: 65,
            question: "65. I strive to improve my skills",
            answer: "none",
            category: "Growth"
        },

        {
            questionId: 66,
            question: "66. I get close to people by being generous with money, time & energy",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 67,
            question: "67. I like to think carefully before I go into action ",
            answer: "none",
            category: "Comfort"
        },

        {
            questionId: 68,
            question: "68. Sometimes I like the thrill of experiencing fear ",
            answer: "none",
            category: "Variety"
        },

        {
            questionId: 69,
            question: "69. I need to feel respected",
            answer: "none",
            category: "Significance"
        },


        {
            questionId: 70,
            question: "70. When we stop growing, we die",
            answer: "none",
            category: "Growth"
        },
        {
            questionId: 71,
            question: "71. The feeling of togetherness is important to me ",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 72,
            question: "72. For life to make sense, u have to leave a mark in the world",
            answer: "none",
            category: "Contribution"
        },

        {
            questionId: 73,
            question: "73. Feeling comfortable at all times is important to me ",
            answer: "none",
            category: "Comfort"
        },
        {
            questionId: 74,
            question: "74. I enjoy being involved in many different activities",
            answer: "none",
            category: "Variety"
        },

        {
            questionId: 75,
            question: "75. I always compare myself to others in terms of success",
            answer: "none",
            category: "Significance"
        },
        {
            questionId: 76,
            question: "76. I need to have passion in my relationship",
            answer: "none",
            category: "love and Connection"
        },
        {
            questionId: 77,
            question: "77. If I am not contributing to others, my life is meaningless",
            answer: "none",
            category: "Contribution"
        },
        {
            questionId: 78,
            question: "78. When making a decision, I often think about what might be more enjoyable",
            answer: "none",
            category: "Variety"
        },
        {
            questionId: 79,
            question: "79. I can't stand to feel stagnant ",
            answer: "none",
            category: "Growth"
        },

        {
            questionId: 80,
            question: "80. I need to feel as safe as possible at all times.",
            answer: "none",
            category: "Comfort"
        },

        {
            questionId: 81,
            question: "81. If I commit to something, I worry that something better might come along ",
            answer: "none",
            category: "Variety"
        },

        {
            questionId: 82,
            question: "82. I never want to be seen as a loser",
            answer: "none",
            category: "Significance"
        },

        {
            questionId: 83,
            question: "83. I don't care about having much stability in my life",
            answer: "none",
            category: "Variety"
        },
        {
            questionId: 84,
            question: "84. I have a mission.",
            answer: "none",
            category: "Contribution"
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

    const [result, setResult] = useState(
        {
            "Contribution": 0,
            "Variety": 0,
            "Significance": 0,
            "Comfort": 0,
            "Growth": 0,
            "love and Connection": 0
        }
    );
    const [contribution, setContribution] = useState(0);
    const [variety, setVariety] = useState(0);
    const [significance, setSignificance] = useState(0);
    const [comfort, setComfort] = useState(0);
    const [growth, setGrowth] = useState(0);
    const [loveandConnection, setLoveAndConnection] = useState(0);
    const [unAnswered, setUnAnswered] = useState(0);

    const handleSubmit = () => {
        // Handle the submit action here
        console.log('Form submitted');
        let unAnswered = 0;
        let contribution = 0;
        let variety = 0;
        let significance = 0;
        let comfort = 0;
        let growth = 0;
        let loveandConnection = 0

        Object.values(qaList).forEach((qa) => {
            if (qa.answer === "Yes") {
                if (qa.category === "Contribution") {
                    contribution = contribution + 10;
                } else if (qa.category === "Variety") {
                    variety = variety + 10;
                } else if (qa.category === "Significance") {
                    significance = significance + 10;
                } else if (qa.category === "Comfort") {
                    comfort = comfort + 10;
                } else if (qa.category === "growth") {
                    growth = growth + 10;
                } else if (qa.category === "love and Connection") {
                    loveandConnection = loveandConnection + 10;
                }
            } else if (qa.answer === "Partly") {
                if (qa.category === "Contribution") {
                    contribution = contribution + 5;
                } else if (qa.category === "Variety") {
                    variety = variety + 5;
                } else if (qa.category === "Significance") {
                    significance = significance + 5;
                } else if (qa.category === "Comfort") {
                    comfort = comfort + 5;
                } else if (qa.category === "growth") {
                    growth = growth + 5;
                } else if (qa.category === "love and Connection") {
                    loveandConnection = loveandConnection + 5;
                }
            }
            if (qa.answer === "none") {
                unAnswered = unAnswered + 1;
            }
        })
        let result = {
            "Contribution": contribution,
            "Variety": variety,
            "Significance": significance,
            "Comfort": comfort,
            "Growth": growth,
            "love and Connection": loveandConnection
        }

        const entries = Object.entries(result);

        // Sort the array based on the values in descending order
        const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
        console.log("sorted entries============", sortedEntries);
        // Get the first 'count' keys from the sorted array
        const resObject = sortedEntries.slice(0, 3).map(entry => {
            return entry[0].concat(":").concat(entry[1])
        });

        console.log(resObject)
        setResult(resObject.join('\n'));

        setUnAnswered(unAnswered);

        // let result = [contribution, variety, significance, comfort, growth, loveandConnection]
        //     .sort((a, b) => b - a);
        // setResult(result)

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
                            <label key={"Partly"}>
                                <input
                                    type="radio"
                                    name={`question-${question.questionId}`}
                                    value={"Partly"}
                                    checked={question.answer === "Partly"}
                                    onChange={() => handleAnswerChange(question, "Partly")}
                                />
                                {"Partly"}
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
                            {/* <p>Yes : {yes}</p>
                            <p>Partly : {partly}</p>
                            <p>No : {no}</p> */}
                            <p>Not Answered : {unAnswered}</p>
                            <p style={{ whiteSpace: 'pre-line' }}> <h4 style={{ marginBottom:"10px"}}>Top Scores :</h4>{result}</p>
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

export default StudentTest;