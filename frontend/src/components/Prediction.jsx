import { Activity } from "react";
import { getResultColor, formatPrediction } from "../utils/utils";
import { Scale } from "lucide-react";
const Prediction = ({ prediction, error }) => {
  return (
    <div className="lg:col-span-1 p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-inner">
      <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
        <Activity className="w-5 h-5 mr-2" />
        Hasil Prediksi
      </h2>

      {/* Tampilan Error */}
      {error && (
        <div className="p-4 bg-red-100 text-red-700 border border-red-300 rounded-md mb-4">
          <p className="font-semibold">Kesalahan:</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Tampilan Prediksi */}
      {prediction ? (
        <div
          className={`p-6 text-center rounded-xl border-4 ${getResultColor(
            prediction
          )}`}
        >
          <p className="text-lg font-semibold mb-2">
            Tingkat Obesitas Anda Diprediksi Sebagai:
          </p>
          <p className="text-xl font-extrabold uppercase tracking-wide">
            {formatPrediction(prediction)}
          </p>
        </div>
      ) : (
        <div className="p-6 text-center text-gray-500 border border-dashed border-gray-300 rounded-md">
          <Scale className="w-10 h-10 mx-auto mb-2 text-gray-400" />
          <p>Isi formulir di samping dan klik tombol untuk memulai prediksi.</p>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-md font-semibold text-blue-700 mb-2">
          Penjelasan Kelas Obesitas:
        </h3>
        <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
          <li>Insufficient Weight: Berat badan kurang.</li>
          <li>Normal Weight: Berat badan ideal.</li>
          <li>
            Overweight Level I/II: Kelebihan berat badan tingkat I atau II.
          </li>
          <li>
            Obesity Type I/II/III: Obesitas klinis tingkat I, II, atau III.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Prediction;
