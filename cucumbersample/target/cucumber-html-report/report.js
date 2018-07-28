$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("placeorder.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: GangaSravanthi Gollamudi"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : Feature, Scenario Outline, Given, When, And, Then"
    },
    {
      "line": 3,
      "value": "#Feature: Placing an order for T-SHIRT"
    },
    {
      "line": 4,
      "value": "#Scenario Outline: To order T-Shirt from automationpractise.com"
    },
    {
      "line": 5,
      "value": "#Given: Launch browser and start application"
    },
    {
      "line": 6,
      "value": "#When: User Credentials are given through arguments (String username , String Password)"
    },
    {
      "line": 7,
      "value": "#Then: Verified successful login"
    },
    {
      "line": 8,
      "value": "#Then: User clicks the link T-SHIRT from top-navigation"
    },
    {
      "line": 9,
      "value": "#Then: User sort results by Product Name: A to Z,In Stock, Price: Lowest First"
    },
    {
      "line": 10,
      "value": "#And: User selectes the size"
    },
    {
      "line": 11,
      "value": "#And: User cliks on the button AddToCart"
    },
    {
      "line": 12,
      "value": "#Then: User Proceeds for the payment"
    },
    {
      "line": 13,
      "value": "#Then: User Verifies the order history and comapres with the addtocart model and throws success or failed result"
    },
    {
      "line": 14,
      "value": "#Then: User Closes the application"
    },
    {
      "line": 15,
      "value": "#Examples: selected option and value in the dropdown for the option"
    }
  ],
  "line": 16,
  "name": "Order T-SHIRT and checkout",
  "description": "I want to use this template for my feature file",
  "id": "order-t-shirt-and-checkout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "To order T-Shirt from automationpractise.com",
  "description": "",
  "id": "order-t-shirt-and-checkout;to-order-t-shirt-from-automationpractise.com",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "Open Chrome and start website",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user provide valid \"someone@example.com\" and valid \"Password123 \"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify the login success",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "click on T-Shirts option",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "choose the \"\u003coption\u003e\" from dropdown by \"\u003cchoosenvalue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "choose size",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click on Addtocart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "proceed to payment",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "verify the order history",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "close the application",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "order-t-shirt-and-checkout;to-order-t-shirt-from-automationpractise.com;",
  "rows": [
    {
      "cells": [
        "option",
        "choosenvalue"
      ],
      "line": 32,
      "id": "order-t-shirt-and-checkout;to-order-t-shirt-from-automationpractise.com;;1"
    },
    {
      "cells": [
        "selectByVisibleText",
        "Product Name: A to Z"
      ],
      "line": 33,
      "id": "order-t-shirt-and-checkout;to-order-t-shirt-from-automationpractise.com;;2"
    },
    {
      "cells": [
        "selectByValue",
        "quantity:desc"
      ],
      "line": 34,
      "id": "order-t-shirt-and-checkout;to-order-t-shirt-from-automationpractise.com;;3"
    },
    {
      "cells": [
        "selectByIndex",
        ""
      ],
      "line": 35,
      "id": "order-t-shirt-and-checkout;to-order-t-shirt-from-automationpractise.com;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "To order T-Shirt from automationpractise.com",
  "description": "",
  "id": "order-t-shirt-and-checkout;to-order-t-shirt-from-automationpractise.com;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "Open Chrome and start website",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user provide valid \"someone@example.com\" and valid \"Password123 \"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify the login success",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "click on T-Shirts option",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "choose the \"selectByVisibleText\" from dropdown by \"Product Name: A to Z\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "choose size",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click on Addtocart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "proceed to payment",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "verify the order history",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrder.open_Chrome_and_start_website()"
});
formatter.result({
  "duration": 347266782,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class cucumbersample.PlaceOrder\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:34)\r\n\t... 50 more\r\nCaused by: java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat ReusableComponents.LaunchApplication.\u003cinit\u003e(LaunchApplication.java:29)\r\n\tat cucumbersample.PlaceOrder.\u003cinit\u003e(PlaceOrder.java:26)\r\n\t... 55 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 20
    },
    {
      "val": "Password123 ",
      "offset": 52
    }
  ],
  "location": "PlaceOrder.user_provide_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.verify_the_login_success()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "selectByVisibleText",
      "offset": 12
    },
    {
      "val": "Product Name: A to Z",
      "offset": 51
    }
  ],
  "location": "PlaceOrder.choose_the_option_from_sortby(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.choose_size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.click_on_Addtocart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.proceed_to_payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.verify_the_order_history()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.close_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "To order T-Shirt from automationpractise.com",
  "description": "",
  "id": "order-t-shirt-and-checkout;to-order-t-shirt-from-automationpractise.com;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "Open Chrome and start website",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user provide valid \"someone@example.com\" and valid \"Password123 \"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify the login success",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "click on T-Shirts option",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "choose the \"selectByValue\" from dropdown by \"quantity:desc\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "choose size",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click on Addtocart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "proceed to payment",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "verify the order history",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrder.open_Chrome_and_start_website()"
});
formatter.result({
  "duration": 13151396,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class cucumbersample.PlaceOrder\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:34)\r\n\t... 50 more\r\nCaused by: java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat ReusableComponents.LaunchApplication.\u003cinit\u003e(LaunchApplication.java:29)\r\n\tat cucumbersample.PlaceOrder.\u003cinit\u003e(PlaceOrder.java:26)\r\n\t... 55 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 20
    },
    {
      "val": "Password123 ",
      "offset": 52
    }
  ],
  "location": "PlaceOrder.user_provide_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.verify_the_login_success()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "selectByValue",
      "offset": 12
    },
    {
      "val": "quantity:desc",
      "offset": 45
    }
  ],
  "location": "PlaceOrder.choose_the_option_from_sortby(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.choose_size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.click_on_Addtocart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.proceed_to_payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.verify_the_order_history()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.close_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "To order T-Shirt from automationpractise.com",
  "description": "",
  "id": "order-t-shirt-and-checkout;to-order-t-shirt-from-automationpractise.com;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "Open Chrome and start website",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user provide valid \"someone@example.com\" and valid \"Password123 \"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify the login success",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "click on T-Shirts option",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "choose the \"selectByIndex\" from dropdown by \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "choose size",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click on Addtocart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "proceed to payment",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "verify the order history",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrder.open_Chrome_and_start_website()"
});
formatter.result({
  "duration": 18184826,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class cucumbersample.PlaceOrder\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:34)\r\n\t... 50 more\r\nCaused by: java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat ReusableComponents.LaunchApplication.\u003cinit\u003e(LaunchApplication.java:29)\r\n\tat cucumbersample.PlaceOrder.\u003cinit\u003e(PlaceOrder.java:26)\r\n\t... 55 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 20
    },
    {
      "val": "Password123 ",
      "offset": 52
    }
  ],
  "location": "PlaceOrder.user_provide_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.verify_the_login_success()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "selectByIndex",
      "offset": 12
    },
    {
      "val": "",
      "offset": 45
    }
  ],
  "location": "PlaceOrder.choose_the_option_from_sortby(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.choose_size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.click_on_Addtocart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.proceed_to_payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.verify_the_order_history()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PlaceOrder.close_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("updateName.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: GangaSravanthi Gollamudi"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : Feature, Scenario Outline, Given, When, And, Then"
    },
    {
      "line": 3,
      "value": "#Feature: Update name"
    },
    {
      "line": 4,
      "value": "#Scenario: To update the first name of the user"
    },
    {
      "line": 5,
      "value": "#Given: Launch browser and start application"
    },
    {
      "line": 6,
      "value": "#When: User Credentials are given through arguments (String username , String Password)"
    },
    {
      "line": 7,
      "value": "#Then: Verified successful login"
    },
    {
      "line": 8,
      "value": "#Then: User clicks the link My Personal Info which is at the bottom navigation of the page"
    },
    {
      "line": 9,
      "value": "#Then: User deletes the existing text in the field first name and updates it with new name"
    },
    {
      "line": 10,
      "value": "#And: User enters the exixting password in confirm password field"
    },
    {
      "line": 11,
      "value": "#And: User cliks on the Save button"
    },
    {
      "line": 12,
      "value": "#Then: User Verifies the success message"
    },
    {
      "line": 13,
      "value": "#Then: User Closes the application"
    }
  ],
  "line": 16,
  "name": "To change first name of the user",
  "description": "I want to use this template for my feature file",
  "id": "to-change-first-name-of-the-user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 20,
  "name": "change the first name",
  "description": "",
  "id": "to-change-first-name-of-the-user;change-the-first-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "Launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Enter valid \"someone@example.com\" and valid \"Password123 \"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Verify successful login",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "click on My Personal Info",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "clear and update \"Admin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Enter current \"Password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click on save",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify success message",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdateName.launch_the_browser()"
});
formatter.result({
  "duration": 38514761,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class cucumbersample.UpdateName\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:34)\r\n\t... 32 more\r\nCaused by: java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat ReusableComponents.LaunchApplication.\u003cinit\u003e(LaunchApplication.java:29)\r\n\tat cucumbersample.UpdateName.\u003cinit\u003e(UpdateName.java:23)\r\n\t... 37 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 13
    },
    {
      "val": "Password123 ",
      "offset": 45
    }
  ],
  "location": "UpdateName.enter_valid_and_valid(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UpdateName.verify_successful_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UpdateName.click_on_My_Personal_Info()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "UpdateName.clear_and_update_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 15
    }
  ],
  "location": "UpdateName.enter_current_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UpdateName.click_on_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UpdateName.verify_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UpdateName.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});