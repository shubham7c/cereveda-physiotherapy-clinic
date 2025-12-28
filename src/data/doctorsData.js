import Mridul from "../assets/images/dr-mridul-jyotsna.webp";
import Mishu from "../assets/images/dr-mishu-garg.webp";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Mridul Jyotsna",
    qualification: "BPT, MPT (Neurology)",
    role: "Consultant Neuro Physiotherapist",
    experience:
      "Specialist in Treating Parkinson's Disease & Ex-Assistant Professor (BUEST, Solan & Chandigarh University)",
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
    experience: "Specialist in Treating Personal Nerve Injuries(Foot Drop)",
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
