import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./task.module.scss";

export default function Task() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <input id="checkbox-1" type="checkbox" />
        <label htmlFor="checkbox-1"> Nome da Tarefa</label>
      </div>
      <div className={styles.actions}>
        <EditOutlined className={styles.editIcon} />
        <DeleteOutlined className={styles.deleteIcon} />
      </div>
    </div>
  );
}
