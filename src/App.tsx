import { MoonOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./app.module.scss";
import Task from "./components/Task";
import InputTextField from "./components/ui/InputTextField";
import Modal from "./components/Modal";
import { useState } from "react";
import TaskType from "./types/TaskType";

export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const createTask = (newTask: TaskType) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <main className={styles.container}>
      <h1>TODO LIST</h1>
      <div className={styles.inputArea}>
        <InputTextField
          placeholder={"Search note..."}
          isSearch
          value={inputValue}
          onChange={setInputValue}
        />

        <select name="" id="">
          <option value="">All</option>
          <option value="">Complete</option>
          <option value="">Incomplete</option>
        </select>

        <MoonOutlined className={styles.icon} />
      </div>

      <div className={styles.tasks}>
        {tasks.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            isCompleted={task.isCompleted}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>

      <div className={styles.addTaskButton}>
        <button onClick={() => setOpen(!open)}>
          <PlusOutlined />
        </button>
      </div>

      <Modal
        title="NEW NOTE"
        isOpen={open}
        setOpen={setOpen}
        createTask={createTask}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </main>
  );
}
