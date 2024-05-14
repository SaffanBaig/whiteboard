import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/logo.svg"} alt="Empty" width={200} height={200} />
      <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
      <p className="text-sm mt-2 text-muted-foreground">
        Try searching for something else
      </p>
    </div>
  );
};
