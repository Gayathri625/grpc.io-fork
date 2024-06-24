// adjustPadding.js

function adjustRssButton() {
    console.log("hioiii");
    const banner = document.querySelector('.o-banner');
    const rssBtn = document.querySelector('.td-blog .td-rss-button');
    
    if (banner) {
      if (rssBtn) {
        rssBtn.style.top = '9rem';
      }
    } 
  }
  
  document.addEventListener('DOMContentLoaded', adjustRssButton);
  window.addEventListener('resize', adjustRssButton);