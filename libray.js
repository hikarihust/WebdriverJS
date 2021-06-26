const webdriver = require('selenium-webdriver'),
    BY = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();
    
    driver.get('http://google.com');
    