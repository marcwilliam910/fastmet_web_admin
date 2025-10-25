import {Card, CardContent} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {data} from "./Home";
import {ChevronLeft, ChevronRight, Pen, Search, Trash} from "lucide-react";

export default function Drivers() {
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
              <TableHead className="text-gray-600 uppercase text-xs text-center">
                Actions
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
                <TableCell className="text-center flex flex-row justify-around">
                  <button className="cursor-pointer">
                    <Pen className="size-5 text-yellow-400 fill-yellow-400 hover:fill-amber-500" />
                  </button>
                  <button className="cursor-pointer">
                    <Trash className="size-6 text-red-500 hover:text-red-600" />
                  </button>
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
  );
}
