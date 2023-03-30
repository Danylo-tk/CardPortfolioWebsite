import Image from "next/image";
import MainBg from "./components/MainBg";
import PerlinBg from "./components/PerlinBg";
import styles from "./page.module.css";

import myImg from "../public/me.png";
import LinkBox from "./components/LinkBox";

export default function Home() {
  return (
    <main>
      <PerlinBg />
      <MainBg>
        <div className={styles.container}>
          <div className={styles.descriptionSection}>
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
          <div className={styles.linksSection}>
            <h1 className={styles.aboutText}>Let's connect!</h1>
            <ul className={styles.linksList}>
              <li>
                <LinkBox>Linkedin 💼</LinkBox>
              </li>
              <li>
                <LinkBox>Github 👾</LinkBox>
              </li>
              <li>
                <LinkBox>My resume 📜</LinkBox>
              </li>
            </ul>
          </div>
        </div>
      </MainBg>
    </main>
  );
}
