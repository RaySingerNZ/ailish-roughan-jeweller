function myApp(){

  init();

  function init(){
    setDarkMode();
  }

  function setDarkMode(){
    var setInStorage = localStorage.getItem('isDark');
    if (setInStorage === null || setInStorage === 'undefined') {
      localStorage.setItem('isDark', false);
    }
  }

  var appData = {
    isDark: JSON.parse(localStorage.getItem('isDark')),
    setDark: function(){
      localStorage.setItem('isDark', !JSON.parse(localStorage.getItem('isDark')));
      this.isDark = JSON.parse(localStorage.getItem('isDark'));
    },
    isOpen: false,
    navigate: function(){
      this.isOpen = false;
      this.isDark = JSON.parse(localStorage.getItem('isDark'));
    }
  }

  return appData;
}