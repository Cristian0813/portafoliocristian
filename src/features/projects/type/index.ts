export type UserType = {
  name: string;
  password: string;
};

export type ProjectType = {
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  hrefRepo: string;
  hrefDemo: string;
  users?: UserType[]; 
};

export type ProjectArray = ProjectType[];
