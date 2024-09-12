// Definición del tipo para un usuario del Cajero Automático
export type UserType = {
    name: string;
    password: string;
};

// Definición del tipo para un proyecto genérico
export type ProjectType = {
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  hrefRepo: string;
  hrefDemo: string;
};

// Definición del tipo para el proyecto Cajero Automático
export type CajeroAutomaticoType = ProjectType & {
  users: UserType[];
};

// Tipo unión para abarcar tanto proyectos genéricos como el Cajero Automático
export type Project = ProjectType | CajeroAutomaticoType;

// Tipo para el array de proyectos
export type ProjectArray = Project[];
