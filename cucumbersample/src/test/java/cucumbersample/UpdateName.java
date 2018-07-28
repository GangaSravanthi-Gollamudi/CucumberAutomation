package cucumbersample;

/*
*
* Author: GangaSravanthi Gollamudi
* 
* Login into the application 
* Open personal information page
* Change the first name
* save the data
* 
*/

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import ReusableComponents.LaunchApplication;
import ReusableComponents.PropertiesFile;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UpdateName extends LaunchApplication {
	
   
	PropertiesFile pf= new PropertiesFile("C:/Users/Sysadmin/workspace/cucumbersample/src/test/resources/ObjectRepository/updatename.properties");
	
	
	@Given("^Launch the browser$")
	public void launch_the_browser(){
		
		// browser is launched from the constructor in class LaunchApplication and driver is instantiated
		System.out.println("Open the browser");
	}

	@When("^Enter valid \"(.*?)\" and valid \"(.*?)\"$")
	public void enter_valid_and_valid(String uname, String password) throws Exception {	
		
		// passes the arguments user name and password by taking the inputs from placeorder.feature file
		login(uname, password);
		
	}
	
	@Then("^Verify successful login$")
	public void verify_successful_login() {
		
		//verifies the login status with success method in class LaunchApplication
		successLogin();
	}
	
	@Then("^click on My Personal Info$")
	public void click_on_My_Personal_Info() {
		
		WebDriverWait wait = new WebDriverWait(driver ,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(pf.getLocator("searchquery_id")));
		
		//scrolls the screen to the bottom
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		
		//clicks on the menu "My personal Info" from bottom navigation
		driver.findElement(pf.getLocator("personalinfo_linktext")).click();
		
		
	   
	}

	@Then("^clear and update \"(.*?)\"$")
	public void clear_and_update_first_name(String fname){
		
		WebDriverWait wait = new WebDriverWait(driver ,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(pf.getLocator("firstname_xpath")));
		
		//deletes the text from text box of the field "First name" 
		driver.findElement(pf.getLocator("firstname_xpath")).clear();
		
		//enters text to the field of "First name" by reading the inputs from "updatename.feature"
		driver.findElement(pf.getLocator("firstname_xpath")).sendKeys(fname);
		
		this.takeSnapShot(pf.getData("destinationfile")+"Updatename.png");
			    
	}

	@Then("^Enter current \"(.*?)\"$")
	public void enter_current_password(String cpwd){
		
		//enters the password to "confirm password" field
		driver.findElement(pf.getLocator("confirmpwd_xpath")).sendKeys(cpwd);   
	}

	@Then("^click on save$")
	public void click_on_save() {
		WebDriverWait wait = new WebDriverWait(driver ,30);
		
		//clicks on save button
		driver.findElement(pf.getLocator("save_xpath")).click();
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(pf.getLocator("successmessage_xpath")));
	}

	@Then("^Verify success message$")
	public void verify_success_message() {
		
		//reads success message into variable "text"
		String text = driver.findElement(pf.getLocator("successmessage_xpath")).getText();
		
		//verifies content of success message
		if(text.equalsIgnoreCase("Your personal information has been successfully updated.")){
			this.takeSnapShot(pf.getData("destinationfile")+"Successfullupdate.png");
			System.out.println("The update is success");
		}
		else{
			this.takeSnapShot(pf.getData("destinationfile")+"FailedUpdate.png");
			System.out.println("Sorry, Please try again");
		}
	   
	}
	@Then("^close the browser$")
	
	//closes the browser
	public void close_the_browser() {
		 driver.quit();
	}

	}


