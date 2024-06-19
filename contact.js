function sendMail(){
   Email.send({
     Host : "smtp.gmail.com",
     Username : "adanjelle4@gmail.com",
     Password : "aden2343",
     To : 'themo@gmail.com',
     From : document.getElementById("email").value,
      Subject : "New contact form enquiery",
     Body : "And this is the body"
}).then(
  message => alert(message)
);
}