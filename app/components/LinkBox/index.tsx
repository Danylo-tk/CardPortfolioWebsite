import styles from "./styles.module.css";

const LinkBox = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default LinkBox;
