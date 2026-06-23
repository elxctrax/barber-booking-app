import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
      <CardFooter>
        <p className="text-2xl font-bold text-center">{price}</p>
      </CardFooter>
    </Card>

  )
}