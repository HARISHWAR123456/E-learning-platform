export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor';
}