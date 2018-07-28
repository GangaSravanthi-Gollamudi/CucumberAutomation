# CucumberSample Framework
Open repository created by GangaSravanthi Gollamudi to share framework created for AutomationPractice application


# Software Requirements
1. JDK version 1.8.0_181
2. Eclipse Kepler
3. ChromeDriver 2.41
4. Cucumber feature file plug-in
http://cucumber.github.com/cucumber-eclipse/update-site
5. Dependencies

    <dependency>
			<groupId>org.seleniumhq.selenium</groupId>
			<artifactId>selenium-java</artifactId>
			<version>2.53.0</version>
	</dependency>
	<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>4.11</version>
			<scope>test</scope>
	</dependency>
    <dependency>
			<groupId>info.cukes</groupId>
			<artifactId>cucumber-junit</artifactId>
			<version>1.2.2</version>
			<scope>test</scope>
	</dependency>
	<dependency>
			<groupId>info.cukes</groupId>
			<artifactId>cucumber-java</artifactId>
			<version>1.2.2</version>
	</dependency>

# Execution steps

1. Download and install JDK
2. Download and install Eclipse 
3. Download and save ChromeDriver.exe in local folder
4. Start eclipse
5. Pull code from Git Repository using below link
   https://github.com/GangaSravanthi-Gollamudi/CucumberAutomation
6. Update ChromeDriver.exe path in login.properties file 
7. Update PropertiesFile Path in LaunchApplication.java, PlaceOrder.java and UpdateName.Java files
8. Update path of snapshots in login.properties file
9. Navigate to src/test/java > runner > TestRunner.java
10. Right click TestRunner.java > Run As > JUnit Test


