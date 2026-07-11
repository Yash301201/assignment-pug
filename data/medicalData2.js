const medicalData2 = {
    workerAppId: "845912",
    submittedDate: "April 15, 2024 10:25",
    claimNo: "30054129",

    workerName: "David Anderson",

    office: {
        address: "333 Broadway",
        city: "Winnipeg, MB R3C 4W3",
        phone: "(204) 954-4321",
        tollFree: "1-855-954-4321",
        website: "wcb.mb.ca"
    },

    prescriptionDrugs: [
        {
            drugName: "Amoxicillin",
            prescriptionDate: "April 10, 2024",
            purchaseDate: "April 11, 2024",
            healthcareProvider: "Dr. Robert Smith",
            amount: "$35.00"
        },
        {
            drugName: "Paracetamol",
            prescriptionDate: "April 12, 2024",
            purchaseDate: "April 12, 2024",
            healthcareProvider: "Dr. Robert Smith",
            amount: "$12.00"
        }
        ,
        {
            drugName: "Cetirizine",
            prescriptionDate: "April 13, 2024",
            purchaseDate: "April 14, 2024",
            healthcareProvider: "Dr. Nguyen",
            amount: "$9.50"
        }
    ],

    overTheCounterDrugs: [
        {
            drugName: "Tylenol",
            purchaseDate: "April 13, 2024",
            amount: "$15.00",
            seller: "Walmart Pharmacy",
            reason: "Headache"
        }
        ,
        {
            drugName: "Aspirin",
            purchaseDate: "April 11, 2024",
            amount: "$6.00",
            seller: "Pharmacy Plus",
            reason: "Fever"
        },
        {
            drugName: "Dextromethorphan",
            purchaseDate: "April 09, 2024",
            amount: "$7.25",
            seller: "Shoppers Drug Mart",
            reason: "Cough"
        }
    ],

    medicalSupplies: [
        {
            item: "Knee Brace",
            purchaseDate: "April 14, 2024",
            prescribed: "Yes",
            healthcareProvider: "Dr. Robert Smith",
            amount: "$45.00",
            seller: "Medical Supply Store"
        },
        {
            item: "Ice Pack",
            purchaseDate: "April 14, 2024",
            prescribed: "No",
            healthcareProvider: "Dr. Nguyen",
            amount: "$18.00",
            seller: "Shoppers Drug Mart"
        }
        ,
        {
            item: "Wrist Support",
            purchaseDate: "April 10, 2024",
            prescribed: "Yes",
            healthcareProvider: "Dr. Patel",
            amount: "$22.00",
            seller: "Medical Supply Store"
        }
    ],

    parkingExpenses: [
        {
            address: "Health Sciences Centre, Winnipeg",
            date: "April 15, 2024",
            amount: "$12.00",
            meterUsed: "Yes",
            meterNumber: "56781"
        }
        ,
        {
            address: "Grace Hospital, Winnipeg",
            date: "April 12, 2024",
            amount: "$8.50",
            meterUsed: "No",
            meterNumber: "13564"
        },
        {
            address: "St. Boniface Hospital, Winnipeg",
            date: "April 08, 2024",
            amount: "$11.00",
            meterUsed: "Yes",
            meterNumber: "99823"
        }
    ],

    mileageExpenses: [
        {
            appointmentDate: "April 15, 2024",
            healthcareAddress: "Health Sciences Centre, Winnipeg",
            workplaceAddress: "ABC Manufacturing Ltd.",
            distance: "35 km"
        }
        ,
        {
            appointmentDate: "April 10, 2024",
            healthcareAddress: "Grace Hospital, Winnipeg",
            workplaceAddress: "ABC Manufacturing Ltd.",
            distance: "18 km"
        },
        {
            appointmentDate: "April 05, 2024",
            healthcareAddress: "Community Clinic, 50 Elm St",
            workplaceAddress: "ABC Manufacturing Ltd.",
            distance: "12 km"
        }
    ],

    busTaxiExpenses: [
        {
            appointmentDate: "April 10, 2024",
            startingPoint: "45 King Street, Winnipeg",
            destination: "Grace Hospital",
            transport: "Taxi",
            fare: "$18.50"
        },
        {
            appointmentDate: "April 12, 2024",
            startingPoint: "Grace Hospital",
            destination: "45 King Street, Winnipeg",
            transport: "Bus",
            fare: "$3.25"
        }
        ,
        {
            appointmentDate: "April 14, 2024",
            startingPoint: "60 Broadway Ave, Winnipeg",
            destination: "Health Sciences Centre, Winnipeg",
            transport: "Bus",
            fare: "$2.75"
        }
    ],

    privacyNotice:
        "I understand that the Privacy Notice applies to the personal information collected in this document."
};

module.exports = medicalData2;