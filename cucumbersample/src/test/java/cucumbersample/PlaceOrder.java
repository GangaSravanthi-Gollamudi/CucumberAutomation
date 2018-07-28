package cucumbersample;

/*
 *
 * Author: GangaSravanthi Gollamudi
 * 
 * Login into the application 
 * Place an order for T-SHIRT
 * Proceed to checkout
 * Verify for the order placed in order history
 * 
 */
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import ReusableComponents.CheckBox;
import ReusableComponents.DropDown;
import ReusableComponents.LaunchApplication;
import ReusableComponents.PropertiesFile;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PlaceOrder extends LaunchApplication{

	PropertiesFile pf= new PropertiesFile("C:/Users/Sysadmin/workspace/cucumbersample/src/test/resources/ObjectRepository/placeorder.properties"); 
	String filename = "placeorder.properties";
	DropDown drop = new DropDown();
	CheckBox box = new CheckBox();
	 String context,details;	 
	

		
	@Given("^Open Chrome and start website$")
	public void open_Chrome_and_start_website() {
		
		// browser is launched from the constructor in class LaunchApplication and driver is instantiated
		System.out.println("Open the browser");
	}
	
	@When("^user provide valid \"(.*?)\" and valid \"(.*?)\"$")
	public void user_provide_valid_username_and_password(String uname, String password) throws Exception {	
		
		// passes the arguments user name and password by taking the inputs from placeorder.feature file
		login(uname, password);	
		
	}
	
	@Then("^verify the login success$")
	public void verify_the_login_success() {
		
		//verifies the login status with success method in class LaunchApplication
		successLogin();
		
	}

	@Then("^click on T-Shirts option$")
	public void user_should_be_able_to_login() {
		
		//waits until the expected conditions are met to the maximum of given time units
		WebDriverWait wait = new WebDriverWait(driver ,30);
		
		//waits until the search query field is displayed
		wait.until(ExpectedConditions.visibilityOfElementLocated(pf.getLocator("searchquery_id")));
		
		//clicks the button T-SHIRT from top navigation menu
		driver.findElement(pf.getLocator("TShirtbutton_xpath")).click();
		
		//waits until the sort by drop down field is visible
		wait.until(ExpectedConditions.visibilityOfElementLocated(pf.getLocator("sortby_xpath")));
			   
	}
	
	@Then("^choose the \"(.*?)\" from dropdown by \"(.*?)\"$")
	public void choose_the_option_from_sortby(String option, String value)  {	
		
		// chooses the values from drop down by taking inputs from Examples keyword in placeorder.features file
		drop.dropDown(driver.findElement(pf.getLocator("sortbydrop_xpath")),option, value, 1);
			    
	}
	@Then("^choose size$")
	public void choose_size(){
		WebDriverWait wait = new WebDriverWait(driver ,30);
		
			//selects any check box of size menu
			box.checkbox(driver.findElement(pf.getLocator("size_xpath")));
			wait.until(ExpectedConditions.visibilityOfElementLocated(pf.getLocator("enabledfilters_xpath")));
			           
             
	}
	@Then("^click on Addtocart$")
	public void click_on_Addtocart()  {
		WebDriverWait wait = new WebDriverWait(driver ,30);
		
		//scrolls the screen down to 800pixels
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,800)");
		wait.until(ExpectedConditions.visibilityOfElementLocated(pf.getLocator("enableaddtocart_xpath")));			
		WebElement ele = driver.findElement(pf.getLocator("enableaddtocart_xpath"));
		
		//mouse overs on the image
		Actions action = new Actions(driver);
		action.moveToElement(ele).build().perform();				
		wait.until(ExpectedConditions.visibilityOfElementLocated(pf.getLocator("addtocart_linktext")));	
		
		//reads text under the image and stores it in variable context
		context = driver.findElement(pf.getLocator("enableaddtocart_xpath")).getText();	
		
		//clicks on the button add to cart
		driver.findElement(pf.getLocator("addtocart_linktext")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(pf.getLocator("checkout_xpath")));	
	   
	}
	
	@Then("^proceed to payment$")
	public void proceed_to_payment()  {
		WebDriverWait wait = new WebDriverWait(driver ,30);
		
		//clicks on the button proceed to checkout
	    driver.findElement(pf.getLocator("checkout_xpath")).click();
	    wait.until(ExpectedConditions.visibilityOfElementLocated(pf.getLocator("historytable_xpath")));
	    
	    //takes a snapshots of checkout page
	    this.takeSnapShot(pf.getData("destinationfile")+"Checkout.png");
	}

	@Then("^verify the order history$")
	public void verify_the_order_history() {
		
		//reads the text from description column in order history table and stores into the variable
		details = driver.findElement(pf.getLocator("historydetails_xpath")).getText();
		
		//reads the "substring" of "details" variable string
		String substring = details.substring(0, 27);	
		
		//verifies if the content in variable "context" contains the string "substring"
	    if(context.contains(substring)){
	    	
	    	this.takeSnapShot(pf.getData("destinationfile")+"OrderHistpry.png");
	    	System.out.println("Order is placed successfully");
	    }
	    else{
	    	this.takeSnapShot(pf.getData("destinationfile")+"OrderHistpry.png");
	    	System.out.println("Sorry , Please place the order again");
	    }
	
	}
	@Then("^close the application$")
	
	//closes the browser
	public void close_the_application() {
		driver.quit();
	}

}
