import { SearchOutlined } from "@ant-design/icons";
import styles from "./input-text-fiels.module.scss";

interface InputTextFieldProps {
  placeholder: string;
  value: string;
  isSearch?: boolean;
  onChange: (newValue: string) => void;
}

export default function InputTextField({
  placeholder,
  isSearch,
  value,
  onChange,
}: InputTextFieldProps) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {isSearch ? <SearchOutlined className={styles.icon} /> : null}
    </div>
  );
}
