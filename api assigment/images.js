const IMAGE_URL = "https://dog.ceo/api/breeds/image/random";

const images = document.querySelector(".images");

function addNewImage() {
  const promise = fetch(IMAGE_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Images";
      img.width ="300";
      img.height="300";
      img.style.border="green 5 5 round";
    images.appendChild(img);
    });
}

document.querySelector(".add-images").addEventListener("click", addNewImage);