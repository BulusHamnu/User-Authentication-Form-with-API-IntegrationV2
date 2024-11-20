
const userImg = document.querySelector(".userImg")
const userId = document.querySelector(".id");
const userName = document.querySelector(".name");
const userRole = document.querySelector(".role")

let userDetail = JSON.parse( sessionStorage.getItem("userDetail"))

if (userDetail) {
    displayProfile(userDetail);
} else {
    let loginToken = JSON.parse(localStorage.getItem("loginToken"));
    if (loginToken) {
        let userProfile;

        fetch(`https://api.escuelajs.co/api/v1/auth/profile`,{
            method: "GET",
            headers : {
        Authorization: `Bearer ${loginToken.access_token}`
        }})
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    alert("Sorry password is incorrect!");
                    window.location.href = "login.html";}
            })
            .then (data => { 
                console.log(data)
                userProfile = data; 
                displayProfile(userProfile);})
            .catch((err) => console.log(err));
    } else { window.location.href = "login.html"; }
}




    



function displayProfile (profile) {
    alert(`Welcome back ${profile.name}`)

    userImg.src = profile.avatar
    userId.textContent = profile.id
    userName.textContent = profile.name
    userRole.textContent = profile.role
}

