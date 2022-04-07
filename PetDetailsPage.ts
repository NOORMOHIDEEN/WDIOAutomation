import { expect } from "chai";
import data from '../data/testdata';

const selectors = {
    findOwnerLink: "a[href='/owners/find']",
    addOwnerButton: 'a.btn.btn-default',
    firstNameInput: 'input#firstname',
    lastNameInput: 'input#lastname',
    addressInput: 'input#address',
    cityInput: 'input#city',
    telephoneInput: 'input#telephone',
    addOwnerButton2: 'button.btn.btn-default',
    addPetButton: '/html/body/div/div/a[2]',
    petName: 'input#name.form-control',
    birthDate: 'input#birthDate.form-control',
    petType: 'select#type',
    petTypeOptions: '//*[@id="type"]/option'
}

class PetDetailsPage {

    constructor() {
        selectors;
    }

    public async navigateToFindOwnerPage() {
        await browser.$(selectors.findOwnerLink).click();
        await browser.pause(1000);
    }

    public async navigateToAddOwnerPage() {
        await browser.$(selectors.addOwnerButton).click();
        await browser.pause(1000);
    }

    public async addingNewOwner() {
        await browser.$(selectors.firstNameInput).addValue(data.TestData.OwnerDetails.firstName);
        await browser.pause(1000);
        await browser.$(selectors.lastNameInput).addValue(data.TestData.OwnerDetails.lastName);
        await browser.pause(1000);
        await browser.$(selectors.addressInput).addValue(data.TestData.OwnerDetails.address);
        await browser.pause(1000);
        await browser.$(selectors.cityInput).addValue(data.TestData.OwnerDetails.city);
        await browser.pause(1000);
        await browser.$(selectors.telephoneInput).addValue(data.TestData.OwnerDetails.telephone);
        await browser.pause(1000);
        await browser.$(selectors.addOwnerButton2).click();
        await browser.pause(1000);
    }

    public async navigateToAddPetPage() {
        await browser.$(selectors.addPetButton).click();
        await browser.pause(1000);
    }

    public async addingPet() {
        await browser.$(selectors.petName).addValue(data.TestData.PetDetails.petName);
        await browser.pause(1000);
        await browser.$(selectors.birthDate).addValue(data.TestData.PetDetails.dob);
        await browser.pause(1000);
    }

    // public async verifyPetDetails() {
    //     const list = await browser.$(selectors.petType).getText();
    //     console.log("checking list");
    //     console.log(list.length);
    //     for(let i=1; i<=list.length; i++){
    //         expect(data.TestData.PetTypes[i-1]).to.equal(list[i]);
    //     }
    //     //expect(data.TestData.PetTypes).to.equal(list);
    // }
    public async verifyPetDetails() {

        let optionCount = await ($$(selectors.petTypeOptions)).length;

        for(let i=1; i<=optionCount; i++) {

            let type = await (await $(selectors.petTypeOptions+"["+i+"]")).getText();

            data.TestData.ActualPetDetails.push(type);

        }

        console.log(data.TestData.ExpectedPetTypes);

        console.log(data.TestData.ActualPetDetails);

        expect(data.TestData.ExpectedPetTypes.length).to.equal(data.TestData.ActualPetDetails.length);

        for(let i=0; i<data.TestData.ActualPetDetails.length; i++){

            expect(data.TestData.ExpectedPetTypes[i]).to.equal(data.TestData.ActualPetDetails[i]);

        }
    }
}
export const petDetailsPage = new PetDetailsPage();