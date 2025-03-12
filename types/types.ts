import { JSX } from "react";

export interface LocationType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface WorkType {
  name: string;
  description?: string;
  image: string;
}