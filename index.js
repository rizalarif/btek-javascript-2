//Import Readline Module for Command Line
const rLine =  require('readline');
const cmd = rLine.createInterface(process.stdin,process.stdout)

// Program Hitung Ongkos Kirim
    console.log("===    Selamat Datang    ===")
    console.log("= Hitung Ongkos Kirim Anda =")
    console.log("============================")

    cmd.question(`Berapa Jarak Tempuh Anda : `,(input)=>{
        if(input <= 2){
            uang = 8000;
            console.log("Total Ongkos Kirim : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(uang))
            layanan = 0.045 * uang
            console.log("Biaya Layanan : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(layanan))
            cmd.close();
        }
        else if(input => 3){
            uang = 8000 + (5000*(input-2))
            console.log("Total Ongkos Kirim : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(uang))
            layanan = 0.045 * uang
            console.log("Biaya Layanan : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(layanan))
            cmd.close();
            }
        })
// kurang while