log('Tap on NFC logo to start scan');
var scanButton = document.getElementById('scan_button');
scanButton.addEventListener("click", async () => {
    try {
      const reader = new NDEFReader();
      await reader.scan();
      log("Scan your NFC tag/card");
  
      reader.addEventListener("error", () => {
        log("Tag/card cant be read. Please try another one.");
      });
  
      reader.addEventListener("reading", ({ message, serialNumber }) => {
        log(`NFC detected. Serial Number: ${serialNumber}`);
      });
    } catch (error) {
      log("Something went wrong : " + error);
    }
});

function log(message){
    document.getElementById('nfc_log').innerText = message;
}