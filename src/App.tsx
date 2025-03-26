import { MoonOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./app.module.scss";
import Task from "./components/Task";
import InputTextField from "./components/ui/InputTextField";
import Modal from "./components/Modal";
import { useState } from "react";
import TaskType from "./types/TaskType";
import Empty from "./components/Empty";

export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [idCounter, setId] = useState<number>(0);
  const [inputSearchValue, setInputSearchValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<TaskType | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const isEmpty = (tasks: TaskType[]) => {
    return tasks === undefined || tasks.length == 0;
  };

  const loadTasks = () => {
    const filteredTasks = tasks.filter((task) => {
      if (filter === "complete") return task.isCompleted;
      if (filter === "incomplete") return !task.isCompleted;
      return true;
    });

    return filteredTasks.map((task) => (
      <Task
        id={task.id}
        title={task.title}
        isCompleted={task.isCompleted}
        onToggle={toggleTask}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    ));
  };

  const handleCreate = (inputValue: string) => {
    if (inputValue === "" || inputValue === undefined) {
      return;
    }

    setId((idCounter) => ++idCounter);

    const newTask = {
      id: idCounter.toString(),
      title: inputValue,
      isCompleted: false,
      onToggle: toggleTask,
      onDelete: handleDelete,
      onEdit: openModal,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    closeModal();
  };

  const handleUpdate = (inputValue: string) => {
    if (!editingTask || inputValue === "" || inputValue === undefined) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTask.id ? { ...task, title: inputValue } : task
      )
    );

    closeModal();
  };

  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleEdit = (taskId: string) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
      setInputValue(taskToEdit.title);
      setOpen(true);
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setInputValue("");
    setOpen(false);
  };

  return (
    <main className={styles.container}>
      <h1>TODO LIST</h1>
      <div className={styles.inputArea}>
        <InputTextField
          placeholder={"Search note..."}
          isSearch
          value={inputSearchValue}
          onChange={setInputSearchValue}
        />

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>

        <MoonOutlined className={styles.icon} />
      </div>

      <div className={styles.tasks}>
        {isEmpty(tasks) ? <Empty /> : loadTasks()}
      </div>

      <div className={styles.addTaskButton}>
        <button onClick={() => setOpen(!open)}>
          <PlusOutlined onClick={() => setEditingTask(null)} />
        </button>
      </div>

      {open && (
        <Modal
          title={editingTask ? "EDIT NOTE" : "NEW NOTE"}
          onSubmit={editingTask ? handleUpdate : handleCreate}
          input={inputValue}
          onChange={setInputValue}
          onClose={closeModal}
        />
      )}
    </main>
  );
}
