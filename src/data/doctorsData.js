 import Mridul from "../assets/images/DRMridul.jpeg";
import Mishu from "../assets/images/Dr.Mishu.jpeg";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Mridul Jyotsna",
    qualification: "BPT, MPT (Neurology)",
    role: "Consultant Neuro Physiotherapist",
    experience: "Ex-Assistant Professor (BUEST, Solan & Chandigarh University)",
    image: Mridul, // portrait image
    specialties: [
      "Neurological Rehabilitation",
      "Stroke & Brain Injury Rehab",
      "Ergonomical & Postural Care",
      "Clinical Dry Needling",
      "Soft Tissue Mobilization",
    ],
  },
  {
    id: 2,
    name: "Dr. Mishu Garg",
    qualification: "MPT (Neurology)",
    role: "Consultant Neuro Physiotherapist",
    experience: "Specialist in Advanced Manual Therapy",
    image: Mishu,
    specialties: [
      "Dry Needling",
      "Myofascial Release",
      "Soft Tissue Mobilisation",
      "Hydrotherapy",
      "Neurological Physiotherapy",
    ],
  },
];

export default doctorsData;
