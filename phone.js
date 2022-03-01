const searchPhone = ()=>{
    const searchfield = document.getElementById('search-field');
    const searchText = searchfield.value;
    // console.log(searchText);
    searchText.textContent = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data));

}

const displaySearchResult = phones =>{
    const searchResult = document.getElementById('search-result');
    phones.data.forEach(phone =>{
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `
        <div onclick="loadPhoneDetails()" class="card">
          <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <h5>${phone.slug}</h5>
            <p class="card-text">${phone.phone_name} has a 6.7-inch1 all-screen Super Retina XDR display with ProMotion. The back is textured matte glass, and there's a flat-edge stainless steel band around the frame. </p>
          </div>
        </div>
      </div>
      `;
      searchResult.appendChild(div);
    }) 
}

const loadPhoneDetails =()=>{
    const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data));

}

const displayPhoneDetails = phone =>{
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`
    <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    phoneDetails.appendChild(div);
}

