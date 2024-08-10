
// -cZZogsZkhgfWRnPFGVrzmuwZqWhpq3s1a-eHWevheA
const imgContainer = document.getElementById('imgContainer')
const myLoader = document.getElementById('loader')


function controlLoader(){
    myLoader.hidden = false
}

controlLoader()

async function getImages(){
    const response = await fetch("https://api.unsplash.com/photos/?client_id=-cZZogsZkhgfWRnPFGVrzmuwZqWhpq3s1a-eHWevheA")
    const imgData = await response.json()
    
    imgData.map(function(i){
       let imgUrl = i.urls.full;
       const myImgElement = document.createElement("img")
       myImgElement.setAttribute("src", imgUrl)
       imgContainer.append(myImgElement)

    })
}
// getImages()

window.addEventListener("scroll",function(){
   
    let myClientHeight = document.documentElement.clientHeight;
    let myScrollHeight = document.documentElement.scrollHeight;
    let myScrollTop = document.documentElement.scrollTop;

    if(myClientHeight + myScrollTop >= myScrollHeight){

        getImages()
    }
})


setTimeout(() => {
    
    getImages()
    myLoader.hidden = true;
    
},2000);

