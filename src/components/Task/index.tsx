import styles from './task.module.css'
import { TbTrash } from 'react-icons/tb'

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        quaerat, consequuntur, qui, recusandae ab nemo perspiciatis ducimus
        assumenda soluta suscipit repellendus? Cumque facere, unde repellendus
        explicabo at repudiandae quod. Voluptate.
      </p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
