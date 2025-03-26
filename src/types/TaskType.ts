export default interface TaskType {
  id: string;
  title: string;
  isCompleted: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (taskId: string) => void;
}