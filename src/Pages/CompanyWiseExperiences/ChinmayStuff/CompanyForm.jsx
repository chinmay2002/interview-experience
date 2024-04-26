import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const CompanyForm = () => {
  const [companyName, setCompanyName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form...");

    try {
      const docRef = await addDoc(collection(db, "companies"), {
        name: companyName,
      });

      console.log("Document written with ID: ", docRef.id);
      // Reset form after submission
      setCompanyName("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="border text-black border-gray-300 rounded-md px-4 py-2 w-full mb-4"
        placeholder="Company Name"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default CompanyForm;
