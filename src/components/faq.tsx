'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Logos?",
    answer: "Logos is a social movement and decentralised technology stack built to revitalise civil society, empower individuals, and enable decentralised, privacy-first applications and institutions that operate outside traditional power structures. The movement blends community organising with cutting-edge protocols for blockchain, messaging, and storage."
  },
  {
    question: "What are Logos Circles?",
    answer: "Logos Circles are local, community-run meetups where people come together to learn, discuss the Logos mission, collaborate on solutions to real issues in their community, and explore how decentralised technologies can be used for tangible impact."
  },
  {
    question: "What is Logos Circle Ilorin?",
    answer: "Logos Circle Ilorin is the local chapter of the Logos movement in Ilorin, Nigeria. It brings together builders, thinkers, and organisers to explore decentralised solutions for local challenges, connect with like-minded peers, and begin real community projects aligned with the Logos ethos of freedom and autonomy."
  },
  {
    question: "Who can join Logos Circle Ilorin?",
    answer: "Anyone curious about decentralised systems, community organising, or who wants to use technology and collective action for local impact is welcome. You don't need specialised skills—just a willingness to engage, learn, and contribute."
  },
  {
    question: "Is there a cost to join or participate?",
    answer: "No. Participation in Logos Circles and community events is typically free. Some activities may involve collaboration on specific projects that could have optional participation requirements, but joining the movement and local Circle is open to all."
  },
  {
    question: "How do I stay updated or get involved?",
    answer: "You can follow Logos' official channels, join community servers, and check event listings for Logos Circle meetups online or in your region. You can also reach out to the Logos team to propose or help start a Circle if one doesn't yet exist in your area."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq: FAQ, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}