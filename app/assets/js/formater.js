/**
 * Created Date: Monday, 7th February 2022, 9:56:27 pm
 * Author: Ananda Satriyo
 * -----
 * -----
 */


const rupiah = (num) => {
    let nom =  num;
    const final = nom.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$&.")
    return final
}

const tanggal = (da) => {
    const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
    let bln = da.substring(5, 7);
    let tanggal = parseInt(da.substring(8,10));
    let taun = da.substring(0,4)
    let final = tanggal+" "+ bulan[parseInt(bln)]+" "+taun
    return final
}

export {rupiah, tanggal};