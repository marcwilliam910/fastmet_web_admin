import {User, Car, ChevronLeft, ChevronRight} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import motor from "../assets/vehicle/motor.png";
import suv from "../assets/vehicle/suv.png";
import sedan from "../assets/vehicle/sedan.png";
import pickup from "../assets/vehicle/pickup.png";

const vehicleTypes = [
  {name: "Motorcycle", image: motor, count: 50},
  {name: "Sedan", image: sedan, count: 50},
  {name: "Small Pickup", image: pickup, count: 50},
  {name: "MPV/SUV", image: suv, count: 50},
];

export const data = Array.from({length: 7}).map((_, i) => ({
  id: i + 1,
  name: "Carlo De Mesa",
  location: "Manila",
  phone: "0915 524 6899",
  email: "carlodemesa@gmail.com",
  birthday: "Sept. 21, 2001",
  gender: "Male",
  date: "October 21, 2025",
  vehicle: motor,
}));

const Dashboard = () => {
  return (
    <div className="space-y-5">
      {/* Top Cards */}
      <div className="flex flex-row gap-4 ">
        <Card className="rounded-2xl flex w-50 h-36 justify-center">
          <CardContent className="px-4 flex flex-col gap-3">
            <p className="font-bold text-sm">Pre-Registered Driver</p>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg border-2 border-primary">
                <User className="size-6 text-primary " />
              </div>
              <p className="text-2xl font-bold">50</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl flex w-50 h-36 justify-center">
          <CardContent className="px-4 flex flex-col gap-3">
            <p className="font-bold text-sm">Total Vehicle</p>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg border-2 border-primary">
                <Car className="size-6 text-primary " />
              </div>
              <p className="text-2xl font-bold">50</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl flex-1 h-36 flex flex-row">
          <CardContent className="flex flex-row w-full ">
            {vehicleTypes.map((v) => (
              <div
                key={v.name}
                className="flex flex-1 items-center gap-5 justify-center"
              >
                <div className="bg-gray-100 p-3 rounded-xl">
                  <img src={v.image} alt={v.name} className="size-7" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold mb-1">
                    {v.name}
                  </p>
                  <h2 className="text-3xl font-bold">{v.count}</h2>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card className="rounded-2xl">
        <CardContent className="space-y-5">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">
              Real Time Registration
            </h3>

            <div className="flex gap-5 justify-center text-gray-500 text-sm">
              <span>October 21, 2025</span>
              <span>08:00 AM</span>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="text-gray-600 uppercase text-xs">
                  #
                </TableHead>
                <TableHead className="text-gray-600 uppercase text-xs">
                  Full Name
                </TableHead>
                <TableHead className="text-gray-600 uppercase text-xs">
                  Location
                </TableHead>
                <TableHead className="text-gray-600 uppercase text-xs">
                  Contact
                </TableHead>
                <TableHead className="text-gray-600 uppercase text-xs">
                  Email
                </TableHead>
                <TableHead className="text-gray-600 uppercase text-xs">
                  Birthdate
                </TableHead>
                <TableHead className="text-gray-600 uppercase text-xs">
                  Gender
                </TableHead>
                <TableHead className="text-gray-600 uppercase text-xs">
                  Date
                </TableHead>
                <TableHead className="text-gray-600 uppercase text-xs text-center">
                  Vehicle
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id} className="hover:bg-gray-50">
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.birthday}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell className="text-center">
                    <img
                      src={item.vehicle}
                      alt="vehicle"
                      className="w-8 h-8 inline-block"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-end items-center gap-4 mt-4">
            <button className="flex items-center gap-1 text-gray-600 px-3 py-1 border rounded-lg hover:bg-gray-100">
              <ChevronLeft size={16} /> Prev
            </button>
            <span className="text-sm text-gray-600">Page 1 of 5</span>
            <button className="flex items-center gap-1 text-gray-600 px-3 py-1 border rounded-lg hover:bg-gray-100">
              Next <ChevronRight size={16} />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
