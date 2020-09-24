$.getJSON("src/js/database.json", function (data) {
    let projects = data.projects;
    let response = '';
    
    for (i = 0; i < projects.length; i++) {
        response += '<div class="col mb-4">';
        response += '<div class="card">';
        response += '<img src='+ projects[i].image +' class="card-img-top">';
        response += '<div class="card-body">';
        response += '<h5 class="card-title">'+ projects[i].name +'</h5>';
        response += '<p class="card-text">'+ projects[i].description +'</p>';
        response += '</div>';
        response += '<button type="button" class="btn btn-secondary mt-4 p-3" id="modal_' + projects[i].id + '" onClick="modal('+ projects[i].id +')" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Ver mais</button>';
        response += '</div>';
        response += '</div>';
    }

    document.getElementById('cards').innerHTML = response;
});


function modal(id){
    $.getJSON("src/js/database.json", function (data) {
        let projects = data.projects;
        let response = '';

        response += '<h4 class="modal-title-secondary">'+ projects[id].name +'</h4><br>';
        response += '<p class="justify pt-4 pb-3 description-large">'+ projects[id].description_large +'</p>';
        for (let i = 0; i < projects[id].linguagens.length; i++) {
            response += '<div class="tools">'+ projects[id].linguagens[i] +'</div>';
        }
        document.querySelector('div.modal-footer').innerHTML = response;
    });
}