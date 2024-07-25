// bai 16
// 2 cach de dinh nghia 1 component
// 1 class component
// 2 function component

import React from "react";
// 1 class component
class MyComponent extends React.Component {
    state = {
        name:"PHuc",
        address:'OK',
        age:18
    }

    // jsx
    render() {

        return (

            <div>
                My name is 
                {
                     this.state.name
                }
                 and I'm from {this.state.address}
            </div>
        );
    }

}
export default MyComponent;
