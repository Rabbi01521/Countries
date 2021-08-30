const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h6>Country Name: ${country.name}</h6>
            <img width="100px" src="${country.flag}">
            <p>Capital: ${country?.capital}</p>
            <button onclick = "loadCountryDetail('${country.name}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
        `;
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p')
        // p.innerText = country.capital
        // div.appendChild(p);
        countriesDiv.appendChild(div)
    })
}



const loadCountryDetail = name => {
    document.getElementById('spinner').classList.remove('d-none');
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country);
    document.getElementById('spinner').classList.add('d-none');
    const countryDiv = document.getElementById('exampleModalLabel');
    const modalBody = document.getElementById('modal-body');
    countryDiv.innerText = `${country.name}`;
    modalBody.innerHTML = `
        <img class = "my-3 img-fluid border border-2" src="${country.flag}">
        <p> Population: ${country.population}</p>
        <p> Capital: ${country.capital}</p>
        <p> Calling-Codes: ${country.callingCodes}</p>
        <p> Region: ${country.region}</p>
        <p> Native Name: ${country.nativeName}</p>
        <p> languages: ${country.languages[0].name}</p>
        <p> languages Native-Name: ${country.languages[0].nativeName}</p>
        <p> currencies-Code: ${country.currencies[0].code}</p>
        <p> currencies-Name: ${country.currencies[0].name}</p>
        <p> currencies-Symbol: ${country.currencies[0].symbol}</p>
        <p> Regional Blocs: ${country.regionalBlocs[0]?.acronym}(${country.regionalBlocs[0]?.name})</p>
    `
    // countryDiv.innerHTML = `
    //     <h4>${country.name}</h4>
    //     <img width="100px" src="${country.flag}">
    //     <p> Population: ${country.population}</p>
    // `;
}