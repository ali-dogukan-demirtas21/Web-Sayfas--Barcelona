document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const birthDate = document.getElementById('birthDate').value;
    const profession = document.getElementById('profession').value;

    if (firstName && lastName && gender && birthPlace && birthDate && profession) {
        alert('Kayıt başarılı! FC Barcelona Türkiye Taraftarlar Sitemize Hoş Geldiniz! ' + firstName + ' ' + lastName + '!');
    } else {
        alert('Lütfen eksik yerleri doldurunuz. Kayıt işlemlerini sorunsuzca doldurup bu tutkulu topluluğumuza katılmanızı heyecanla bekliyoruz!');
    }
});