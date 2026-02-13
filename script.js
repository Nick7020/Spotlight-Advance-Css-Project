const para = document.querySelector('p');
const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text=para.innerHTML

para.addEventListener("mouseenter",(e)=>{
    setInterval(() => {
        const str=text.split('').map((char,idx)=>{
            return character.split("")[Math.floor(Math.random()*53)]
        }).join("");
        para.innerHTML=str;   
    }, 100);
})