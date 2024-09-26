function openModal() {
    document.getElementById('donationModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('donationModal').style.display = 'none';
}

function handleSubmit(event) {
    event.preventDefault(); 
    
    closeModal();
}

window.onclick = function(event) {
    const modal = document.getElementById('donationModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}