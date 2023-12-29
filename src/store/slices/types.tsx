export type LoginInfoParams = {
  user: {
    id: string;
    status?: boolean;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    birthdate: string;
    gender?: number;
  };
};
