import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";
import SocialIcons from "@/components/social-icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Logo */}
        <div className="mb-16">
          <h1 className="text-xl font-semibold">
            <span className="text-blue-600">Fin</span>
            <span className="text-gray-800">Taxion</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Illustration - First on Mobile */}
          <div className="flex justify-center md:justify-end order-first md:order-last">
            <Image
              src="/placeholder.png?height=400&width=400"
              alt="Financial services illustration"
              width={400}
              height={400}
              className="rounded-xl shadow-2xl w-full max-w-md bg-white"
            />
          </div>

          {/* Text & Form */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Expert Financial <br /> Solutions{" "}
                <span className="text-blue-600">Coming Soon</span>
              </h2>
              <p className="mt-4 text-gray-600 max-w-md">
                We're working hard to bring you professional accounting, tax
                planning, and financial advisory services. Stay tuned!
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-6 text-gray-800">
                Contact Us
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <SocialIcons />

            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              <span>201, DSIDC Complex, Okhla Ind. Area Phase-1, New Delhi-110020</span>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col md:flex-row gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>fintaxionconsulting@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 817 836 3761</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
