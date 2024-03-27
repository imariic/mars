export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
}
