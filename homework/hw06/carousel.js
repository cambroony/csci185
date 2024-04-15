const photos = [
    "images/img1-600x400.jpg",//0
    "images/img2-600x400.jpg",//1
    "images/img3-600x400.jpg",//2
    "images/img4-600x400.jpg",//3
    "images/img5-600x400.jpg",//4
    "images/img6-600x400.jpg",//5
    "images/img7-600x400.jpg",//6
    "images/img8-600x400.jpg",//7
    "images/img9-600x400.jpg",//8
    "images/img10-600x400.jpg"//9
];
let idx = 0;


/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log('Show image:',idx);
    //change the img by targeting 
    //reach into the dom and target the selector #the_image
    //then change the img src to photos[]
    const img=document.querySelector("#the_image");
    img.src= photos[idx];
    const caption=document.querySelector(".caption");
    caption.innerHTML=`Image ${idx+1} of 10`;
     //also target the caption text and change it too!
}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    if (idx===9){
        idx=0;
    } else{
        idx+=1;
    }
    console.log(idx);

    showImage();
    //if it gets to 9,set it back to 0
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    if (idx===0){
        idx=9;
    } else{
        idx-=1;
    }
    console.log(idx);
showImage();
//if it gets less than 0, set it to 9

}
