import {
  Car,
  CircleDollarSign,
  Clock,
  Dumbbell,
  Loader2,
  Scale,
  User,
  Weight,
} from "lucide-react";
import InputField from "./InputField";
import { Activity } from "react";

const InputForm = ({
  formData,
  handleChange,
  handleSubmit,
  options,
  isLoading,
}) => {
  return (
    <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
      <h2 className="text-xl font-bold text-blue-700 border-b pb-2">
        Data Pengguna & Kebiasaan
      </h2>

      {/* Bagian 1: Data Fisik & Demografi */}
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Jenis Kelamin (Gender)"
          name="Gender"
          icon={User}
          value={formData.Gender}
          onChange={handleChange}
          options={options.Gender}
        />
        <InputField
          label="Usia (Age)"
          name="Age"
          type="number"
          icon={Clock}
          value={formData.Age}
          onChange={handleChange}
        />
        <InputField
          label="Tinggi Badan (Height) [m]"
          name="Height"
          type="number"
          icon={Scale}
          value={formData.Height}
          onChange={handleChange}
        />
        <InputField
          label="Berat Badan (Weight) [kg]"
          name="Weight"
          type="number"
          icon={Weight}
          value={formData.Weight}
          onChange={handleChange}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Riwayat Keluarga Obesitas (Family History)"
          name="family_history_with_overweight"
          icon={CircleDollarSign}
          value={formData.family_history_with_overweight}
          onChange={handleChange}
          options={options.family_history_with_overweight}
        />
        <InputField
          label="Sering Konsumsi Makanan Kalori Tinggi (FAVC)"
          name="FAVC"
          icon={CircleDollarSign}
          value={formData.FAVC}
          onChange={handleChange}
          options={options.FAVC}
        />
      </div>

      <h2 className="text-xl font-bold text-blue-700 border-b pb-2 pt-4">
        Kebiasaan Makan & Aktivitas
      </h2>

      {/* Bagian 2: Kebiasaan Makan & Aktivitas */}
      <div className="grid sm:grid-cols-3 gap-4">
        <InputField
          label="Frekuensi Sayuran (FCVC) [1-3]"
          name="FCVC"
          type="number"
          icon={Activity}
          value={formData.FCVC}
          onChange={handleChange}
        />
        <InputField
          label="Jumlah Makan Utama (NCP) [1-4]"
          name="NCP"
          type="number"
          icon={Activity}
          value={formData.NCP}
          onChange={handleChange}
        />
        <InputField
          label="Konsumsi Air (CH2O) [1-3]"
          name="CH2O"
          type="number"
          icon={Activity}
          value={formData.CH2O}
          onChange={handleChange}
        />
        <InputField
          label="Makan Antara Waktu Makan (CAEC)"
          name="CAEC"
          icon={Activity}
          value={formData.CAEC}
          onChange={handleChange}
          options={options.CAEC}
        />
        <InputField
          label="Merokok (SMOKE)"
          name="SMOKE"
          icon={Activity}
          value={formData.SMOKE}
          onChange={handleChange}
          options={options.SMOKE}
        />
        <InputField
          label="Monitoring Kalori (SCC)"
          name="SCC"
          icon={Activity}
          value={formData.SCC}
          onChange={handleChange}
          options={options.SCC}
        />
        <InputField
          label="Aktivitas Fisik (FAF) [0-3]"
          name="FAF"
          type="number"
          icon={Dumbbell}
          value={formData.FAF}
          onChange={handleChange}
        />
        <InputField
          label="Penggunaan Gadget (TUE) [0-2]"
          name="TUE"
          type="number"
          icon={Clock}
          value={formData.TUE}
          onChange={handleChange}
        />
        <InputField
          label="Konsumsi Alkohol (CALC)"
          name="CALC"
          icon={Activity}
          value={formData.CALC}
          onChange={handleChange}
          options={options.CALC}
        />
        <InputField
          label="Transportasi (MTRANS)"
          name="MTRANS"
          icon={Car}
          value={formData.MTRANS}
          onChange={handleChange}
          options={options.MTRANS}
        />
      </div>

      {/* Tombol Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full mt-6 flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition duration-300 shadow-lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Memprediksi...
          </>
        ) : (
          "Dapatkan Prediksi Tingkat Obesitas"
        )}
      </button>
    </form>
  );
};

export default InputForm;
