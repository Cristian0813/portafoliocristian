export type Skill = string;

export type SkillCategory = {
  id: number;
  title: string;
  description: Skill[];
};

export type SkillsArray = SkillCategory[];
