export type User = {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

export type UserLogin = {
  Id: number;
  userName: string;
  token: string;
}

export type RegisterDto = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export type LoginDto = {
  username: string;
  password: string;
}
