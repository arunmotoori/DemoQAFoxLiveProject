package com.tutorialsninja.automation.base;

import org.openqa.selenium.WebDriver;

import com.tutorialsninja.automation.config.ConfigurationReader;
import com.tutorialsninja.automation.config.PropertyFileReader;
import com.tutorialsninja.automation.framework.Browser;
import com.tutorialsninja.automation.util.PathHelper;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Base {
	
	public static Logger log=Logger.getLogger(Base.class);
	
	public static WebDriver driver;
	public static ConfigurationReader reader;
	
	
	
	
	
	@Before
	public void setUp(Scenario scenario){
		log.info("Scenario Started: "+scenario.getName());
		PropertyConfigurator.configure(PathHelper.getResourcePath("/src/main/resources/ConfigurationFile/log4j.properties"));
		reader=new PropertyFileReader();
		Browser.startBrowser();
		Browser.maximize();
	}
	
	@After
	public void closeBrowser(Scenario scenario){
		if(scenario.isFailed()){
			scenario.embed(Browser.takeScreenshot(), "image/png");
		}
		log.info("Scenario Completed: "+scenario.getName());
		log.info("Scenario Status is: "+scenario.getStatus());
		Base.driver.quit();
		}
	}


