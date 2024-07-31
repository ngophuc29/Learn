// bai 16
// 2 cach de dinh nghia 1 component
// 1 class component
// 2 function component

import React from "react";
// 1 class component
class MyComponent extends React.Component {
    state = {
        name: "PHuc",
        address: 'OK',
        age: 18
    }


    // chuyen cac function thanh arrow function de tranh loi this
    handleclick=(event)=> {
        //thay doi state hien tai thanh 1 bien khac
        this.setState({
            name:"ngokThank",
            age: Math.floor(Math.random()*100)+1
            
        })

        // this.setState({
        //     age: Math.floor(Math.random()*100)+1
        // })
        console.log(this.state.name)

    }
    handleMouseOver(event) {
        console.log(event.pageX)
    }


    handleONchanInPut=(event)=> {
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }
    handleSubmit= (event)=>{
        event.preventDefault()
       console.log(this.state)
    }
    // jsx
    render() {

        return (

            <div>
                My name is
                {
                    this.state.name
                }
                and I'm from {this.state.age}
                {/* <button onClick={(event)=>this.handleclick(event)}>Click me</button>
                <button onMouseOver={this.handleMouseOver}>Hover Me </button> */}


                    {/* //dung onSubmit de submit form  */}
                <form onSubmit={(event)=>this.handleSubmit(event)} action="">
                    <input 
                    type="text" name="" id="" 
                    //dung onchange de lay gia tri bi thay doi ben trong input
                    // onChange={(event)=>this.setState({name:event.target.value})}

                    onChange={(event)=>this.handleONchanInPut(event)}

                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

}
export default MyComponent;
