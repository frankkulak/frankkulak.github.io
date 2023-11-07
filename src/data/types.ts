export interface WebsiteContent {
  sections: {
    experience: ExperienceData[];
    skills: SkillsData[];
    projects: ProjectData[];
  };

  archives: {
    projects: ArchivedProjectData[];
  };
}

export interface ExperienceData {
  company: string;
  title: string;
  previousTitles?: string[];
  timespan: string;
  description: string;
  skills?: string[];
  projects?: {
    name: string;
    link?: string;
  }[];
}

export interface SkillsData {
  category: string;
  skills: string[];
}

export interface ProjectData {
  name: string;
  description: string;
  skills?: string[];
  repository?: string;
  webpage?: string;
}

export interface ArchivedProjectData {
  name: string;
  type: string;
  status: "Ongoing" | "Maintaining" | "Complete";
  skills?: string[];
  repository?: string;
  webpage?: string;
}
