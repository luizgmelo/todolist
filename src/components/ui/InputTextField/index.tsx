import { SearchOutlined } from "@ant-design/icons";
import styles from "./input-text-fiels.module.scss";

interface InputTextFieldProps {
  placeholder: string;
  isSearch?: boolean;
}

export default function InputTextField({
  placeholder,
  isSearch,
}: InputTextFieldProps) {
  return (
    <div className={styles.container}>
      <input type="text" placeholder={placeholder} />
      {isSearch ? <SearchOutlined className={styles.icon} /> : null}
    </div>
  );
}
