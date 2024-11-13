loginForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    fetch("", {
        method: "POST",
        body: JSON.stringify(
            {
                email: inputLogin.value,
                password: inputPassword.value
            }
        ),
        headers:{
            "Content-Type": "application/json"
        }
    }) 
})
