import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";

type ServiceCardProps = {
    title: string;
    description: string;
    price: string;
}

export default function ServiceCard( { title, description, price} : ServiceCardProps) {
  return (
    <Card className="[width:250px] [padding:16px]">
      <CardHeader className="[padding:24px]">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center [padding:24px]">
        <p className="text-2xl font-bold text-center">${price}</p>
        <Button className="bg-[#dee2e6] text-white hover:bg-[#adb5bd] rounded-none [padding:10px_25px]">Book Now</Button>
      </CardFooter>
    </Card>

  )
}