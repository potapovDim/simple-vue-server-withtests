 const disableTransition  = require('../commands/offcssanimation.js').disableTransition
 function executedFunction () {
     console.log(window ,document)
 }

 export default {
     instance: null,
     beforeEach: function(browser) {
        this.instance = browser;
        console.log(this)
        browser.url('http://localhost:8080/')
            .execute(disableTransition,[], () => console.log('remove styles'));
     },
     'concepts tests with out login user fin group ': function(browser) {
         this.instance.resizeWindow(600,600)
         .resizeWindow(600,1200)
     }
 }
