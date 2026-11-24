import { WorkExperience, SkillCategory, MetricItem, EducationItem, SoftSkillItem, LanguageItem } from '../types';

export const PERSONAL_INFO = {
  name: "Shaikh Saarim Rizwan",
  title: "Big Data Platform & DataOps Engineer",
  subtitle: "Big Data Platform & DataOps Engineer | Big Data Engineer | Hadoop Admin",
  experienceYears: "4+",
  availabilityStatus: "99.9%+ API Availability | 40+ EKS Clusters",
  summary: "Big Data Platform & DataOps Engineer with 4+ years of professional experience specializing in Kubernetes-native data platforms (EKS, Spark, Airflow), Hadoop/Cloudera administration, Kafka streaming, and GitOps automation. Skilled in building robust data pipelines, optimizing ETL processes, and managing cloud-based infrastructure to support scalable and efficient systems.",
  contact: {
    email: "saarimshaikh1234@gmail.com",
    phone: "+918689899725",
    location: "India",
    linkedin: "https://www.linkedin.com/in/saarim-rizwan",
    github: "https://github.com/saarim-rizwan",
  }
};

export const IMPACT_METRICS: MetricItem[] = [
  {
    id: "clusters",
    value: "40+",
    numValue: 40,
    suffix: "+",
    label: "EKS & Airflow Clusters",
    sublabel: "Multi-region distributed orchestration",
    iconName: "Server",
    badge: "High Scale Topology"
  },
  {
    id: "workloads",
    value: "~7,900",
    numValue: 7900,
    prefix: "~",
    label: "Daily Workloads",
    sublabel: "~51k Events/Day with <5s p95 latency",
    iconName: "Activity",
    badge: "99.9%+ SLA"
  },
  {
    id: "memory",
    value: "~275 TB",
    numValue: 275,
    prefix: "~",
    suffix: " TB",
    label: "Phantom Driver Memory Reclaimed",
    sublabel: "Via Kueue gang scheduling & guardrails",
    iconName: "Cpu",
    badge: "Resource Optimization"
  },
  {
    id: "cost",
    value: "25%",
    numValue: 25,
    suffix: "%",
    label: "Cluster Operational Cost Reduction",
    sublabel: "Through PySpark tuning & shuffle optimization",
    iconName: "TrendingDown",
    badge: "FinOps Impact"
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "apple-artech",
    role: "BigData Platform Engineer",
    company: "Apple",
    client: "Via Artech",
    period: "01/2026 - Present",
    location: "India",
    isCurrent: true,
    tags: [
      "Kubernetes (EKS)",
      "Apache Spark",
      "Apache Airflow",
      "Kueue",
      "ARM64 Architecture",
      "FinOps",
      "Sidecar Telemetry",
      "GitOps"
    ],
    metrics: [
      { label: "Clusters Managed", value: "40+ EKS" },
      { label: "Daily Workloads", value: "~7,900" },
      { label: "Availability SLA", value: "99.9%+" },
      { label: "Memory Reclaimed", value: "~275 TB" }
    ],
    highlights: [
      "Operated and supported a multi-region, Kubernetes-native data platform control plane orchestrating Spark, Airflow, and Batch compute across 40+ EKS clusters, processing ~7,900 daily workloads and ~51,000 events/day with 99.9%+ API availability and <5s p95 latency.",
      "Configured and managed multi-tenant Converged Spark environments on ARM64 EKS clusters (scaling up to 450 nodes / 64 vCPU & 512 GiB per node), executing queue migrations from Apache YuniKorn to Kueue with gang scheduling and <=80% capacity guardrails to reclaim ~275 TB of phantom driver resource reservations.",
      "Executed the migration of distributed Apache Airflow compute across 40+ clusters (supporting 3 concurrent versions and 100+ custom operators) from static Celery/Redis worker pools to ephemeral Kubernetes Executor pods with sidecar telemetry and dynamic secret injection, eliminating noisy-neighbor contention.",
      "Implemented and maintained pluggable DAG adapters and control-plane configurations enforcing 3-tier approval workflows, RBAC, and decoupled version → plan → deployment → run lifecycles to isolate platform governance from user pipeline execution.",
      "Automated platform observability (23 auto-provisioned P0/P1 alerts per cluster), synthetic canary health checks every 30 minutes, and queue-level FinOps chargeback configurations across heterogeneous workloads handling 9x memory-to-vCPU variance without rigid t-shirt sizing.",
      "Maintained active/standby multi-region Spark control planes and performed root-cause analysis (RCA) to resolve critical reliability bottlenecks, including runaway job restart loops, stuck \"Suspended\" job state transitions, and control-plane token-cache memory leaks."
    ]
  },
  {
    id: "richclouding",
    role: "Software Engineer",
    company: "Richclouding Software Solutions",
    period: "03/2022 - 01/2026",
    location: "India",
    isCurrent: false,
    tags: [
      "AWS (EMR, S3, EC2)",
      "Cloudera Hadoop (CDP/CDH)",
      "Apache Kafka",
      "PySpark",
      "Apache Airflow",
      "Medallion Architecture",
      "CI/CD (GitHub Actions)",
      "Disaster Recovery"
    ],
    metrics: [
      { label: "Cost Reduction", value: "25%" },
      { label: "Architecture", value: "Medallion Lake" },
      { label: "Platform", value: "CDH / AWS EMR" },
      { label: "Pipelines", value: "Kafka + PySpark" }
    ],
    highlights: [
      "Managed and scaled cloud-based data infrastructure on AWS (EC2, S3, EMR) and Cloudera Hadoop clusters, ensuring high availability, optimal resource utilization, and cost efficiency.",
      "Implemented and scheduled complex, dependency-driven ETL workflows using Apache Airflow to orchestrate Spark jobs, SQL transformations, and automated data validation checks.",
      "Implemented real-time and incremental data processing systems using Apache Kafka, Spark Streaming, and PySpark (leveraging watermarking and stateful operations) to drive real-time analytics.",
      "Executed PySpark performance tuning by analyzing Spark UI, optimizing shuffle partitions, and adjusting executor memory/cores, reducing cluster operational costs by 25%.",
      "Implemented a modern Data Lake foundation on AWS S3 using medallion architecture (Bronze, Silver, Gold layers), enforcing automated schema evolution and data quality standards.",
      "Implemented end-to-end automated deployment pipelines utilizing GitHub Actions and Jenkins, streamlining integration, testing, and delivery across distributed data platform infrastructure.",
      "Streamlined enterprise data ingestion using Kafka topic management policies, ensuring secure, accurate, and consistent multi-source data collection.",
      "Monitored system performance and conducted rigorous root cause analysis (RCA) for production incidents using Cloudera Manager and AWS CloudWatch to maximize system reliability.",
      "Implemented enterprise disaster recovery, backup strategies, and node lifecycle management (commissioning/decommissioning) to ensure uninterrupted business continuity during maintenance."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "big-data-tools",
    name: "Big Data Tools",
    group: "Big Data & Hadoop",
    items: [
      { name: "HDFS", level: "Expert", description: "Distributed storage architecture & block replication" },
      { name: "YARN", level: "Expert", description: "Resource negotiation & capacity scheduler queues" },
      { name: "Hive", level: "Advanced", description: "Metastore, partitioning, and external table queries" },
      { name: "Sqoop", level: "Advanced", description: "RDBMS batch imports and data ingestion" },
      { name: "MapReduce", level: "Advanced", description: "Distributed compute execution paradigm" },
      { name: "Spark", level: "Expert", description: "Spark Core, SQL, Catalyst optimizer, ARM64 tuning" },
      { name: "Zookeeper", level: "Expert", description: "Quorum coordination, leader election, HA state" },
      { name: "Impala", level: "Advanced", description: "High-performance MPP SQL engine on Hadoop" },
      { name: "Data Warehouse", level: "Advanced", description: "Enterprise schemas, dimensional data modeling" },
      { name: "Data Lake", level: "Expert", description: "Medallion Bronze/Silver/Gold Lakehouse design" },
      { name: "Apache Airflow", level: "Expert", description: "K8s Executor, DAG adapters, custom operators" }
    ]
  },
  {
    id: "hadoop-distributions",
    name: "Hadoop Distributions",
    group: "Big Data & Hadoop",
    items: [
      { name: "CDH", level: "Expert", description: "Cloudera Distribution including Apache Hadoop" },
      { name: "CDP", level: "Expert", description: "Cloudera Data Platform Private & Public Cloud" },
      { name: "HDP", level: "Advanced", description: "Hortonworks Data Platform administration" },
      { name: "Cloudera Data Platform", level: "Expert", description: "Cluster deployment, upgrades & workload mgmt" }
    ]
  },
  {
    id: "data-streaming",
    name: "Data Streaming & Processing",
    group: "Streaming & Cloud",
    items: [
      { name: "Apache Kafka", level: "Expert", description: "Topic partitions, consumer lag, broker scaling" },
      { name: "Confluent Kafka", level: "Advanced", description: "Enterprise ecosystem, schema registry, connect" },
      { name: "Kafka Connect", level: "Advanced", description: "Source & sink connectors for high-throughput streaming" },
      { name: "Kafka Streams", level: "Advanced", description: "Stateful streaming transformations and topologies" },
      { name: "Apache NiFi", level: "Intermediate", description: "Automated data flow routing and provenance" },
      { name: "SQL", level: "Expert", description: "Complex analytics queries, window functions, tuning" },
      { name: "PySpark", level: "Expert", description: "DataFrame APIs, streaming watermarks, stateful ops" }
    ]
  },
  {
    id: "cloud-services",
    name: "Cloud Services (AWS)",
    group: "Streaming & Cloud",
    items: [
      { name: "AWS S3", level: "Expert", description: "Lake storage, lifecycle policies, encryption" },
      { name: "EC2", level: "Expert", description: "Instance sizing, ARM64 Graviton, compute fleet" },
      { name: "VPC", level: "Advanced", description: "Subnets, peering, security groups, private link" },
      { name: "EBS", level: "Advanced", description: "High IOPS volumes for worker storage" },
      { name: "IAM", level: "Expert", description: "IRSA, least-privilege roles, trust policies" },
      { name: "EMR", level: "Expert", description: "Elastic MapReduce Spark/Hadoop clusters" },
      { name: "Redshift", level: "Advanced", description: "Cloud data warehousing & distribution keys" },
      { name: "Glue", level: "Advanced", description: "Data catalog, crawler schemas, ETL jobs" },
      { name: "Athena", level: "Advanced", description: "Serverless interactive query engine on S3" },
      { name: "Lambda", level: "Advanced", description: "Serverless data triggers & automation hooks" },
      { name: "SNS", level: "Advanced", description: "Pub/sub platform notifications and alerting" },
      { name: "SQS", level: "Advanced", description: "Decoupled async queue processing" },
      { name: "Stepfunctions", level: "Advanced", description: "State machine orchestration workflows" },
      { name: "Kinesis", level: "Advanced", description: "Real-time streaming data ingestion" },
      { name: "MWAA", level: "Advanced", description: "Managed Workflows for Apache Airflow" }
    ]
  },
  {
    id: "security",
    name: "Security & Governance",
    group: "Security, Monitoring & DevOps",
    items: [
      { name: "Kerberos", level: "Expert", description: "KDC authentication, keytabs, ticket renewal" },
      { name: "Extended ACLs", level: "Expert", description: "POSIX & HDFS directory-level permission policies" },
      { name: "Encryption Zone", level: "Advanced", description: "KMS-backed HDFS transparent data encryption (TDE)" },
      { name: "Apache Ranger", level: "Expert", description: "Centralized policy management & column-level mask" }
    ]
  },
  {
    id: "monitoring",
    name: "Monitoring & Observability",
    group: "Security, Monitoring & DevOps",
    items: [
      { name: "Cloudera Manager", level: "Expert", description: "Health monitoring, service config, rolling restarts" },
      { name: "AWS CloudWatch", level: "Expert", description: "Cluster metrics, composite alarms, logs" },
      { name: "Grafana", level: "Expert", description: "Custom dashboards for EKS, Kueue, and Spark latency" }
    ]
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
    group: "Security, Monitoring & DevOps",
    items: [
      { name: "Kubernetes", level: "Expert", description: "Kueue, gang scheduling, operators, CRDs" },
      { name: "AWS EKS", level: "Expert", description: "Multi-tenant 40+ cluster control planes, ARM64 nodes" },
      { name: "Docker", level: "Expert", description: "Multi-stage builds, slim images, sidecar patterns" },
      { name: "Terraform", level: "Advanced", description: "Infrastructure as Code, multi-region state management" },
      { name: "Jenkins", level: "Advanced", description: "Automated pipelines, declarative CI/CD" },
      { name: "Git", level: "Expert", description: "Trunk-based development, branch protection" },
      { name: "GitHub", level: "Expert", description: "Actions workflows, release tags, repository mgmt" },
      { name: "AWS EBS", level: "Advanced", description: "Dynamic PV provisioning via CSI driver" },
      { name: "CI/CD", level: "Expert", description: "End-to-end automated deployment & testing pipelines" },
      { name: "Infrastructure Management", level: "Expert", description: "Capacity planning, FinOps, node commissioning" }
    ]
  },
  {
    id: "programming-core",
    name: "Programming & Operating Systems",
    group: "Programming & Core",
    items: [
      { name: "Python (Scripting)", level: "Expert", description: "Data automation, PySpark APIs, CLI utilities" },
      { name: "Shell Scripting", level: "Expert", description: "Bash/Zsh cluster provisioning & maintenance scripts" },
      { name: "Linux", level: "Expert", description: "Kernel tuning, memory cgroups, systemd services" },
      { name: "Ubuntu", level: "Expert", description: "Production server administration and hardening" },
      { name: "Microservices", level: "Advanced", description: "Decoupled data APIs, REST interfaces, RPC" }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "MBA (Data Science and Operations)",
    field: "Data Science and Operations",
    institution: "Narsee Monjee Institute of Management Studies",
    location: "Navi Mumbai, India",
    period: "08/2025 - 05/2027",
    status: "In Progress",
    note: "Currently pursuing executive MBA in Data Science and Operation to understand better use of data in the business world."
  },
  {
    degree: "B.Tech Computer Science and Engineering",
    field: "Computer Science Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "08/2019 - 06/2023",
    status: "Completed",
    details: "Major in Computer Science Engineering, Minor in Machine Learning"
  }
];

export const SOFT_SKILLS: SoftSkillItem[] = [
  {
    name: "Problem-Solving",
    description: "Expertise in deep root-cause analysis (RCA) for complex distributed systems, resolving race conditions, runaway job restart loops, and token-cache memory leaks.",
    icon: "Target"
  },
  {
    name: "Team Collaboration",
    description: "Strong cross-functional partnership across distributed global teams, aligning data engineers, platform architects, and DevOps stakeholders.",
    icon: "Users"
  },
  {
    name: "Time Management",
    description: "Balancing high-priority P0/P1 incident mitigation with long-term infrastructure roadmap execution and zero-downtime cluster migrations.",
    icon: "Clock"
  },
  {
    name: "Critical Thinking",
    description: "Architecting resilient multi-region failover protocols, decoupled version lifecycles, and adaptive capacity allocation models.",
    icon: "Brain"
  },
  {
    name: "Conflict Resolution",
    description: "Aligning multi-tenant engineering teams on shared cluster capacity guardrails, gang scheduling priority queues, and chargeback transparency.",
    icon: "ShieldAlert"
  },
  {
    name: "Agile Mindset",
    description: "Iterative rollouts with synthetic canary testing, automated health validations, and continuous feedback loops.",
    icon: "Zap"
  }
];

export const LANGUAGES: LanguageItem[] = [
  {
    name: "English",
    proficiency: "Professional Level",
    percentage: 95
  },
  {
    name: "Hindi",
    proficiency: "Native",
    percentage: 100
  }
];
