"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is FlowStack?",
    answer:
      "FlowStack is a comprehensive business growth platform that combines powerful analytics, automation tools, and actionable insights to help you scale your impact. Whether you're a startup or an established enterprise, FlowStack provides the tools you need to understand your customers, optimize your operations, and accelerate growth.",
  },
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Our 14-day free trial gives you full access to all FlowStack features with no credit card required. Simply sign up, explore the platform, and see the results for yourself. At the end of your trial, you can choose the plan that best fits your needs, or continue with our free tier.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely! FlowStack offers flexible, no-commitment subscriptions. You can upgrade, downgrade, or cancel your plan at any time directly from your account settings. If you cancel, you'll retain access to your current plan until the end of your billing period.",
  },
  {
    question: "What integrations does FlowStack support?",
    answer:
      "FlowStack integrates seamlessly with over 100+ popular tools including Slack, Salesforce, HubSpot, Google Analytics, Stripe, Shopify, and many more. Our open API also allows you to build custom integrations tailored to your specific workflow needs.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#a7c957]/20 text-[#2d6a4f] border border-[#a7c957]/40 mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1b4332] mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-[#2d6a4f] text-lg max-w-xl mx-auto text-pretty">
            Everything you need to know about FlowStack. Can&apos;t find the answer
            you&apos;re looking for? Reach out to our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-lg shadow-[#1b4332]/5 border border-[#d4e5d0] overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#d4e5d0] last:border-b-0 px-6"
              >
                <AccordionTrigger className="text-[#1b4332] font-semibold text-base sm:text-lg hover:no-underline hover:text-[#2d6a4f] py-5 [&>svg]:text-[#2d6a4f] [&>svg]:size-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#2d6a4f] text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help Link */}
        <p className="text-center mt-8 text-[#2d6a4f]">
          Still have questions?{" "}
          <a
            href="#contact"
            className="text-[#1b4332] font-semibold hover:text-[#2d6a4f] underline underline-offset-4 transition-colors"
          >
            Contact our team
          </a>
        </p>
      </div>
    </section>
  );
}
