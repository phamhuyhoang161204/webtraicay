document.getElementById('description-title').addEventListener('click', function() {
    document.querySelector('.mieuta-1').classList.add('active');
    document.querySelector('.mieuta-2').classList.remove('active');
    document.getElementById('description-title').classList.add('active');
    document.getElementById('additional-info-title').classList.remove('active');
});

document.getElementById('additional-info-title').addEventListener('click', function() {
    document.querySelector('.mieuta-1').classList.remove('active');
    document.querySelector('.mieuta-2').classList.add('active');
    document.getElementById('description-title').classList.remove('active');
    document.getElementById('additional-info-title').classList.add('active');
});