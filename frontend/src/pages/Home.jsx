import { useState } from "react";
import {
  Activity,
  User,
  Scale,
  Weight,
  Dumbbell,
  Clock,
  Car,
  CircleDollarSign,
  Loader2,
} from "lucide-react";
import { API_URL } from "../service/api";
import {
  initialFormData,
  options,
  getResultColor,
  formatPrediction,
} from "../utils/utils";
import InputField from "../components/InputField";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import Prediction from "../components/Prediction";

function Home() {
  const [formData, setFormData] = useState(initialFormData);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Menangani perubahan input form
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Konversi nilai menjadi float jika input bertipe number
    const newValue = type === "number" ? parseFloat(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  // Menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setPrediction(null);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        // Tangani error dari API (misalnya validasi data)
        throw new Error(data.error || `Error API: ${response.status}`);
      }

      setPrediction(data.prediction);
    } catch (err) {
      console.error("Error fetching prediction:", err);
      setError(
        `Gagal mendapatkan prediksi. Pastikan server Flask berjalan. Detail: ${err.message}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden border border-blue-100">
        {/* Header */}
        <Header />

        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Input */}
          <InputForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            options={options}
            isLoading={isLoading}
          />

          {/* Area Hasil Prediksi */}
          <Prediction prediction={prediction} error={error} />
        </div>
      </div>
    </div>
  );
}

export default Home;
