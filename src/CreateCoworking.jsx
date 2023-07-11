import { useState } from "react";

const CreateCoworking = () => {
    const [titre, setTitre] = useState("En attente")
    const [description, setDescription] = useState("En attente")
    const [adresse, setAdresse] = useState("En attente")

    const handleSubmit = (event) => {
        event.preventDefault();
        setTitre(event.target.titre.value);
        setDescription(event.target.description.value);
        setAdresse(event.target.adresse.value);

    };


    return (
        <section>
            <h2>FORMULAIRE</h2>
            <form className="formulaire" onSubmit={handleSubmit} action="Formulaire">

                <label >Titre</label>
                <input type="text" name="titre" />

                <label htmlFor="descrition">Description</label>
                <textarea name="description" cols="30" rows="10"></textarea>

                <label>Adresse</label>
                <input type="text" name="adresse" />

                <button className="btn" type="submit">Envoyer le message</button>
            </form>
            <div className="info">
                <h3>Vos informations: </h3>

                <p>Titre: {titre} </p>
                <p>Description: {description}</p>
                <p>Adresse: {adresse}</p>
            </div>
        </section>
    )
}

export default CreateCoworking