// bai 16
// 2 cach de dinh nghia 1 component
// 1 class component
// 2 function component

import React from "react";
import AddUserInForm from "./AddUserInFor";
import DisplayInformation from "./DisplayInfor";
// 1 class component
class MyComponent extends React.Component {

    // jsx
    state = {
        listUsers: [
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
    }

    handleAddnewUser = (objUser) => {
        // alert('Add new user')
        console.log(objUser)
        this.setState({listUsers: [...this.state.listUsers,objUser]})
    }
    render() {
        const myIn4 = ["1", "2", "3", "4", "5", "6", "7", "8"]

        return (

            <div>

                <AddUserInForm
                    handleAddnewUser={this.handleAddnewUser}

                ></AddUserInForm>
                <br />
                <br />

                <DisplayInformation
                    name="Ngo quang Phuc"
                    age="18"
                    listUsers={this.state.listUsers}
                // truyền hàm qua props
                ></DisplayInformation>
            </div>
        );
    }

}
export default MyComponent;
