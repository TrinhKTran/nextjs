import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.splash}>
      <Image src="/lighthouse.jpg" alt="Home" fill={true} priority={true}/>
      <div className={styles.centered}>Route Handlers Demo</div>
    </div>
  );
}