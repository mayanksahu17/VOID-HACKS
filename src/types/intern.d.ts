export interface IIntern extends Document {
  clerkId: string; // To link Clerk user with this model
  name: string;
  email: string;
  number: string;
  enroll: string;
  batch: string;
  branch: string;
  tasks: mongoose.Types.ObjectId[]; // Reference to Task documents
  workingAt: mongoose.Types.ObjectId | null; // Reference to an Internship document
}