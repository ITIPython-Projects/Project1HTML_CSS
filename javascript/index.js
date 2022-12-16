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
var courrentSlectedProjects_Category = 0  //for All Category
var arrButtons = document.getElementsByTagName('button')
Array.from(arrButtons).forEach(function(element) {
    element.addEventListener('click', function(){
    document.getElementsByClassName('ProjectButtonActiv')[0].classList.toggle("ProjectButtonActiv");
    this.classList.add('ProjectButtonActiv')
   // cheangeCategoryImages(this)
    });
  });
/*function cheangeCategoryImages(this){
    if(arrCategory[this.id] == courrentSlectedProjects_Category) //Avoid MultiClick
     return 0
}
*/