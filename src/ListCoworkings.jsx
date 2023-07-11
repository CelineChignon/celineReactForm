import { useState } from "react";

const ListCoworkings = () => {
    const coworkings = [
        {
            id: 1,
            name: "Coworking 1",
            address: "Bordeaux",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            name: "Coworking 2",
            address: "Merignac",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 3,
            name: "Coworking 3",
            address: "Bordeaux",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 4,
            name: "Coworking 4",
            address: "Eysines",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 5,
            name: "Coworking 5",
            address: "Lormont",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
    ];

    const [resultDefault, filter] = useState("Bordeaux")

    const handleOnclickBordeaux = () => { filter("Bordeaux") }
    const handleOnclickMerignac = () => { filter("Merignac") }
    const handleOnclickLormont = () => { filter("Lormont") }
    const handleOnclickEysines = () => { filter("Eysines") }

    const filteredCoworkings = coworkings.filter((coworking) => {
        // if(city ===null){
        //     return true
        // }
        return coworking.address === resultDefault;
    });

    return (
        <section>
            <h2>LISTE DES COWORKINGS</h2>
            <div className="containerBtnListe">
                <button className="btnListe" onClick={handleOnclickBordeaux}>Bordeaux</button>
                <button className="btnListe" onClick={handleOnclickMerignac}>Mérignac</button>
                <button className="btnListe" onClick={handleOnclickLormont}>Lormont</button>
                <button className="btnListe" onClick={handleOnclickEysines}>Eysines</button>
            </div>
            {filteredCoworkings.map((coworking) => {
                return (
                    <article className="containerListe" key={coworking.id}>
                        <h3>{coworking.name}</h3>
                        <p>Adresse : {coworking.address}</p>
                        <p>Téléphone :{coworking.phone}</p>
                        <div> <img src={coworking.img} alt={coworking.name} /></div>
                    </article>
                );
            })}
        </section>
    );
};

export default ListCoworkings;