import React, { useState } from "react";

// class AddUserInForm extends React.Component {
//     state = {
//         name: "PHuc",
//         address: 'OK',
//         age: 18
//     }


//     // chuyen cac function thanh arrow function de tranh loi this
//     handleclick=(event)=> {
//         //thay doi state hien tai thanh 1 bien khac
//         this.setState({
//             name:"ngokThank",
//             age: Math.floor(Math.random()*100)+1

//         })

//         // this.setState({
//         //     age: Math.floor(Math.random()*100)+1
//         // })
//         console.log(this.state.name)

//     }
//     handleMouseOver(event) {
//         console.log(event.pageX)
//     }


//     handleONchanInPut=(event)=> {
//         console.log(event.target.value)
//         this.setState({name:event.target.value})
//     }
//     handleChangeAge=(event)=> {

//         this.setState({age:event.target.value})
//     }
//     handleSubmit= (event)=>{
//         event.preventDefault()
//        console.log(this.state)

//        this.props.handleAddnewUser({id: Math.floor((Math.random() * 100) + 1) ,name:this.state.name,age:this.state.age});
//     }
//     render(){
//         return(
//             <div className="">
//                My name is
//                 {
//                     this.state.name
//                 }
//                 and I'm from {this.state.age}
//                 {/* <button onClick={(event)=>this.handleclick(event)}>Click me</button>
//                 <button onMouseOver={this.handleMouseOver}>Hover Me </button> */}


//                     {/* //dung onSubmit de submit form  */}
//                 <form onSubmit={(event)=>this.handleSubmit(event)} action="">

//                     <label htmlFor="">Your Name</label>
//                     <input 
//                     value={this.state.name}
//                     type="text" name="" id="" 
//                     //dung onchange de lay gia tri bi thay doi ben trong input
//                     // onChange={(event)=>this.setState({name:event.target.value})}
//                     onChange={(event)=>this.handleONchanInPut(event)}
//                     />
//                     <label htmlFor="">Your Age</label>
//                     <input type="text" name="" id="" 
//                     value={this.state.age}
//                         onChange={(event)=>this.handleChangeAge(event)}
//                     />

//                     <button type="submit">Submit</button>
//                 </form>

//             </div>
//         )
//     }

// }

const AddUserInForm = (props) => {

    // state = {
    //             name: "PHuc",
    //             address: 'OK',
    //             age: 18
    //         }
    const [name, setname] = useState("phuc")
    const [address, setaddress] = useState("Dong nai")

    const [age, setage] = useState("18")

    const {handleAddnewUser}=props

    // chuyen cac function thanh arrow function de tranh loi this
    const handleclick = (event) => {
        //thay doi state hien tai thanh 1 bien khac
         
            setname("ngokThank")
            setage( Math.floor(Math.random() * 100) + 1)

        

        // this.setState({
        //     age: Math.floor(Math.random()*100)+1
        // })
        // console.log(this.state.name)

    }
    const handleMouseOver=(event)=> {
        console.log(event.pageX)
    }


    const handleONchanInPut = (event) => {
        // console.log(event.target.value)
        // this.setState({ name: event.target.value })
        setname(event.target.value)
    }
    const handleChangeAge = (event) => {

        // this.setState({ age: event.target.value })
        setage(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
     

         handleAddnewUser({ id: Math.floor((Math.random() * 100) + 1), name:name,age:age });
    }
    return (
        <div className="">
            My name is
            {
                 name
            }
            and I'm from { age}
            {/* <button onClick={(event)=>this.handleclick(event)}>Click me</button>
                        <button onMouseOver={this.handleMouseOver}>Hover Me </button> */}


            {/* //dung onSubmit de submit form  */}
            <form onSubmit={(event) => handleSubmit(event)} action="">

                <label htmlFor="">Your Name</label>
                <input
                    value={ name}
                    type="text" name="" id=""
                    //dung onchange de lay gia tri bi thay doi ben trong input
                    // onChange={(event)=>this.setState({name:event.target.value})}
                    onChange={(event) => handleONchanInPut(event)}
                />
                <label htmlFor="">Your Age</label>
                <input type="text" name="" id=""
                    value={ age}
                    onChange={(event) => handleChangeAge(event)}
                />

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
export default AddUserInForm