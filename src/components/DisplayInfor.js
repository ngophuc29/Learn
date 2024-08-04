import React, { useEffect, useState } from "react";
import "../App.scss"
import "./DisplayInfor.scss"

import logo from "./../logo.svg"
// class DisplayInformation extends React.Component {
//     // constructor(props) {
//     //     console.log("constructor")
//     //     super(props)

        
//     // }
//     state = {
//         hideshow: true,
//         notsubmit:true

//     }
//     // componentDidMount(){
//     //     setTimeout(() => {

//     //         document.title ="Hello World"

//     //     },3000)
//     // }
//     // componentDidUpdate(prevProps,prevState,snapshot) {
//     //     console.log("componentDidUpdate",this.props,this.prevProps)
//     //     if(this.props.listUsers !==  prevProps.listUsers){
//     //         if(this.props.listUsers.length >6){
//     //             alert("you cant push continue users")
       
//     //         }
//     //     }
//     // }
//     render() {
//         console.log("render")
//         const { name, age, listUsers } = this.props

        

//         return (
//             <div className="displayin4Container">
//                 <div className="">My name's {name}</div>
//                 <div className="">My age's {age}</div>
//                 <hr />

//                 <button className=""
//                     onClick={() => this.setState({ hideshow: !this.state.hideshow })}
//                 > {
//                         this.state.hideshow == true ? 'Ẩn' : 'Hiện'
//                     }
//                 </button>
//                 <hr />
//                 {listUsers.map((item) => {
//                     // console.log(item )
//                     return (


//                         //show hide button 
//                         // cách 1
//                         // <div key={item.id} className={item.age > 18 ? 'red' : 'green',this.state.hideshow==true?'show':'hide'}>
//                         //     <div className="">My name's {item.name}</div>
//                         //     <div className="">My age's {item.age}</div>
//                         //     <hr />
//                         // </div>

//                         //cách 2 
//                         <div>
//                             {
//                                 this.state.hideshow &&
//                                 <div key={item.id} className={item.age > 18 ? 'red' : 'green'}>
//                                     <div className="">My id's {item.id}</div>

//                                     <div className="">My name's {item.name}</div>
//                                     <div className="">My age's {item.age}</div>
//                                     <button
//                                         onClick={() => this.props.handleDeleteUser(item.id)}
//                                     >Delete</button>
//                                     <hr />
//                                 </div>
//                             }
//                         </div>

//                     )
//                 })}


//                 {/* <img src={logo}/> */}
//             </div>
//         )
//     }

// }
const DisplayInformation=(props) => {
    const { name, age, listUsers } =  props
    
        const [hideshow,sethideshow]=useState(true)
                
        //useEffect nay no se chay khi ma co thay doi tren web
    // dau [] o cuoi cung co tac dung xac dinh so lan ma 
    // useEffect no chay , neu de trong no chi chay 1 lan
    // ,mot cach khac neu truyen 1 bien voa trong cai []
    //thi no se theo doi su thay doi cua bien so do
        useEffect(
            ()=>{
            setTimeout(() => {
                 document.title="garffdsfds"
            }, 2000);

            // gio theo doi neu listUser ma no nho hon hoac bang 0
            // thi no se thong bao ra man hinh
            // truoc tien phai truyen bien do vao trong dau []
            if(listUsers.length===0){
                alert("m xoa het user r do ")
            }
        },[listUsers]
        
    )
                return (
                    <div className="displayin4Container">
                        <div className="">My name's {name}</div>
                        <div className="">My age's {age}</div>
                        <hr />
        
                        <button className=""
                            onClick={() => sethideshow( !hideshow  )}
                        > {
                                 hideshow == true ? 'Ẩn' : 'Hiện'
                            }
                        </button>
                        <hr />
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
                                         hideshow &&
                                        <div key={item.id} className={item.age > 18 ? 'red' : 'green'}>
                                            <div className="">My id's {item.id}</div>
        
                                            <div className="">My name's {item.name}</div>
                                            <div className="">My age's {item.age}</div>
                                            <button
                                                onClick={() =>  props.handleDeleteUser(item.id)}
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
export default DisplayInformation