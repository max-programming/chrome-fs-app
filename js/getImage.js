import { imageFileOptions } from "./constants";

export const getImageFile = async () => {
  const [fileHandle] = await showOpenFilePicker(imageFileOptions);
  const file = await fileHandle.getFile();
  const arrayBuffer = await file.arrayBuffer();
  return { arrayBuffer, file };
};
