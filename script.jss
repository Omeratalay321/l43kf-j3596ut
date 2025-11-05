document.getElementById('evetBtn').addEventListener('click', function() {
    // "Evet"e tıklandığında
    document.getElementById('sonuc').innerHTML = "Bende seni seviyorum abi! 🥰";
    document.getElementById('sonuc').style.color = "#4CAF50"; // Yeşil sonuç rengi
    document.getElementById('sonuc').style.opacity = 1; // Sonucu göster
    document.body.style.backgroundColor = "#ccffcc"; // Arka planı hafif yeşile çevir
});

document.getElementById('hayirBtn').addEventListener('click', function() {
    // "Hayır"a tıklandığında
    document.getElementById('sonuc').innerHTML = "Neden 'Hayır'a bastın ki! 🥺";
    document.getElementById('sonuc').style.color = "#f44336"; // Kırmızı sonuç rengi
    document.getElementById('sonuc').style.opacity = 1; // Sonucu göster
    document.body.style.backgroundColor = "#ffdddd"; // Arka planı hafif kırmızıya çevir
});
