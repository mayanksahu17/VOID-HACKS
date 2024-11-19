import mongoose,{Schema,model} from "mongoose";
import { ITask } from "../types/task";

interface TaskCardProps {
    task: ITask;
}

const TaskSchema = new Schema<ITask>({
  name: { type: String, required: true },
  deadline: { type: Date, required: true },
  progress: { type: Number, required: true, min: 0, max: 100 },
  isCompleted: { type: Boolean, default: false },
  startDate: { type: Date, required: true },
  description: { type: String, required: true },
  link: { type: String, default: null },
});

export default model<ITask>('Task', TaskSchema);