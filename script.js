
function generateRandomColor(){
    const hexaValues="0123456789ABCDEF";
    // console.log(hexaValues[3]);
    let color="#"
    for(let i=0; i<6; i++){
        const randomIndex=Math.floor(Math.random()*16);
        color+=hexaValues[randomIndex];
    }
    return color;
}
function changeBackgroundColorOfBody(bgcolor){
     document.querySelector("body").style.background=bgcolor;
}
const newColorButton=document.querySelector(".newColorButton");
newColorButton.addEventListener("click", () =>{
    changeBackgroundColorOfBody(generateRandomColor())
    console.log("i ran");
    setInterval(() => {
        changeBackgroundColorOfBody(generateRandomColor());
    }, 2000);
})
