import { Given, Then, When } from '@cucumber/cucumber';
import data from '../data/testdata';
import { petDetailsPage } from '../pageobjects/PetDetailsPage'

Given('User is on pet clinic website', async function () {
    await driver.url(data.AppURL.URL);driver
    await driver.maximizeWindow();
    await browser.pause(1000);
});

When('User is on \"FIND OWNERS\" page', async function() {
    await petDetailsPage.navigateToFindOwnerPage();
});

Then('User is navigate to \"Add Owner\" page', async function() {
    await petDetailsPage.navigateToAddOwnerPage();
});

Then('User is on \"Add Owner\" page', async function() {
    await petDetailsPage.addingNewOwner();
});

Then('User is navigate to \"Add Pet\" page', async function() {
    await petDetailsPage.navigateToAddPetPage();
});

Then('User is on \"Add Pet\" page', async function() {
    await petDetailsPage.addingPet();
});

Then('Verify all pet details displayed in type', async function() {
    await petDetailsPage.verifyPetDetails();
});