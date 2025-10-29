import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface ApproveDriverModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  driverName: string;
  onConfirm: () => void;
}

export function ApproveDriverModal({
  open,
  onOpenChange,
  driverName,
  onConfirm,
}: ApproveDriverModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="space-y-2">
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle2 className="size-5 text-green-500" />
            Confirm Approval
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to approve{" "}
            <span className="font-semibold text-gray-900 capitalize">
              {driverName}
            </span>
            ? This will grant the driver access to the Application.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <button
            className="px-4 cursor-pointer py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 cursor-pointer py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
            onClick={onConfirm}
          >
            Approve
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
