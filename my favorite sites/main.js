
const fetchData = async () => {
    const res = await fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50');

    const data = await res.json();

    return data;
}

const fetchedData = fetchData.then(jsonData => console.log(jsonData)); 



/* fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50')
.then(jsonData => jsonData.json())
.then(output => fetchedData = output.Data) */

console.log(fetchedData);

/* let tys = output.Data */

/* tys.forEach(myFunction) */



/* function myFunction(item, index, arr) {
    for(let i; i < tys.length; i++ )
        arr[i] +=
} */
/* document.getElementById("demo").innerHTML = tys; */



/* let printIt = (data) => {
    console.info(typeof data)
    let item1 = data;
    console.log(item1)
    console.log(data.[2])

} */


/* https://sub60.tobit.com/l/ID?size=100 */

//    `<div class="table__cell">
//<img src="https://tsimg.cloud/72418-10719/76f8f22db31de65886ba420a4b0b584400afb01d_w75-h75.png" alt="sometext" />
//<p>Some text</p>
//</div>`
//document.getElementById("demo").innerHTML = cars;