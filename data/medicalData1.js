const medicalData1 = {
    workerAppId: "712041",
    submittedDate: "March 28, 2024 20:43",
    claimNo: "20042047",

    workerName: "Madeleine Willson",

    office: {
        address: "333 Broadway",
        city: "Winnipeg, MB R3C 4W3",
        phone: "(204) 954-4321",
        tollFree: "1-855-954-4321",
        website: "wcb.mb.ca"
    },

    prescriptionDrugs: [
        {
            drugName: "Naproxen",
            prescriptionDate: "February 28, 2024",
            purchaseDate: "February 29, 2024",
            healthcareProvider: "Dr. Best",
            amount: "$20.00"
        }
        ,
        {
            drugName: "Gabapentin",
            prescriptionDate: "March 01, 2024",
            purchaseDate: "March 02, 2024",
            healthcareProvider: "Dr. Lee",
            amount: "$42.50"
        }
        ,
        {
            drugName: "Lisinopril",
            prescriptionDate: "March 05, 2024",
            purchaseDate: "March 06, 2024",
            healthcareProvider: "Dr. Patel",
            amount: "$18.75"
        }
        ,
        {
            drugName: "Metformin",
            prescriptionDate: "March 10, 2024",
            purchaseDate: "March 11, 2024",
            healthcareProvider: "Dr. Alvarez",
            amount: "$25.00"
        }
    ],

    overTheCounterDrugs: [
        {
            drugName: "Advil",
            purchaseDate: "March 28, 2024",
            amount: "$8.00",
            seller: "Shoppers Drug Mart",
            reason: "Pain"
        }
        ,
        {
            drugName: "Pepto-Bismol",
            purchaseDate: "March 20, 2024",
            amount: "$6.50",
            seller: "Walmart",
            reason: "Indigestion"
        }
        ,
        {
            drugName: "Claritin",
            purchaseDate: "March 15, 2024",
            amount: "$12.00",
            seller: "Shoppers Drug Mart",
            reason: "Allergy"
        }
    ],

    medicalSupplies: [
        {
            item: "Tensor",
            purchaseDate: "February 28, 2024",
            prescribed: "Yes",
            healthcareProvider: "Dr. Best",
            amount: "$10.00",
            seller: "Shoppers DrugMart"
        }
        ,
        {
            item: "Ankle Brace",
            purchaseDate: "March 02, 2024",
            prescribed: "Yes",
            healthcareProvider: "Dr. Lee",
            amount: "$32.00",
            seller: "Medical Supply Store"
        }
        ,
        {
            item: "Disposable Cold Pack",
            purchaseDate: "March 12, 2024",
            prescribed: "No",
            healthcareProvider: "Dr. Alvarez",
            amount: "$4.50",
            seller: "Pharmacy Plus"
        }
    ],

    parkingExpenses: [
        {
            address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",
            date: "March 28, 2024",
            amount: "$10.00",
            meterUsed: "Yes",
            meterNumber: "12245"
        }
        ,
        {
            address: "Health Sciences Centre, Winnipeg",
            date: "March 15, 2024",
            amount: "$12.00",
            meterUsed: "No",
            meterNumber: "13567"
        }
    ],

    mileageExpenses: [
        {
            appointmentDate: "March 28, 2024",
            healthcareAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
            workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
            distance: "20 km"
        }
        ,
        {
            appointmentDate: "March 10, 2024",
            healthcareAddress: "Grace Hospital, Winnipeg",
            workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
            distance: "14 km"
        }
    ],

    busTaxiExpenses: [
        {
            appointmentDate: "March 28, 2024",
            startingPoint: "265 Furby St, Winnipeg MB R3C2A2, Canada",
            destination: "HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
            transport: "Bus",
            fare: "$3.00"
        }
        ,
        {
            appointmentDate: "March 27, 2024",
            startingPoint: "25 Furby St, Winnipeg MB R3C2A2, Canada",
            destination: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
            transport: "Taxi",
            fare: "$15.00"
        }
        ,
        {
            appointmentDate: "March 05, 2024",
            startingPoint: "100 Main St, Winnipeg",
            destination: "Community Clinic, 50 Elm St, Winnipeg",
            transport: "Bus",
            fare: "$2.75"
        }
    ],

    privacyNotice:
        "I understand that the Privacy Notice applies to the personal information collected in this document."
};

module.exports = medicalData1;