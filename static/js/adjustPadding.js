// adjustPadding.js

function adjustPadding() {
    // console.log("hiiii");
    const banner = document.querySelector('.o-banner');
    const sidebar = document.querySelector('.td-sidebar');
    const toc = document.querySelector('.td-sidebar-toc');
    const mainContent = document.querySelector('.td-main main');
  
    if (banner) {
      if (sidebar) {
        sidebar.style.paddingTop = '8.5rem';
      }
      if (toc) {
        toc.style.paddingTop = '8.5rem';
      }
      if (mainContent) {
        mainContent.style.paddingTop = '9rem';
      }
    } 
  }
  
  document.addEventListener('DOMContentLoaded', adjustPadding);
  window.addEventListener('resize', adjustPadding);
  