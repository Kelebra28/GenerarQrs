
 qrcode = new QRCode("qrcode");

function makeCode () {      
    let elText = document.getElementById("text");
    
    if (!elText.value) {
        elText.focus();
        return;
    }
    
    qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });