import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApproveDriverModal } from "@/components/modals/ApproveDriverModal";
import { DeleteDriverModal } from "@/components/modals/DeleteDriverModal";
import { EditDriverModal } from "@/components/modals/EditDriverModal";
import { VEHICLES_MAP } from "@/constants";
import { useDrivers } from "@/hooks/useDriver";
import type { IDriver } from "@/types/driver";
import { formatDate, formatPHNumber } from "@/utils/format";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Pen,
  Search,
  Trash,
} from "lucide-react";
import { useState } from "react";

export default function Drivers() {
  const { drivers, loading, pagination, setPage, page } = useDrivers(1, 10);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [approveDialogOpen, setApproveDialogOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState<IDriver | null>(null);

  const handleSave = () => {
    console.log("Saving driver changes:", selectedDriver);
    setEditDialogOpen(false);
    setSelectedDriver(null);
  };

  const handleDelete = () => {
    console.log("Deleting driver:", selectedDriver?._id);
    setDeleteDialogOpen(false);
    setSelectedDriver(null);
  };

  const handleApprove = () => {
    console.log("Approving driver:", selectedDriver?._id);
    setApproveDialogOpen(false);
    setSelectedDriver(null);
  };

  const handleInputChange = (field: keyof IDriver, value: string) => {
    if (!selectedDriver) return;
    setSelectedDriver({
      ...selectedDriver,
      [field]: value,
    } as IDriver);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="size-20 animate-spin text-primary" />
      </div>
    );
  }
  return (
    <Card className="rounded-2xl">
      <CardContent className="space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-800 ">Drivers</h3>

          {/* search */}
          <div className="flex flex-row bg-gray-50 border items-center gap-2 px-3 py-2 border-gray-300">
            <input
              type="text"
              placeholder="Search..."
              className=" text-gray-900 placeholder:text-gray-400 flex-1 focus:outline-none focus:ring-primary focus:border-primary "
            />
            <Search className="size-5 text-gray-400" />
          </div>
        </div>

        <div className="max-h-160 overflow-y-auto custom-scrollbar">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 [&_th]:text-gray-600 [&_th]:uppercase [&_th]:text-xs">
                <TableHead>#</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Birthdate</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Registration Date</TableHead>
                <TableHead className="text-center">Vehicle</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((item, index) => (
                <TableRow key={item._id} className="hover:bg-gray-50">
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="capitalize">{item.fullName}</TableCell>
                  <TableCell className="max-w-44 wrap-break-words whitespace-normal capitalize">
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
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="flex cursor-pointer items-center gap-1 px-2 py-1 text-xs font-medium text-green-600 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                        onClick={() => {
                          setSelectedDriver(item);
                          setApproveDialogOpen(true);
                        }}
                      >
                        <Check className="size-4" />
                        Approve
                      </button>
                      <button
                        className="flex cursor-pointer items-center gap-1 px-2 py-1 text-xs font-medium text-yellow-600 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors"
                        onClick={() => {
                          setSelectedDriver(item);
                          setEditDialogOpen(true);
                        }}
                      >
                        <Pen className="size-4" />
                        Edit
                      </button>
                      <button
                        className="flex cursor-pointer items-center gap-1 px-2 py-1 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                        onClick={() => {
                          setSelectedDriver(item);
                          setDeleteDialogOpen(true);
                        }}
                      >
                        <Trash className="size-4" />
                        Delete
                      </button>
                    </div>
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
              page == 1 ? "cursor-not-allowed opacity-60" : "hover:bg-gray-100"
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

      {/* Approve Driver Modal */}
      <ApproveDriverModal
        open={approveDialogOpen}
        onOpenChange={setApproveDialogOpen}
        driverName={selectedDriver?.fullName || ""}
        onConfirm={handleApprove}
      />

      {/* Delete Confirmation Modal */}
      <DeleteDriverModal
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        driverName={selectedDriver?.fullName || ""}
        onConfirm={handleDelete}
      />

      {/* Edit Driver Modal */}
      <EditDriverModal
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        driver={selectedDriver}
        onSave={handleSave}
        onInputChange={handleInputChange}
      />
    </Card>
  );
}
