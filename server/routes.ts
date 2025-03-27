import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Save contact request to storage
      await storage.createContactRequest(validatedData);
      
      // In a production environment, you would send an email here
      console.log("Contact form submission to info@autodemontagekampen.nl:", validatedData);
      
      // Gebruik een externe service als FormSubmit.co voor het doorsturen van formuliergegevens
      // FormSubmit is een gratis service die formuliergegevens doorstuurt naar een e-mailadres 
      // zonder dat u wachtwoorden hoeft op te slaan
      
      // We benaderen hier de FormSubmit API om het bericht door te sturen
      try {
        // Bereid de gegevens voor om naar FormSubmit te sturen
        const formData = new URLSearchParams();
        formData.append('name', validatedData.name);
        formData.append('email', validatedData.email);
        formData.append('phone', validatedData.phone || 'Niet opgegeven');
        formData.append('message', validatedData.message);
        formData.append('_to', 'info@autodemontagekampen.nl');
        formData.append('_subject', 'Nieuwe contactaanvraag van JDescende website');
        
        // Stuur de gegevens naar FormSubmit
        await fetch('https://formsubmit.co/ajax/info@autodemontagekampen.nl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          body: formData
        });
        
        console.log("Contactformulier succesvol doorgestuurd naar info@autodemontagekampen.nl via FormSubmit");
      } catch (emailError) {
        console.error("Fout bij versturen via FormSubmit:", emailError);
        // We gaan door met verwerken, zelfs als het versturen via FormSubmit mislukt
      }
      
      // Sla de gegevens ook lokaal op als backup
      console.log("Contact request received:", {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || 'Niet opgegeven',
        message: validatedData.message,
        timestamp: new Date().toISOString()
      });
      
      res.status(200).json({ message: "Contact request received successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(400).json({ 
        message: "Invalid form data", 
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
