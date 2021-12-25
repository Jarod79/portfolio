import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>

      <div className="contact_content">
        <form className="myForm" action="" method="post">
          <label for="firstname">Prénom</label>
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
            itemid="email"
            name="email"
            id="email"
            placeholder="prénom.nom@gmail.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Écrivez quelque chose..."
          ></textarea>

          <button id="submit" value="Submit">
            Envoyer
          </button>
          <div id="confirmation">
            Votre message a bien été pris en compte. Nous vous remercions.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
