import * as React from "react";
import { Select } from "radix-ui";
import classnames from "classnames";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons";

// Define the props interface for SelectItem
interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof Select.Item> {
	className?: string; // Allow className as an optional prop
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
	({ children, className, ...props }, forwardedRef) => {
		return (
			<Select.Item
				className={classnames(
					"relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-violet11 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none",
					className,
				)}
				{...props}
				ref={forwardedRef}
			>
				<Select.ItemText>{children}</Select.ItemText>
				<Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
					<CheckIcon />
				</Select.ItemIndicator>
			</Select.Item>
		);
	},
)

interface SelectDemoProps {
    onValueChange: (value: string) => void;
}

const SelectDemo = ({ onValueChange }: SelectDemoProps) => {
	return (
		<Select.Root onValueChange={onValueChange}>
			<Select.Trigger
				className="inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-black px-[15px] text-[13px] leading-none text-violet11 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9"
				aria-label="Food"
			>
				<Select.Value placeholder="Select a Tag" />
				<Select.Icon className="text-violet11">
					<ChevronDownIcon />
				</Select.Icon>
			</Select.Trigger>
			<Select.Portal>
				<Select.Content className="overflow-hidden rounded-md bg-black shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
					<Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
						<ChevronUpIcon />
					</Select.ScrollUpButton>
					<Select.Viewport className="p-[5px]">
						<Select.Group>
							<SelectItem value="Youtube">Youtube</SelectItem>
							<SelectItem value="Twitter">Twitter</SelectItem>
							<SelectItem value="Document">Document</SelectItem>
						</Select.Group>

						<Select.Separator className="m-[5px] h-px bg-violet6" />
					</Select.Viewport>
					<Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
						<ChevronDownIcon />
					</Select.ScrollDownButton>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	);
};

export default SelectDemo;
