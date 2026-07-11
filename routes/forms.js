const express = require("express");
const router = express.Router();


const medicalData1 = require("../data/medicalData1");
const medicalData2 = require("../data/medicalData2");
const workerData1 = require("../data/workerData1");
const workerData2 = require("../data/workerData2");


router.get("/", (req, res) => {
    res.send(`
        <h1>Diona Assignment 2</h1>

        <h2>Medical Form</h2>

        <a href="/medical/1">Medical Dataset 1</a><br>
        <a href="/medical/2">Medical Dataset 2</a>

        <br><br>

        <h2>Worker Progress Report</h2>

        <a href="/worker/1">Worker Dataset 1</a><br>
        <a href="/worker/2">Worker Dataset 2</a>
    `);
});



router.get("/medical/1", (req, res) => {
    res.render("medical", {
        title: "Medical & Travel Expense Request",
        data: medicalData1
    });
});

router.get("/medical/2", (req, res) => {
    res.render("medical", {
        title: "Medical & Travel Expense Request",
        data: medicalData2
    });
});



router.get("/worker/1", (req, res) => {
    res.render("worker", {
        title: "Worker Progress Report",
        data: workerData1
    });
});

router.get("/worker/2", (req, res) => {
    res.render("worker", {
        title: "Worker Progress Report",
        data: workerData2
    });
});

module.exports = router;


router.get("/medical/:id/pdf", async (req, res) => {
    const id = req.params.id;
    const targetUrl = `http://localhost:3000/medical/${id}`;

    try {
        let puppeteer;
        try {
            puppeteer = require("puppeteer");
        } catch (e) {
            console.error("Puppeteer not installed:", e.message);
            res.status(500).send("Puppeteer is not installed. Run `npm install puppeteer` and restart the server.");
            return;
        }

        const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
        const page = await browser.newPage();
        await page.goto(targetUrl, { waitUntil: "networkidle0" });

        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: { top: "18mm", bottom: "18mm", left: "12mm", right: "12mm" },
            displayHeaderFooter: true,
            headerTemplate: `<div style="font-family: 'Times New Roman', serif; font-size:10px; width:100%; text-align:center; padding-top:4px;">Medical &amp; Travel Expense Request</div>`,
            footerTemplate: `<div style="font-family: 'Times New Roman', serif; font-size:10px; width:100%; text-align:center;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>`
        });

        await browser.close();

        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename=medical_${id}.pdf`,
            "Content-Length": pdfBuffer.length
        });

        res.send(pdfBuffer);
    } catch (err) {
        console.error("PDF generation error:", err);
        res.status(500).send("Failed to generate PDF. Make sure puppeteer is installed and the server is reachable.");
    }
});