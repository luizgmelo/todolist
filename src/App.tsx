import { MoonOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./app.module.scss";
import Task from "./components/Task";
import InputTextField from "./components/ui/InputTextField";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import TaskType from "./types/TaskType";
import Empty from "./components/Empty";

export default function App() {
  const getLocalStorage = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const getNextId = () => {
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0)
    return maxId + 1;
  }

  const [tasks, setTasks] = useState<TaskType[]>(getLocalStorage);
  const [nextId, setNextId] = useState<number>(getNextId);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<TaskType | null>(null);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const isEmpty = (tasks: TaskType[]) => {
    return tasks === undefined || tasks.length == 0;
  };

  const loadTasks = () => {
    const filteredTasks = tasks.filter((task) => {
      const statusMatches =
        filter === "all" ||
        (filter === "complete" && task.isCompleted) ||
        (filter === "incomplete" && !task.isCompleted);

      const searchMatches =
        searchTerm === '' ||
        task.title.toLowerCase().includes(searchTerm.toLowerCase());

      return statusMatches && searchMatches;
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

    const newTask = {
      id: nextId,
      title: inputValue,
      isCompleted: false,
      onToggle: toggleTask,
      onDelete: handleDelete,
      onEdit: openModal,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNextId(nextId + 1);

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

  const handleDelete = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleEdit = (taskId: number) => {
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
          value={searchTerm}
          onChange={setSearchTerm}
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
