# 🚀 Bot Auto Swap ETH/USDC.e - Kyo Finance (Soneium Mainnet)

Bot ini secara otomatis melakukan **10x transaksi swap** dari ETH ke USDC.e di **Kyo Finance** pada jaringan **Soneium Mainnet**.

---

## **📌 Fitur Bot:**
- Swap ETH senilai **$1 per transaksi** sebanyak **10x secara berulang**.
- Menggunakan **ethers.js** untuk berinteraksi dengan smart contract.
- **Membaca private key dari `wallet.txt`** untuk keamanan lebih baik.
- **Konfigurasi fleksibel**, bisa diatur slippage & delay transaksi.

---

## **📥 1. Instalasi Dependensi**
Pastikan Anda sudah menginstal **Node.js**. Jika belum, download dari [nodejs.org](https://nodejs.org/).

Lalu, jalankan perintah berikut untuk menginstal dependensi:

```bash
npm init -y
npm install ethers fs dotenv
```

- `ethers.js` → Berinteraksi dengan blockchain.
- `fs` → Membaca private key dari file.
- `dotenv` (opsional) → Jika ingin menyimpan private key di `.env` file.

---

## **🔑 2. Simpan Private Key di `wallet.txt`**
Buat file `wallet.txt` di folder proyek dan masukkan private key Anda **tanpa tanda kutip**:

```plaintext
0xYOUR_PRIVATE_KEY_HERE
```
⚠️ **Jangan pernah membagikan private key ini ke siapa pun!**

---

## **▶️ 4. Menjalankan Bot Swap**
Setelah konfigurasi selesai, jalankan bot dengan perintah berikut:

```bash
node bot-swap.js
```

Jika berhasil, output akan terlihat seperti ini:
```
🚀 Transaksi ke-1...
🔄 Menukar 0.00033 ETH (~$1) ke USDC.e...
✅ Swap berhasil! Hash: 0x12345...
...
🎉 Semua transaksi selesai!
```

---

## **🎯 Kesimpulan**
✅ **Bot swap otomatis berjalan** dengan transaksi **10x senilai $1 per swap**.  
✅ **Keamanan lebih baik**, karena private key disimpan di file terpisah.  
✅ **Bisa dijalankan di VPS/server** tanpa kesulitan.  

💡 **Ingin fitur tambahan?** Seperti pemantauan harga atau auto-stop jika gas fee terlalu tinggi? Beri tahu saya! 🚀

