const workerData1 = {
    workerAppId: "712041",
    submittedDate: "March 19, 2024 19:21",
    claimNo: "20042047",

    workerName: "Madeleine Willson",

    office: {
        address: "333 Broadway",
        city: "Winnipeg, MB R3C 4W3",
        phone: "(204) 954-4321",
        tollFree: "1-855-954-4321",
        website: "wcb.mb.ca"
    },

    returnToWork: {
        hasReturned: false,
        returnDate: "16 March, 2024",
        dutyType: "Modified duties, reduced hours",
        expectedReturnDate: "March 15, 2024",
        concerns: "Terrible. Testing Testing",
        employerContact: "987-654-3210",
        contactDate: "25 March, 2024",
        missedWork: true
    },

    recovery: {
        fullyRecovered: false,
        comments: "Recovery is progressing well. Mild discomfort remains during movement.",
        additionalComments: "I have not fully recovered from my workplace injury."
    },

    painLevel: 7,

    treatment: {
        receivingTreatment: true,
        providerType: "Physiotherapist",
        lastTreatmentDate: "20 March, 2024",
        providerName: "Dr. Emily Brown",
        nextTreatmentDate: "27 March, 2024",
        nextProviderName: "Dr. Emily Brown",
        physiotherapy: true,
        frequency: "7 days per week"
    },

    medication: {
        takingMedication: false,
        medicineName: "paracetamol"
    },

    homeExercise: {
        doingExercise: false,
        exerciseList: "knee strengthening, shoulder mobility exercises."
    },

    otherInformation: {
        comments: "No info Testing Testing"
    },

    declaration: {
        accepted: true
    }
};

module.exports = workerData1;