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
   let getAuth = await fetch(`https://api.escuelajs.co/api/v1/auth/profile`,{
       method: "GET",
       headers : {
  Authorization: `Bearer ${data.access_token}`
}

})
    let profileResponse = await getAuth.json();
    
       
    alert(`Welcome back ${profileResponse.name}`)
   
   sessionStorage.setItem("userDetail", JSON.stringify(profileResponse))
    window.location.href = "profile.html"

 
}
    

loginBtn.addEventListener("click", function () {
    console.log("Log-in")
    loginUser()
}) 



