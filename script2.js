const form = document.getElementById("subscriptionForm")
form.addEventListener("submit", function(e){
    e.preventDefault();
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const category = document.getElementById("category");

    const weekly = document.getElementById("weekly");
    const biweekly = document.getElementById("biweekly");
    const monthly = document.getElementById("monthly");
    
    const agreement = document.getElementById("agreement");

    if(fullname.value.trim() === ""){
        alert("Full name must be filled");
    }else
    if(fullname.value.trim().length < 2){
        alert("Full name must be at least 2 characters");
    }else
    if(!email.value.includes("@") || !email.value.includes(".") || email.value.startsWith("@") || email.value.endsWith("@")){
        alert("Invalid email");
    }else
    if(category.value === ""){
        alert("Please select a category");
    }else
    if(!weekly.checked && !biweekly.checked && !monthly.checked){
        alert("Please select newsletter frequency");
    }else
    if(!agreement.checked){
        alert("You must agree to Terms and Privacy Policy");
    }else{
        alert("Subscription successfull. Have a great day!");
        form.reset();
    }
})