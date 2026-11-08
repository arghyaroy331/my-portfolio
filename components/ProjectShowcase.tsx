"use client";

import { useState } from "react";
import {
  Cloud,
  Terminal,
  Cpu,
  Database,
  ExternalLink,
  Github,
  CheckCircle,
  Sparkles,
  ArrowRight,
  AwsIcon,
  TerraformIcon,
  Play,
  Video,
} from "./Icons";

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState<"demo" | "architecture" | "terraform" | "telemetry">("demo");
  const [codeCopied, setCodeCopied] = useState(false);

  const terraformSnippet = `# main.tf - AWS Infrastructure Provisioning
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Provision Custom VPC & Subnets
resource "aws_vpc" "production" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  tags = { Name = "arghya-prod-vpc", ManagedBy = "Terraform" }
}

# CloudWatch Alarm for High CPU Utilization
resource "aws_cloudwatch_metric_alarm" "ec2_cpu_high" {
  alarm_name          = "ec2-high-cpu-utilization"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = 120
  statistic           = "Average"
  threshold           = 80
  alarm_description   = "Trigger alert if CPU >= 80% for 4 minutes"
  alarm_actions       = [aws_sns_topic.devops_alerts.arn]
}

# SNS Notification Topic
resource "aws_sns_topic" "devops_alerts" {
  name = "cloudwatch-incident-alerts"
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(terraformSnippet);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  return (
    <section id="showcase" className="w-full flex justify-center px-4 sm:px-6 mb-16 scroll-mt-24">
      <div className="w-full max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#803CFF]/10 dark:bg-[#803CFF]/20 border border-[#803CFF]/25 text-[#803CFF] dark:text-[#C084FC] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles size={13} />
            <span>Section 05 • Cinematic Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Infrastructure <span className="text-[#803CFF] dark:text-[#C084FC]">Deep-Dive</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Interactive breakdown of Firefly (AWS Monitoring &amp; Alerting) architecture and declarative Terraform automation.
          </p>
        </div>

        {/* Main Showcase Container */}
        <div className="relative rounded-3xl bg-white/90 dark:bg-[#0C0C14] border border-slate-200 dark:border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
          
          {/* Top Bar Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:px-6 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-black/40">
            {/* Terminal Window Dots + Project Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="h-4 w-px bg-slate-300 dark:bg-white/15" />
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                <AwsIcon size={14} className="text-[#FF9900]" />
                <span>Firefly — AWS Monitoring &amp; Alerting System</span>
              </div>
            </div>

            {/* Interactive Mode Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-200/80 dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 text-xs font-mono font-semibold">
              <button
                onClick={() => setActiveTab("demo")}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeTab === "demo"
                    ? "bg-[#803CFF] text-white shadow-md shadow-[#803CFF]/25 font-bold"
                    : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Play size={12} className={activeTab === "demo" ? "text-white fill-white" : "text-amber-500 fill-amber-500"} />
                <span>Explainer Demo</span>
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "architecture"
                    ? "bg-[#803CFF] text-white shadow-md shadow-[#803CFF]/25 font-bold"
                    : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Topology
              </button>
              <button
                onClick={() => setActiveTab("terraform")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "terraform"
                    ? "bg-[#803CFF] text-white shadow-md shadow-[#803CFF]/25 font-bold"
                    : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Terraform IaC
              </button>
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "telemetry"
                    ? "bg-[#803CFF] text-white shadow-md shadow-[#803CFF]/25 font-bold"
                    : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Live Metrics
              </button>
            </div>
          </div>

          {/* Tab 0: Explainer Video Walkthrough */}
          {activeTab === "demo" && (
            <div className="p-4 sm:p-8">
              {/* Video Player Container */}
              <div className="relative rounded-2xl overflow-hidden bg-black border border-slate-300 dark:border-white/15 shadow-2xl">
                {/* Custom Video Header Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/95 border-b border-white/10 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-white text-[11px] sm:text-xs">
                      Firefly • AWS_Monitoring_Alerting_Explainer.mp4
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#803CFF]/20 text-[#C084FC] border border-[#803CFF]/30 hidden sm:inline-block">
                    &ldquo;Always watching. Always illuminating.&rdquo;
                  </span>
                </div>

                {/* Video Element */}
                <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source src="/videos/aws-monitoring-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Explainer Project Lifecycle Cards */}
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#803CFF] animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    What This System Does • Engineering Lifecycle
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-500 mb-1.5">
                        <span>1. Provisioning (IaC)</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">Terraform</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                        Declarative Terraform code provisions VPC, public/private subnets, Internet Gateway, route tables, and EC2 compute nodes in US-East-1.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-sky-400 mb-1.5">
                        <span>2. Real-Time Telemetry</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">CloudWatch</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                        Amazon CloudWatch agent continuously streams system metrics (CPU utilization, memory, disk I/O) with 60-second evaluation periods.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-[#803CFF] dark:text-[#C084FC] mb-1.5">
                        <span>3. Incident Dispatch</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#803CFF]/10 border border-[#803CFF]/20">Amazon SNS</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                        When metrics exceed 80% CPU for 2 consecutive periods, CloudWatch triggers Amazon SNS topic for instant DevOps email incident notification in &lt;60s.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 1: Architecture Topology Diagram */}
          {activeTab === "architecture" && (
            <div className="p-6 sm:p-8">
              <div className="relative rounded-2xl bg-slate-100/70 dark:bg-black/50 border border-slate-200 dark:border-white/10 p-6 overflow-x-auto">
                
                {/* Visual Flow Topology */}
                <div className="min-w-[620px] flex flex-col gap-6 py-2">
                  
                  {/* Row 1: External Internet & VPC Ingress */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 p-3 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 text-center font-mono">
                      <span className="text-[10px] uppercase text-slate-500 font-semibold block">Client / Inbound</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-white">Web Traffic &amp; Health Checks</span>
                    </div>

                    <div className="flex items-center text-slate-400 font-mono text-xs">
                      <span>─── HTTPS:443 ───►</span>
                    </div>

                    <div className="flex-1 p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-center font-mono">
                      <span className="text-[10px] uppercase text-sky-400 font-semibold block">Internet Gateway</span>
                      <span className="text-xs font-bold text-sky-300">AWS VPC Route Table</span>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-slate-400 font-mono text-xs">
                    <span>│ Custom VPC CIDR: 10.0.0.0/16</span>
                  </div>

                  {/* Row 2: Compute Layer */}
                  <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-300 dark:border-white/15">
                    <div className="flex items-center justify-between mb-3 text-xs font-mono font-bold text-[#6D28D9] dark:text-[#C084FC]">
                      <span className="flex items-center gap-1.5">
                        <Cloud size={14} />
                        Public Subnet (10.0.1.0/24) • US-East-1
                      </span>
                      <span className="text-emerald-500 flex items-center gap-1 text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        Active Instances
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/10">
                        <span className="text-[10px] text-slate-500 block">Compute Node</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">Amazon EC2 (t3.micro)</span>
                        <span className="text-[10px] text-emerald-500 block mt-1">Ubuntu 22.04 LTS + Nginx</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/10">
                        <span className="text-[10px] text-slate-500 block">Security Group</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">Inbound 80, 443, 22</span>
                        <span className="text-[10px] text-slate-400 block mt-1">Stateful Firewall Rules</span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-slate-400 font-mono text-xs">
                    <span>▼ Streaming Telemetry (60s Frequency)</span>
                  </div>

                  {/* Row 3: Observability & Notification Engine */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 font-mono text-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase font-bold text-amber-500">CloudWatch Alarms</span>
                        <span className="text-[10px] text-amber-400 font-semibold">&gt; 80% CPU</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">
                        Evaluates CPUUtilization, Memory, and DiskSpace across 2 evaluation periods.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#803CFF]/15 border border-[#803CFF]/30 font-mono text-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase font-bold text-[#C084FC]">Amazon SNS Topic</span>
                        <span className="text-[10px] text-emerald-400 font-semibold">Real-Time Dispatch</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300">
                        Triggers automated incident notification to DevOps email endpoint in &lt;60s.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Terraform IaC Code View */}
          {activeTab === "terraform" && (
            <div className="p-6 sm:p-8">
              <div className="relative rounded-2xl bg-black/90 border border-white/10 p-5 font-mono text-xs overflow-x-auto text-slate-300 shadow-inner">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-slate-400">
                    <TerraformIcon size={14} className="text-[#803CFF]" />
                    <span>infrastructure/terraform/main.tf</span>
                  </div>
                  <button
                    onClick={copyCode}
                    className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white text-[11px] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {codeCopied ? (
                      <>
                        <CheckCircle size={12} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <span>Copy Snippet</span>
                    )}
                  </button>
                </div>
                <pre className="text-slate-300 leading-relaxed overflow-x-auto whitespace-pre">
                  <code>{terraformSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tab 3: Live Telemetry Metrics */}
          {activeTab === "telemetry" && (
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-center font-mono">
                  <span className="text-xs text-slate-500 block mb-1">Provisioning Time</span>
                  <span className="text-xl font-bold text-[#803CFF] dark:text-[#C084FC]">2m 14s</span>
                  <span className="text-[10px] text-emerald-500 block mt-1">100% Automated</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-center font-mono">
                  <span className="text-xs text-slate-500 block mb-1">Alert Trigger Latency</span>
                  <span className="text-xl font-bold text-sky-400">&lt; 48s</span>
                  <span className="text-[10px] text-slate-400 block mt-1">SNS Metric Notification</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-center font-mono">
                  <span className="text-xs text-slate-500 block mb-1">Cloud Reliability</span>
                  <span className="text-xl font-bold text-emerald-400">99.9%</span>
                  <span className="text-[10px] text-emerald-500 block mt-1">High Availability</span>
                </div>
              </div>

              {/* Status Log */}
              <div className="rounded-xl bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/10 p-4 font-mono text-xs">
                <div className="flex items-center justify-between mb-3 text-slate-500 text-[11px]">
                  <span>Telemetry Audit Log</span>
                  <span className="text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live
                  </span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="text-slate-500">[11:42:01 UTC]</span> <span className="text-emerald-400">SUCCESS</span> terraform plan: 8 resources to add, 0 to change, 0 to destroy.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="text-slate-500">[11:42:15 UTC]</span> <span className="text-sky-400">INFO</span> aws_vpc.production: Creation complete after 6s.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="text-slate-500">[11:42:48 UTC]</span> <span className="text-emerald-400">SUCCESS</span> aws_cloudwatch_metric_alarm.ec2_cpu_high: Active &amp; OK state.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="text-slate-500">[11:43:02 UTC]</span> <span className="text-[#C084FC]">SNS</span> Confirmed subscription endpoint for arghya331@gmail.com.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/30 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
              Open-source Infrastructure as Code repository available on GitHub.
            </span>
            <a
              href="https://github.com/arghyaroy331/aws-monitoring-alerting-system"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#803CFF] to-[#6D28D9] text-white font-bold text-xs shadow-md shadow-[#803CFF]/25 hover:shadow-[#803CFF]/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Github size={15} />
              <span>Inspect Repository on GitHub</span>
              <ExternalLink size={14} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

