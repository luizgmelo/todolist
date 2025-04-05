import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./task.module.scss";
import ITask from "../../types/TaskType";

export default function Task({
  id,
  title,
  isCompleted,
  onToggle,
  onDelete,
  onEdit,
}: ITask) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <input
          id={`checkbox-${id}`}
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggle(id, !isCompleted)}
        />
        <label htmlFor={`checkbox-${id}`}>{title}</label>
      </div>
      <div className={styles.actions}>
        <EditOutlined className={styles.editIcon} onClick={() => onEdit(id)} />
        <DeleteOutlined
          className={styles.deleteIcon}
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
}
