/** @type { OpenFilePickerOptions } */
export const textFileOptions = {
  types: [
    {
      description: "Text Files",
      accept: {
        "text/plain": [".txt"],
      },
    },
  ],
};

/** @type { OpenFilePickerOptions } */
export const imageFileOptions = {
  types: [
    {
      description: "Image Files",
      accept: {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"],
        "image/svg+xml": [".svg"],
        "image/webp": [".webp"],
      },
    },
  ],
};

/** @type { OpenFilePickerOptions } */
export const videoFileOptions = {
  types: [
    {
      description: "Video Files",
      accept: {
        "video/mp4": [".mp4"],
        "video/mkv": [".mkv"],
      },
    },
  ],
};

/**
 * @param {ArrayBuffer} buffer
 * @param {string} fileType
 */
export const bufferToURL = (buffer, fileType) => {
  const arrayBufferView = new Uint8Array(buffer);
  const blob = new Blob([arrayBufferView], { type: fileType });
  const urlCreator = window.URL || window.webkitURL;
  const mediaUrl = urlCreator.createObjectURL(blob);
  return mediaUrl;
};
