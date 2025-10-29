import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VEHICLES_MAP } from "@/constants";
import type { IDriver } from "@/types/driver";

interface EditDriverModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  driver: IDriver | null;
  onSave: () => void;
  onInputChange: (field: keyof IDriver, value: string) => void;
}

export function EditDriverModal({
  open,
  onOpenChange,
  driver,
  onSave,
  onInputChange,
}: EditDriverModalProps) {
  if (!driver) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-y-auto custom-scrollbar max-h-[95vh]">
        <DialogHeader>
          <DialogTitle>Edit Driver Information</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={driver.fullName}
              onChange={(e) => onInputChange("fullName", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <textarea
              value={driver.address}
              onChange={(e) => onInputChange("address", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
          </div>

          {/* Contact Number */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              value={driver.contactNumber}
              onChange={(e) => onInputChange("contactNumber", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={driver.email}
              onChange={(e) => onInputChange("email", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Birth Date */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Birth Date
            </label>
            <input
              type="date"
              value={driver.birthDate.split("T")[0]}
              onChange={(e) => onInputChange("birthDate", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select
              defaultValue={driver.gender}
              onChange={(e) => onInputChange("gender", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Vehicle Type */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Vehicle Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              {(
                Object.keys(VEHICLES_MAP) as Array<keyof typeof VEHICLES_MAP>
              ).map((vehicle) => (
                <label
                  key={vehicle}
                  className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="radio"
                    name="vehicleType"
                    value={vehicle}
                    checked={vehicle === driver.vehicleType}
                    onChange={() => onInputChange("vehicleType", vehicle)}
                    className="size-4 text-primary focus:ring-primary"
                  />
                  <img
                    src={VEHICLES_MAP[vehicle]}
                    alt={vehicle}
                    className="size-8 object-contain"
                  />
                  <span className="capitalize text-sm font-medium">
                    {vehicle}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 mt-2">
          <button
            className="px-4 cursor-pointer py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 cursor-pointer py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            onClick={onSave}
          >
            Save Changes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
