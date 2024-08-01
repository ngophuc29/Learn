import React from "react";
import "../App.scss"
import "./DisplayInfor.scss"

import logo from "./../logo.svg"
class DisplayInformation extends React.Component {
    state = {
        hideshow:true
    }
    render() {
        const { name, age, listUsers } = this.props
        
        return (
            <div className="displayin4Container">
                <div className="">My name's {name}</div>
                <div className="">My age's {age}</div>
                <hr />

                <button className=""
                onClick={()=>this.setState({hideshow:!this.state.hideshow})}
                > {
                    this.state.hideshow==true?'Ẩn':'Hiện'
                }
                    </button>
        <hr/>
                {listUsers.map((item) => {
                    // console.log(item )
                    return (


                        //show hide button 
                        // cách 1
                        // <div key={item.id} className={item.age > 18 ? 'red' : 'green',this.state.hideshow==true?'show':'hide'}>
                        //     <div className="">My name's {item.name}</div>
                        //     <div className="">My age's {item.age}</div>
                        //     <hr />
                        // </div>

                        //cách 2 
                        <div>
                            {
                                this.state.hideshow && 
                                <div key={item.id} className={item.age > 18 ? 'red' : 'green' }>
                            <div className="">My id's {item.id}</div>

                            <div className="">My name's {item.name}</div>
                            <div className="">My age's {item.age}</div>
                            <button
                            onClick={()=>this.props.handleDeleteUser(item.id)}
                            >Delete</button>
                            <hr />
                        </div>
                            }
                        </div>

                    )
                })}


                {/* <img src={logo}/> */}
            </div>
        )
    }

}

export default DisplayInformation