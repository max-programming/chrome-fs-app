import { getTextFile } from "./js/getText";
import { getImageFile } from "./js/getImage";
import { getVideoFile } from "./js/getVideo";
import { bufferToURL } from "./js/globals";

const textSelect = document.getElementById("textSelect");
const imgSelect = document.getElementById("imgSelect");
const vidSelect = document.getElementById("vidSelect");
const fileContentTag = document.getElementById("fileContent");
const imgContentTag = document.getElementById("imgContent");
const vidContentTag = document.getElementById("vidContent");
const fileNameTag = document.getElementById("fileName");

const hideVideoPlayer = () => {
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
  hideVideoPlayer();
};

imgSelect.onclick = async () => {
  const { arrayBuffer, file } = await getImageFile();
  const imgUrl = bufferToURL(arrayBuffer, file.type);
  imgContentTag.src = imgUrl;
  fileNameTag.innerText = `File name: ${file.name}`;
  hideVideoPlayer();
};

vidSelect.onclick = async () => {
  const { arrayBuffer, file } = await getVideoFile();
  const vidUrl = bufferToURL(arrayBuffer, file.type);
  vidContentTag.src = vidUrl;
  fileNameTag.innerText = `File name: ${file.name}`;
  hideVideoPlayer();
};
