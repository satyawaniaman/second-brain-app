import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "./Button";
import SelectDemo from "./Select";
import { useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config/config";

interface DialogDemoProps {
    open: boolean;
    onClose: () => void;
}
enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
	Document = "document"
}

const DialogDemo: React.FC<DialogDemoProps> = ({ open, onClose }) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
	const [type, setType] = useState(ContentType.Youtube);
	async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/contents`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose();

    }
    return (
        <Dialog.Root open={open} onOpenChange={onClose}>
            <Dialog.Trigger asChild>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow backdrop-blur-sm" />
                <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
                    <Dialog.Title className="m-0 py-2 flex justify-center text-[17px] font-medium text-black">
                        Add Content
                    </Dialog.Title>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <label
                            className="w-[90px] text-right text-[15px] text-black"
                            htmlFor="name"
                        >
                            Title:
                        </label>
                        <input
                            ref={titleRef}
                            className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8 bg-gray2"
                            id="name"
                            placeholder="Title"
                        />
                    </fieldset>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <label
                            className="w-[90px] text-right text-[15px] text-black"
                            htmlFor="username"
                        >
                            Link:
                        </label>
                        <input
                            ref={linkRef}
                            className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8 bg-gray2"
                            id="username"
                            placeholder="Link: optional"
                        />
                    </fieldset>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <label
                            className="w-[90px] text-right text-[15px] text-black"
                            htmlFor="username"
                        >
                            Tag:
                        </label>
                        <SelectDemo onValueChange={(value) => setType(value as ContentType)}/>
                    </fieldset>
                    <div className="mt-[25px] flex justify-center">
                        <Dialog.Close asChild>
                            <Button onClick={addContent} variant={"secondary"} className="justify-center content-center">Save</Button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button
                            className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-black bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                            aria-label="Close"
                        >
                            <Cross2Icon className="w-5 h-5" />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default DialogDemo;
