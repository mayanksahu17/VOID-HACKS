import mongoose,{Schema, model} from "mongoose";
import { IInternship } from "../types/internship";

interface InternshipCardProps {
    internship: IInternship;
}

const InternshipSchema = new Schema<IInternship>({
  startDate: { type: Date, required: true },
  companyName: { type: String, required: true },
  companyAddress: { type: String, required: true },
  externalMentor: {
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
  },
  companyRegistrationNumber: { type: String, required: true },
  city: { type: String, required: true },
  stipendAmount: { type: Number, required: true },
  offerLetter: { type: String, required: true },
});

export default model<IInternship>('Internship', InternshipSchema);