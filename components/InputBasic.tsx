import { Input } from "@/components/ui/input"

type InputBasicProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function InputBasic({ value, onChange }: InputBasicProps) {
  return (
    <Input 
      placeholder="Enter your name" 
      value={value ?? ""}
      onChange={onChange}
      className="[width:300px] [max-width:300px] [margin-top:16px] [padding:12px_16px] rounded-md" 
    />
  )
}