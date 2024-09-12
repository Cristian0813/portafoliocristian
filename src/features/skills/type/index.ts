export type Skill = string;

export type SkillType = {
  id: number;
  title: string;
  items: Skill[];
};

export type SkillsArray = SkillType[];
