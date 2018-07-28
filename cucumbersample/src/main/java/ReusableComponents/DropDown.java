package ReusableComponents;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class DropDown {
	
	
	public void dropDown( WebElement locator,String option,String value,int val )
	{
		//Instantiates the drop-down box as a "Select" object in WebDriver
		Select dropdown = new Select(locator);
		
		//control drop down by using any of the available Select methods
		switch(option){
		case "selectByVisibleText":
			dropdown.selectByVisibleText(value);
			break;
		case "selectByValue":
			dropdown.selectByValue(value);
			break;
		case "selectByIndex":
			dropdown.selectByIndex(val);
			break;
		default:
			dropdown.selectByIndex(1);
			break;
		}
		
	}

}
