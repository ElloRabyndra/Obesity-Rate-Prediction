import joblib
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

# 1. Inisialisasi Aplikasi Flask
app = Flask(__name__)
CORS(app)

# 2. Muat Model Pipeline yang Sudah Disimpan
try:
    pipeline = joblib.load('model_obesity.pkl')
    # Ambil nama fitur (kolom) yang digunakan saat training
    # Ini penting agar urutan dan nama kolom input saat prediksi sesuai.
    # Karena kita menggunakan ColumnTransformer, kita harus mendapatkan nama kolom asli dari X_train.
    # Kita bisa asumsikan kolom-kolom asli adalah semua kolom kecuali target.
    # (Berdasarkan langkah 3 Preprocessing sebelumnya)
    FEATURE_COLUMNS = ['Gender', 'Age', 'Height', 'Weight', 'family_history_with_overweight', 
                       'FAVC', 'FCVC', 'NCP', 'CAEC', 'SMOKE', 'CH2O', 'SCC', 'FAF', 'TUE', 
                       'CALC', 'MTRANS']
    
    print("Model 'model_obesity.pkl' berhasil dimuat.")
except FileNotFoundError:
    print("ERROR: File 'model_obesity.pkl' tidak ditemukan. Pastikan sudah berada di direktori yang sama.")
    exit()
except Exception as e:
    print(f"ERROR: Gagal memuat model: {e}")
    exit()


# 3. Definisi Endpoint Prediksi
@app.route('/predict', methods=['POST'])
def predict():
    """
    Menerima data JSON dari request POST, memprosesnya, 
    dan mengembalikan hasil prediksi tingkat obesitas.
    """
    if not request.json:
        return jsonify({'error': 'Input data harus dalam format JSON.'}), 400

    data = request.json
    
    # 4. Validasi dan Konversi Data
    
    # Pastikan semua fitur yang diperlukan ada
    if not all(col in data for col in FEATURE_COLUMNS):
        return jsonify({'error': 'Fitur input tidak lengkap atau salah nama.'}), 400

    try:
        # Konversi data input menjadi DataFrame
        # Gunakan list data karena model pipeline mengharapkan input dalam bentuk batch (list of records)
        input_data = [data[col] for col in FEATURE_COLUMNS]
        input_df = pd.DataFrame([input_data], columns=FEATURE_COLUMNS)
        
        # 5. Prediksi menggunakan Model Pipeline
        prediction = pipeline.predict(input_df)[0]
        
        # 6. Mengembalikan Hasil Prediksi
        return jsonify({
            'status': 'success',
            'input_data': data,
            'prediction': prediction
        })
    
    except Exception as e:
        # Tangani error saat prediksi (misalnya, tipe data yang salah)
        return jsonify({'error': f'Terjadi kesalahan saat prediksi: {str(e)}'}), 500


# 7. Menjalankan Server
if __name__ == '__main__':
    # Jalankan server pada localhost:5000
    # Jika ingin dapat diakses dari luar, ganti host='0.0.0.0'
    print("Flask server berjalan di http://127.0.0.1:5000/predict")
    app.run(debug=True, host='0.0.0.0', port=5000)