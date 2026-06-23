import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";




export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col items-center text-center [padding:60px_24px]">
        <h1>Get Fresh Cuts</h1>
        <h2>Book your appointment with ease and style.</h2>
        <Button className="bg-[#dee2e6] text-white hover:bg-[#adb5bd] rounded-none [padding:14px_32px]">Book Now</Button>
        </section>

      <section className="flex flex-col items-center text-center [padding:60px_24px]">
        <h1>Services</h1>
        <h2>Explore our range of premium barbering services.</h2>
        <div className="flex flex-col md:flex-row [gap:24px] mt-8">
          <ServiceCard title="Haircut" description="Professional hair cutting service" price="$20.00" />
          <ServiceCard title="Fade" description="Clean fade with precise blending" price="$30.00" />
          <ServiceCard title="Beard Trim" description="Shape and trim your beard" price="$15.00" />
        </div>
        </section>
    </main>
  );
}
