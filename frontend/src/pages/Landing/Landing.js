import styles from './Landing.module.css'

export default function Landing() {
  return (
    <main>
    <div className={styles.group}>
      <h2 className={styles.h2}>We take Ramen so SERIOUSLY</h2>
      <p className={styles.p}>
        Ramen is essentially a bowl of noodles and broth. It is a relatively
        simple dish on the surface, but its apparent simplicity is a serious
        part of its genius and when prepared by masters, it is a meal full of
        little subtleties, expertise and incredible depths of flavour. For
        example, depending on the soup base, choice of noodles, toppings, and
        sides, ramen can have a huge number of different variations.
      </p>
      <br/>
      <p className={styles.p}>
        The most common types of bases are shoyu (soy sauce), shio (salt), miso
        (soybean paste) and tonkotsu (pork bone). Shoyu and Shio is usually made
        with chicken broth although the meat can vary by region. Miso originated
        in the cold Hokkaido area in the north while tonkotsu is particularly
        popular in Kyushu.
      </p>
      </div>
    </main>
  );
}
