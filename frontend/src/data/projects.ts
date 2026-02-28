export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  tags: string[];
  shortDescription: string;
  metrics: ProjectMetric[];
  overview: string;
  challenge: string;
  solution: string;
  architecture: string[];
  results: ProjectMetric[];
  techStack: string[];
}

export const PROJECTS: Project[] = [
{
  slug: 'wealth-platform',
  title: 'Private Wealth Management Platform',
  tags: ['FinTech', 'Security', 'Scale'],
  shortDescription:
  'End-to-end wealth management platform with real-time portfolio analytics, encrypted client communications, and institutional-grade security.',
  metrics: [
  { value: '10,000+', label: 'Active Users' },
  { value: '99.99%', label: 'Uptime' },
  { value: '$500M+', label: 'AUM Managed' }],

  overview:
  'A comprehensive private wealth management platform engineered for a family office managing assets across multiple jurisdictions. The system required absolute data sovereignty, real-time analytics, and a client-facing interface that communicated trust and precision.',
  challenge:
  'The client operated across 6 jurisdictions with conflicting regulatory requirements, legacy data in 4 different formats, and a security posture that demanded zero-trust architecture from day one. Existing solutions were either too rigid for their bespoke needs or insufficiently secure for the sensitivity of the data involved.',
  solution:
  'Designed a modular, event-driven architecture with jurisdiction-aware data routing, end-to-end encryption at rest and in transit, and a real-time analytics engine built on a CQRS pattern. The client portal was engineered for sub-200ms response times even under peak load.',
  architecture: [
  'Zero-trust network architecture with mTLS between all services',
  'Event-sourced data model with immutable audit trail',
  'Real-time portfolio valuation engine with WebSocket streaming',
  'Jurisdiction-aware data residency routing',
  'Encrypted client communication layer with key rotation',
  'Multi-region active-active deployment for 99.99% uptime SLA'],

  results: [
  { value: '99.99%', label: 'Uptime SLA Achieved' },
  { value: '<180ms', label: 'Avg Response Time' },
  { value: '0', label: 'Security Incidents' },
  { value: '6', label: 'Jurisdictions Supported' }],

  techStack: [
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Redis',
  'Kubernetes',
  'AWS',
  'WebSockets',
  'Stripe']

},
{
  slug: 'payment-infrastructure',
  title: 'Global Payment Infrastructure',
  tags: ['Payments', 'Architecture', 'Compliance'],
  shortDescription:
  'Multi-currency payment orchestration layer handling complex routing, fraud detection, and regulatory compliance across jurisdictions.',
  metrics: [
  { value: '150+', label: 'Countries' },
  { value: '$2B+', label: 'Processed' },
  { value: 'PCI DSS', label: 'Level 1' }],

  overview:
  'A payment orchestration layer built for a fintech operating at global scale. The system routes transactions across 12 payment processors, handles 23 currencies, and maintains PCI DSS Level 1 compliance — all while delivering sub-second authorization times.',
  challenge:
  'Processing payments across 150+ countries requires navigating a labyrinth of local regulations, currency conversion risks, processor reliability variances, and fraud patterns that differ dramatically by region. The previous system had a single point of failure that caused a 4-hour outage costing $2.3M.',
  solution:
  'Engineered a multi-processor orchestration layer with intelligent routing based on real-time processor health, transaction cost optimization, and regional fraud pattern recognition. Implemented a circuit breaker pattern that automatically reroutes traffic within 50ms of processor degradation.',
  architecture: [
  'Multi-processor routing with real-time health scoring',
  'ML-based fraud detection with <50ms inference time',
  'Circuit breaker pattern with automatic failover',
  'PCI DSS Level 1 compliant data vault',
  'Idempotent transaction processing with exactly-once semantics',
  'Real-time FX rate engine with hedging support'],

  results: [
  { value: '$2B+', label: 'Total Processed' },
  { value: '99.97%', label: 'Authorization Rate' },
  { value: '<800ms', label: 'Global P99 Latency' },
  { value: '0', label: 'Compliance Violations' }],

  techStack: [
  'Go',
  'PostgreSQL',
  'Kafka',
  'Redis',
  'Kubernetes',
  'GCP',
  'Stripe',
  'Adyen',
  'Braintree']

},
{
  slug: 'automation-suite',
  title: 'Enterprise Automation Suite',
  tags: ['AI', 'Automation', 'Efficiency'],
  shortDescription:
  'AI-powered workflow automation connecting disparate enterprise systems, eliminating operational bottlenecks and compounding efficiency gains.',
  metrics: [
  { value: '80%', label: 'Manual Work Eliminated' },
  { value: '12', label: 'Integrated Systems' },
  { value: '6-Figure', label: 'Annual Savings' }],

  overview:
  'A bespoke automation platform built for a private equity-backed holding company managing 8 portfolio companies. The system unified data from 12 disparate enterprise systems, automated 47 manual workflows, and delivered a single operational intelligence dashboard to the executive team.',
  challenge:
  'The holding company was operating with a 14-person operations team manually reconciling data across Salesforce, SAP, 3 custom ERPs, and 7 other systems. Monthly reporting took 3 weeks. Critical decisions were being made on data that was 30 days stale.',
  solution:
  'Designed an event-driven integration layer using a hub-and-spoke architecture, with AI-powered data normalization to handle schema inconsistencies across legacy systems. Built a natural language reporting interface that allows executives to query operational data in plain English.',
  architecture: [
  'Event-driven integration hub with 12 system connectors',
  'AI-powered schema normalization and data reconciliation',
  'Natural language query interface over operational data',
  'Automated anomaly detection with executive alerting',
  'Real-time operational dashboard with drill-down capability',
  'Audit trail and change management for all automated actions'],

  results: [
  { value: '80%', label: 'Reduction in Manual Work' },
  { value: '3 weeks → 4hrs', label: 'Reporting Cycle' },
  { value: '$840K', label: 'Annual Cost Savings' },
  { value: '12', label: 'Systems Integrated' }],

  techStack: [
  'Python',
  'TypeScript',
  'PostgreSQL',
  'Apache Kafka',
  'OpenAI',
  'Kubernetes',
  'AWS',
  'React']

}];