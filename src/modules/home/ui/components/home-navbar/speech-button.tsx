import { Button } from "@/components/ui/button";
import { Mic, UserCircleIcon } from "lucide-react";

export const SpeechButton = () => {
  return (
    <Button
      variant="outline"
      className="px-2 py-2 text-sm  font-medium text-black bg-gray-100 hover:bg-gray-200 rounded-full [&_svg]:size-6"
    >
      <Mic />
    </Button>
  );
};
