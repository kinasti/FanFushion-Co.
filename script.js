function addToCart(productName) {
    alert(productName + " telah ditambahkan ke keranjang!");
}

function submitDesign() {
    const designInput = document.getElementById('design');
    const messageInput = document.getElementById('message');

    if (designInput.files.length > 0) {
        alert("Desain Anda telah diunggah dengan pesan: " + messageInput.value);
    } else {
        alert("Silakan unggah desain Anda.");
    }

    // Mencegah form melakukan submit secara default
    return false;
}
