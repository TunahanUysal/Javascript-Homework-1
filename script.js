let userName=prompt("Lütfen isminizi giriniz","Örnek:Tunahan")

let nameDOM=document.querySelector("#name-info")

if(userName){
        nameDOM.innerHTML=`${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}` 
    } else if(userName=="") {
        nameDOM.innerHTML="İsimsiz Kahraman:)"
    } else {
        nameDOM.innerHTML="İsim girmekten vazgeçen Kahraman:)"
    }

function clockFunction(){
    let clockDOM=document.querySelector("#clock-info")
    let date=new Date()
    let days=["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    clockDOM.innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getUTCDay()]}`
    setTimeout(clockFunction,1000);

}

clockFunction();