export default interface TaskType {
  id: number;
  title: string;
  isCompleted: boolean;
  onToggle: (id: number, isCompleted : boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (taskId: number) => void;
}
