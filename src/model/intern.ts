import { IIntern } from '../types/intern';
import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

interface InternCardProps {
  intern: IIntern;
}

const InternSchema = new Schema<IIntern>({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  enroll: { type: String, required: true },
  batch: { type: String, required: true },
  branch: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  workingAt: { type: mongoose.Schema.Types.ObjectId, ref: 'Internship', default: null },
});

export default model<IIntern>('Intern', InternSchema);