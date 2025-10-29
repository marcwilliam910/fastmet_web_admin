export interface IDriver {
  _id: string;
  fullName: string;
  address: string;
  contactNumber: string;
  email: string;
  birthDate: string;
  gender: "male" | "female" | "others";
  vehicleType: "motorcycle" | "sedan" | "pickup" | "suv";
  createdAt: string;
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
