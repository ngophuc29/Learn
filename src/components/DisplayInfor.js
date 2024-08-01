import React from "react";

class DisplayInformation extends React.Component {
    render() {
        const { name, age, listUsers } = this.props

        return (
            <div>
                <div className="">My name's {name}</div>
                <div className="">My age's {age}</div>
                <hr />

                {listUsers.map((item) => {
                    // console.log(item.name)
                    return (

                        <div key={item.id}>
                            <div className="">My name's {item.name}</div>
                            <div className="">My age's {item.age}</div>
                            <hr />
                        </div>

                    )
                })}
            </div>
        )
    }

}

export default DisplayInformation