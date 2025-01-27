script.js
javascript
Копировать
function uploadVideo() {
    const videoInput = document.getElementById("videoInput");
    const videoPreview = document.getElementById("videoPreview");

    const file = videoInput.files[0];
    if (file) {
        const videoURL = URL.createObjectURL(file);
        const videoElement = document.createElement("video");
        videoElement.src = videoURL;
        videoElement.controls = true;

        videoPreview.innerHTML = "";
        videoPreview.appendChild(videoElement);
        videoPreview.style.display = "block";
    } else {
        alert("Видео файл тандалган жок!");
    }
}