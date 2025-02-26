import { Copy, Link } from "lucide-react"
import IconButton from "../icon-button"
import { InputField, InputIcon, InputRoot } from "../input"

export default function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/5642313876132564"
      />
      <IconButton className="-mr-2">
        <Copy />
      </IconButton>
    </InputRoot>
  )
}
