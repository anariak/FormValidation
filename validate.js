
//prevent default

window.onload = () => {

    const formulario = document.getElementsByTagName("form")[0];
    const alerta = document.getElementById("alerta");
    const CodPostal = document.getElementById("CodPostal");



    formulario.addEventListener("submit", (event)=>{
        event.preventDefault();
        const color = '#ffb3b3';
        console.log('prevent default');
        alerta.style.display="none";
        
        if (!validator.isCreditCard('tarjeta')) {
            document.getElementById('CardNumber').style.background=color;
            //String === value HTML
        }if(!validator.isPostalCode('postal','CH')){
            CodPostal.style.background=color;
            //String validacon
        }if(!validator.isEmpty('vacio')){
            document.getElementById('Estado').style.background=color;
        }

        alerta.innerHTML = 'Errroorrrr';

    }
    )}