(function () {
  emailjs.init("n5EFuiVgFRYRHmZFA");
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_w07ki0q",
    "template_i8p6h3e",
    this
  )
  .then(() => {
    alert("✅ Mensaje enviado correctamente");
    form.reset();
  })
  .catch((error) => {
    alert("❌ Error al enviar el mensaje");
    console.error(error);
  });
});
