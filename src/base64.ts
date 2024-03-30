export const blobToBase64 = (blob: Blob): Promise<string> =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });

  const octetStreamPrefix = "data:application/octet-stream;base64,";

// export const base64toBlob = async (base64Content: string): Promise<Blob> => {
//     const dataToConvert = base64Content.startsWith(octetStreamPrefix)
//       ? base64Content
//       : ${octetStreamPrefix}${base64Content};
//     const result = await fetch(dataToConvert);
  
//     return result.blob();
//   };