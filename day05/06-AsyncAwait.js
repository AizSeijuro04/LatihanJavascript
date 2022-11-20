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

const orderKFC = async(paket) =>{
    const nomorAntri = await getNomorAntri();
    const menu = await pilihPaket(paket);
    return [nomorAntri,menu]
}

orderKFC("C")
    .then(response => console.log(response))
    .catch(error => console.log(error));