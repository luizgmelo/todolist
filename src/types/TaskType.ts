export default interface TaskType {
  id: number;
  title: string;
  isCompleted: boolean;
<<<<<<< Updated upstream
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (taskId: number) => void;
=======
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (taskId: string) => void;
>>>>>>> Stashed changes
}
