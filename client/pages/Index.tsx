import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Brain,
  Zap,
  Lock,
  Eye,
  Cpu,
  ChevronRight,
  Star,
  Users,
  Activity,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20 relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-1/4 right-20 w-24 h-24 bg-neon-cyan/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-28 h-28 bg-neon-orange/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              CyberGuard AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-foreground/80 hover:text-neon-cyan transition-colors"
            >
              Features
            </a>
            <a
              href="#security"
              className="text-foreground/80 hover:text-neon-cyan transition-colors"
            >
              Security
            </a>
            <a
              href="#pricing"
              className="text-foreground/80 hover:text-neon-cyan transition-colors"
            >
              Pricing
            </a>
            <Button
              variant="outline"
              className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10"
              asChild
            >
              <Link to="/login">Sign In</Link>
            </Button>
            <Button className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-purple/80 hover:to-neon-cyan/80">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-neon-purple/30 p-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-foreground/80 hover:text-neon-cyan transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#security"
                className="text-foreground/80 hover:text-neon-cyan transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </a>
              <a
                href="#pricing"
                className="text-foreground/80 hover:text-neon-cyan transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-neon-purple/30">
                <Button
                  variant="outline"
                  className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10"
                  asChild
                >
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-purple/80 hover:to-neon-cyan/80">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff5d907221eae42f8ad7af5c6352e7073%2Fceba535afa33439aa4f842df1ad83372?format=webp&width=800"
              alt="AI Security Drone Mascot"
              className="w-24 h-24 mr-4 animate-float"
              style={{
                filter:
                  "drop-shadow(0 0 15px rgba(255, 102, 204, 1)) drop-shadow(0 0 30px rgba(255, 102, 204, 0.8)) drop-shadow(0 0 60px rgba(255, 102, 204, 0.6)) drop-shadow(0 0 90px rgba(255, 102, 204, 0.4))",
              }}
            />
            <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/30">
              <Zap className="w-3 h-3 mr-1" />
              Next-Gen AI Security
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Web3 AI Vulnerability
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-orange bg-clip-text text-transparent">
              Assessment Platform
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to identify, analyze,
            and mitigate security vulnerabilities in your Web3 infrastructure
            before they become threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-purple/80 hover:to-neon-cyan/80 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              Start Free Scan
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-neon-cyan mb-2">
                10M+
              </div>
              <div className="text-sm sm:text-base text-foreground/60">
                Vulnerabilities Detected
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-neon-purple mb-2">
                99.9%
              </div>
              <div className="text-sm sm:text-base text-foreground/60">
                Accuracy Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-neon-pink mb-2">
                24/7
              </div>
              <div className="text-sm sm:text-base text-foreground/60">
                Real-time Monitoring
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Visualization */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left AI Agent */}
              <Card className="bg-card/50 backdrop-blur-sm border-neon-purple/30 relative overflow-hidden group hover:border-neon-purple/60 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/10"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl flex items-center justify-center mb-4 mx-auto animate-glow-pulse">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    Smart Detection
                  </h3>
                  <p className="text-foreground/70 text-center text-sm">
                    Advanced AI algorithms continuously scan your Web3
                    applications for emerging threats and vulnerabilities.
                  </p>
                </CardContent>
              </Card>

              {/* Center Processing */}
              <Card className="bg-card/50 backdrop-blur-sm border-neon-cyan/30 relative overflow-hidden group hover:border-neon-cyan/60 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10"></div>
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-cyberscan"></div>
                </div>
                <CardContent className="p-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-yellow rounded-xl flex items-center justify-center mb-4 mx-auto animate-glow-pulse">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    Real-time Analysis
                  </h3>
                  <p className="text-foreground/70 text-center text-sm">
                    Lightning-fast processing with quantum-inspired algorithms
                    that analyze millions of data points instantly.
                  </p>
                </CardContent>
              </Card>

              {/* Right Security */}
              <Card className="bg-card/50 backdrop-blur-sm border-neon-orange/30 relative overflow-hidden group hover:border-neon-orange/60 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/10 via-transparent to-neon-pink/10"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-orange to-neon-pink rounded-xl flex items-center justify-center mb-4 mx-auto animate-glow-pulse">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    Automated Protection
                  </h3>
                  <p className="text-foreground/70 text-center text-sm">
                    Implement AI-driven security measures and automated
                    responses to neutralize threats instantly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Advanced Security Features
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Comprehensive Web3 security solutions powered by cutting-edge AI
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Smart Contract Auditing",
                description:
                  "AI-powered analysis of smart contracts to identify vulnerabilities, gas optimization opportunities, and security flaws.",
                color: "neon-purple",
              },
              {
                icon: Activity,
                title: "Real-time Monitoring",
                description:
                  "Continuous surveillance of your Web3 infrastructure with instant alerts for suspicious activities and threats.",
                color: "neon-cyan",
              },
              {
                icon: Brain,
                title: "Predictive Threat Analysis",
                description:
                  "Machine learning models that predict potential attack vectors before they materialize into actual threats.",
                color: "neon-pink",
              },
              {
                icon: Zap,
                title: "Instant Response",
                description:
                  "Automated incident response protocols that neutralize threats within milliseconds of detection.",
                color: "neon-orange",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Advanced dashboard for security teams to collaborate on threat intelligence and incident management.",
                color: "neon-yellow",
              },
              {
                icon: Star,
                title: "Compliance Reporting",
                description:
                  "Generate comprehensive security reports for regulatory compliance and stakeholder communication.",
                color: "neon-purple",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      feature.color === "neon-purple"
                        ? "bg-gradient-to-r from-neon-purple to-neon-purple/80"
                        : feature.color === "neon-cyan"
                          ? "bg-gradient-to-r from-neon-cyan to-neon-cyan/80"
                          : feature.color === "neon-pink"
                            ? "bg-gradient-to-r from-neon-pink to-neon-pink/80"
                            : feature.color === "neon-orange"
                              ? "bg-gradient-to-r from-neon-orange to-neon-orange/80"
                              : "bg-gradient-to-r from-neon-yellow to-neon-yellow/80"
                    }`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-neon-pink/20 rounded-3xl blur-3xl"></div>
            <Card className="relative bg-card/30 backdrop-blur-sm border-neon-purple/30">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-neon-cyan bg-clip-text text-transparent">
                    Ready to Secure Your Web3 Future?
                  </span>
                </h2>
                <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Join thousands of developers and organizations already
                  protected by our AI-powered security platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-purple/80 hover:to-neon-cyan/80 text-lg px-8 py-6"
                  >
                    Start Your Free Trial
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 text-lg px-8 py-6"
                  >
                    Talk to Security Expert
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
