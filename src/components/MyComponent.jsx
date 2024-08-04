// bai 16
// 2 cach de dinh nghia 1 component
// 1 class component
// 2 function component

import React, { useState } from "react";
import AddUserInForm from "./AddUserInFor";
import DisplayInformation from "./DisplayInfor";
// 1 class component
// class MyComponent extends React.Component {

//     // jsx
//     state = {
//         listUsers: [
//             {
//                 id: 1, name: 'John', age: '16',


//             },
//             {
//                 id: 2, name: 'Monas', age: '19'

//             },
//             {
//                 id: 3, name: 'James', age: '13'

//             }
//         ]
//     }

//     handleAddnewUser = (objUser) => {
//         // alert('Add new user')
//         console.log(objUser)
//         this.setState({ listUsers: [objUser, ...this.state.listUsers] })
//     }
//     // handleDeleteUser = (userId) => {
//     //     const listUserClone = this.state.listUsers.filter((item) => item.id !== userId);
//     //     this.setState({
//     //         listUsers: listUserClone
//     //     });
//     // }
//     handleDeleteUser = (userId) => {
//         const listUserClone = [...this.state.listUsers]
//         let cc = []
//         cc = listUserClone.filter((item) => {
//             return item.id !== userId
//         })
//         this.setState(({
//             listUsers: cc
//         }))
//     }
//     render() {
//         const myIn4 = ["1", "2", "3", "4", "5", "6", "7", "8"]

//         return (
//             <div>

//                 <div className="a">

//                     <AddUserInForm
//                         handleAddnewUser={this.handleAddnewUser}

//                     ></AddUserInForm>
//                     <br />
//                     <br />

//                     <DisplayInformation
//                         name="Ngo quang Phuc"
//                         age="18"
//                         listUsers={this.state.listUsers}

//                         handleDeleteUser={this.handleDeleteUser}
//                     // truyền hàm qua props
//                     ></DisplayInformation>
//                 </div>
//                 <div className="b">

//                 </div>
//             </div>

//         );
//     }

// }
const MyComponent = () => {

    const myIn4 = ["1", "2", "3", "4", "5", "6", "7", "8"]

    const [listUsers, setlistUsers] = useState(
        [
            {
                id: 1, name: 'John', age: '16',


            },
            {
                id: 2, name: 'Monas', age: '19'

            },
            {
                id: 3, name: 'James', age: '13'

            }
        ]
    )


    const handleAddnewUser = (objUser) => {
        // alert('Add new user')
        console.log(objUser)
        setlistUsers([objUser, ...listUsers])
    }
    // const      handleDeleteUser = (userId) => {
    //     const listUserClone = this.state.listUsers.filter((item) => item.id !== userId);
    //     this.setState({
    //         listUsers: listUserClone
    //     });
    // }
    const handleDeleteUser = (userId) => {
        const listUserClone = [...listUsers]
        let cc = []
        cc = listUserClone.filter((item) => {
            return item.id !== userId
        })
        setlistUsers(
            cc
        )
    }
    return (
        <div>

            <div className="a">

                <AddUserInForm
                    handleAddnewUser={ handleAddnewUser}

                ></AddUserInForm>
                <br />
                <br />

                <DisplayInformation
                    name="Ngo quang Phuc"
                    age="18"
                    listUsers={ listUsers}

                    handleDeleteUser={ handleDeleteUser}
                // truyền hàm qua props
                ></DisplayInformation>
            </div>
            <div className="b">

            </div>
        </div>

    );


}
export default MyComponent;
