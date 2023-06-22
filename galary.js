var allImg=document.images;
for(i=0;i<allImg.length;i++)
{
    allImg[i].src=`./photos/${i}.jpg`
    allImg[i].addEventListener("click",function (){
        document.getElementById("bigImg").style.backgroundImage=`url(${this.src})`
        document.getElementById("divCon").style.backgroundImage=`url(${this.src})`

    })
    
} 