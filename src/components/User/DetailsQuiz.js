import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizByID } from "../../services/apiservice";
import { get } from "lodash";
const DetailsQuiz = (props) => {
    const params = useParams()
    const [quizArray, setquizArray] = useState([{}])
    const quizid = params.id


    useEffect(() => {

        FetchQuizByID()
    }, [quizid])


    const FetchQuizByID = async ( ) =>{
        const res = await getQuizByID(quizid)
        console.log(res)
        setquizArray(res.DT)
    }
    return (
        <div className="details_quiz_container">
            DetailsQuiz

            {quizArray.map((item)=>{
                <p>{item.description}</p>
            })}
            
        </div>
    );
}

export default DetailsQuiz;