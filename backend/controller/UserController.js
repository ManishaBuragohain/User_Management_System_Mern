import UserModels from "../models/User.js";

const createuser = async (req, res) => {
  let NewUser;
  try {
    const { name, fathername, email, phone } = req.body;
    NewUser = new UserModels({
      name,
      fathername,
      email,
      phone,
    });

    await NewUser.save();
    res
      .status(200)
      .json({ success: true, Message: "user created successfully", NewUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      Message: "internal server error",
      NewUser,
    });
  }
};

//read api

const GetUser = async (req, res) => {
  try {
    const user = await UserModels.find();
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const UserId = req.params.id;
    const updatedUser = await UserModels.findByIdAndUpdate(UserId, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "user updated succesfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

//deleteUser 

const DeleteUser = async(req,res) =>{
    try {
        const UserId = req.params.id;
        const deleteUser = await UserModels.findByIdAndDelete(UserId);
        if(!deleteUser){
            return res.status(404).json({
                success: false,
                message: "user not found",
              });
        }

        res.status(200).json({
            success: true,
            message: "user deleted succesfully",
            deleteUser,
          });
    } catch (error) {
        
    }

}

export { createuser, GetUser, UpdateUser ,DeleteUser};
