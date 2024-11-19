
const userImg = document.querySelector(".userImg")
const userId = document.querySelector(".id");
const userName = document.querySelector(".name");
const userRole = document.querySelector(".role")

let userDetail = JSON.parse( sessionStorage.getItem("userDetail"))


userImg.src = userDetail.avatar
userId.innerText = `Id: ${userDetail.id}`
userName.innerText = `Name: ${userDetail.name}`
userRole.innerText = `Role: ${userDetail.role}`

