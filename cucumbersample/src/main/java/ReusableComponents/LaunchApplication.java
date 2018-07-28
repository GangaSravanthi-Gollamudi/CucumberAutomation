package ReusableComponents;


import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LaunchApplication {
	
	PropertiesFile pf= new PropertiesFile("C:/Users/Sysadmin/workspace/cucumbersample/src/main/resources/ObjectRepository/login.properties");
	public WebDriver driver;
	
	//initiates the browser and maximises the screen
	public LaunchApplication()
	{
		try {
			System.setProperty(pf.getData("webdriver"), pf.getData("path"));
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
	}
	
	//logs into the application with valid credentials
	public void login(String uname , String password){
		driver.get(pf.getData("url"));
		
		//waits until the expected conditions are met to the maximum of 30
		WebDriverWait wait = new WebDriverWait(driver ,30);
		wait.until(ExpectedConditions.elementToBeClickable(pf.getLocator("signin_linkText")));		
		driver.findElement(pf.getLocator("signin_linkText")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(pf.getLocator("email_id")));
		driver.findElement(pf.getLocator("email_id")).sendKeys(uname);
		driver.findElement(pf.getLocator("password_id")).sendKeys(password);
		driver.findElement(pf.getLocator("submit_id")).click();
	}
	
	//verifies the login status and updates the result in console and screenshots
	public void successLogin(){
		String text = driver.findElement(pf.getLocator("success_xpath")).getText();
		if(text.contains("Invalid email address.")){
			this.takeSnapShot(pf.getData("destinationfile")+"Loginfailure.png");
			System.out.println("Please enter valid credentials");	
		}		
		else{
			this.takeSnapShot(pf.getData("destinationfile")+"Loginsuccess.png");
			System.out.println("You have logged in successfully");
		}
	}
	
	
	
	public void takeSnapShot(String fileWithPath){
try{
        //Convert web driver object to TakeScreenshot

        TakesScreenshot scrShot =((TakesScreenshot)driver);

        //Call getScreenshotAs method to create image file

                File SrcFile=scrShot.getScreenshotAs(OutputType.FILE);

            //Move image file to new destination

                File DestFile=new File(fileWithPath);

                //Copy file at destination

                FileUtils.copyFile(SrcFile, DestFile);

    }
catch(Exception e){
	System.out.println(e.getMessage());
}
	
}
}