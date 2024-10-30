import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaGenderless, FaBook, FaPhone, FaHome, FaIdCard, FaFileUpload } from 'react-icons/fa';
import Footer from '../components/Footer'; // Import the Footer component

const AdmissionsPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    currentGrade: '',
    applyingForGrade: '',
    birthCertificate: null,
    aadharCard: null,
    parentName: '',
    parentContact: '',
    residentialAddress: '',
    emergencyContact: '',
    previousSchool: '',
    transferCertificate: null,
    reportCards: null,
    conductCertificate: null,
    proofOfResidence: null,
    admissionForm: null,
    entranceTest: null,
    interview: null,
    applicationFee: null,
    specialEducationRecords: null,
    legalCustodyDocuments: null,
    proofOfReligion: null,
    photos: null,
    parentSignature: null,
  });

  const [currentStep, setCurrentStep] = useState(0);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data (e.g., send to server)
    console.log('Form submitted:', formData);
  };

  // Move to the next step
  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3)); // Assuming 4 steps (0-3)
  };

  // Move to the previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0)); // Prevent going below 0
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2193B0] to-[#6DD5ED]"> {/* Gradient background */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mt-20"> {/* Increased margin-top for better separation */}
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Welcome to Our Admissions Page</h1>
          <p className="mb-6 text-center text-gray-700">Fill out the form below to apply for admission.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {currentStep === 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Details</h2>
                <div className="flex flex-col sm:flex-row sm:space-x-2"> {/* Responsive layout for inputs */}
                  <div className="flex items-center border border-gray-300 rounded p-2 w-full">
                    <FaUser className="text-gray-500 mr-2" />
                    <input type="text" name="fullName" placeholder="Student’s Full Name" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border-0 focus:outline-none" />
                  </div>
                  <div className="flex items-center border border-gray-300 rounded p-2 w-full">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full p-2 border-0 focus:outline-none" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-2"> {/* Responsive layout for inputs */}
                  <div className="flex items-center border border-gray-300 rounded p-2 w-full">
                    <FaGenderless className="text-gray-500 mr-2" />
                    <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full p-2 border-0 focus:outline-none">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex items-center border border-gray-300 rounded p-2 w-full">
                    <FaBook className="text-gray-500 mr-2" />
                    <input type="text" name="currentGrade" placeholder="Current Grade" value={formData.currentGrade} onChange={handleChange} required className="w-full p-2 border-0 focus:outline-none" />
                  </div>
                </div>
                <div className="flex items-center border border-gray-300 rounded p-2 w-full">
                  <FaBook className="text-gray-500 mr-2" />
                  <input type="text" name="applyingForGrade" placeholder="Grade Applying For" value={formData.applyingForGrade} onChange={handleChange} required className="w-full p-2 border-0 focus:outline-none" />
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Parent/Guardian Information</h2>
                <div className="flex items-center border border-gray-300 rounded p-2">
                  <FaUser className="text-gray-500 mr-2" />
                  <input type="text" name="parentName" placeholder="Parents’ or Guardians’ Names" value={formData.parentName} onChange={handleChange} required className="w-full p-2 border-0 focus:outline-none" />
                </div>
                <div className="flex items-center border border-gray-300 rounded p-2">
                  <FaPhone className="text-gray-500 mr-2" />
                  <input type="text" name="parentContact" placeholder="Contact Information" value={formData.parentContact} onChange={handleChange} required className="w-full p-2 border-0 focus:outline-none" />
                </div>
                <div className="flex items-center border border-gray-300 rounded p-2">
                  <FaHome className="text-gray-500 mr-2" />
                  <input type="text" name="residentialAddress" placeholder="Residential Address" value={formData.residentialAddress} onChange={handleChange} required className="w-full p-2 border-0 focus:outline-none" />
                </div>
                <div className="flex items-center border border-gray-300 rounded p-2">
                  <FaPhone className="text-gray-500 mr-2" />
                  <input type="text" name="emergencyContact" placeholder="Emergency Contact Details" value={formData.emergencyContact} onChange={handleChange} required className="w-full p-2 border-0 focus:outline-none" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Documents and Records</h2>
                <div className="flex items-center border border-gray-300 rounded p-2">
                  <FaFileUpload className="text-gray-500 mr-2" />
                  <input type="file" name="birthCertificate" onChange={handleChange} required className="w-full p-2 border-0 focus:outline-none" />
                  <span className="ml-2 text-gray-600">Birth Certificate</span>
                </div>
                <div className="flex items-center border border-gray-300 rounded p-2">
                  <FaFileUpload className="text-gray-500 mr-2" />
                  <input type="file" name="aadharCard" onChange={handleChange} className="w-full p-2 border-0 focus:outline-none" />
                  <span className="ml-2 text-gray-600">Aadhar Card or National ID</span>
                </div>
                <div className="flex items-center border border-gray-300 rounded p-2">
                  <FaFileUpload className="text-gray-500 mr-2" />
                  <input type="file" name="transferCertificate" onChange={handleChange} className="w-full p-2 border-0 focus:outline-none" />
                  <span className="ml-2 text-gray-600">Transfer Certificate</span>
                </div>
                <div className="flex items-center border border-gray-300 rounded p-2">
                  <FaFileUpload className="text-gray-500 mr-2" />
                  <input type="file" name="reportCards" onChange={handleChange} className="w-full p-2 border-0 focus:outline-none" />
                  <span className="ml-2 text-gray-600">Previous Report Cards/Transcripts</span>
                </div>
                <div className="flex items-center border border-gray-300 rounded p-2">
                  <FaFileUpload className="text-gray-500 mr-2" />
                  <input type="file" name="proofOfResidence" onChange={handleChange} className="w-full p-2 border-0 focus:outline-none" />
                  <span className="ml-2 text-gray-600">Proof of Residence</span>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-4">
              {currentStep > 0 && (
                <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400">Previous</button>
              )}
              {currentStep < 2 ? (
                <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Next</button>
              ) : (
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default AdmissionsPage; 