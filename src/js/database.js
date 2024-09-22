function modal(id) {
    let projects = database.projects;
    let response = '';

    for (let i = 0; i < projects[id].images.length; i++) {
        if (i == 0) {
            response += '<div class="carousel-item active">';
        } else {
            response += '<div class="carousel-item">';
        }
        response += '<img src=' + projects[id].images[i] + ' class="d-block w-100">';
        response += '</div>';
    }
    document.querySelector('.carousel-inner').innerHTML = response;

    response = '';
    response += '<h4 style="margin: 0px;">' + projects[id].name + '</h4>';
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
}

const database = {
    "projects": [
        {
            "id": 0,
            "name": "BookPoint",
            "images": [
                "src/assets/img/book-point/image_1.png",
                "src/assets/img/book-point/image_2.png",
                "src/assets/img/book-point/image_3.png",
                "src/assets/img/book-point/image_4.png",
                "src/assets/img/book-point/image_5.png",
                "src/assets/img/book-point/image_6.png",
                "src/assets/img/book-point/image_7.png",
                "src/assets/img/book-point/image_8.png",
                "src/assets/img/book-point/image_9.png",
                "src/assets/img/book-point/image_10.png"
            ],
            "description_large": "Um projeto de livraria online, para encerramento do 3° ano no IFRS, remodelado em 2020.",
            "linguagens": ["PHP", "PostgresSQL", "Materialize"],
            "link": "https://github.com/AlanDeveloper/Book-Point",
            "linkOnline": "https://bk-point.herokuapp.com/"
        },
        {
            "id": 1,
            "name": "DS Delivery",
            "images": [
                "src/assets/img/ds-deliver/image_1.png",
                "src/assets/img/ds-deliver/image_2.png",
                "src/assets/img/ds-deliver/image_3.png",
                "src/assets/img/ds-deliver/image_4.png"
            ],
            "description_large": "Projeto desenvolvido para complementar meus conhecimentos sobre React, java e subir um site para nuvem, através da 2ª ed. da Semana DevSuperior",
            "linguagens": ["Java", "Typescript", "React Native", "Spring Boot", "React JS"],
            "link": "https://github.com/AlanDeveloper/DS_Delivery",
            "linkOnline": "https://delivery-sds2.netlify.app/"
        },
        {
            "id": 2,
            "name": "Quiz",
            "images": [
                "src/assets/img/quiz/image_1.png",
                "src/assets/img/quiz/image_2.png",
                "src/assets/img/quiz/image_3.png",
                "src/assets/img/quiz/image_4.png",
                "src/assets/img/quiz/image_5.png"
            ],
            "description_large": "Projeto desenvolvido durante a imersão React Next JS da Alura, com intuito de aprender algum conhecimento em Next JS.",
            "linguagens": ["Next JS", "ReactJS"],
            "link": "https://github.com/AlanDeveloper/Quiz",
            "linkOnline": "https://quiz.alandeveloper.vercel.app"
        }
    ]
};

let projects = database.projects;
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