document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('target');

  const browserInfo = getBrowserInfo();
  const browserInfoText = "Browser: " + browserInfo.name + ", " + browserInfo.version;
  appendParagraph(target, browserInfoText);

  const osInfo = getOperatingSystemInfo();
  appendParagraph(target, "OS: " + osInfo);

  appendParagraph(target, "Screen width: " + window.screen.width);
  appendParagraph(target, "Screen height: " + window.screen.height);

  appendParagraph(target, "Available Screen Space for browser: " + window.screen.availWidth + " x " + window.screen.availHeight + "px");

  const currentDate = getCurrentDate();
  appendParagraph(target, "Current Date: " + currentDate);
});

function getBrowserInfo() {
  const ua = navigator.userAgent;
  let tem;
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: 'IE', version: (tem[1] || '') };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR\/(\d+)/)
    if (tem != null) return { name: 'Opera', version: tem[1] };
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return {
    name: M[0],
    version: M[1]
  };
}

function getOperatingSystemInfo() {
  let os = "Unknown OS";
  let ua = navigator.userAgent;
  if (ua.indexOf("Win") != -1) {
    os = "Windows OS";
  } else if (ua.indexOf("Mac") != -1) {
    os = "Mac OS";
  } else if (ua.indexOf("Linux") != -1) {
    os = "Linux OS";
  } else if (ua.indexOf("Android") != -1) {
    os = "Android OS";
  } else if (ua.indexOf("iOS") != -1) {
    os = "iOS OS";
  }
}

function getCurrentDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
  return new Date().toLocaleDateString('fi-FI', options);
}

function appendParagraph(target, text) {
  const p = document.createElement('p');
  p.textContent = text;
  target.appendChild(p);
}
