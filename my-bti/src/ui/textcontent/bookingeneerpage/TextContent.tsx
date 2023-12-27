import styles from './TextContent.module.css'
import themestyles from '../../../containers/themecontainer/ThemeContainer.module.css'

function TextContent() {
  return (
    <div className={themestyles.text_content_book}>
        <h1 className={styles.h1}>Під час обміру Вашого обєкту, Вам необхідно мати копії наступних документів:</h1>
        <ul className={styles.ul}>
            <li>копія правоустановчих документів на обєкт (договір купівлі-продажу, спадщина, дарування тощо).</li>
            <li>копія паспорту та коду власника.</li>
            <li>копія технічного  паспорту на будівлю (якщо такий існує).</li>
            <li>План-схема приміщення або земельної ділянки (якщо такий існує).</li>
            <li>Якщо це новобудова - Договір з забудовником, акт приймання-передачі від забудовника.</li>
        </ul>
    </div>
  )
}

export default TextContent