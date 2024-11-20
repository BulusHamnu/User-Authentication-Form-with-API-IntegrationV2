const loginBtn = document.querySelector(".loginBtn")
const loginEmailBox = document.querySelector(".loginEmailBox")
const loginPasswordBox = document.querySelector(".loginPasswordBox")

async function loginUser() {
    let response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
        method : "POST",
        headers : {
             'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            email : loginEmailBox.value,
            password: loginPasswordBox.value
        })
    })
    
   let data = await response.json()
   localStorage.setItem("loginToken", JSON.stringify(data))
   console.log(data.access_token)
   window.location.href = "profile.html"

 
}
    

loginBtn.addEventListener("click", function () {
    console.log("Log-in")
    loginUser()
}) 



