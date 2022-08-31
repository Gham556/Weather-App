const allCountries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','The Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo, Democratic Republic of the','Congo, Republic of the','Costa Rica',"Côte d'Ivoire",'Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor (Timor-Leste)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','The Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea, North','Korea, South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia, Federated States of','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar (Burma)','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Sudan, South','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe']
const button = document.querySelector('button');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const country = document.querySelector('#country');
const searchLocation = document.querySelector('#location')
const image = document.querySelector('img')
const description = document.querySelector('#description');
const t = document.querySelector('#t');
const fl = document.querySelector('#fl');
const tmin = document.querySelector('#tmin');
const tmax = document.querySelector('#tmax');
const h = document.querySelector('#h');
const degrees = document.querySelector('#degrees');
const speed = document.querySelector('#speed');


const getLongLat = function () {
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city.value},${state.value},${countryCodes[country.value]}&limit=1&appid=69ff2ed8b60981a3839ce9cc55bec2a8`, {mode:'cors'})

.then(function(response) {
    return response.json()
})

.then(function(response) {
    return([response[0].lon, response[0].lat])
})

.then(function(response) {
    console.log(response)
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${response[1]}&lon=${response[0]}&units=imperial&appid=69ff2ed8b60981a3839ce9cc55bec2a8`, {mode:'cors'})
})

.then(function(response) {
return response.json()
})

.then(function (response) {
    return[response.main, response.weather, response.wind]
})

.then(function (response) {
    console.log(response);
    searchLocation.textContent = city.value + ', ' + state.value;
    image.src = `http://openweathermap.org/img/wn/${response[1][0].icon}@2x.png`
    description.textContent = response[1][0].description;
     t.textContent = response[0].temp + '\u00B0';
     fl.textContent = response[0].feels_like + '\u00B0';
    tmin.textContent = response[0].temp_min + '\u00B0';
    tmax.textContent = response [0].temp_max + '\u00B0';
    h.textContent = response[0].humidity + '%';
    degrees.textContent = response[2].deg;
    speed.textContent = response[2].speed + 'm/h';


})

}


for (let i of allCountries) {
    const countries = document.createElement('option');
    countries.value = i; 
    countries.text= i; 
    country.appendChild(countries);
}

button.addEventListener('click', getLongLat)

const countryCodes = {'Afghanistan': 'AF', 'Albania': 'AL', 'Algeria': 'DZ', 'Andorra': 'AD', 'Angola': 'AO', 'Antigua and Barbuda': 'AG','Argentina': 'AR','Armenia': 'AM','Australia': 'AU','Austria': 'AU','Azerbaijan': 'AZ','The Bahamas': 'BS','Bahrain': 'BH','Bangladesh': 'BD','Barbados': 'BB','Belarus': 'BY','Belgium': 'BE','Belize': 'BZ','Benin': 'BJ','Bhutan': 'BT','Bolivia': 'BO','Bosnia and Herzegovina': 'BA','Botswana': 'BW','Brazil': 'BR','Brunei': 'BN','Bulgaria': 'BG','Burkina Faso': 'BF','Burundi': 'BI','Cabo Verde': 'CV','Cambodia': 'KH','Cameroon': 'CM','Canada': 'CA','Central African Republic': 'CF','Chad': 'TD','Chile': 'CL','China': 'CN','Colombia': 'CO','Comoros': 'KM','Congo, Democratic Republic of the': 'CD','Congo, Republic of the': 'CG','Costa Rica': 'CR',"Côte d'Ivoire": 'CI','Croatia': 'HR','Cuba': 'CU','Cyprus': 'CY','Czech Republic': 'CZ','Denmark': 'DK','Djibouti': 'DJ','Dominica': 'DM','Dominican Republic': 'DO','East Timor (Timor-Leste)': 'TL','Ecuador': 'EC','Egypt': 'EG','El Salvador': 'SV','Equatorial Guinea': 'GQ','Eritrea': 'ER','Estonia': 'EE','Eswatini': 'SZ','Ethiopia': 'ET','Fiji': 'FJ','Finland': 'FI','France': 'FR','Gabon': 'GA','The Gambia': 'GM','Georgia': 'GE','Germany': 'DE','Ghana': 'GH','Greece': 'GR','Grenada': 'GD','Guatemala': 'GT','Guinea': 'GN','Guinea-Bissau': 'GW','Guyana': 'GY','Haiti': 'HT','Honduras': 'HN','Hungary': 'HU','Iceland': 'IS','India': 'IN','Indonesia': 'ID','Iran': 'IR','Iraq': 'IQ','Ireland': 'IE','Israel': 'IL','Italy': 'IT','Jamaica':'JM','Japan':'JP','Jordan': 'JO','Kazakhstan': 'KZ','Kenya': "KE",'Kiribati': 'KI','Korea, North': 'KP','Korea, South': 'KR','Kuwait': 'KW','Kyrgyzstan': 'KG','Laos': 'LA','Latvia': 'LV','Lebanon': 'LB','Lesotho': 'LS','Liberia': 'LR','Libya': 'LY','Liechtenstein': 'LI','Lithuania': 'LT','Luxembourg': 'LU','Madagascar': 'MG','Malawi': 'MW','Malaysia': 'MY','Maldives': 'MV','Mali': 'ML','Malta': 'MT','Marshall Islands': 'MH','Mauritania': 'MR','Mauritius': 'MU','Mexico': 'MX','Micronesia, Federated States of': 'FM','Moldova': 'MD','Monaco': 'MC','Mongolia': 'MN','Montenegro': 'ME','Morocco': 'MA','Mozambique': 'MZ','Myanmar (Burma)': 'MM','Namibia': 'NA','Nauru': 'NR','Nepal': 'NP','Netherlands': 'NL','New Zealand': 'NZ','Nicaragua': 'NI','Niger': 'NE','Nigeria': 'NG','North Macedonia': 'MK','Norway': 'NO','Oman': 'OM','Pakistan': 'PK','Palau': 'PW','Panama': 'PA','Papua New Guinea': 'PG','Paraguay': 'PY','Peru': 'PE','Philippines': 'PH','Poland': 'PL','Portugal': 'PT','Qatar': 'QA','Romania': 'RO','Russia': 'RU','Rwanda': 'RW','Saint Kitts and Nevis': 'KN','Saint Lucia': 'LC','Saint Vincent and the Grenadines': 'VC','Samoa': 'WS','San Marino': 'SM','Sao Tome and Principe': 'ST','Saudi Arabia': 'SA','Senegal': 'SN','Serbia': 'RS','Seychelles': 'SC','Sierra Leone': 'SL','Singapore': 'SG','Slovakia': 'SK','Slovenia': 'SI','Solomon Islands': 'SB','Somalia': 'SO','South Africa': 'ZA','Spain': 'ES','Sri Lanka': 'LK','Sudan': 'SD','Sudan, South': 'SD','Suriname': 'SR','Sweden': 'SE','Switzerland': 'CH','Syria': 'SY','Taiwan': 'TW','Tajikistan': 'TJ','Tanzania': 'TZ','Thailand': 'TH','Togo': 'TG','Tonga': 'TO','Trinidad and Tobago': 'TT','Tunisia': 'TN','Turkey': 'TR','Turkmenistan': 'TM','Tuvalu': 'TV','Uganda': 'UG','Ukraine': 'UA','United Arab Emirates': 'AE','United Kingdom': 'GB','United States': 'US','Uruguay': 'UY','Uzbekistan': 'UZ','Vanuatu': 'VU','Venezuela': 'VE','Vietnam': 'VN','Yemen': 'YE','Zambia': 'ZM','Zimbabwe': 'ZW'};