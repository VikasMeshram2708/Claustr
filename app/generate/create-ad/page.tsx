import AdInput from "./comps/adinput";
import AdOutput from "./comps/adoutput";

export default function CreateADPage() {
  return (
    <section className="w-full px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Input */}
        <div className="col-span-12 lg:col-span-5">
          <AdInput />
        </div>

        {/* Output */}
        <div className="col-span-12 lg:col-span-7">
          <AdOutput />
        </div>
      </div>
    </section>
  );
}
