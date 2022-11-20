//async await

const getNomorAntri=()=>{
    return Math.floor(Math.random() * 10)
}

const pilihPaket = (paket) =>{
    let menu = ""
    switch (paket) {
        case "A":
        menu = "Anda memilih paket A"
        break;
        case "B":
        menu = "Anda memilih paket B"
        break;
        case "C":
        menu = "Anda memilih paket C"
        break;                        
        default:
            menu= "Cancel Order"
            break;
    }
    return menu;
}

const tagihan=(paket) =>{
    let total = 0;
    switch (paket) {
        case 'A':
            total = "total : Rp. 20.000"
            break;
        case 'B':
            total = "total : Rp. 25.000"
            break;
        case 'C':
            total = "total : Rp. 27.500"
            break;
        default:
            break;
    }
    return total;
}

const orderKFC = async(paket) =>{
    const [nomorAntri, menu, total] = await Promise.all([
        getNomorAntri(),
        pilihPaket(paket),
        tagihan(paket)
    ])
    return [nomorAntri,menu,total]
}

orderKFC("A")
    .then(response => console.log(response))
    .catch(error => console.log(error));