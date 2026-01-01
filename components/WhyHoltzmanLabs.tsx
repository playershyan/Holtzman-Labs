import { Clock, DollarSign, RefreshCw } from "lucide-react";

export default function WhyHoltzmanLabs() {

  return (
    <section className="px-6 py-12 md:px-16 md:py-20 lg:px-24 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Why Holtzman Labs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="icon-badge w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"> 
              <Clock className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div className="font-bold">Fast</div>
            <div className="text-sm text-gray-300 mt-1">5-day landing pages</div>
          </div>

          <div>
            <div className="icon-badge w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"> 
              <DollarSign className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div className="font-bold">Transparent</div>
            <div className="text-sm text-gray-300 mt-1">Fixed price, no surprises</div>
          </div>

          <div>
            <div className="icon-badge w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"> 
              <RefreshCw className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div className="font-bold">Iterative</div>
            <div className="text-sm text-gray-300 mt-1">Refine until it's right</div>
          </div>
        </div>
      </div>
    </section>
  );
}
