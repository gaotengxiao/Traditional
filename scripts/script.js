document.addEventListener('DOMContentLoaded', () => {
  const loadPartialSync = (elementId, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false); // false for synchronous request
    xhr.send();

    if (xhr.status === 200) {
      document.getElementById(elementId).innerHTML = xhr.responseText;
    } else {
      console.error(`Error fetching partial: ${xhr.statusText}`);
    }
  };

  // 同步请求部分内容
  loadPartialSync('header', 'partials/header.html');
  loadPartialSync('content1', 'partials/content1.html');
  loadPartialSync('content2', 'partials/content2.html');
  loadPartialSync('content3', 'partials/content3.html');
  loadPartialSync('content4', 'partials/content4.html');
  loadPartialSync('footer', 'partials/footer.html');
});
