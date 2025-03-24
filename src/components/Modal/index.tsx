import InputTextField from "../ui/InputTextField";
import style from "./modal.module.scss";

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export default function Modal({ isOpen, setOpen }: IModal) {
  return isOpen ? (
    <div className={style.background}>
      <div className={style.modal}>
        <h2>NEW NOTE</h2>
        <InputTextField placeholder="Input your note..." />
        <div className={style.actions}>
          <button onClick={() => setOpen(!isOpen)} className={style.btnCancel}>
            Cancel
          </button>
          <button>Apply</button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
