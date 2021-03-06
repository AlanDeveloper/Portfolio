const DABATASE_URL = "/Portfolio";
// const DABATASE_URL = "http:localhost:3000";

$.getJSON(DABATASE_URL + '/database.json', function (data) {
// $.getJSON(DABATASE_URL + '/projects', function (data) {
    let projects = data.projects;
    // let projects = data;
    let response = '';
    
    for (let i = 0; i < projects.length; i++) {
        response += '<div class="col mb-4">';
        response += '<div class="card">';
        response += '<img src=' + projects[i].images[0] +' class="card-img-top">';
        response += '<div class="cover" id="modal_' + projects[i].id + '" onClick="modal(' + projects[i].id +')" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">';
        response += '<div class="text">' + projects[i].name + '</div>';
        response += '</div>';
        response += '</div>';
        response += '</div>';
    }

    document.querySelector('#cards').innerHTML = response;
});

$.getJSON(DABATASE_URL + '/database.json', function (data) {
// $.getJSON(DABATASE_URL + '/skills', function (data) {
    let skills = data.skills;
    // let skills = data;
    let response = '';

    for (let i = 0; i < skills.length; i++) {
        response += '<div class="text-white mt-2">';
        response += '<div class="row">';
        response += '<img src="' + skills[i].src + '" alt="' + skills[i].name.toLowerCase() + '">';
        response += '<p>' + skills[i].name  + '</p>';
        response += '</div></div>';        
    }
    
    document.querySelector('.skills').innerHTML = response;
});


function modal(id){
    $.getJSON(DABATASE_URL + '/database.json', function (data) {
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
        response += '<h4 style="margin: 0px;">'+ projects[id].name +'</h4>';
        response += '<div class="descrip"><p>' + projects[id].description_large + '</p>';
        response += '<div class="mt-3">';
        for (let i = 0; i < projects[id].linguagens.length; i++) {
            response += `<div class="tools">${projects[id].linguagens[i]}</div>`;
        }
        response += '</div>';
        response += '<div class="mt-4" style="display:flex;justify-content: center;">';
        response += '<a href="' + projects[id].link + '" target="_blank" style="padding: 10px;padding-left: 0px;"><i class="icon-github"></i></a>';
        response += '<a href="' + projects[id].linkOnline + '" target="_blank" style="padding: 10px;"><i class="icon-link"></i></a></div>';
        document.querySelector('div.modal-footer').innerHTML = response;
    });
}