
// Function to get the operating system
function getOS() {
    const userAgent = window.navigator.userAgent;
    let os = "Unknown OS";

    if (userAgent.indexOf("Win") != -1) os = "Windows";
    if (userAgent.indexOf("Mac") != -1) os = "MacOS";
    if (userAgent.indexOf("X11") != -1) os = "UNIX";
    if (userAgent.indexOf("Linux") != -1) os = "Linux";
    if (userAgent.indexOf("Android") != -1) os = "Android";
    if (userAgent.indexOf("like Mac") != -1) os = "iOS";

    return os;
}

// Function to get the device type
function getDevice() {
    const userAgent = window.navigator.userAgent;
    if (/Mobi|Android/i.test(userAgent)) {
        return "Mobile";
    }
    if (/Tablet|iPad/i.test(userAgent)) {
        return "Tablet";
    }
    return "Desktop";
}

// Function to get the browser
function getBrowser() {
    const userAgent = window.navigator.userAgent;
    let browser = "Unknown Browser";

    if (userAgent.indexOf("Firefox") != -1) browser = "Mozilla Firefox";
    if (userAgent.indexOf("SamsungBrowser") != -1) browser = "Samsung Internet";
    if (userAgent.indexOf("Opera") != -1 || userAgent.indexOf("OPR") != -1) browser = "Opera";
    if (userAgent.indexOf("Trident") != -1) browser = "Microsoft Internet Explorer";
    if (userAgent.indexOf("Edge") != -1) browser = "Microsoft Edge";
    if (userAgent.indexOf("Chrome") != -1) browser = "Google Chrome";
    if (userAgent.indexOf("Safari") != -1 && userAgent.indexOf("Chrome") == -1) browser = "Safari";

    return browser;
}

// Function to gather and display system information
function displaySystemInfo() {
    const infoDiv = document.getElementById('info');

    // RAM Size
    const ramSize = navigator.deviceMemory || 'Unknown';
    infoDiv.innerHTML += `<p>RAM Size: ${ramSize} GB</p>`;

    // OS
    const os = getOS();
    infoDiv.innerHTML += `<p>OS: ${os}</p>`;


    // Device Type
    const device = getDevice();
    infoDiv.innerHTML += `<p>Device Type: ${device}</p>`;

    // Browser
    const browser = getBrowser();
    infoDiv.innerHTML += `<p>Browser: ${browser}</p>`;

    // Screen Size
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    infoDiv.innerHTML += `<p>Screen Size: ${screenWidth}x${screenHeight}</p>`;

    // Network Information
    if (navigator.connection) {
        const connection = navigator.connection;
        infoDiv.innerHTML += `<p>Effective connection type: ${connection.effectiveType}</p>`;
        infoDiv.innerHTML += `<p>Downlink speed: ${connection.downlink} Mbps</p>`;
        infoDiv.innerHTML += `<p>RTT: ${connection.rtt} ms</p>`;
    } else {
        infoDiv.innerHTML += `<p>Network Information API is not supported by this browser.</p>`;
    }

    // Storage Information
    if (navigator.storage && navigator.storage.estimate) {
        navigator.storage.estimate().then(estimate => {
            infoDiv.innerHTML += `<p>Quota: ${estimate.quota} bytes</p>`;
            infoDiv.innerHTML += `<p>Usage: ${estimate.usage} bytes</p>`;
        });
    } else {
        infoDiv.innerHTML += `<p>Storage API is not supported by this browser.</p>`;
    }
}





navigator.geolocation.getCurrentPosition(position => {

    const sch = document.getElementById('sch');
    sch.innerHTML = `Latitude: ${position.coords.latitude}`;
    const scw = document.getElementById('scw');
    scw.innerHTML = `Longitude: ${position.coords.longitude}`;
 
});

// logical processor
const logical = document.getElementById('logical')
const logical_proc = navigator.hardwareConcurrency;
logical.innerHTML = `Logical Processors: ${logical_proc}`


const product = document.getElementById('product')
const brow_pro = navigator.product;
product.innerHTML = `Browser Product: ${brow_pro}`


const Lang = document.getElementById('lang');
const lang = navigator.language;
Lang.innerHTML=`Language: ${lang}`

function vibrate(){
navigator.vibrate(200);
}
document.getElementById('vibrate-btn').addEventListener('click', vibrate);

// Display system information on page load
window.onload = displaySystemInfo;