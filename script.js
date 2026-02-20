const emailLink = document.getElementById("susannepedersen1999@gmail.com");
const copyMessage = document.getElementById("copy-message");

emailLink.addEventListener("click", function (e) {
  e.preventDefault();

  const email = "susannepedersen1999@gmail.com"; // change to your real email

  navigator.clipboard.writeText(email).then(() => {
    copyMessage.textContent = "Email copied to clipboard!";
    copyMessage.style.opacity = "1";

    setTimeout(() => {
      copyMessage.style.opacity = "0";
    }, 2000);
  });
});


