
document.getElementById("Email-Collector").addEventListener("submit" , event => {
    // Stop the default event behavior
    event.preventDefault()

    let ourFormData = new FormData(event.target)
    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")

    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>`

    document.getElementById("main-content").innerHTML = updatedHtmlContent
})



// let emailCollectorForm = document.getElementById("Email-Collector")
//             // we are adding event to the form
//             emailCollectorForm.addEventListener("submit", event => {
//                 event.preventDefault() //for not avoiding any default behaivor

//                 let ourFormData = new FormData(event.target)

//                 let userFirstName = ourFormData.get("firstName")
                
//                 let updatedHtmlContent = `
//                     <h2>Congratulations, ${userFirstName}!</h2>

//                     <p>You're on your way to becoming a BBQ Master!</p>

//                     <p class="form-security-info">We'll never share your information without your permission</p>
//                 `

//                 let rightContent = document.getElementById("main-content")

//                 rightContent.innerHTML = updatedHtmlContent
//             })
