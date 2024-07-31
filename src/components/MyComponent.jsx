// bai 16
// 2 cach de dinh nghia 1 component
// 1 class component
// 2 function component

import React from "react";
import UserInForm from "./UserInFor";
import DisplayInformation from "./DisplayInfor";
// 1 class component
class MyComponent extends React.Component {

    // jsx
    render() {
        const myIn4=["1","2","3","4","5","6","7","8"]

        return (

            <div>

                <UserInForm></UserInForm>
                <br />
                <br />

                <DisplayInformation
                name="Ngo quang Phuc"
                age="18"
                myIn4={myIn4}
                ></DisplayInformation>
            </div>
        );
    }

}
export default MyComponent;
