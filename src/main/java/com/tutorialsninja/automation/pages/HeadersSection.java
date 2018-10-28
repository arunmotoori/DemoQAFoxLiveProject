package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class HeadersSection {
	
	public HeadersSection() {
		
		PageFactory.initElements(Base.driver,this);
		
	}
	
	@FindBy(xpath="//span[text()=\"My Account\"]")
	public static WebElement myAccountLink;
	
	@FindBy(linkText="Register")
	public static WebElement register;
	
	@FindBy(linkText="Login")
	public static WebElement login;
	
	@FindBy(name="search")
	public static WebElement searchBoxField;
	
	@FindBy(css="button[class$='btn-lg']")
	public static WebElement searchButton;
	
	@FindBy(xpath="//span[text()='Shopping Cart']")
	public static WebElement viewShoppingCartOption;
	
	public static void navigateToLoginPage() {
		
		Elements.click(myAccountLink);
		Elements.click(login);
		
	}
	
	public static void searchProduct() {
		
		Elements.TypeText(searchBoxField,Base.reader.getProduct());
		Elements.click(searchButton);
		
	}
	
	public static void navigateToShoppingCartPage() {
		
		Elements.click(viewShoppingCartOption);
		
	}
	
	
	
	

}
