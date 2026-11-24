export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  client?: string;
  employmentType?: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  highlights: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  group: 'Big Data & Hadoop' | 'Streaming & Cloud' | 'Security, Monitoring & DevOps' | 'Programming & Core';
  items: {
    name: string;
    level?: string;
    description?: string;
  }[];
}

export interface MetricItem {
  id: string;
  value: string;
  numValue?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  iconName: string;
  badge: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  note?: string;
  details?: string;
  status: 'In Progress' | 'Completed';
}

export interface SoftSkillItem {
  name: string;
  description: string;
  icon: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  percentage: number;
}
