import asyncHandler from "../utils/asyncHandler.js";

const userRegister = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "hey, Pranav. You are doing a great job and keep going as you are doing well"
    })
})

export default userRegister