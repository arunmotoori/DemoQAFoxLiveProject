package com.tutorialsninja.automation.stepdef;

import org.junit.Assert;

import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.pages.HeadersSection;
import com.tutorialsninja.automation.pages.SearchResultsPage;

import cucumber.api.java.en.*;


public class Search {
	
	HeadersSection headersSection = new HeadersSection();
	SearchResultsPage searchResultsPage = new SearchResultsPage();
	
	@When("^I search for a product \"([^\"]*)\"$")
	public void i_search_for_a_product(String product)  {
		
		Elements.TypeText(HeadersSection.searchBoxField, product);
		Elements.click(HeadersSection.searchButton);
	    
	}

	@Then("^I should see the product in the search results$")
	public void i_should_see_the_product_in_the_search_results() {
		
		Assert.assertTrue(Elements.isDisplayed(SearchResultsPage.samsungSyncMasterSearchResult));
	    
	}
	
	@Then("^I should see a message informing \"([^\"]*)\"$")
	public void i_should_see_a_message_informing(String message) {
		
		Assert.assertTrue(Elements.VerifyTextEquals(SearchResultsPage.noResultsMessage, message));
	    
	}

}
