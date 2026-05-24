"use client";

import { Zap, Shield, BarChart, Layers, RefreshCw, Globe } from "lucide-react";

const features = [
  {
    icon: BarChart,
    title: "Real-time Analytics",
    description:
      "Track your metrics in real-time with beautiful dashboards and actionable insights.",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and focus on what matters most for your growth.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with SOC2 compliance, keeping your data safe and sound.",
  },
  {
    icon: Layers,
    title: "Seamless Integrations",
    description:
      "Connect with 200+ tools you already use, from CRMs to marketing platforms.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Updates",
    description:
      "Stay ahead with automatic updates and new features released every week.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy worldwide with edge computing for lightning-fast performance everywhere.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white text-sm font-medium text-muted-foreground mb-6">
            Why FlowStack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to{" "}
            <span className="text-accent">thrive</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful features designed to help your team work smarter, not
            harder. Built with sustainability in mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-secondary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
