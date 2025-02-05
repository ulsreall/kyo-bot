const fs = require('fs');
const { ethers } = require('ethers');

// 🔹 Baca Private Key dari file wallet.txt
const privateKeyPath = 'wallet.txt';
const privateKey = fs.readFileSync(privateKeyPath, 'utf-8').trim();

// 🔹 Koneksi ke Soneium Mainnet
const provider = new ethers.JsonRpcProvider('https://rpc.soneium.org/');
const wallet = new ethers.Wallet(privateKey, provider);

// 🔹 Alamat & ABI Kontrak Router Kyo Finance (GANTI DENGAN YANG BENAR)
const swapRouterAddress = '0x0dC73Fe1341365929Ed8a89Dd47097A9FDD254D0';
const swapRouterABI = [/* Masukkan ABI di sini */];

const swapRouterContract = new ethers.Contract(swapRouterAddress, swapRouterABI, wallet);

// 🔹 Alamat USDC.e di Soneium Mainnet (GANTI DENGAN YANG BENAR)
const usdcAddress = 'ALAMAT_USDC.e';

// 🔹 Fungsi untuk mendapatkan harga ETH dalam USD
async function getETHPriceInUSD() {
    return 3000;  // Contoh: 1 ETH = $3000 (Gantilah dengan data real-time)
}

// 🔹 Fungsi untuk Swap ETH → USDC.e senilai $1
async function swapETHForUSDCe(amountInUSD) {
    const ethPrice = await getETHPriceInUSD();
    const amountInETH = amountInUSD / ethPrice;
    const amountInWei = ethers.parseEther(amountInETH.toString());

    console.log(`🔄 Menukar ${amountInETH} ETH (~$${amountInUSD}) ke USDC.e...`);

    const params = {
        path: [ethers.ZeroAddress, usdcAddress], // Path ETH → USDC.e
        recipient: wallet.address,
        deadline: Math.floor(Date.now() / 1000) + 60 * 5, // 5 menit
        amountIn: amountInWei,
        amountOutMin: 0, // Atur slippage
    };

    try {
        const tx = await swapRouterContract.swapExactETHForTokens(
            params,
            { value: amountInWei, gasLimit: 200000 }
        );
        const receipt = await tx.wait();
        console.log(`✅ Swap berhasil! Hash: ${receipt.transactionHash}`);
    } catch (error) {
        console.error('❌ Gagal swap:', error);
    }
}

// 🔹 Jalankan Swap 10x dengan jeda 5 detik
async function runSwaps() {
    for (let i = 0; i < 10; i++) {
        console.log(`🚀 Transaksi ke-${i + 1}...`);
        await swapETHForUSDCe(1); // Swap $1 dalam ETH
        await new Promise(resolve => setTimeout(resolve, 5000)); // Tunggu 5 detik
    }
    console.log('🎉 Semua transaksi selesai!');
}

// Jalankan bot
runSwaps();
