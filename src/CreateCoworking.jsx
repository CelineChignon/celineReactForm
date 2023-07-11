
const CreateCoworking = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const address = event.target.address.value;
        console.log(title + " " + description + " " + address);
    };
    return (
        <form className="formulaire" onSubmit={handleSubmit} action="Formulaire">

            <label >Title</label>
            <input type="text" name="title" />

            <label htmlFor="Descrition">Description</label>
            <textarea name="description" cols="30" rows="10"></textarea>

            <label>Adresse</label>
            <input type="text" name="address" />

            <button type="submit">Envoyer le message</button>
        </form>

    )
}

export default CreateCoworking