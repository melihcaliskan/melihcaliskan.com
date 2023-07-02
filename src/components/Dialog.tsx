import Text from "@/components/Text";
import { EMAIL, RESUME } from "@/utils/constants";

interface IDialogProps {
  open: boolean;
  onToggle: () => void;
}

export default function Dialog({ open, onToggle }: IDialogProps) {
  return (
    <dialog
      open={open}
      className="transition duration-500 fixed top-0 w-screen h-screen bg-bgWhite dark:bg-bgBlack pt-40 px-24"
    >
      <div className="flex flex-col items-center gap-4 mt-16">
        <Text href={`${RESUME}`}>Resume</Text>
        <Text href={`mailto:${EMAIL}`}>Contact</Text>
      </div>
    </dialog>
  );
}
