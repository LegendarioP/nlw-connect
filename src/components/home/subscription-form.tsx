import { ArrowRight, Mail, User } from "lucide-react"
import Button from "../button"
import { InputField, InputIcon, InputRoot } from "../input"

export default function SubscriptionForm() {
  return (
    <form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField type="text" placeholder="Nome Completo" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="text" placeholder="E-mail" />
        </InputRoot>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
