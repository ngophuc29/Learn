import { useEffect, useState } from "react";
import { getAllUser,getAllUserWithPaginate  } from "../../../services/apiservice";
import ReactPaginate from "react-paginate";





const TableUserPaginate = (props) => {
    // const [listUser, setListUser] = useState([

    // ])
    const { listUser, show, setshow,pageCount } = props
        ;
    // const [pageCount, setPageCount] = useState(0);
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        props.getDataUserWithPaginate(+event.selected + 1)
        console.log(`User requested page number ${event.selected} `);
        
    };
    //dùng như này cũng dc nhưng k nên vì nó sẽ giảm hiệu suất đi
    // dùng async ,await nên viết ra 1 hàm xong gọi vô lại

    // useEffect(  ()=>{


    //     let getData= await getAllUser()
    //     console.log(getData)
    // },[])


    // ==> nên dùng như này 
    // useEffect(  ()=>{


    //     getDataUser()

    // },[])
    // const getDataUser= async ()=>{


    //     let res= await getAllUser()
    //     console.log(res)
    //      if(res.EC===0){
    //         setListUser(res.DT)
    //      }
    // }
    return (
        <>
            <table className="table table-hover table-border ed">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">User</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 && listUser.map((user) => {

                        return (
                            <tr key={user.id}>
                                <td scope="row">{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>

                                    <button className="btn btn-secondary" onClick={() => props.handelViewUser(user)}>View</button>
                                    <button className="btn btn-warning mx-3" onClick={() => props.handelUpdateUser(user)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => props.handelCloseDeleteModel(user)}>Delete</button>

                                </td>

                            </tr>
                        )
                    })}
                    {listUser && listUser.length === 0 && <tr>
                        <td colSpan={4}
                        >
                            Not Found Data

                        </td>
                    </tr>}

                </tbody>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </table>

        </>

    );
}

export default TableUserPaginate;