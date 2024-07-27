import React, {useId} from "react";
import Image from "next/image";
import ItemCaracteristica from "./ItemCaracteristica";
import CustomStyles from '../styles/item.module.css'


const Item = ({referencia}) => {
    const idReferencia = useId();

    return (
        <>
            <div className={CustomStyles.referenciaCard} key={idReferencia}>
                <div className={CustomStyles.referenciaCard_Info}>
                    <div className={CustomStyles.referenciaCard_Title}>
                        <h2>{referencia.titulo}</h2>
                    </div>
                    <div className={CustomStyles.referenciaCard_Description}>
                        <h4>Descripción:</h4>
                        <p>{referencia.descripcion}</p>
                    </div>
                    <div className={CustomStyles.referenciaCard_Feature}>
                        <h4>Características:</h4>
                        <div>
                            {Object.entries(referencia.caracteristicas).map((value, index) => (<ItemCaracteristica c={value} key={idReferencia + value[0]}/>))}
                        </div>
                    </div>
                </div>
                <div className={CustomStyles.referenciaCard_Image}>
                    <Image 
                        src={referencia.imagen_de_referencia}
                        width={200}
                        height={200}
                        alt={referencia.titulo}
                    />
                </div>
            </div>
        </>
    )
}

export default Item