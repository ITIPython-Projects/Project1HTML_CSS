//------------------------- Search Button Click -------------------------
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