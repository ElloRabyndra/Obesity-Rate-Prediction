import { Scale } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-blue-600 p-6 sm:p-8 text-white">
      <h1 className="text-xl sm:text-4xl font-extrabold flex items-center">
        <Scale className="w-8 h-8 mr-3" />
        Prediksi Tingkat Obesitas
      </h1>
      <p className="mt-1 text-blue-100 text-sm">
        Menggunakan model Random Forest berdasarkan kebiasaan makan dan kondisi
        fisik.
      </p>
    </header>
  );
};

export default Header;
