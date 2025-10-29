import { User, Car, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { VEHICLE_DISPLAY, VEHICLES_MAP } from "@/constants";
import { useDrivers } from "@/hooks/useDriver";
import { formatDate, formatPHNumber } from "@/utils/format";

const Dashboard = () => {
  const { drivers, vehicleCounts, loading, pagination, setPage, page } =
    useDrivers(1, 10);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="size-20 animate-spin text-primary" />
      </div>
    );
  }

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
              <p className="text-2xl font-bold">{pagination?.total}</p>
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
              <p className="text-2xl font-bold">
                {Object.keys(vehicleCounts ?? {}).length}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl flex-1 h-36 flex flex-row">
          <CardContent className="flex flex-row w-full ">
            {VEHICLE_DISPLAY.map((v) => (
              <div
                key={v.id}
                className="flex flex-1 items-center gap-5 justify-center"
              >
                <div className="bg-gray-100 p-3 rounded-xl">
                  <img
                    src={VEHICLES_MAP[v.id]}
                    alt={v.name}
                    className="size-7"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold mb-1">
                    {v.name}
                  </p>
                  <h2 className="text-3xl font-bold">
                    {vehicleCounts?.[v.id] ?? 0}
                  </h2>
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
          <div className="max-h-120 overflow-y-auto custom-scrollbar">
            <Table>
              <TableHeader>
                <TableRow className="[&_th]:text-gray-600 [&_th]:uppercase [&_th]:text-xs bg-gray-100">
                  <TableHead>#</TableHead>
                  <TableHead>Full Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Birthdate</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Registration Date</TableHead>
                  <TableHead className="text-center">Vehicle</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {drivers.map((item, index) => (
                  <TableRow key={item._id} className="hover:bg-gray-50">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="capitalize">
                      {item.fullName}
                    </TableCell>
                    <TableCell className="max-w-40 wrap-break-words whitespace-normal capitalize">
                      {item.address}
                    </TableCell>
                    <TableCell>{formatPHNumber(item.contactNumber)}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{formatDate(item.birthDate)}</TableCell>
                    <TableCell className="capitalize">{item.gender}</TableCell>
                    <TableCell>{formatDate(item.createdAt)}</TableCell>
                    <TableCell className="text-center">
                      <img
                        src={VEHICLES_MAP[item.vehicleType]}
                        alt="vehicle"
                        className="size-12 object-contain inline-block"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end items-center gap-4 mt-4">
            <button
              className={`flex items-center gap-1 text-gray-600 px-3 py-1 border rounded-lg  ${
                page == 1
                  ? "cursor-not-allowed opacity-60"
                  : "hover:bg-gray-100"
              }`}
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              <ChevronLeft size={16} /> Prev
            </button>
            <span className="text-sm text-gray-600">
              Page {page} of {pagination?.totalPages}
            </span>
            <button
              className={`flex items-center gap-1 text-gray-600 px-3 py-1 border rounded-lg  ${
                page === pagination?.totalPages
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              disabled={page === pagination?.totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
