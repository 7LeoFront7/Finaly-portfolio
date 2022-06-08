let form = document.querySelector('#feedback-form');
let name = form.querySelector('input[name="name"]');
let phone = form.querySelector('input[name="phone"]');
let formText = form.querySelector('.callback__form-text');
let formBody = form.querySelector('.callback__form-body');

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const fetchParams = {
        name: name.value,
        phone: phone.value
    }
    data = new FormData()
    for(param in fetchParams) {
        data.append(param, fetchParams[param])
    }
    console.log(formText.innerHTML)
    fetch('../action.php', {
        method: "POST",
        body: data
    })
        .then(response => {
            if(response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +  response.status);  
              return;  
            } else {
                formText.innerHTML = 'Ваша заявка отправлена!'
                formBody.style.display = 'none'
            }
        });
})