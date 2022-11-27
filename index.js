const allprojects = [ {url:"https://itundefined.netlify.app/pricetable/", 
                      githubUrl: "https://github.com/itundefined/front-end-projects/tree/main/pricetable",
                      heading:"Price Table",
                      subHeading:"Hostinger Price Table Clone!!!"},
                     
                      {url:"https://itundefined.netlify.app/advancetodolist/todo",
                      githubUrl: "https://github.com/itundefined/front-end-projects/tree/main/AdvanceTodoList",
                      heading:"Old Todo List",
                      subHeading:"This is an amazing application for keeping your notes"},

                      {url:"https://itundefined.netlify.app/youtubeclone/html/", 
                      githubUrl: "https://github.com/itundefined/front-end-projects/tree/main/YoutubeClone",
                      heading:"Youtube Clone",
                      subHeading:"This is the youtube Clone"},
                     
                      {url:"https://itundefined.netlify.app/YoutubeClone2.0/html/", 
                      githubUrl: "https://github.com/itundefined/front-end-projects/tree/main/YoutubeClone2.0",
                      heading:"Youtube Clone 2.0 ",
                      subHeading:"Youtube Better Clone!!!"},

                      {url:"https://itundefined.netlify.app/classicGame", 
                      githubUrl: "https://github.com/itundefined/front-end-projects/tree/main/classicGame",
                      heading:"classicGame",
                      subHeading:"Rock paper lizard spock scissors!!!"}, 
                     
                      {url:"https://itundefined.netlify.app/portfoliowebsite/", 
                      githubUrl: "https://github.com/itundefined/front-end-projects/tree/main/PortfolioWebsite",
                      heading:"Portfolio Website",
                      subHeading:"My Personal Portfolio Website"},     
                     
                      {url:"https://itundefined.netlify.app/fancyList/", 
                      githubUrl: "https://github.com/itundefined/front-end-projects/tree/main/fancyList",
                      heading:"A New Fancy ToDo List",
                      subHeading:"It Consists of CURD operation, Todo list"},                          
                     
                    ]

// now just to add the adjacent html in the html file

const container = document.getElementsByClassName("project-container")[0];

allprojects.map(x => {
    console.log(x)
    let htmlToadd = `<div class="project">
    <div class="singular-project">
        <h1>${x.heading}</h1>
        <h2>${x.subHeading}</h2>
        <div class="link-container"> 
        <a href=${x.url} target="_blank"><button class="liveLink">Live</button></a>
        <a href=${x.githubUrl} target="__blank"><button class="githubLink">Github</button></a>
        </div>
    </div>
</div>`

container.insertAdjacentHTML("afterbegin", htmlToadd);
});
