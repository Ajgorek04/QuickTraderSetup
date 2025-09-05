import styles from "./AbcPageComponent.module.css";
import Image from "next/image";
import {
  abc0,
  abc1,
  abc2,
  abc3,
  abc4,
  abc5,
  abc6,
  abc7,
  abc8,
  abc9,
  abc10,
  abc11,
  abc12,
  abc13,
} from "@/assets";

export default function AbcPageComponent() {
  return (
    <div className={styles.container}>
      <h1> Korekta ABC według Deepa </h1>

      <section>
        <h2>1. Teoria</h2>
        <h3> Korekta prosta ABC </h3>
        <ul>
          <li>
            Charakteryzuje się głównie w trendzie wzrostowym (w spadkowym też
            mogą być), tym że fala B nie wybija nowego szczytu, a fala C
            przebija dołek fali A i tym samym ustanawia nowy dołek lokalny.
          </li>
          <li>
            W trendzie <strong>wzrostowym</strong> fala B powinna być krótsza od
            fali A i jej wierzchołek nie powinien przebijać punktu X - tego od
            którego zaczynamy. <br />
            Fala C - dłuższa od fali B i jej minimum nie będzie nam przebijało
            dołka fali A.
          </li>
          <li>
            W trendzie <strong>spadkowym</strong> fala B będzie krótsza od fali
            A, a minimum nie przebija punktu X. <br />
            Fala C - dłuższa od fali B i jej ekstremum przebija szczyt fali A
          </li>
        </ul>

        <h3> Korekta płaska ABC </h3>
        <ul>
          <li>
            Najczęściej pojawia się w silnych trendach. Znacznie rzadziej w
            początkowych etapach budowania trendu, dopiero później powinna się
            pojawiać.
          </li>
          <li>
            W trendzie <strong>wzrostowym</strong> fala B nie wybija nowego
            szczytu, a fala C nie przebije dołka fali A, czyli fala C jest
            najkrótszą spośród fal.
          </li>
        </ul>

        <h3>Korekta pędząca ABC</h3>
        <ul>
          <li>Najczęściej występuje w silnych, szybkich rynkach.</li>
          <li>
            W trendzie <strong>wzrostowym</strong> fala B wybija nowy szczyt, a
            fala C nie przebija dołka fali A. Fala B będzie najdłuższą spośród
            tych fal.
          </li>
        </ul>

        <h3>Korekta nieregularna</h3>
        <ul>
          <li>Najtrudniej ją zidentyfikować</li>
          <li>
            W trendzie <strong>wzrostowym</strong> B wybija nowy szczyt, C
            przebija dołek fali A. Fala C jest najdłuższą falą tworzącą korektę
            nieregularną.
          </li>
        </ul>
      </section>
      <section>
        <h2>2. Wprowadzenie</h2>
        <p>Ustawienia Fibo</p>
        <Image src={abc0} alt="abc0" />
      </section>
    </div>
  );
}
