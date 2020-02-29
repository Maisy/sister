export function saveFile(filename, text) {
  var element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export function loadJsonFile(evt, callBack) {
  var files = evt.target.files;

  var reader = new FileReader();
  const f = files[0];

  // Closure to capture the file information.
  reader.onload = function(e) {
    try {
      const data = e.target.result;
      const inputData = JSON.parse(data);
      callBack(inputData);
    } catch (e) {
      //TODO: error dialog
      console.error(e);
    }
  };
  // Read in the image file as a data URL.
  reader.readAsText(f);
}
