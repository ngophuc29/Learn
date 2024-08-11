import ModelCreateUser from "./ModelCreateUser";


const ManagerUser = () => {
    return (<div classNameName="manager-user-container">

        <div classNameName="title">

            Manage User
        </div>
        <div classNameName="user-content"
        >

            <div>

                <button type="button" classNameName="">Add New User</button>
            </div>
            <div>
                Tablde User
                <ModelCreateUser></ModelCreateUser>
            </div>
        </div>
    </div>);
}

export default ManagerUser;