const searchPhone = ()=>{
  const searchfield = document.getElementById('search-field');
  const searchText = searchfield.value;
  // console.log(searchText);
  searchText.value = '';
      const errorField = document.getElementById('error-field');

  if(searchText=='')
  {
      const p = document.createElement('p');
      p.innerText = `please enter something`;
      errorField.appendChild(p);
      
  }
  else{
      const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
      fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data));
    errorField.innerText = '';
      
      
  }

}
const displayError = error =>{
  document.getElementById('error-msg').style.display='block';

}
//showing result
const displaySearchResult = phones => {
const resultTitle = document.getElementById('result-title');

let showingNumber;

if (phones.data.length > 20) {
  showingNumber = 20;
} else {
  showingNumber = phones.data.length;
}
resultTitle.innerText = `Total ${phones.data.length} Results Found. Showing Results ${showingNumber} of ${phones.data.length}.`;
const slicedData = phones.data.slice(0, 20);
console.log(slicedData);
const searchResult = document.getElementById('search-result');
searchResult.innerHTML = "";
  slicedData.forEach(phone =>{
      // console.log(phone);
      const div = document.createElement('div');
    div.classList.add('col');
      div.innerHTML= `
      <div onclick="loadPhoneDetails('${phone.slug}')" class="card">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.phone_name} has a 6.7-inch1 all-screen Super Retina XDR display with ProMotion. The back is textured matte glass, and there's a flat-edge stainless steel band around the frame. </p>
        </div>
      </div>
    </div>
    `;
    searchResult.appendChild(div);
  }) 
}

const loadPhoneDetails = (slug) => {
console.log(slug)
  const url = `https://openapi.programming-hero.com/api/phone/${slug}`; //not showing image, name ,id. showing undefined there
  
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhoneDetails(data.data));

}

const displayPhoneDetails = phone =>{
  // console.log(phone);
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.textContent='';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML=`
  <img src="${phone.image}" class="card-img-top w-50" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.name}</h5> 
            <h5>${phone.slug}</h5>
            <p class="card-text">${phone.name} has a ${phone.mainFeatures.displaySize}. Chipset - ${phone.mainFeatures.chipSet}.</p>
            <a href="#" class="btn btn-primary">Details</a>
          </div>
  `;
  phoneDetails.appendChild(div);
  
}

