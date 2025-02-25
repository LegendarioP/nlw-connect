import { ComponentProps, ReactNode } from "react"

interface IconButtonProps extends ComponentProps<'button'> {}

export default function IconButton(props: IconButtonProps) {
    return (
        <button 
            className="p-1.5 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
            {...props}
        />
    )
}