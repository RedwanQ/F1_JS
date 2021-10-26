const inputTxt = document.querySelector('.inputTxt');
const inputTxt2 = document.querySelector('.inputTxt2');
var button = document.querySelector('.mainbtn');
const showData = document.querySelector('.showData');


button.addEventListener('click', () => {

  
    const Season = inputTxt.value;
    const Round = inputTxt2.value;
  
    // .then(data =>
   
    fetch(`http://ergast.com/api/f1/${Season}/${Round}.json`)
        .then(res => res.json())
        .then(data => {
          
            inputTxt.value = " ";

            showData.innerHTML = `
                                        <table class="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">Season</th>
                                            <th scope="col">Round</th>
                                            <th scope="col">Race Name</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Circuit</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Country</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                
                                            <td>${data.season}</td>
                                            <td>${data.round}</td>
                                            <td>${data.raceName}</td>
                                            <td>${data.date}</td>
                                            <td>${data.time}</td>
                                            <td>${data.circuit}</td>
                                            <td>${data.location}</td>
                                            <td>${data.country}</td>
                                
                                        </tr>
                                        
                                        </tbody>
                                    </table>
                                `; 

        });

});