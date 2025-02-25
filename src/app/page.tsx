import { ArrowRight, Copy, User } from "lucide-react";
import Button from "@/components/button";
import IconButton from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight /> 
      </Button>
      <IconButton>
        <Copy /> 
      </IconButton>

      {/* <Input placeholder="Digite seu e-mail"/> */}
      {/* <Input placeholder="Digite seu e-mail" error/> */}

      <InputRoot error>
        <InputIcon>
          <User/>
        </InputIcon>

        <InputField />
      </InputRoot>
    </main>
  );
}
