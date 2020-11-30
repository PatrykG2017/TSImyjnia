window.addEventListener('DOMContentLoaded', function(e){
    document.getElementById('submit').addEventListener('click', function(e){
        e.preventDefault();
        let check = document.querySelectorAll('input[name="check"]');
        let radio = document.querySelectorAll('input[name="karta"]');
        let pojazd = document.querySelectorAll('option[name="pojazd"]');
        let cena = 0;
        for(const i in check){
            if(check[i].checked){
               cena += parseInt(check[i].value);
            }
        }
        for(const i in pojazd){
            if(pojazd[i].selected){
                cena*=parseFloat(pojazd[i].value);
            }
        }
        for(const i in radio){
            if(radio[i].checked){
                cena*=parseFloat(radio[i].value);
            }
        }
        document.getElementById('koszt_u').innerText =  "Całkowity koszt usługi: "+cena.toFixed(2)+" zł";
    });   
});