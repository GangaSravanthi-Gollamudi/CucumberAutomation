#Author: GangaSravanthi Gollamudi
#Keywords Summary : Feature, Scenario Outline, Given, When, And, Then
#Feature: Placing an order for T-SHIRT
#Scenario Outline: To order T-Shirt from automationpractise.com
#Given: Launch browser and start application
#When: User Credentials are given through arguments (String username , String Password)
#Then: Verified successful login
#Then: User clicks the link T-SHIRT from top-navigation
#Then: User sort results by Product Name: A to Z,In Stock, Price: Lowest First
#And: User selectes the size
#And: User cliks on the button AddToCart
#Then: User Proceeds for the payment
#Then: User Verifies the order history and comapres with the addtocart model and throws success or failed result
#Then: User Closes the application
#Examples: selected option and value in the dropdown for the option
Feature: Order T-SHIRT and checkout
  I want to use this template for my feature file

  Scenario Outline: To order T-Shirt from automationpractise.com
    Given Open Chrome and start website
    When user provide valid "someone@example.com" and valid "Password123 "
    Then verify the login success
    Then click on T-Shirts option
    Then choose the "<option>" from dropdown by "<choosenvalue>"
    And choose size
    And click on Addtocart
    Then proceed to payment
    Then verify the order history
    Then close the application

    Examples: 
      | option              | choosenvalue         |
      | selectByVisibleText | Product Name: A to Z |
      | selectByValue       | quantity:desc        |
      | selectByIndex       |                      |
