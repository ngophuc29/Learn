import { useEffect } from "react";
import { getQuizByUsser } from "../../services/apiservice";
import { useState } from "react";
import './ListQuiz.scss'
import { get } from "lodash";
const ListQuiz = (props) => {

    const [ArrayQuiz, setArrayQuiz] = useState([])

    useEffect(() => {

        getQuizData()
    }, [])

    const getQuizData = async () => {
        const res = await getQuizByUsser();

        if (res && res.EC == 0) {

        }
        setArrayQuiz(res.DT)
        console.log(res)
    }
    return (

        <div className="listQuiz-container container">

            {ArrayQuiz && ArrayQuiz.length > 0 &&
                ArrayQuiz.map((quiz, index) => {
                    return (

                        <div key={quiz.id} className="card" style={{ width: "18rem" }}>
                            <img src={`data:image/jpeg;base64, ${quiz.image}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Quiz {index + 1}</h5>
                                <p className="card-text">{quiz.description}</p>
                                <button href="#" className="btn btn-primary">Start Now</button>
                            </div>
                        </div>
                    )
                })
            }
            {ArrayQuiz && ArrayQuiz.length ==0 &&
                    <div>Chua co bai thi</div>
            }
        </div>

    );
}

export default ListQuiz;