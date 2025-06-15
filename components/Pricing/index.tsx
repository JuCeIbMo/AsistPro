import { Check, X } from "lucide-react";
import Button from "../Button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "ARS $3.999/mes",
      color: "bg-blue-500",
      tagline: "Ideal para quienes quieren comenzar",
      features: [
        "40 recordatorios por mes",
        "Reconocimiento de notas de voz",
        "Recordatorios recurrentes",
        "Creación de listas"
      ],
      exclusions: [
        "Reconocimiento de imágenes",
        "Múltiples recordatorios en un mensaje",
        "Acceso anticipado a funciones",
        "Respuestas por audio",
        "Google Calendar",
        "Finanzas personales",
        "Geofencing"
      ],
      trial: "Prueba gratis por 3 días"
    },
    {
      name: "Pro",
      price: "ARS $5.999/mes",
      color: "bg-yellow-400",
      tagline: "Para usuarios activos que quieren control",
      features: [
        "180 recordatorios por mes",
        "Reconocimiento de notas de voz",
        "Recordatorios recurrentes",
        "Creación de listas",
        "Reconocimiento de imágenes",
        "Múltiples recordatorios en mensaje",
        "Acceso anticipado a funciones",
        "Geofencing",
        "Google Calendar (notificaciones)"
      ],
      exclusions: [
        "Respuestas por audio",
        "Finanzas personales"
      ],
      trial: "Prueba gratis por 3 días"
    },
    {
      name: "Premium",
      price: "ARS $9.999/mes",
      color: "bg-purple-500",
      tagline: "Todo lo que necesitás, sin límites",
      features: [
        "Recordatorios ilimitados",
        "Reconocimiento de notas de voz",
        "Recordatorios recurrentes",
        "Creación de listas",
        "Reconocimiento de imágenes",
        "Múltiples recordatorios en mensaje",
        "Acceso anticipado a funciones",
        "Respuestas por audio",
        "Google Calendar completo",
        "Finanzas personales",
        "Geofencing"
      ],
      exclusions: [],
      trial: "Prueba gratis por 3 días"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Planes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`${plan.color} p-8 rounded-xl text-white`}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm opacity-80">{plan.tagline}</p>
                </div>
                <p className="text-2xl font-bold">{plan.price}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-medium">Incluye:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.exclusions.length > 0 && (
                <div className="space-y-4 mb-8">
                  <h4 className="font-medium">No incluye:</h4>
                  <ul className="space-y-2">
                    {plan.exclusions.map((exclusion, i) => (
                      <li key={i} className="flex items-center gap-2 opacity-70">
                        <X className="w-4 h-4" />
                        <span>{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button className="w-full mt-4 bg-white text-black hover:bg-gray-100">
                {plan.trial}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
