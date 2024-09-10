export type Skill = string;

export type SkillCategory = {
  id: number;
  title: string;
  items: Skill[];
};

export type SkillsArray = SkillCategory[];
