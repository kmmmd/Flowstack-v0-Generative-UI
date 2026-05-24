"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for individuals and small projects.",
    features: [
      "Up to 3 team members",
      "5GB storage",
      "Basic analytics",
      "Email support",
      "7-day data retention",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams who need more power.",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Unlimited data retention",
      "Custom integrations",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs.",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "White-label options",
      "Dedicated support",
      "Custom SLA",
      "Advanced security",
      "Onboarding assistance",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted text-sm font-medium text-muted-foreground mb-6">
            Simple Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Plans that <span className="text-accent">scale</span> with you
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Start free and upgrade as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                tier.popular
                  ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20 scale-105 z-10"
                  : "bg-white border border-border hover:border-secondary/50 hover:shadow-xl"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    tier.popular ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`text-4xl font-bold ${
                      tier.popular
                        ? "text-primary-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className={
                        tier.popular
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <p
                  className={
                    tier.popular
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }
                >
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        tier.popular
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-accent"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span
                      className={
                        tier.popular
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full py-6 font-semibold transition-all ${
                  tier.popular
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
