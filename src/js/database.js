const DABATASE_URL = "https://raw.githubusercontent.com/AlanDeveloper/Portfolio/master/back-end/database.json";

$.getJSON(DATABASE_URL, function (data) {
    let projects = data.projects;
    let response = '';
    
    for (let i = 0; i < projects.length; i++) {
        response += '<div class="col mb-4">';
        response += '<div class="card">';
        response += '<img src='+ projects[i].images[0] +' class="card-img-top">';
        response += '<div class="card-body">';
        response += '<h5 class="card-title">'+ projects[i].name +'</h5>';
        response += '<p class="card-text">'+ projects[i].description +'</p>';
        response += '</div>';
        response += '<button type="button" class="btn btn-project mt-4 p-3" id="modal_' + projects[i].id + '" onClick="modal('+ projects[i].id +')" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Ver mais</button>';
        response += '</div>';
        response += '</div>';
    }

    document.querySelector('#cards').innerHTML = response;
});

$.getJSON(DATABASE_URL, function (data) {
    let skills = data.skills;
    let response = '';

    for (let i = 0; i < skills.length; i++) {
        response += '<div class="bg-light">';
        response += '<div class="row">';
        response += '<img src="' + skills[i].src + '" alt="' + skills[i].name.toLowerCase() + '">';
        response += '<p>' + skills[i].name  + '</p>';
        response += '</div></div>';        
    }
    
    document.querySelector('.skills').innerHTML = response;
});


function modal(id){
    $.getJSON(DATABASE_URL, function (data) {
        let projects = data.projects;
        let response = '';
        
        for (let i = 0; i < projects[id].images.length; i++) {
            if(i == 0) {
                response += '<div class="carousel-item active">';
            } else {
                response += '<div class="carousel-item">';
            }
            response += '<img src='+ projects[id].images[i] +' class="d-block w-100">';
            response += '</div>';
        }
        document.querySelector('.carousel-inner').innerHTML = response;
        
        response = '';
        response += '<h4 class="modal-title-secondary">'+ projects[id].name +'</h4><br>';
        response += '<p class="justify pt-4 pb-3 description-large">' + projects[id].description_large + '<br>Link do repositório: <a href="' + projects[id].link + '">' + projects[id].link +'</a></p>';
        for (let i = 0; i < projects[id].linguagens.length; i++) {
            response += '<div class="tools">'+ projects[id].linguagens[i] +'</div>';
        }
        document.querySelector('div.modal-footer').innerHTML = response;
    });
}