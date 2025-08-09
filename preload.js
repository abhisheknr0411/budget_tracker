// preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// We can use the contextBridge module to securely expose APIs
// from the main process to the renderer process (our React app).

const { contextBridge, ipcRenderer } = require('electron');

// Expose a safe, limited version of ipcRenderer to our React app.
// We are not using this yet, but it's the standard pattern for future features.
contextBridge.exposeInMainWorld('electronAPI', {
  // Example: a function to send a message from React to the Electron main process
  // sendMessage: (message) => ipcRenderer.send('message-from-react', message),
});

console.log('Preload script has been successfully loaded.');