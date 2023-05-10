const form = document.getElementById('form');

function getFormValue(event) {
    event.preventDefault();

    const chooseTower = form.querySelector('[name="chooseTower"]'),
    chooseTEtag = form.querySelector('[name="chooseTEtag"]'), 
    choosePeregovor = form.querySelector('[name="choosePeregovor"]'), 
    textArea = form.querySelector('[name="textArea"]'); 

    const data = {
        chooseTower: chooseTower.value,
        chooseTEtag: chooseTEtag.value,
        choosePeregovor: choosePeregovor.value,
        textArea: textArea.value
    };

   
    console.log(JSON.stringify(data));
}

form.addEventListener('submit', getFormValue);




