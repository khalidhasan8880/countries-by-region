const getData = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(datas => singleData(datas))
        .catch(err => {
            console.log(err);
        })
}

const uniqueRegion = [];

function singleData(datas) {
    const cardSection = document.getElementById('card-section');
    cardSection.innerHTML  = '';
    const dropList = document.getElementById('dropdown-list');
    datas.forEach(country => {
        console.log(country);
        if (uniqueRegion.indexOf(country.region) === -1) {
            const li = document.createElement('li');
            li.innerHTML = `<li onclick="getRegion('${country.region}')"><a>${country.region}</a></li>`
            dropList.appendChild(li);
        }
        const card = document.createElement('div');
        card.innerHTML =  `
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="${country.flags.png}" /></figure>
            <div class="card-body">
                <h2 class="card-title"> ${country.name.common}</h2>
               
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
        `
        cardSection.appendChild(card);
    });
}

const getRegion = (region) => {
   console.log(region);
   const url = `https://restcountries.com/v3.1/region/${region}`;
   getData(url)
}
getData('https://restcountries.com/v3.1/all')
