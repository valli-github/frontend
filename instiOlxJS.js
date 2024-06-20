const dropArea = document.getElementById("drop-area");
const inputfile = document.getElementById("input-file");
const imageview = document.getElementById("img-view");

inputfile.addEventListener("change",uploadImage);

function uploadImage(){
    let imglink = URL.createObjectURL(inputfile.files[0]);
    imageview.style.backgroundImage = `url(${imglink})`;
    imageview.textContent="";
    imageview.style.border=0;
}

dropArea.addEventListener("dragover",function(e)
{
    e.preventDefault();
});
dropArea.addEventListener("drop",function(e)
{
    e.preventDefault();
    inputfile.files = e.dataTransfer.files;
    uploadImage();
});
