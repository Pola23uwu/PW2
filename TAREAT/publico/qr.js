function geneQR() {
    var input1 = document.getElementById('input1').value.trim();
    var input2 = document.getElementById('input2').value.trim();
    var input3 = document.getElementById('input3').value.trim();
    var input4 = document.getElementById('input4').value.trim();
    var suma = input1 + ',' + input2 + ',' + input3+','+ input4;

    console.log(input1);

    if (suma === ',,') {
        alert('Por favor, ingrese al menos un texto para generar el código QR.');
        return;
    }

    var qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(suma);

    

    var qrImg = document.createElement('img');
    qrImg.src = qrCodeURL;
    qrImg.alt = 'Código QR';
    console.log(qrImg.src);
    qrImg.classList.add('qr-code');

   
    document.getElementById('qr-code').appendChild(qrImg);

}