import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "./Footer";

const services = {
  "legal-consultation": {
    title: "Legal Consultation Services",
    description: `Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies. Our mission is to provide comprehensive and specialized legal support to meet our clients’ needs and offer the best legal solutions in various cases and legal fields, we provide our legal consultations services as a follow:`,
    sections: [
      {
        heading: "General Legal Consultations",
        content: `At Law Firm, we provide comprehensive legal consultations covering all legal aspects that our clients may encounter in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding of local and international laws.`,
      },
      {
        heading: "Corporate Legal Consultations",
        content: `We at the Law Firm understand the importance of legal consultations for companies in building and enhancing their businesses.`,
        list: [
          "Establishing and registering companies.",
          "All kinds of contracts and agreements.",
          "Commercial disputes.",
          "Compliance with local and international laws and regulations.",
        ],
      },
      {
        heading: "Individual Legal Consultations",
        content: `Law Firm offers customized advisory services for individuals, including:`,
        list: [
          "Family issues such as divorce, alimony, and custody.",
          "Real estate matters like buying, selling, and renting properties.",
          "Employment issues such as hiring and wrongful termination.",
          "Criminal cases and defending personal rights.",
        ],
      },
    ],
    footer: `At Law Firm, we aim to provide the best legal services to ensure your rights and offer effective legal solutions. Contact us today to receive professional and comprehensive legal consultation.`,
  },
};

export default function ServiceDetailCard({ slug }) {
  const router = useRouter();
  const service = services[slug];

  if (!service) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <Link href="/" className="text-blue-600 underline mt-4 block">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-10">
        <button
          className="text-sm text-gray-600 mb-6 flex items-center gap-2 hover:text-black"
          onClick={() => router.back()}
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="text-gray-700 mb-8">{service.description}</p>

        {service?.sections?.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
            <p className="text-gray-700 mb-2">{section.content}</p>
            {section.list && (
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <p className="mt-10 text-gray-700">{service.footer}</p>
      </div>
      <Footer />
    </>
  );
}
