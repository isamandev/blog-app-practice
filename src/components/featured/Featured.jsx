import Image from "next/image";
import styles from "./featured.module.css";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.imge} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className={styles.postDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            deserunt libero explicabo voluptatibus tempora vero quam nostrum
            iste voluptate nihil eligendi sequi hic quibusdam quia laboriosam
            odio unde harum expedita?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
