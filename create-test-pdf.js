const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

async function createSamplePdf() {
   // Create a new PDF document
   const pdfDoc = await PDFDocument.create();

   // Add a blank page to the document
   const page = pdfDoc.addPage([595, 842]); // A4 size

   // Get the font
   const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

   // Draw some text
   page.drawText("Sample PDF Document", {
      x: 50,
      y: 800,
      size: 30,
      font,
      color: rgb(0, 0, 0),
   });

   page.drawText("This is a test file created for pdf-parse library.", {
      x: 50,
      y: 750,
      size: 12,
      font,
      color: rgb(0, 0, 0),
   });

   // Add some version spaces for testing
   page.drawText("Version 1.0 Space", {
      x: 50,
      y: 700,
      size: 14,
      font,
      color: rgb(0, 0, 0),
   });

   page.drawText("Version 2.0 Space", {
      x: 50,
      y: 670,
      size: 14,
      font,
      color: rgb(0, 0, 0),
   });

   // Serialize the PDF to bytes
   const pdfBytes = await pdfDoc.save();

   // Ensure the directory exists
   const dirPath = path.join(__dirname, "test", "data");
   if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
   }

   // Write the PDF to a file
   const filePath = path.join(dirPath, "05-versions-space.pdf");
   fs.writeFileSync(filePath, pdfBytes);

   console.log(`PDF created at: ${filePath}`);
}

createSamplePdf().catch((err) => console.error("Error creating PDF:", err));
