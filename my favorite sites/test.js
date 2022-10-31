fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50')
  .then((response) => response.json())
  .then((data) => console.log(data));