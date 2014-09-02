Feature: Main Page feature
  As a user of cucumber.js
  I want to be able to get to Main page
  So that I can concentrate on building awesome applications
  Scenario: Open Main Page and see hello world
    Given I am on the Main site
    Then I should see "Hello World" in the div "greeting"
