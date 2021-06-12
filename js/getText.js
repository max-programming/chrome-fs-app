import { textFileOptions } from "./constants";

export const getTextFile = async () => {
  const [fileHandle] = await showOpenFilePicker(textFileOptions);
  const file = await fileHandle.getFile();
  const contents = await file.text();
  return { contents, file };
};
