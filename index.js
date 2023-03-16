const firstElem = document.querySelector('.first_block');

fetch('https://dog.ceo/api/breeds/image/random/50').then((obj) => {
    return obj.json()
}).then((json) => {
    console.log(json)

    itemDog(json.message)
});

function itemDog(arr) {
    arr.forEach(function(item) {
        let dogHtml = `
            <div class="dog_item">
                <div class="dog__photo">
                    <img src="${item}" alt="dog">  
                </div>
            </div>
        `;

        firstElem.insertAdjacentHTML('beforeend', dogHtml);
    });
}