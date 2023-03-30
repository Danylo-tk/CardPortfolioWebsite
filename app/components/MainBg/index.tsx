import styles from "./styles.module.css";

const MainBg = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default MainBg;
