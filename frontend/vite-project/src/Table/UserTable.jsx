import { useState } from "react";
import AddUser from "../components/AddUser";
import DeletUser from "../components/DeleteUser";
import Table from "../components/Table";
import UpdateUser from "../components/UpdateUser";
import axios from "axios";
import { toast } from "react-hot-toast";


const UserTable = () => {
  const [value, setValue] = useState({
    name: "",
    fathername: "",
    email: "",
    phone: "",
  });
  const [updatedUserId, setUpdatedUserId] = useState();
  const [deleteId , setDeleteId] = useState()
  const handlechange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("values>>>>>", value);
    try {
      const updateUser = await axios.put(
        `http://localhost:4000/api/update/${updatedUserId}`,
        value
      );
      const response = updateUser.data;
      console.log(response);
      if(response.success){
        toast.success(response.message)
      }
    } catch (error) {
      console.log(error);
    }
  };
  const UpdateUserFunc = (updatedId,element) => {
    console.log("updated user id>>>>>>", updatedId, element);
    setValue({
      name: element.name,
      fathername: element.fathername,
      email: element.email,
      phone: element.phone,
    })
    setUpdatedUserId(updatedId);
  };

  const DeleteUser = (deleteid) =>{
    setDeleteId(deleteid)

  }
  const handleDelete = async () =>{
    // try {

    //   const deleteuserData = await axios.delete(`http://localhost:4000/api/delete/${deleteId}`);
    //   const response = deleteuserData.data;
    //   if(response.success){
    //     toast.success(response.message)
    //   }
    //   console.log("delete response>>>>>",response)
      
    // } catch (error) {
    //   console.log(error)
      
    // }
    
    try {
      
      const deleteUserData = await axios.delete(`http://localhost:4000/api/delete/${deleteId}`);
      const response = deleteUserData.data;
      if(response.success){
        toast.success(response.message);
      }
      console.log("delete response >>>>>>", response);
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>
      <Table UpdateUserFunc={UpdateUserFunc}
      DeleteUser={DeleteUser} />
      <AddUser />
      <UpdateUser
        value={value}
        handlechange={handlechange}
        handleOnSubmit={handleOnSubmit}
      />
      <DeletUser handleDelete={handleDelete} />
    </div>
  );
};

export default UserTable;
