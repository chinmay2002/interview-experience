import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { FaEye } from "react-icons/fa";
import { MdOutlineArrowUpward } from "react-icons/md";
const PlacementDetailsComponent = () => {
  // const [placements, setPlacements] = useState([]);

  // useEffect(() => {
  //   const fetchPlacements = async () => {
  //     const placementsSnapshot = await getDocs(
  //       query(
  //         collection(db, "placements"),
  //         where("companyName", "==", selectedCompany)
  //       )
  //     );
  //     const placementsData = placementsSnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setPlacements(placementsData);
  //   };

  //   if (selectedCompany) {
  //     fetchPlacements();
  //   }
  // }, [selectedCompany]);
  const [upvotes, setUpvotes] = useState(0);

  const handleUpvote = async () => {
    try {
      // Implement your logic to update upvote count in the database
      // For example, you can use Firestore to update the upvote count for a specific placement
      // Here's a hypothetical example assuming you have a 'placements' collection in Firestore
      const placementRef = db.collection("placements").doc("placementId");
      await placementRef.update({
        upvotes: upvotes + 1, // Increment upvote count by 1
      });

      // Update the upvotes state locally
      setUpvotes(upvotes + 1);
    } catch (error) {
      console.error("Error upvoting: ", error);
    }
  };

  return (
    <>
      {" "}
      <h2 className="text-xl font-bold mb-4">Placement Details for</h2>
      <div className="bg-white rounded-lg shadow-md p-4 w-[40%]">
        <div className="flex items-center gap-10 mb-4">
          <img src="tcs-logo.png" alt="TCS Logo" className="w-8 h-8" />
          <div className="">
            <div className="text-xl font-semibold">
              Software Developer | February 2023
            </div>
            <div className="text-green-500 text-lg">Placed</div>
          </div>
        </div>
        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>{" "}
        {/* Add profile picture here */}
        <div className=" text-center">
          {" "}
          <div className="text-xl font-semibold mb-2">Sandeep Behl</div>
          <div className="text-gray-500 text-sm mb-4">
            B.Tech CSBS | 2024 Graduate
          </div>
        </div>
        <div className="flex justify-between text-md items-center">
          <div className=" flex gap-6  text-gray-600">
            <div className="flex gap-2">
              <FaEye className="text-xl" /> Views
            </div>
            <div className="flex gap-2 cursor-pointer " onClick={handleUpvote}>
              <MdOutlineArrowUpward className="text-xl" /> Upvote
            </div>
          </div>
          <div className="   text-gray-600 ">
            <div>3 Rounds | 4 Coding Problems</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacementDetailsComponent;

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";

// const PlacementDetailsComponent = ({ selectedCompany }) => {
//   const [placements, setPlacements] = useState([]);

//   useEffect(() => {
//     const fetchPlacements = async () => {
//       const placementsSnapshot = await getDocs(
//         query(
//           collection(db, "placements"),
//           where("companyName", "==", selectedCompany)
//         )
//       );
//       const placementsData = placementsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setPlacements(placementsData);
//     };

//     if (selectedCompany) {
//       fetchPlacements();
//     }
//   }, [selectedCompany]);

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">
//         Placement Details for {selectedCompany}
//       </h2>
//       {placements.map((placement) => (
//         <div key={placement.id} className="bg-white rounded-lg shadow-md mb-4">
//           <div className="p-4">
//             <p className="text-lg font-semibold mb-2">
//               Person Name: {placement.personName}
//             </p>
//             <p className="text-gray-700 mb-2">Branch: {placement.branch}</p>
//             <p className="text-gray-700 mb-2">
//               Experience: {placement.experience}
//             </p>
//             <p className="text-gray-700 mb-2">
//               Journey: {placement.experience2}
//             </p>
//             {/* Add other placement details as needed */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PlacementDetailsComponent;
