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
  username: string;
  token: string;
}

export type RegisterDto = {
  username: string;
  password: string;
}

export type LoginDto = {
  username: string;
  password: string;
}
