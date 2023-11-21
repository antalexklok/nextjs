import Layout from "@/components/layout/layout";
import styles from './page.module.css';
import _Kz8nHVg_tGI from "../public/team/arlington-research-Kz8nHVg_tGI-unsplash.jpg";
    import _g1Kr4Ozfoac from "../public/team/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
    import _5fNmWej4tAA from "../public/team/scott-graham-5fNmWej4tAA-unsplash.jpg";

export default function Home() {
    return (
      <Layout>
        <h1>О компании</h1>
    <div>
        <p>
            Вот вам яркий пример современных тенденций - реализация намеченных плановых заданий однозначно определяет каждого участника как способного принимать собственные решения касаемо системы обучения кадров, соответствующей насущным потребностям. Как принято считать, независимые организации. Мы вынуждены отталкиваться от того, что сложившаяся структура организации требует анализа дальнейших направлений развития! Картельные сговоры не допускают ситуации, при которой независимые государства неоднозначны и будут рассмотрены исключительно в разделе маркетинговых и финансовых предпосылок.
        </p>
    </div>
    <div className={styles.list}>
    <div className={styles.item}>
    <h3>Отдел маркетинга</h3>
    <div className={styles.content}>
      <img
        className={styles.image}
        src={_Kz8nHVg_tGI}
        alt="https://unsplash.com/photos/Kz8nHVg_tGI"
      />
      <div> Импорты изображений и итоговая разметка с тремя блоками информации о «сотрудниках» нашей компании </div>
    </div>
  </div>
 
 
  <div className={styles.item}>
    <h3>Инженеры-разработчики</h3>
    <div className={styles.content}>
      <img
        className={styles.image}
        src={_g1Kr4Ozfoac}
        alt="https://unsplash.com/photos/g1Kr4Ozfoac"
      />
      <div> Импорты изображений и итоговая разметка с тремя блоками информации о «сотрудниках» нашей компании </div>
    </div>
  </div>
 
 
  <div className={styles.item}>
    <h3>Отдел продаж</h3>
    <div className={styles.content}>
      <img
        className={styles.image}
        src={_5fNmWej4tAA}
        alt="https://unsplash.com/photos/5fNmWej4tAA"
      />
      <div> Импорты изображений и итоговая разметка с тремя блоками информации о «сотрудниках» нашей компании </div>
    </div>
  </div>
 </div>
      </Layout>
    )
}