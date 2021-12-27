import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

const Contact = ({ change }) => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const postData = (e) => {
    e.preventDefault();
    prenom !== "" &&
      nom !== "" &&
      mail !== "" &&
      message !== "" &&
      axios
        .post("http://localhost:8000/", {
          prenom,
          nom,
          mail,
          message,
        })
        .then((response) => alert("Votre message a bien été envoyé merci."))
        .catch((err) => console.error(err));
  };

  return (
    <div className="contact">
      <h1>Contact</h1>

      <div className="contact_content">
        <form className="myForm" method="POST">
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            id="firstname"
            name="prenom"
            placeholder="Votre prénom..."
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
            bodyFormData
          />

          <label htmlFor="lastname">Nom de Famille</label>
          <input
            type="text"
            id="lastname"
            name="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Votre nom de famille..."
            required
          />

          <label htmlFor="email">Adresse Email</label>
          <input
            type="email"
            name="mail"
            id="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="prénom.nom@gmail.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Écrivez votre message..."
            required
          ></textarea>

          <button
            id={change ? "submit" : "submit_b"}
            type="Submit"
            onClick={postData}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
