"use client";

import { useState } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    _template: "table",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for tracking submission

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/fintaxionconsulting@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true); // Show success message
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting the form.");
    }

    setLoading(false);
  };

  return (
    <div className="">
      {isSubmitted ? (
        // Success Message UI
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            Message Sent Successfully!
          </h2>
          <p className="text-gray-600 mt-2">
            Thank you for contacting us. We'll get back to you shortly.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg mt-4 text-left">
            <div className="flex justify-between font-medium text-gray-500">
              <p>Name:</p>
              <p className="text-gray-900 font-bold">
                {formData.fullName || "N/A"}
              </p>
            </div>
            <div className="flex justify-between font-medium text-gray-500">
              <p>Email:</p>
              <p className="text-gray-900">{formData.email || "N/A"}</p>
            </div>
            <div className="flex justify-between font-medium text-gray-500">
              <p>Phone:</p>
              <p className="text-gray-900">(+91) {formData.phone || "N/A"}</p>
            </div>
            <hr className="my-3 border-gray-300" />
            <p className="font-medium text-gray-500">Message:</p>
            <p className="text-gray-900">{formData.message || "N/A"}</p>
          </div>

          <Button
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors font-medium"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        // Contact Form
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-200 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors font-medium"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
}
