exports.config = {
/*
    allScriptsTimeout: 60000,

    getPageTimeout: 60000,   
    */
    seleniumServerJar: 'node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.45.0.jar',
     /*  
    capabilities: {
        browserName: 'ie',
        loggingPrefs: {'browser': 'ALL'},
		"ie.forceCreateProcessApi":true,
		ensureCleanSession:true	
    },
    */

    capabilities: {
        browserName: 'ie'
    },

    specs: ['app/test/e2e/*.e2e.spec.js'],

    baseUrl: 'http://localhost:8080/app/src/index.html',
/*
    onPrepare: function () {
        //browser.driver.manage().window().maximize();

        // implicit and page load timeouts
        browser.manage().timeouts().pageLoadTimeout(60000);
        browser.manage().timeouts().implicitlyWait(60000);

        // for non-angular page
        browser.ignoreSynchronization = true;

        require('jasmine-reporters');
        
        //jasmine.getEnv().addReporter(new jasmine.TeamcityReporter());
    },
    */  
    framework: 'jasmine',
    
    jasmineNodeOpts: { defaultTimeoutInterval: 300000 }
}