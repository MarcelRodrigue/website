let btn = document.querySelector("#personalInfoBtn")
    btn.addEventListener("click",checkInput);

    function checkInput() {
let Username=document.querySelector("#UserName").value;  
let UserEmaile=document.querySelector("#UserEmaile").value;   
let PhoneNumber=document.querySelector("#PhoneNumber").value;   

      if (Username==null || Username=="") {
        document.querySelector("#UserName").classList.remove("border-gray-200");
        document.querySelector("#UserName").classList.add("border-red-500");
        document.querySelector("#UserName").placeholder='Feild Required';
        document.querySelector("#UserName").classList.add("placeholder-red-500");
      }
      else if (UserEmaile==null || UserEmaile=="" || !UserEmaile.includes("@")) {
        document.querySelector("#UserEmaile").classList.remove("border-gray-200");
        document.querySelector("#UserEmaile").classList.add("border-red-500");
        document.querySelector("#UserEmaile").placeholder='Feild Required';
        document.querySelector("#UserEmaile").classList.add("placeholder-red-500");
      }
      else if (PhoneNumber==null || PhoneNumber==""|| !PhoneNumber.includes("+")) {
        console.log("number not good")
        document.querySelector("#PhoneNumber").classList.remove("border-gray-200");
        document.querySelector("#PhoneNumber").classList.add("border-red-500");
        document.querySelector("#PhoneNumber").placeholder='Feild Required';
        document.querySelector("#PhoneNumber").classList.add("placeholder-red-500");

      }
       else {
        document.querySelector("#page1").classList.add("hidden");
        document.querySelector("#page2").classList.remove("hidden");
      }
    };