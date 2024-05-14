"use client";

import { Hint } from "@/components/hint";
import { Dialog } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

export const NewButton = () => {
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="aspect-square">
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-now max-w-[480px]">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
};
