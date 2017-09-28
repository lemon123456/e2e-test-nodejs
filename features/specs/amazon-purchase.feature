@purchase
Feature: Login

  Scenario: Login with correct username and password
    Given I go to amazon home page
    When I login with username "15109242187" and password "q1w2e3R$"
    Then I should see the account information

