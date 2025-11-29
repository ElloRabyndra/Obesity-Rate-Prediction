// Nilai default untuk semua fitur, disesuaikan dengan tipe data (float/string)
const initialFormData = {
  Gender: "Male",
  Age: 25.0,
  Height: 1.7,
  Weight: 75.0,
  family_history_with_overweight: "yes",
  FAVC: "yes", // Frequent consumption of high caloric food
  FCVC: 2.0, // Frequency of consumption of vegetables
  NCP: 3.0, // Number of main meals
  CAEC: "Sometimes", // Consumption of food between meals
  SMOKE: "no",
  CH2O: 2.0, // Consumption of water
  SCC: "no", // Calorie consumption monitoring
  FAF: 1.0, // Physical activity frequency
  TUE: 0.5, // Time using technology devices
  CALC: "Sometimes", // Consumption of alcohol
  MTRANS: "Public_Transportation", // Transportation used
};

// Pilihan untuk fitur kategori (berdasarkan data umum UCI)
const options = {
  Gender: ["Male", "Female"],
  family_history_with_overweight: ["yes", "no"],
  FAVC: ["yes", "no"],
  CAEC: ["Sometimes", "Frequently", "Always", "no"],
  SMOKE: ["yes", "no"],
  SCC: ["yes", "no"],
  CALC: ["Sometimes", "Frequently", "Always", "no"],
  MTRANS: [
    "Public_Transportation",
    "Automobile",
    "Walking",
    "Motorbike",
    "Bike",
  ],
};

// Fungsi pembantu untuk menentukan warna hasil prediksi
const getResultColor = (result) => {
  if (!result) return "text-gray-600 bg-gray-100";
  if (result.includes("Normal") || result.includes("Insufficient"))
    return "text-green-700 bg-green-100 border-green-300";
  if (result.includes("Overweight"))
    return "text-yellow-700 bg-yellow-100 border-yellow-300";
  if (result.includes("Obesity"))
    return "text-red-700 bg-red-100 border-red-300";
  return "text-blue-600 bg-blue-100 border-blue-300";
};

// Fungsi pembantu untuk memformat nama kelas
const formatPrediction = (result) => {
  return result.replace(/_/g, " ");
};

export { initialFormData, options, getResultColor, formatPrediction };
