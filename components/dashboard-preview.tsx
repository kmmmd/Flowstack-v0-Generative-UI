"use client";

import {
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
} from "lucide-react";

export function DashboardPreview() {
  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

      {/* Main Dashboard Card */}
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-primary/10 border border-border/50 p-6 lg:p-8">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">
              Dashboard Overview
            </h3>
            <p className="text-2xl font-bold text-foreground">
              Welcome back, Sarah
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-accent text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Pro Plan
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <StatCard
            icon={DollarSign}
            label="Revenue"
            value="$48,250"
            change={12.5}
            positive
          />
          <StatCard
            icon={Users}
            label="Active Users"
            value="2,847"
            change={8.2}
            positive
          />
          <StatCard
            icon={TrendingUp}
            label="Growth Rate"
            value="24.6%"
            change={3.1}
            positive
          />
          <StatCard
            icon={BarChart3}
            label="Engagement"
            value="89.2%"
            change={1.8}
            positive={false}
          />
        </div>

        {/* Chart Area */}
        <div className="bg-muted/30 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-foreground">
              Revenue Trend
            </span>
            <span className="text-xs text-muted-foreground">Last 7 days</span>
          </div>
          <div className="h-32 flex items-end justify-between gap-2">
            {[65, 45, 75, 55, 85, 70, 90].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-lg transition-all duration-500"
                  style={{
                    height: `${height}%`,
                    background:
                      i === 6
                        ? "linear-gradient(180deg, #2d6a4f 0%, #40916c 100%)"
                        : "linear-gradient(180deg, #a7c957 0%, #d4e5d0 100%)",
                  }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating notification card */}
      <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-primary/10 border border-border/50 p-4 max-w-[200px] animate-float">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">
              Goal reached!
            </p>
            <p className="text-xs text-muted-foreground">
              Monthly target +15%
            </p>
          </div>
        </div>
      </div>

      {/* Floating users card */}
      <div
        className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-primary/10 border border-border/50 p-4 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white"
                style={{
                  background: `linear-gradient(135deg, hsl(${140 + i * 20}, 45%, 65%), hsl(${150 + i * 20}, 35%, 75%))`,
                }}
              />
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">+24 online</p>
            <p className="text-xs text-muted-foreground">Team members</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  change,
  positive,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  change: number;
  positive: boolean;
}) {
  return (
    <div className="bg-white/60 backdrop-blur rounded-2xl p-4 border border-border/30 hover:border-secondary/50 transition-colors group">
      <div className="flex items-center justify-between mb-3">
        <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
          <Icon className="w-4 h-4 text-accent" />
        </div>
        <div
          className={`flex items-center gap-0.5 text-xs font-medium ${positive ? "text-accent" : "text-orange-500"}`}
        >
          {positive ? (
            <ArrowUpRight className="w-3 h-3" />
          ) : (
            <ArrowDownRight className="w-3 h-3" />
          )}
          {change}%
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-lg font-bold text-foreground">{value}</p>
    </div>
  );
}
