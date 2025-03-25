import InputTextField from "../ui/InputTextField";
import style from "./modal.module.scss";

interface IModal {
  input: string;
  onChange: (input: string) => void;
  onSubmit: (input: string) => void;
  onClose: () => void;
}

export default function Modal({ input, onSubmit, onChange, onClose }: IModal) {
  return (
    <div className={style.background}>
      <div className={style.modal}>
        <h2>NEW NOTE</h2>
        <InputTextField
          placeholder="Input your note..."
          value={input}
          onChange={onChange}
        />
        <div className={style.actions}>
          <button onClick={() => onClose()} className={style.btnCancel}>
            Cancel
          </button>
          <button onClick={() => onSubmit(input)}>Apply</button>
        </div>
      </div>
    </div>
  );
}
