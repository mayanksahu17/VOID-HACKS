export interface ITask extends Document {
  name: string;
  deadline: Date;
  progress: number; // Progress in percentage (0-100)
  isCompleted: boolean;
  startDate: Date;
  description: string;
  link?: string; // Optional Jira link or other task reference
}