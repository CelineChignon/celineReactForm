
const ShowCoworking = ({ coworking }) => {
    const handleDelte = (id) => {
        console.log("coworking supprimé id n°", id)
    }
    return <>
        <article className="containerListe" key={coworking.id}>
            <h3>{coworking.name}</h3>
            <p>Adresse : {coworking.address}</p>
            <p>Téléphone :{coworking.phone}</p>
            <div> <img src={coworking.img} alt={coworking.name} /></div>
            <button className="btnDeleteCoworking" onClick={() => handleDelte(coworking.id)}>Supprimer le Coworking</button>
        </article>
    </>
}

export default ShowCoworking;