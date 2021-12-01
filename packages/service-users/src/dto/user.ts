export interface User {
  id: number;
  firstname: string;
  lastname: string;
  description: string;
  email: string;
  rol: string;
  image: string;
  is_active: boolean;
  reason: string;
}

export interface userModel {
  getAll(changes: listUserDTO): Promise<User>;
}

export interface listUserDTO
  extends Omit<
    User,
    "id" | "description" | "rol" | "image" | "is_active" | "reason"
  > {}
