#Author: GangaSravanthi Gollamudi
#Keywords Summary : Feature, Scenario Outline, Given, When, And, Then
#Feature: Update name
#Scenario: To update the first name of the user
#Given: Launch browser and start application
#When: User Credentials are given through arguments (String username , String Password)
#Then: Verified successful login
#Then: User clicks the link My Personal Info which is at the bottom navigation of the page
#Then: User deletes the existing text in the field first name and updates it with new name
#And: User enters the exixting password in confirm password field
#And: User cliks on the Save button
#Then: User Verifies the success message
#Then: User Closes the application


Feature: To change first name of the user
  I want to use this template for my feature file


  Scenario: change the first name
    Given Launch the browser
    When Enter valid "someone@example.com" and valid "Password123 "
    Then Verify successful login
    Then click on My Personal Info
    Then clear and update "Admin"
    And Enter current "Password123"
    And click on save
    Then Verify success message
    Then close the browser

 
