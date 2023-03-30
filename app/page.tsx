import Image from "next/image";
import MainBg from "./components/MainBg";
import PerlinBg from "./components/PerlinBg";
import styles from "./page.module.css";

import myImg from "../public/me.png";

export default function Home() {
  return (
    <main>
      <PerlinBg />
      <MainBg>
        <div className={styles.description}>
          <div>
            <div className={styles.hiContainer}>
              <h1 className={styles.header}>H</h1>
              <Image src={myImg} alt="Picture of the author." />
            </div>
            <h2 className={styles.subHeader}>I'm Dan!</h2>
          </div>
          <div>
            <p className={styles.aboutText}>Front-end web developer</p>
            <p className={styles.aboutText}>Lviv, Ukraine</p>
          </div>
        </div>
      </MainBg>
    </main>
  );
}
