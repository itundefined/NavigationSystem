const allprojects = [{url:"https://itundefined.netlify.app/advancetodolist/todo",
                      githubUrl: "https://github.com/itundefined/front-end-projects/tree/main/AdvanceTodoList",
                      heading:"Todo List",
                      subHeading:"This is an amazing application for keeping your notes"},

                      {url:"https://itundefined.netlify.app/youtubeclone/html/", 
                      githubUrl: "https://github.com/itundefined/front-end-projects/tree/main/YoutubeClone",
                      heading:"Youtube Clone",
                      subHeading:"This is the youtube Clone"}
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
