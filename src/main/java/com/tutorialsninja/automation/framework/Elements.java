package com.tutorialsninja.automation.framework;

import java.util.List;
import java.util.Random;

import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.tutorialsninja.automation.base.Base;

public class Elements {

	public Logger log = Logger.getLogger(Elements.class);

	public static void TypeText(WebElement element, String data) {
		element.sendKeys(data);
	}

	public static void TypeTextIfElementPresent(WebElement element, String data) {
		if (element.isDisplayed()) {
			element.sendKeys(data);
		}
	}

	public static void clearTxtBox(WebElement element) {
		element.clear();
	}

	public static void typeRandomNumber(WebElement element, int data) {
		Random random = new Random();
		int rn = random.nextInt(100);
		String randomNumber = Integer.toString(rn);
		element.sendKeys(randomNumber);
	}

	public static String getTextBoxValue(WebElement element) {
		return element.getAttribute("value");
	}
	
	public static String getText(WebElement element){
		return element.getText();
	}
	
	public static boolean VerifyTextEquals(WebElement element,String expected){
		boolean flag=false;
		if(element.getText().equals(expected))
			return flag=true;
		return flag;
	}
	
	public static String getTitle(){
		return Base.driver.getTitle();
	}
	
	public String getCurrentUrl(){
		return Base.driver.getCurrentUrl();
	}

	public boolean isSelected(WebElement element) {
		if (element.isSelected()) 
			return true;
		return false;
	}

	public void selectCheckBox(WebElement element) {
		if (!isSelected(element))
			element.click();
	}

	public void deSelectCheckbox(WebElement element) {
		if (isSelected(element))
			element.click();
	}

	public void selectRadioButton(WebElement element) {
		if (!isSelected(element))
			element.click();
	}

	public void deSelectRadioButton(WebElement element) {
		if (isSelected(element))
			element.click();
	}
	
	public boolean isEnabled(WebElement element){
		if(element.isEnabled())
			return true;
		return false;
	}
	
	public boolean isDisplayed(WebElement element){
		if(element.isDisplayed())
			return true;
		return false;
	}
	
	public void selectByText(WebElement element,String text){
		Select select=new Select(element);
		select.selectByVisibleText(text);
	}
	
	public void selectByIndex(WebElement element,int index){
		Select select=new Select(element);
		select.selectByIndex(index);
	}
	
	public void selectByValue(WebElement element,String value){
		Select select=new Select(element);
		select.selectByValue(value);
	}
	
	public String getFirstSelectedOption(WebElement element){
		Select select=new Select(element);
		return select.getFirstSelectedOption().getText();
	}
	
	public List<WebElement> getAllSelectedOptions(WebElement element){
		Select select=new Select(element);
		return select.getAllSelectedOptions();
		}
	
	public List<WebElement> getAllOptions(WebElement element){
		Select select=new Select(element);
		return select.getOptions();
	}
	
	public void deSelectByText(WebElement element,String text){
		Select select=new Select(element);
		select.deselectByVisibleText(text);
	}
	
	public void deSelectByIndex(WebElement element,int index){
		Select select=new Select(element);
		select.deselectByIndex(index);
	}
	
	public void deSelectByValue(WebElement element,String value){
		Select select=new Select(element);
		select.deselectByValue(value);
	}
	
	public void click(WebElement element){
		Waits.waitUntil(() ->isDisplayed(element));
		element.click();
	}
	
	public void clickOnlyIfElementPresent(WebElement element){
		if(isDisplayed(element))
			element.click();
	}
	
	public Alert getAlert() {
		return Base.driver.switchTo().alert();
	}
	
	public void AcceptAlert() {
		getAlert().accept();
	}
	
	public void DismissAlert() {
		getAlert().dismiss();
	}

	public String getAlertText() {
		String text = getAlert().getText();
		return text;
	}

	public boolean isAlertPresent() {
		try {
			Base.driver.switchTo().alert();
			return true;
		} catch (NoAlertPresentException e) {
			return false;
		}
	}

	public void AcceptAlertIfPresent() {
		if (!isAlertPresent())
			return;
		AcceptAlert();
	}

	public void DismissAlertIfPresent() {

		if (!isAlertPresent())
			return;
		DismissAlert();
	}
	
	public void AcceptPrompt(String text) {
		
		if (!isAlertPresent())
			return;
		
		Alert alert = getAlert();
		alert.sendKeys(text);
		alert.accept();
	}

	public void scrollToElemet(WebElement element) {
		Waits.tryJavascript("window.scrollTo(arguments[0],arguments[1])", element.getLocation().x, element.getLocation().y);
	}
	
	public void scrollToElemetAndClick(WebElement element) {
		scrollToElemet(element);
		element.click();
	}

	public void scrollIntoView(WebElement element) {
		Waits.tryJavascript("arguments[0].scrollIntoView()", element);
	}

	public void scrollIntoViewAndClick(WebElement element) {
		scrollIntoView(element);
		element.click();
	}
	
	public void scrollDownVertically() {
		Waits.tryJavascript("window.scrollTo(0, document.body.scrollHeight)");
	}

	public void scrollUpVertically() {
		Waits.tryJavascript("window.scrollTo(0, -document.body.scrollHeight)");
	}

	public void scrollDownByPixel() {
		Waits.tryJavascript("window.scrollBy(0,1500)");
	}

	public void scrollUpByPixel() {
		Waits.tryJavascript("window.scrollBy(0,-1500)");
	}

	public void ZoomInBypercentage() {
		Waits.tryJavascript("document.body.style.zoom='40%'");
	}

	public void ZoomBy100percentage() {
		Waits.tryJavascript("document.body.style.zoom='100%'");
	}

}
