export default interface TaskType {
  id: number;
  title: string;
  isCompleted: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (taskId: number) => void;
}
