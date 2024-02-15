
let biletter=[];

//funksjonen som brukes når man bruker kjøp billetter knappen
function kjopteBiletter(){
//lagrer det som blir satt inn i inputfeltene
    let valgtFilm=document.getElementById("filmer").value;
    let valgtAntall=document.getElementById("antallBiletter").value;
    let valgtFornavn=document.getElementById("fornanvn").value;
    let valgtEtternavn=document.getElementById("etternavn").value;
    let valgtTelefonNr=document.getElementById("telefonNr").value;
    let valgtEpost=document.getElementById("epost").value;

    const bilettValgt={
        film: valgtFilm, antall: valgtAntall, fornavn: valgtFornavn, etternavn: valgtEtternavn, telefonNr: valgtTelefonNr, epost: valgtEpost
    };

    //inputvalideringer som sjekker at alle inputfeltene inneholder noe
    if (bilettValgt.antall===""){
        document.getElementById("feilAntall").innerHTML= "Må skrive noe inn i antall-feltet";
    }
    else{
        document.getElementById("feilAntall").innerHTML="";
    }
    if (bilettValgt.fornavn===""){
        document.getElementById("feilFornavn").innerHTML= "Må skrive noe i fornavn-feltet";
    }
    else {
        document.getElementById("feilFornavn").innerHTML="";
    }
    if (bilettValgt.etternavn===""){
        document.getElementById("feilEtternavn").innerHTML="Må skrive noe inn i etternavn-feltet";
    }
    else {
        document.getElementById("feilEtternavn").innerHTML="";
    }
    if (bilettValgt.telefonNr===""){
        document.getElementById("feilTelefonNr").innerHTML="Må skrive inn telefonnr";
    }
    else {
        document.getElementById("feilTelefonNr").innerHTML="";
    }
    if (bilettValgt.epost===""){
        document.getElementById("feilEpost").innerHTML="Må skrive inn epost";
    }
    else {
        document.getElementById("feilEpost").innerHTML="";
    }
    //legger til det som er lagt inn i inputfeltene i bestillingslista og tømmer input- og feilmeldingene for å blanke sida ved utført kjøp
    if (bilettValgt.antall !=="" && bilettValgt.fornavn !=="" && bilettValgt.etternavn !=="" && bilettValgt.telefonNr !=="" && bilettValgt.epost !==""){
        biletter.push(bilettValgt);
        visKjopteBiletter();
    }
    document.getElementById("filmer").value = "";
    document.getElementById("antallBiletter").value = "";
    document.getElementById("fornanvn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonNr").value = "";
    document.getElementById("epost").value = "";
    document.getElementById("feilAntall").innerHTML = "";
    document.getElementById("feilFornavn").innerHTML = "";
    document.getElementById("feilEtternavn").innerHTML = "";
    document.getElementById("feilTelefonNr").innerHTML = "";
    document.getElementById("feilEpost").innerHTML = "";
}
//funksjonen for å vise kjøpte billetter
function visKjopteBiletter(){
    let bilettListe=document.getElementById("kjopteBiletter");
    bilettListe.innerHTML="";
    let htmlListe="";
    for (let i=0; i<biletter.length; i++){
        let bilett=biletter[i];
        htmlListe+=`<li>Film: ${bilett.film}, Antall: ${bilett.antall}, Navn: ${bilett.fornavn} ${bilett.etternavn}, Telefon: ${bilett.telefonNr}, E-post: ${bilett.epost}</li>`;
    }
    bilettListe.innerHTML=htmlListe;
}

//funskjon for å slette alle billettene
function slettAlleBiletter(){
    biletter=[];
    visKjopteBiletter();
}