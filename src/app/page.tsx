import { ArrowRight, Copy } from "lucide-react";
import Button from "@/components/button";
import IconButton from "@/components/icon-button";

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
    </main>
  );
}
