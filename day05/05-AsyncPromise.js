//async await
const getNomorAntri = async(nomor)=>{
    if (nomor<=10) {
        return Promise.resolve(nomor)
    }
    else{
        return Promise.reject("nomor antrian habis")
    }
}

//call
getNomorAntri(15)
    .then(response => console.log(response))
    .catch(error => console.log(error))