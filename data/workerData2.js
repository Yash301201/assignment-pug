const workerData2 = {
    workerAppId: "845912",
    submittedDate: "April 18, 2024 14:10",
    claimNo: "30054129",

    workerName: "David Anderson",

    office: {
        address: "333 Broadway",
        city: "Winnipeg, MB R3C 4W3",
        phone: "(204) 954-4321",
        tollFree: "1-855-954-4321",
        website: "wcb.mb.ca"
    },

    returnToWork: {
        hasReturned: true,
        returnDate: "April 16, 2024",
        dutyType: "Modified duties, regular hours",
        expectedReturnDate: "9 April, 2024",
        concerns: "Able to perform light work but unable to lift heavy objects.",
        employerContact: "Michael Johnson",
        contactDate: "April 15, 2024",
        missedWork: false
    },

    recovery: {
        fullyRecovered: false,
        comments: "Recovery is progressing well. Mild discomfort remains during movement.",
        additionalComments: "Employee is following all medical advice and is expected to return to full duties within two weeks."
    },

    painLevel: 3,

    treatment: {
        receivingTreatment: true,
        providerType: "Physiotherapist",
        lastTreatmentDate: "April 17, 2024",
        providerName: "Dr. Emily Brown",
        nextTreatmentDate: "April 24, 2024",
        nextProviderName: "Dr. Emily Brown",
        physiotherapy: true,
        frequency: "Twice per week"
    },

    medication: {
        takingMedication: true,
        medicineName: "Ibuprofen 400 mg"
    },

    homeExercise: {
        doingExercise: true,
        exerciseList: "Stretching exercises, knee strengthening, shoulder mobility exercises."
    },

    otherInformation: {
        comments: "Employee is following all medical advice and is expected to return to full duties within two weeks."
    },

    declaration: {
        accepted: true
    }
};

module.exports = workerData2;