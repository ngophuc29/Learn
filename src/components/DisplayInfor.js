import React from "react";

class DisplayInformation extends React.Component{
    render(){
        const {name,age,myIn4}=this.props

        return (
            <div>
                <div className="">My name's {name}</div>
                <div className="">My age's {age}</div>
                {myIn4.map((item)=>{
                    console.log(item)
                })}
            </div>
        )
    }
    
}

export default DisplayInformation