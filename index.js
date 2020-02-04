"use strict";

function work(){
    console.log("work ran");
    return `
    
    <div class="wrap-work"> 
        
        <section>
            <div class="thumb-cont">
            <a href="https://seiryuden.github.io/vgp-monitor/" target="_blank"><img src="img/ss-landing.jpg" alt="vgpm thumbnail"></a>
                
            </div>
            <div class="description-cont">
                <h1 class="project-name">VGP Monitor</h1>
                <p class="description">An app for fetching news related to major video game platforms from popular websites. Built with HTML, CSS, JavaScript and JQuery.</p>
                <a href="https://github.com/seiryuden/vgp-monitor"><img src="img/github.png" class="repo" alt="github logo"></a>
            </div>
        </section>

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
            <div class="thumb-cont placeholder">
                
            </div>
            <div class="description-cont">
                <h1 class="project-name">ReactJS project for language learning - Coming soon</h1>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nunc a neque mattis, quis maximus enim tincidunt. Sed maximus velit ligula.</p>
            </div>
        </section>

    
    </div>
    
    `
}

function about(){
    return `
    <div class="wrap-about">
        <div class="js-header"><img class="robpic" src="img/rob.jpg"></img></div>
        <p class="about-text">I'm passionate about crafting appealing and highly polished user interfaces. In my work I strive for quality not only as a means for economic value, but also as a source of self-realization.
        </p>
        <p class="about-text">I learned front-end web development at <a href="https://www.thinkful.com/"> Thinkful's</a> full-stack bootcamp, and I'm currently studying back-end technologies such as Node and Postgres. Before doing web development I worked in Chile for several years as a lawyer, mostly in the areas of contract law, corporate law and public procurement.  
        </p>
        <p class="about-text">When I’m not coding, I’m usually studying Japanese, hiking or spending time with friends.</p>

        <p>Languages: English (fluent), Spanish (native) and Japanese (intermediate).</p>
    </div>
    `
}

function contact(){
    return `

        <div class="wrap-contact"
            <p class="email"> <img class="contact-logo contact-item mail-logo" src="img/mail.jpg" alt="letter icon"> <a href="mailto:roberto.il@outlook.com">roberto.il@outlook.com</a></p>

            <p class="line-id"> <img class="contact-logo contact-item" src="img/line.png" alt="line message app logo"> ID: ribarra </p>
        
            <a class="linkedin" href="https://www.linkedin.com/in/roberto-ibarra-05a292184/"><img class="contact-logo contact-item" src="img/linkedin.png" alt="linkedIn logo"></a>
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