import Image from "next/image";
import React, {useId} from "react";
import Data from '../data/data.json' /* Importa la informacion del data del JSON */
import Item from "@/components/Item"; /* Importa el componente Item creado */
import styles from "./page.module.css";
import CustomStyles from '../styles/item.module.css'

export default function Home() {
  const mainKey = useId();
  
  return (
    <main className={styles.main}>
      <div className={CustomStyles.title01}>
        <h1>HISTORIA DE LAS ESTAFAS CON CRIPTOMONEDAS</h1>
      </div>
      {
        Data.referencias_cripto.map((value, index) => (<Item referencia={value} key={useId()}/>))
      }
    </main>
  );
}
