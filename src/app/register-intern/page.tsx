"use client";
import React, { useState } from "react";
const InternshipForm = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    companyName: "",
    companyAddress: "",
    mentorName: "",
    mentorContact: "",
    mentorEmail: "",
    registrationNumber: "",
    city: "",
    stipend: "",
    offerLetter: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Add your API or processing logic here
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Internship Details Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="companyAddress" className="block text-sm font-medium">
            Company Address
          </label>
          <textarea
            name="companyAddress"
            id="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="mentorName" className="block text-sm font-medium">
            External Mentor Name
          </label>
          <input
            type="text"
            name="mentorName"
            id="mentorName"
            value={formData.mentorName}
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="mentorContact" className="block text-sm font-medium">
            External Mentor Contact Number
          </label>
          <input
            type="tel"
            name="mentorContact"
            id="mentorContact"
            value={formData.mentorContact}
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="mentorEmail" className="block text-sm font-medium">
            External Mentor Email Address
          </label>
          <input
            type="email"
            name="mentorEmail"
            id="mentorEmail"
            value={formData.mentorEmail}
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="registrationNumber"
            className="block text-sm font-medium"
          >
            Company’s Registration Number
          </label>
          <input
            type="text"
            name="registrationNumber"
            id="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="stipend" className="block text-sm font-medium">
            Stipend Amount
          </label>
          <input
            type="number"
            name="stipend"
            id="stipend"
            value={formData.stipend}
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="offerLetter" className="block text-sm font-medium">
            Offer Letter
          </label>
          <input
            type="file"
            name="offerLetter"
            id="offerLetter"
            accept=".pdf,.docx"
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InternshipForm;
