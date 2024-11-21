
const signUpBtn = document.querySelector(".signUpBtn")
const emailBox = document.querySelector(".emailBox")
const passwordBox = document.querySelector(".passwordBox")
const cPasswordBox = document.querySelector(".cPasswordBox")
const nameBox = document.querySelector(".nameBox")
const existBar = document.querySelector(".existBar")

async function createNewUser () {
    let response = await fetch(`https://api.escuelajs.co/api/v1/users/`, {
        method : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
  "name": nameBox.value,
  "email": emailBox.value,
  "password": passwordBox.value,
  "avatar": "https://picsum.photos/800",
}) })

    let data = await response.json()
    
    alert(`New user was created with id:${data.id}`)
    localStorage.setItem("userId",data.id)
sessionStorage.setItem("userDetail", JSON.stringify(data))
    window.location.href = "profile.html"
}

signUpBtn.addEventListener("click", function () {
    console.log("sign-up")
    fetch(`https://api.escuelajs.co/api/v1/users/is-available`,{
        method:"POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: emailBox.value
        })
    })
        .then((response)=> {
        console.log(response)
            console.log(response.status)
            console.log(response.ok)
            return response.json()
        }).then((data) => {
        
            if (data.isAvailable == true && passwordBox === cPasswordBox.value ) {
                existBar.innerHTML = "Email already exist!"
                emailBox.style.border = "1px solid red"
            } else if (data.isAvailable == false && passwordBox.value === cPasswordBox.value ) {
                if (emailBox.value === "" || passwordBox.value === "" || cPasswordBox.value === "") {
                    alert("Please fill in the form")
                } else {
                    createNewUser()
                }
                
            } else {
                passwordBox.style.border = "1px solid red";
                cPasswordBox.style.border = "1px solid red";
                alert("Password don't match!")
                
            }
        })
        .catch((err) => console.log(err))
    
})

