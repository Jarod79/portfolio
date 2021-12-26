import React from "react";
import "./contact.css";

const Contact = () => {
  const confirmation = () => {
    const message = document.getElementById("message");
    const firstName = document.getElementById("firstname");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    message.value !== "" &&
      firstName.value !== "" &&
      lastName.value !== "" &&
      email.value !== "" &&
      alert("Votre message a bien été pris en compte merci.");
  };
  return (
    <div className="contact">
      <h1>Contact</h1>

      <div className="contact_content">
        <form className="myForm" action="" method="POST">
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Votre prénom..."
            required
          />

          <label htmlFor="lastname">Nom de Famille</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Votre nom de famille..."
            required
          />

          <label htmlFor="email">Adresse Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="prénom.nom@gmail.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="Écrivez votre message..."
            required
          ></textarea>

          <button id="submit" value="Submit" onClick={() => confirmation()}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
