"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/app/hooks/use-api-mutation";
import { toast } from "sonner";
export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);
  const onClick = () => {
    if (!organization) return;
    mutate({ orgId: organization.id, title: "Undefined" })
      .then((id) => {
        // toast.success("Board created");
      })
      .catch((error) => {
        // toast.error("Failed to create board");
      });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/logo.svg"} alt="Empty" width={110} height={110} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-sm mt-2 text-muted-foreground">
        Start by creating board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} size={"lg"} onClick={onClick}>
          Create board
        </Button>
      </div>
    </div>
  );
};
