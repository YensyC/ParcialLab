import Image from "next/image";
import React, {useId} from "react";
import Data from '../data/data.json'
import Item from "@/components/Item";
import styles from "./page.module.css";
import CustomStyles from '../styles/item.module.css'

export default function Home() {
  const mainKey = useId();
  
  return (
    <main className={styles.main}>
      <div className={CustomStyles.title01}>
        <h1>FRAUDES DE CRIPTOMONEDA</h1>
      </div>
      {
        Data.referencias_cripto.map((value, index) => (<Item referencia={value} key={useId()}/>))
      }
    </main>
  );
}
