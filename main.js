import { getTextFile } from "./js/getText";
import { getImageFile } from "./js/getImage";
import { getVideoFile } from "./js/getVideo";
import { bufferToURL } from "./js/constants";

const textSelect = document.getElementById("textSelect");
const imgSelect = document.getElementById("imgSelect");
const vidSelect = document.getElementById("vidSelect");
const fileContentTag = document.getElementById("fileContent");
const imgContentTag = document.getElementById("imgContent");
const vidContentTag = document.getElementById("vidContent");
const fileNameTag = document.getElementById("fileName");

let isTxtOpen = false;
let isImageOpen = false;
let isVideoOpen = false;

const removeOtherElements = () => {
  if (!isImageOpen) {
    imgContentTag.setAttribute("src", "");
  }
  if (!isVideoOpen) {
    vidContentTag.style.display = "none";
    vidContentTag.setAttribute("src", "");
  }
  if (!isTxtOpen) {
    fileContentTag.innerText = "";
  }
};

export const hideVideoPlayer = () => {
  if (vidContentTag.getAttribute("src") === "") {
    vidContentTag.style.display = "none";
  } else {
    vidContentTag.style.display = "block";
  }
};

hideVideoPlayer();

textSelect.onclick = async () => {
  const { contents, file } = await getTextFile();
  fileContentTag.innerText = contents;
  fileNameTag.innerText = `File name: ${file.name}`;
  isTxtOpen = true;
  isImageOpen = false;
  isVideoOpen = false;
  hideVideoPlayer();
  removeOtherElements();
  console.log({ isTxtOpen, isImageOpen, isVideoOpen });
};

imgSelect.onclick = async () => {
  const { arrayBuffer, file } = await getImageFile();
  const imgUrl = bufferToURL(arrayBuffer, file.type);
  imgContentTag.src = imgUrl;
  fileNameTag.innerText = `File name: ${file.name}`;
  isImageOpen = true;
  isTxtOpen = false;
  isVideoOpen = false;
  hideVideoPlayer();
  removeOtherElements();
  console.log({ isTxtOpen, isImageOpen, isVideoOpen });
};

vidSelect.onclick = async () => {
  const { arrayBuffer, file } = await getVideoFile();
  const vidUrl = bufferToURL(arrayBuffer, file.type);
  vidContentTag.src = vidUrl;
  fileNameTag.innerText = `File name: ${file.name}`;
  isVideoOpen = true;
  isImageOpen = false;
  isTxtOpen = false;
  hideVideoPlayer();
  removeOtherElements();
  console.log({ isTxtOpen, isImageOpen, isVideoOpen });
};
