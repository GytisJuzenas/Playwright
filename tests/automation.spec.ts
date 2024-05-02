import {expect, test} from '@playwright/test';

import { automationHomePage } from './automation.page';
import  homePageData  from './automation.data';

test.describe('Automation Challenge', () => {
  let homePage: automationHomePage;
  test.beforeEach(async({ page }) => {
    homePage = new automationHomePage(page);
  });

test('Homepage', async ({ page }) => {
    await page.goto('https://software-testers.gitlab.io/challenges/automation-challenges/index.html');
    await page.waitForTimeout(500);
    await page.waitForSelector('.background');
    await expect(page).toHaveTitle('Test Automation Challenges');
    console.log('title is correct');
    await page.waitForSelector('#navigation-bar');
    await expect(homePage.navButtons).toHaveText(homePageData.buttonsText);
    await expect(homePage.navButtonIcons).toHaveClass(homePageData.buttonsFa);
    await expect(homePage.websiteTitle).toHaveText('Can you solve 10 challenges?');
    await expect(homePage.footerText).toHaveText('Purpose of this website to practice Test Automation skills! © 2021, All Rights Reserved - designed by manani');
  });

  test('Text box challenge', async({page}) => {
    await page.goto('https://software-testers.gitlab.io/challenges/automation-challenges/index.html');
    await homePage.getButtonByLabel('Text Box challenge').click();
    await expect(homePage.textBoxTitle).toHaveText('Text Box Challenge');
    await expect(homePage.textBoxInstructions).toHaveText('Instructions');
    await expect(homePage.textBoxInstructionsContainer).toHaveText(homePageData.textBoxChallengeContainer);
    await expect(homePage.textBoxInputField).toBeVisible();
    await expect(homePage.verifyBtn).toBeVisible();

    while (!(await homePage.errorMsg.isVisible())) {
      await homePage.verifyBtn.click()
    }
    await expect(homePage.errorMsg).toHaveText('No value entered in Name field!');
    await homePage.textBoxInputField.fill(homePageData.textBoxChallengeTask2);
    await homePage.verifyBtn.click();
    await expect(homePage.errorMsg).toHaveText('Name has to have at least 2 letters!');
    await homePage.textBoxInputField.fill(homePageData.textBoxChallengeTask3);
    await homePage.verifyBtn.click();
    await expect(homePage.errorMsg).toHaveText('Name can only have letters!');
    await homePage.textBoxInputField.fill(homePageData.textBoxChallengeTask4);
    await homePage.verifyBtn.click();
    await expect(homePage.errorMsg).toHaveText('Name cannot have more than 30 letters!');
    await homePage.textBoxInputField.fill(homePageData.textBoxChallengeTask5);
    await homePage.verifyBtn.click();

    await expect(homePage.successH1).toHaveText('Wohoo! 🥳');
    await expect(homePage.successP).toHaveText('You have solved the challenge!');
    await homePage.backBtn.click();
  });

  test('Input number challenge', async({ page }) => {
    await page.goto('https://software-testers.gitlab.io/challenges/automation-challenges/index.html');
    await homePage.getButtonByLabel('Input Number challenge').click();
    await expect(homePage.textBoxTitle).toHaveText('Number Box Challenge');
    await expect(homePage.textBoxInstructions).toHaveText('Instructions');
    await expect(homePage.textBoxInstructionsContainer).toHaveText(homePageData.numberBoxChallengeContainer);

    while (!(await homePage.errorMsg.isVisible())) {
      await homePage.numberBoxVerifyBtn.click()
    }
    await expect(homePage.errorMsg).toHaveText('No number is entered!');
    await homePage.numberBox.fill(homePageData.numberBoxChallengeTask2);
    await homePage.numberBoxVerifyBtn.click();
    await expect(homePage.errorMsg).toHaveText('Entered number is NOT in range of 0-100!');
    await homePage.numberBox.fill(homePageData.numberBoxChallengeTask3);
    await homePage.numberBoxVerifyBtn.click();
    await expect(homePage.errorMsg).toHaveText('Entered number is NOT in range of 0-100!');
    await homePage.numberBox.fill(homePageData.numberBoxChallengeTask4);
    await homePage.numberBoxVerifyBtn.click();
    await expect(homePage.successH1).toHaveText('Wohoo! 🥳');
    await expect(homePage.successP).toHaveText('You have solved the challenge!');
    await homePage.backBtn.click();
  });

  test('Button challenge', async({ page }) => {
    await page.goto('https://software-testers.gitlab.io/challenges/automation-challenges/index.html');
    await homePage.getButtonByLabel('Button challenge').first().click();
    await expect(homePage.textBoxTitle).toHaveText('Button Challenge');
    await expect(homePage.textBoxInstructions).toHaveText('Instructions');
    await expect(homePage.textBoxInstructionsContainer).toHaveText(homePageData.buttonChallengeContainer);
    await page.waitForSelector('#simple-button-2:disabled');
    await page.waitForSelector('#simple-button-3:disabled');
    await homePage.yellowBtn.click();
    await page.waitForTimeout(500);
    await homePage.yellowBtn.click();
    await homePage.yellowBtn.click();
    await homePage.greenBtn.click();
    await homePage.redBtn.click();

    await expect(homePage.successH1).toHaveText('Wohoo! 🥳');
    await expect(homePage.successP).toHaveText('You have solved the challenge!');
    await homePage.backBtn.click();
  });

  test('Checkbox challenge', async({ page }) => {
    await page.goto('https://software-testers.gitlab.io/challenges/automation-challenges/index.html');
    await homePage.getButtonByLabel('Checkbox challenge').click();
    await expect(homePage.textBoxTitle).toHaveText('Checkbox Challenge');
    await expect(homePage.textBoxInstructions).toHaveText('Instructions');
    await expect(homePage.textBoxInstructionsContainer).toHaveText(homePageData.checkboxChallengeContainer);
    await expect(homePage.checkbox1).toBeChecked();
    await expect(homePage.checkbox2).not.toBeChecked();
    await expect(homePage.checkbox3).toBeChecked();
    await expect(homePage.checkbox4).not.toBeChecked();
    await expect(homePage.checkbox5).toBeChecked();

    await homePage.checkbox1.click();
    await homePage.checkbox3.click();
    await homePage.checkbox5.click();

    await homePage.checkboxConfirmButton.click();
    await expect(homePage.confMsg).toHaveText('No checkbox is selected!');
    await homePage.checkbox2.click();
    await homePage.checkboxConfirmButton.click();
    await expect(homePage.confMsg).toHaveText('The combination of selected profession(s) is NOT correct!');
    await homePage.checkbox3.click();
    await homePage.checkbox4.click();
    await homePage.checkboxConfirmButton.click();

    await expect(homePage.successH1).toHaveText('Wohoo! 🥳');
    await expect(homePage.successP).toHaveText('You have solved the challenge!');
    await homePage.backBtn.click();
  });
  test('Radio button challenge', async({ page }) => {
    await page.goto('https://software-testers.gitlab.io/challenges/automation-challenges/index.html');
    await homePage.getButtonByLabel('Radio Button challenge').click();
    await expect(homePage.textBoxTitle).toHaveText('Radio-button Challenge');
    await expect(homePage.textBoxInstructions).toHaveText('Instructions');
    await expect(homePage.textBoxInstructionsContainer).toHaveText(homePageData.radioButtonChallengeContainer);
    await homePage.bonusTextLine.isVisible;

    while (!(await homePage.errorMsg.isVisible())) {
      await homePage.radioConfirmButton.click()
    }
    await expect(homePage.confMsg).toHaveText('No option is selected!');
    await homePage.profRadioButtonQA.click();
    await homePage.radioConfirmButton.click();
    await expect(homePage.confMsg).toHaveText('QA Test Engineer is selected!');
    await homePage.profRadioButtonDEV.click();
    await homePage.radioConfirmButton.click();
    await expect(homePage.confMsg).toHaveText('Software Developer is selected!');
    await homePage.profRadioButtonBA.click();
    await homePage.radioConfirmButton.click();
    await expect(homePage.confMsg).toHaveText('Business Analystic is selected!');
    await homePage.profRadioButtonWriter.click();
    await homePage.radioConfirmButton.click();

    await expect(homePage.successH1).toHaveText('Wohoo! 🥳');
    await expect(homePage.successP).toHaveText('You have solved the challenge!');
    await homePage.backBtn.click();
  });
  test('Drop down challenge', async({ page }) => {
    await page.goto('https://software-testers.gitlab.io/challenges/automation-challenges/index.html');
    await homePage.getButtonByLabel('Drop down Challenge').click();
    await expect(homePage.textBoxTitle).toHaveText('Drop-down Challenge');
    await expect(homePage.textBoxInstructions).toHaveText('Instructions');
    await expect(homePage.textBoxInstructionsContainer).toHaveText(homePageData.dropDownChallengeContainer);
  
    await homePage.dropDown.isVisible();
    await homePage.dropDown.selectOption('Afghanistan');
    while (!(await homePage.errorMsg.isVisible())) {
      await homePage.dropDownButton.click()
    }
    await expect(homePage.confMsg).toHaveText('Selected country is Afganistan, NOT Lithuania!');

    await homePage.dropDown.selectOption('Zambia');
    await homePage.dropDownButton.click();
    await expect(homePage.confMsg).toHaveText('Selected country is Zambia, NOT Lithuania!');
    
    await homePage.dropDown.selectOption('United Kingdom');
    await homePage.dropDownButton.click();
    await expect(homePage.confMsg).toHaveText('Selected country is United Kingdom, NOT Lithuania!');

    await homePage.dropDown.selectOption('Lithuania');
    await homePage.dropDownButton.click();

    await expect(homePage.successH1).toHaveText('Wohoo! 🥳');
    await expect(homePage.successP).toHaveText('You have solved the challenge!');
    await homePage.backBtn.click();
  });
});