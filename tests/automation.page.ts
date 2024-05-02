import { Locator, type Page } from "@playwright/test";

export class automationHomePage {
    readonly page: Page;
    readonly websiteTitle: Locator;
    readonly navButtons: Locator;
    readonly navButtonIcons: Locator;
    readonly footerText: Locator;

    readonly textBoxTitle: Locator;
    readonly textBoxInstructions: Locator;
    readonly textBoxInstructionsContainer: Locator;
    readonly textBoxInputField: Locator;
    readonly verifyBtn: Locator;
    readonly errorMsg: Locator;

    readonly successH1: Locator;
    readonly successP: Locator;
    readonly backBtn: Locator;

    readonly numberBox: Locator;
    readonly numberBoxVerifyBtn: Locator;

    readonly yellowBtn: Locator;
    readonly greenBtn: Locator;
    readonly redBtn: Locator;

    readonly checkbox1: Locator;
    readonly checkbox2: Locator;
    readonly checkbox3: Locator;
    readonly checkbox4: Locator;
    readonly checkbox5: Locator;
    
    readonly checkboxConfirmButton: Locator;
    readonly confMsg: Locator;
    readonly bonusTextLine: Locator;
    readonly radioConfirmButton: Locator;
    readonly profRadioButtonQA: Locator;
    readonly profRadioButtonDEV: Locator;
    readonly profRadioButtonBA: Locator;
    readonly profRadioButtonWriter: Locator;

    readonly dropDown: Locator;
    readonly dropDownButton: Locator;

constructor (page: Page) {
    this.page = page;
    this.websiteTitle = page.locator('h1');
    this.navButtons = page.locator('a');
    this.navButtonIcons = page.locator('i');
    this.footerText = page.locator('#main-footer');

    this.textBoxTitle = page.locator('h1');
    this.textBoxInstructions = page.locator('h2');
    this.textBoxInstructionsContainer = page.locator('li');
    this.textBoxInputField = page.locator('#first-name');
    this.verifyBtn = page.locator('button#verify-btn');
    this.errorMsg = page.locator('#conf-msg');

    this.successH1 = page.locator('h1');
    this.successP = page.locator('p');
    this.backBtn = page.getByRole('button', { name: 'Back to challange list' });

    this.numberBox = page.locator('#number-box');
    this.numberBoxVerifyBtn = page.locator('#number-verify');

    this.yellowBtn = page.getByRole('button', { name: 'Yellow' });
    this.greenBtn = page.locator('#simple-button-2');
    this.redBtn = page.locator('#simple-button-3');

    this.checkbox1 = page.locator('#checkbox1');
    this.checkbox2 = page.locator('input[name="checkbox2"]');
    this.checkbox3 = page.locator('input[name="checkbox3"]');
    this.checkbox4 = page.getByRole('checkbox').nth(3);
    this.checkbox5 = page.locator('#ba');

    this.checkboxConfirmButton = page.locator('#confirm-btn');
    this.confMsg = page.locator('#conf-msg');
    this.bonusTextLine = page.getByText('BONUS! - Automate any found defect! (0.5 pts)');
    this.radioConfirmButton = page.locator('#confirm-radio-challenge');

    this.profRadioButtonQA = page.locator('#profession-tester');
    this.profRadioButtonDEV = page.locator('#profession-developer');
    this.profRadioButtonBA = page.locator('#profession-analyst');
    this.profRadioButtonWriter = page.locator('#profession-writer');

    this.dropDown = page.locator('#country');
    this.dropDownButton = page.locator('#dropdown-verify-btn');
}
getButtonByLabel(label: string) {
    return this.page.locator('a', { hasText: label });
}
getCheckBoxByLabel(label: string) { 
    return this.page.locator('input[type="checkbox"]', {hasText: label});
}
}