console.log('this is my Js file');

let matches = document.getElementById('matches');
const srcKey = `mqzk1XndatNHgshk4LX04BOnA7d2`;

    // grab the matches
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://www.cricapi.com/api/matches/mqzk1XndatNHgshk4LX04BOnA7d2`, true);

xhr.onload = function() {
    if(this.status === 200){

        let json = JSON.parse(this.responseText);
        let getmatches =json.matches
        console.log(getmatches)
        getmatches.forEach((item, index) => {
            console.log(item['team-1'], item['team-2']);
            matches.insertAdjacentHTML("beforeend", `<div class="col-lg-6 mt-4">
                                                            <div class="card border" style="width: 30rem; height: 18rem;">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">${item['type']} Match</h5>
                                                                    <h6 class="card-subtitle mb-2 text-muted">${item['dateTimeGMT']}</h6>
                                                                    
                                                                    <div class="card-text text-center mt-4">
                                                                        <div class="team">${item['team-1']}</div>
                                                                        <div class="vs">Vs</div>
                                                                        <div class="team">${item['team-2']}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>`)
        })
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send();