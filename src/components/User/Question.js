import _ from 'lodash';
const Question = (props) => {
    const { data, currentQuiz } = props

    if (_.isEmpty(data)) {
        return (<></>)
    }
    return (

        <>
            {data.image &&
                <div className='q-image'>

                    <img src={`data:image/jpeg;base64, ${data.image}`} className="card-img-top" alt="..." />

                </div>
            }
            <div className="question">
                Question {currentQuiz + 1} : {data.questionDescription}
            </div>
            <div className="answer">
                {data.answer && data.answer.length > 0 &&

                    data.answer.map((item) => {
                        return (


                            <div key={item.id} class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />
                                <label class="form-check-label" >
                                    {item.description}
                                </label>
                            </div>

                        )
                    })}
            </div>
        </>
    )
}

export default Question;