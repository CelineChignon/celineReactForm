import { useState } from "react";
import ShowCoworking from "./ShowCoworking";

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
    const handleOnclickAll = () => { filter("Tous") }

    const filteredCoworkings = coworkings.filter((coworking) => {
        if (resultDefault === handleOnclickAll) {
            return true
        }
        return coworking.address === resultDefault;
    });

    const handleDelte = (id) => {
        console.log("coworking supprimé id n°", id)
    }

    return (

        <section>
            <h2>LISTE DES COWORKINGS</h2>
            <div className="containerBtnListe">
                <button className="btnListe" onClick={handleOnclickBordeaux}>Bordeaux</button>
                <button className="btnListe" onClick={handleOnclickMerignac}>Mérignac</button>
                <button className="btnListe" onClick={handleOnclickLormont}>Lormont</button>
                <button className="btnListe" onClick={handleOnclickEysines}>Eysines</button>

                <button className="btnListe" onClick={handleOnclickAll}>Tous</button>
            </div>
            {filteredCoworkings.map((coworking) => {
                return (
                    <ShowCoworking coworking={coworking} />
                );
            })}
        </section>

    );
};

export default ListCoworkings;