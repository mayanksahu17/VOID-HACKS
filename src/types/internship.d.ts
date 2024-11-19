export interface IInternship {
  startDate: Date;
  companyName: string;
  companyAddress: string;
  externalMentor: {
    name: string;
    contactNumber: string;
    email: string;
  };
  companyRegistrationNumber: string;
  city: string;
  stipendAmount: number;
  offerLetter: string;
}
  