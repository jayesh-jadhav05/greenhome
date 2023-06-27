import React from "react";
import DragonImg from '../Images/dragon.jpg';
import Guava from '../Images/guava.jpg';
import Bary from '../Images/bary.jpg';
import ginger from '../Images/ginger.jpg';

import Card from '../Small_Componets/Card';
import '../../Styles/feactures.scss';
const Feactures = () => {

    return (
        <>
            <div className="feactureContainer">
                <h2 className="commonTitle">🙋‍♂️ Feactured Products 👍</h2>
                <div className="Carasuls">
                    <Card imgSrc={DragonImg} title="Dragon Fruit" des="Organic Fruit" price="140" />
                    <Card imgSrc={Guava} title="Guava Fruit" des="Organic Fruit" price="70" />
                    <Card imgSrc={Bary} title="Stoberry Fruit" des="Organic Fruit" price="120" />
                    <Card imgSrc={ginger} title="Ginger" des="Organic Fruit" price="100" />
                </div>
            </div>
        </>
    )
}

export default Feactures;