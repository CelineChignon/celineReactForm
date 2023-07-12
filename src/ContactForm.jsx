import { useState } from "react";
//Utilisation de la fonction useState, form est le premier etat du formulaire qui est vide, setForm prend en compte les données renseignées par l'utilisateur est les gardes en mémoire.
const ContactForm = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        message: "",
        email: ""
    });

    //Utilisation de l'évenement onSubmit sur le formulaire, on utilise un preventDefault pour éviter la réactualisation de la page qui automatique avec un formulaire
    // on utilise target pour récupérer les données du formulaire qui seront "sauvegardees" dans setForm grace au useState
    const handleSubmit = (event) => {
        event.preventDefault();

        setForm({
            firstName: event.target.firstName.value,
            lastname: event.target.lastName.value,
            message: event.target.message.value,
            email: event.target.email.value
        });
    }



    return (
        <>
            <h2>CONTACT</h2>
            <form onSubmit={handleSubmit} className="formulaire" action="formulaire contact">

                <label htmlFor="firstName">Prénom</label>
                <input type="text" name="firstName" />

                <label htmlFor="lastname">Nom</label>
                <input type="text" name="lastName" />

                <label htmlFor="message">Votre message:</label>
                <textarea name="message" cols="30" rows="10"></textarea>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <button className="btn" type="submit">Envoyer</button>
            </form>

            {form.email !== "" &&
                <p className="messageContact" >
                    Votre demande à bien été prise en compte et nous vous en remercions. <br />
                    Nous vous ferons un retour dans les plus brefs délais à l'adresse mail: {form.email} <br />
                    A bientôt {form.firstName}.
                </p>}
        </>
    )
}
//Rajoout d'une condition, si l'email est différent de ""(vide) alors on affiche le message final.
export default ContactForm;