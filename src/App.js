import { useState } from 'react';
import { data } from './data.js';
import { data2 } from './data2.js';
import './App.css';

function App() {

const [countries, setCountries] = useState(data);
const [showText, setshowText] = useState(false);

const [sliderCountry, setSliderCountry] = useState(0);
const {number, place, pic} = data2[sliderCountry];

const removeCountry = (id) => {
  let newCountries = countries.filter(country => country.id !== id);
  setCountries(newCountries);
}
const showTextClick = (country) => {
  country.showMore = !country.showMore;
  setshowText(!showText)
}

const previousCountry = () => {
  setSliderCountry((sliderCountry) => {
    sliderCountry --;
    if(sliderCountry < 1) {
      return data2.length - 1;
    }
    return sliderCountry;
  })
}

const nextCountry = () => {
  setSliderCountry((sliderCountry) => {
    sliderCountry ++;
    if(sliderCountry > data2.length - 1) {
      sliderCountry = 0;
    }
    return sliderCountry;
  })
}

  return (
    <div >
      <div className='container'>
        <h1>Top {countries.length} Countries to Travel Alone</h1>
      </div>

      {countries.map((country => {
        const{id, countr, description, image, showMore} = country;

        return (
          <div key={id}>
      <div className='container'><h2>{id} - {countr}</h2></div>
      <div className='container'><p>{showMore ? description : description.substring(0, 200) + "..."}
      <button className='showBtn' onClick={() => showTextClick(country)}>{showMore ? 'Show less' : 'Show more'}</button></p></div>
      <div className='container'> <img src={image} width="300px" alt='country'/> </div>
      <div className='container'><button className=' btn' onClick={() => removeCountry(id)}>Remove</button></div>
          </div>
        )
      }))}
      <div key={number}>
      <div className='container'><button className=' btn' onClick={() => setCountries([])}>Remove all</button></div>
      <div className='container'><h2>Also worth visit</h2></div>
      <div className='container'><h2>{number} - {place}</h2></div>
      <div className='container'><img src={pic} width='300px' alt='pic'/></div>
      <div className='container'>
        <button className='btn' onClick={previousCountry} >Previous</button>
        <button className='btn'onClick={nextCountry} >Next</button>
      </div>
      </div>

    </div>
  );
}

export default App;
