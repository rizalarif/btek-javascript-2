//Import Readline Module for Command Line
const { rejects } = require('assert');
const { resolve } = require('path');
const rLine =  require('readline');
const cmd = rLine.createInterface(process.stdin,process.stdout)

// Program Hitung Ongkos Kirim

const error = () =>{
    cmd.close()
}


const mulai = async() => {
    let running = true;

    while(running){
        try{
        console.log("===    Selamat Datang    ===")
        console.log("= Hitung Ongkos Kirim Anda =")
        console.log("============================")

        cmd.question(`Berapa Jarak Tempuh Anda : `,(input)=>{
            if(input <= 2){
                uang = 8000;
                console.log("Total Ongkos Kirim : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(uang))
                layanan = 0.045 * uang
                console.log("Biaya Layanan : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(layanan))
            }
            else if(input => 3){
                uang = 8000 + (5000*(input-2))
                console.log("Total Ongkos Kirim : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(uang))
                layanan = 0.045 * uang
                console.log("Biaya Layanan : " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(layanan))
                }
            })
        } catch(error){
            console.log("Terimakasih!");
            running = false
        }
    }
}

mulai();





