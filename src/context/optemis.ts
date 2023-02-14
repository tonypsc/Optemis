export interface Resource {
  id: string;
}

export interface Country extends Resource {
  id: string;
  name: string;
  allowDuplicates: boolean;
}

export interface Lab extends Resource {
  id: string;
  name: string;
  countryId: string;
}

export interface Stain extends Resource {
  stainId: string;
  labId: string;
  description: string;
}

export interface StainGroup extends Resource {
  id: string;
  labId: string;
  description: string;
  stains: Stain[];
  inactive: boolean;
}
