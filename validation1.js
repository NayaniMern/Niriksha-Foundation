function applicaton() {
  const username = document.contact.username.value;
  const email = document.contact.email.value;
  const mobile = document.contact.mobile.value;
  const select = document.contact.select.value;
  const availability = document.contact.availability.value;
  const message = document.contact.message.value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const mobileError = document.getElementById("mobileError");

  const selectError = document.getElementById("selectError");
  const availabilityError = document.getElementById("availabilityError");
  const messageError = document.getElementById("messageError");

  const alphaExp = /^[a-zA-Z]+$/;

  const mailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const numExp = /^[0-9]+$/;
  const mssgExp = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

  let nameStatus = false;
  let emailStatus = false;
  let mobileStatus = false;
  let selectStatus = false;
  let availabilityStatus = false;
  let messageStatus = false;

  //Name Validation

  if (username === "") {
    nameError.textContent = "*Please Enter Your  FullName";
  } else {
    if (username.match(alphaExp)) {
      nameError.textContent = "";
      nameStatus = true;
    } else {
      nameError.textContent = "*Name should be Only Characters";
    }
  }

  //Email Validation
  if (email === "") {
    emailError.textContent = "*Please Enter Email Address";
  } else {
    if (email.match(mailExp)) {
      emailError.textContent = "";
      emailStatus = true;
    } else {
      emailError.textContent = "*Please Enter Vaild Email ID";
    }
  }
  //Mobile Validation

  if (mobile === "") {
    mobileError.textContent = "*Please Enter Mobile Number";
  } else {
    if (mobile.match(numExp)) {
      if (mobile.length === 10) {
        mobileError.textContent = "";
        mobileStatus = true;
      } else {
        mobileError.textContent = "*Mobile Number should be 10 digits";
      }
    } else {
      mobileError.textContent = "*Mobile Number should be Only Numbers";
    }
  }
  //Select Validation
  if (select === "") {
    selectError.textContent = "*Please select One Option";
  } else {
    selectError.textContent = "";
    selectStatus = true;
  }
  //Availability  Validation
  if (availability === "") {
    availabilityError.textContent = "*Please Enter Your Available Time";
  } else {
    availabilityError.textContent = "";
    availabilityStatus = true;
  }
  //Message Validation
  if (message === "") {
    messageError.textContent = "*Please Enter Message";
  } else {
    if (message.match(mssgExp)) {
      messageError.textContent = "";
      messageStatus = true;
    } else {
      messageError.textContent = "*Please Enter Your Opinion";
    }
  }

  //Return Validation

  if (
    nameStatus &&
    emailStatus &&
    mobileStatus &&
    selectStatus &&
    availabilityStatus &&
    messageStatus
  ) {
    alert(
      "Thank you for submitting your volunteer application. We appreciate your interest in joining our team and contributing to our cause. Our team will review your application, and if your skills and experience match our current needs,we will be in touch with further details."
    );
    document.getElementById("myForm").reset();
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("mobileError").style.display = "none";
    document.getElementById("selectError").style.display = "none";
    document.getElementById("availabilityError").style.display = "none";
    document.getElementById("messageError").style.display = "none";

    return true;
  } else {
    return false;
  }
}
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  applicaton();
});
