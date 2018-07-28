package ReusableComponents;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CheckBox{
	
	//takes locator of web element in the called class and used method as input
	public void checkbox(WebElement locator){
		// Verifies if the check box is displayed and returns true if displayed
		WebElement oCheckBox = locator;
		boolean CheckIsDisplayed = oCheckBox.isDisplayed();		
		
		// Verifies if the check box is enabled and returns true if enabled
		 boolean CheckboxIsEnabled = oCheckBox.isEnabled();  
		 
		// Verifies if the check box is selected and returns true if selected         
         boolean CheckboxIsSelected = oCheckBox.isSelected();
         
         //clicks on the check box         
         oCheckBox.click();
	}
	

}
