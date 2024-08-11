import ModelCreateUser from "./ModelCreateUser";
import "./ManageUser.scss"

const ManagerUser = () => {
    return (<div className="manager-user-container">

        <div className="title">

            Manage User
        </div>
        <div className="user-content"
        >

            <div>

                <button type="button" className="">Add New User</button>
            </div>
            <div>
                Tablde User
            </div>
                <ModelCreateUser></ModelCreateUser>
        </div>
    </div>);
}

export default ManagerUser;