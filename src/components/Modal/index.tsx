import { useState } from "react";
import TaskType from "../../types/TaskType";
import InputTextField from "../ui/InputTextField";
import style from "./modal.module.scss";

interface IModal {
  title: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  createTask: (task: TaskType) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function Modal({
  title,
  isOpen,
  setOpen,
  createTask,
  onToggle,
  onDelete,
}: IModal) {
  const [idCounter, setId] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  const closeModal = () => {
    setInputValue("");
    setOpen(!isOpen);
  };

  const applyNewTask = () => {
    if (inputValue === "" || inputValue === undefined) {
      return;
    }

    setId((idCounter) => ++idCounter);

    const newTask = {
      id: idCounter.toString(),
      title: inputValue,
      isCompleted: false,
      onToggle: onToggle,
      onDelete: onDelete,
    };

    createTask(newTask);

    closeModal();
  };

  return isOpen ? (
    <div className={style.background}>
      <div className={style.modal}>
        <h2>{title}</h2>
        <InputTextField
          placeholder="Input your note..."
          value={inputValue}
          onChange={setInputValue}
        />
        <div className={style.actions}>
          <button onClick={() => closeModal()} className={style.btnCancel}>
            Cancel
          </button>
          <button onClick={() => applyNewTask()}>Apply</button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
