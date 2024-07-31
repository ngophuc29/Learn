// bai 16
// 2 cach de dinh nghia 1 component
// 1 class component
// 2 function component

import React from "react";
import UserInForm from "./UserInFor";
// 1 class component
class MyComponent extends React.Component {
   
    // jsx
    render() {

        return (

            <div>
               
                <UserInForm></UserInForm>
            </div>
        );
    }

}
export default MyComponent;
