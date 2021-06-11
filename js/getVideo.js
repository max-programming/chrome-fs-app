import { videoFileOptions } from "./globals";

export const getVideoFile = async () => {
  const [fileHandle] = await showOpenFilePicker(videoFileOptions);
  const file = await fileHandle.getFile();
  const arrayBuffer = await file.arrayBuffer();
  return { arrayBuffer, file };
};
