"use strict";

function work(){
    console.log("work ran");
    return `
    
    <div class="wrap-work"> 
        <section>
            <div class="thumb-cont">
            <a href="https://seiryuden.github.io/nintendo-quiz/" target="_blank"><img src="img/nintendo-quiz-img.jpg" alt="nintendo quiz thumbnail"></a> 
            
            </div>
            <div class="description-cont">
            
                <h1 class="project-name">Nintendo Short Quiz</h1>
                <p class="description"> A small quiz app I created as part of my web development training, using HTML, CSS, JavaScript and JQuery.</p> 
                <a href="https://github.com/seiryuden/nintendo-quiz"><img src="img/github.png" class="repo" alt="github logo"></a> 
            </div>
        </section>

        <section>
            <div class="thumb-cont">
            <a href="https://seiryuden.github.io/vgp-monitor/" target="_blank"><img src="img/ss-landing.jpg" alt="vgpm thumbnail"></a>
                
            </div>
            <div class="description-cont">
                <h1 class="project-name">VGP Monitor</h1>
                <p class="description">An app for fetching and displaying news and other online content related to major video game platforms. It provides a quick overview of material published by popular websites (e.g. Gamespot, Youtube) in the specified date. Built with HTML, CSS, JavaScript and JQuery.</p>
                <a href="https://github.com/seiryuden/vgp-monitor"><img src="img/github.png" class="repo" alt="github logo"></a>
            </div>
        </section>

        <section>
            <div class="thumb-cont">
                
            </div>
            <div class="description-cont">
                <h1 class="project-name">Project Name</h1>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nunc a neque mattis, quis maximus enim tincidunt. Sed maximus velit ligula.</p>
            </div>
        </section>

        <section>
            <div class="thumb-cont">
                
            </div>
            <div class="description-cont">
                <h1 class="project-name">Project Name</h1>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nunc a neque mattis, quis maximus enim tincidunt. Sed maximus velit ligula.</p>  
            </div>
        </section>
    
    </div>
    
    `
}

function about(){
    return `
    <div class="wrap-about">
        <p class="about-text">I'm passionate about crafting appealing and highly-polished user interfaces, as I am about programming their interactivity and see it work flawlessly. In my work I strive for quality not only because of its economic value, but because I derive self-realization and meaning from it.  
        </p>
        <p class="about-text">I recently graduated from <a href="https://www.thinkful.com/"> Thinkful's</a> full-stack web development bootcamp, where I mastered the skills to build websites using HTML, CSS, JavaScript, JQuery and React, as well as Node & Postgres. Apart from my technical skills, during my years working as a lawyer I’ve been recognized as highly reliable and cooperative, able to learn from criticism, capable of working under pressure and of maintaining great interpersonal relationships. 
        </p>
        <p class="about-text">When I’m not coding, I’m usually studying Japanese, hiking, spending time with friends or playing video games (I wish I had more time for them!). I also enjoy exploring the local cuisine and having a little taste of Chile (my home country) by opening a selected bottle of wine.</p>
    </div>
    `
}

function contact(){
    return `

        <div class="wrap-contact"
            <p class="email"> <img class="contact-logo contact-item mail-logo" src="img/mail.jpg" alt="letter icon"> <a href="mailto:roberto.il@outlook.com">roberto.il@outlook.com</a></p>

            <p class="line-id"> <img class="contact-logo contact-item" src="img/line.png" alt="line message app logo"> ID: ribarra </p>
        
            <a class="linkedin" href="https://www.linkedin.com/in/roberto-ibarra-16471617a/"><img class="contact-logo contact-item" src="img/linkedin.png" alt="linkedIn logo"></a>
        </div>
    
    `
}

function renderWork(){
    console.log("renderWork ran");
    $(".js-work").click(function(event){

        $(".js-content").empty();
        $(".js-content").html(work());
    });
    }


function renderAbout(){
    console.log("renderAbout ran");
    $(".js-about").click(function(event){

        $(".js-content").empty();
        $(".js-content").html(about());
    });    
}

function renderContact(){
    console.log("renderContact ran");

    $(".js-contact").click(function(event){

        $(".js-content").empty();
        $(".js-content").html(contact());
    })
}

function handleRender(){
    console.log("handleRender ran");
    about();
    work();
    contact();
    renderWork();
    renderAbout();
    renderContact();

}  



$(handleRender);