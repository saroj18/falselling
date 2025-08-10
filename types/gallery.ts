export interface IGallery {
  id: string;
  description?: string;
  tags?: string[];
  location?: string;
  title?: string;
  //   url: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}
