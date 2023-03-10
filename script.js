fetch('data.json')
.then((res) => res.json())
.then((data) => {
    let todo = `
    <p class="main-title">
        <i class="fa fa-circle" aria-hidden="true"></i> Todo ( 3 )
    </p>`;
    let doing = `
    <p class="main-title">
        <i class="fa fa-circle" aria-hidden="true"></i> Doing ( 3 )
    </p>`;
    let done = `
    <p class="main-title">
        <i class="fa fa-circle" aria-hidden="true"></i> Done ( 3 )
    </p>`;
    for(i=0;i<data.length;i++) {
        if(data[i].status == "todo") {
            todo += `
            <div class="card-item">
                <h4 class="card-title">${data[i].title}</h4>
                <p class="card-subtask">0 of 3 subtasks</p>
            </div>`;
        } else if(data[i].status == "doing") {
            doing += `
            <div class="card-item">
                <h4 class="card-title">${data[i].title}</h4>
                <p class="card-subtask">0 of 3 subtasks</p>
            </div>`;
        } else{
            done += `
            <div class="card-item">
                <h4 class="card-title">${data[i].title}</h4>
                <p class="card-subtask">0 of 3 subtasks</p>
            </div>`;
        }
    }
    document.getElementById('todo').innerHTML = todo;
    document.getElementById('doing').innerHTML = doing;
    document.getElementById('done').innerHTML = done;
})
.catch((err) => console.log(err));






{/* <div id="output"></div> */}
// fetch('data.json')
// .then((res) => res.json())
// .then((data) => {
//     let output = '<h2 class="mb-4">...</h2>';
//     data.forEach(function(element) {
//         output += `
//             <ul class="list-group mb-3">
//                 <li class="list-group-item list-group-item-warning">Name: ${element.id}</li>
//                 <li class="list-group-item list-group-item-warning">Family: ${element.title}</li>
//             </ul>
//         `;
//     });
//     document.getElementById('output').innerHTML = output;
// })
// .catch((err) => console.log(err));