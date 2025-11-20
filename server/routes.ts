import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactInquirySchema } from "@shared/schema";
import nodemailer from "nodemailer";

const CONTACT_RECIPIENTS = [
  "sid@gammainternationaltz.com",
  "vijay@gammainternationaltz.com",
  "Himanshu@gammainternationaltz.com",
  "info@gammainternationaltz.com",
  "hello.gitltz@gmail.com",
];

// Configure mail transport using environment variables
// Make sure to set: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM
const mailTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: process.env.SMTP_USER
    ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    : undefined,
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);

      const phoneCountryCode = (req.body as any).phoneCountryCode ?? "";
      const phoneNumber = (req.body as any).phoneNumber ?? "";
      const phoneDisplay = `${phoneCountryCode} ${phoneNumber}`.trim();

      const plainTextBody = [
        `Name: ${validatedData.name}`,
        `Email: ${validatedData.email}`,
        validatedData.company ? `Company: ${validatedData.company}` : undefined,
        phoneDisplay ? `Phone: ${phoneDisplay}` : undefined,
        "",
        "Message:",
        validatedData.message,
      ]
        .filter(Boolean)
        .join("\n");

      const htmlBody = `<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ""}
${phoneDisplay ? `<p><strong>Phone:</strong> ${phoneDisplay}</p>` : ""}
<hr />
<p>${validatedData.message.replace(/\n/g, "<br />")}</p>`;

      await mailTransport.sendMail({
        from: process.env.SMTP_FROM || validatedData.email,
        to: CONTACT_RECIPIENTS,
        subject: `New contact inquiry from ${validatedData.name}`,
        text: plainTextBody,
        html: htmlBody,
      });

      console.log("Contact form submission sent via email:", validatedData);

      res.json({
        success: true,
        message: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({
        success: false,
        message: "Please check your form and try again.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
