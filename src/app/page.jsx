import styles from "./page.module.css"
import Hero from "public/hero.png";
import Image from "next/image";
import Button from "../components/Button/Button";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, sint velit! Sed modi ipsa in!</p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} />
      </div>
    </div>
  )
}
