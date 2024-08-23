import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getQuizByID } from "../../services/apiservice";
import _ from "lodash";
import "./DetailQuiz.scss"
const DetailsQuiz = (props) => {
    const params = useParams()
    const [quizArray, setquizArray] = useState([{}])
    const quizid = params.id

    const location = useLocation()

    console.log(location)
    useEffect(() => {

        FetchQuizByID()
    }, [quizid])


    const FetchQuizByID = async () => {
        const res = await getQuizByID(quizid)
        console.log(res)

        if (res && res.EC === 0) {
            let raw = res.DT
            var result = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {

                    // do value ,kết quả của câu hỏi là 1 mảng lồng
                    // nên sẽ giùm 1 for each để lây ra rồi lại đẩy vô sau mỗi lần
                    // lặp xong 1 phần từ
                    const answer = []
                    let questionDescription, image = null
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description
                            image = item.image
                        }
                        answer.push(item.answers)
                    })

                    console.log(
                        "questionID", key, "answer", answer
                    )
                    return { questionID: key, answer: answer, questionDescription: questionDescription, image: image }
                }
                )
                .value()
            console.log(result);
        }
    }
    return (
        <div className="details_quiz_container">

            <div className="left-content">
                <div className="title">
                    Quiz {quizid} : {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />

                </div>
                <div className="q-content">
                    <div className="question">
                        Question 1 : What is your name ?
                    </div>
                    <div className="answer">
                        <div>A. abc </div>
                        <div>B. cde</div>
                        <div>C. xyz </div>

                    </div>
                </div>

                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary ">Next</button>

                </div>

            </div>
            <div className="right-content">
                Count Down
            </div>


        </div>
    );
}

export default DetailsQuiz;