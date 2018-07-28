package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="features", 
				  glue={"cucumbersample"},
				  plugin = {"html:target/cucumber-html-report" })
public class TestRunner {


}
