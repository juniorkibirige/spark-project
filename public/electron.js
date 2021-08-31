const path = require('path');

const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: 'pharmacy.ico',
  });

  // Verify self signed certificate
  win.webContents.session.setCertificateVerifyProc((request, callback) => {
    var { hostname, certificate, validatedCertificate, verificationResult, errorCode } = request;
    // if(isNotMyCertificate(certificate)) { callback(-2); return; }
    console.log('Self Signed Certificate: ');
    console.log(certificate.issuerName);
    console.log(certificate.fingerprint);

    if (hostname === 'cdn.tms-dist.lan' && certificate.validExpiry && certificate.validStart && certificate.fingerprint === '74:AD:CE:7D:10:E6:78:4E:6B:33:44:41:6E:3E:7B:35:09:6A:81:82')
      callback(0);
    else callback(-2);
  })

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});