//------------------------- NAVEBARE: Search Button Click -------------------------
let hasPressed = 0
function displayInput(){
    if(hasPressed){
        document.getElementById('searchFild').style.display='none';
        document.getElementById('searchIconButton').title = 'Click Me To Search'
        hasPressed = 0
        return 0;
    }
    document.getElementById('searchFild').style.display='inline';
    document.getElementById('searchIconButton').title= 'Click Me To Close' 
    hasPressed = 1
}
//------------------------- CONTENT Section:'We MAke This' Display Projects Button -------------------------
var arrCategory = {all:0,
                  design:1,
                  code:2,
                  photography:3,
                  apps:4}
var old_ChossenCatigory = 0  //for All Category
var arrButtons = document.getElementsByTagName('button')
Array.from(arrButtons).forEach(function(element) {
    element.addEventListener('click', function(){
    document.getElementsByClassName('ProjectButtonActiv')[0].classList.toggle("ProjectButtonActiv");
    this.classList.add('ProjectButtonActiv')
    cheangeCategoryImages(this)
    });
  });
function cheangeCategoryImages(_this){
    // inhance the Algorithm by define the variable of multi use value
    var new_ChossenCatigory = arrCategory[_this.id];
    //Avoid MultiClick
    if(new_ChossenCatigory == old_ChossenCatigory) 
     return 0
    //Set Previous Slected Projects_Category To hte Chossen Button
    old_ChossenCatigory = new_ChossenCatigory
    //Change Main Image to Image based on the  Category
    //NOTE: this Section Will be replace with Iframe in the  Next Version
    switch (new_ChossenCatigory) {
        case 0:
            document.getElementById('mainImageCategoty').src='images/mainImageAll.png';
            //It's just a Demo SO it change Randomly 
            changeAll();
            break;
        case 1:
            document.getElementById('mainImageCategoty').src='images/mainImageDesign.png'
            //It's just a Demo SO it change oly one Image
            changeAll('images/designProject.png');
            break;
        case 2:
            document.getElementById('mainImageCategoty').src='images/mainImageCode.png'
            //It's just a Demo SO it change oly one Image
            changeAll('images/codeProject.png');
            break;
        case 3:
            document.getElementById('mainImageCategoty').src='images/mainImagePhotography.png'
            //It's just a Demo SO it change oly one Image
            changeAll('images/photographyProject.png');
            break;
        case 4:
            document.getElementById('mainImageCategoty').src='images/mainImageApp.png'
            //It's just a Demo SO it change oly one Image
            changeAll('images/appProject.png');
            break;
    
    }
}
function changeAll(path=''){
    var arrImgaes = document.getElementsByClassName('projectsimg')
    if(path){
        Array.from(arrImgaes).forEach(function(element) {
            element.src=path
        });
        return 0;
    }
    //It's just a Demo SO it change oly one Image for Category
    var arrOfImages = ['appProject.png','photographyProject.png','codeProject.png','designProject.png']
    Array.from(arrImgaes).forEach(function(element) {
        element.src='images/'+arrOfImages[Math.floor(Math.random() * 4)]
    });

}
//------------------------- CONTENT Section:'We MAke This' Display PopUP Projects Image -------------------------
var hasAppended = 0
function openPop() {
    let pop        = document.getElementById('displayProjects');
    let arrImgaes  = document.getElementsByClassName('projectsimg')
    let exitButton = document.querySelector("#displayProjects button")
    if(!hasAppended){
        console.log(arrImgaes);
        Array.from(arrImgaes).forEach(function(element) {
            pop.appendChild(element);
        });
        hasAppended = 1
    }
    pop.style.display  = 'block';
    pop.style.position = 'fixed';
    exitButton.style.position = 'fixed';
    document.body.style.overflow = "hidden"
}
document.querySelector("#displayProjects button").addEventListener("click",function(){
    let pop       = document.getElementById('displayProjects');
    let exitButton = document.querySelector("#displayProjects button")
    pop.style.display  = 'none';
    pop.style.position = 'absolute';
    exitButton.style.position = 'absolute';
    document.body.style.overflow = "auto"
})
