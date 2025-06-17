import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Hammer, Wrench, PenTool as Tool, Cog } from 'lucide-react';

const MachinerySection = ({ title, icon: Icon, items }: { title: string; icon: any; items: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-lg overflow-hidden"
  >
    <div className="bg-blue-600 p-6 flex items-center">
      <Icon className="w-8 h-8 text-white" />
      <h3 className="text-2xl font-bold text-white ml-4">{title}</h3>
    </div>
    <div className="p-6">
      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center text-gray-700"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

function Machineries() {
  const machineryData = {
    press: [
      "High Speed Stamping Press 220 Ton One ( Up to 350SPM), Imported",
      "High Speed Stamping Press 125 Ton One ( Up to 450SPM), Taiwan",
      "Power Press H-Type 120 Ton One",
      "Power Press H-Type 100 Ton One",
      "Power Press C-Type 75 Ton Two ( Pneumatic )",
      "Power Press C-Type 80 Ton One ( Pneumatic )",
      "Power Press C-Type 40 Ton One ( Pneumatic )",
      "Power Press C-Type 50 Ton Two",
      "Power Press C-Type 30 Ton Seven",
      "Power Press C-Type 20 Ton Five",
      "Power Press C-Type 10 Ton Four",
      "Power Press C-Type 05 Ton Three",
      "Laser Cutting Machine (One 3KW)",
      "Press Brake (One - 110Ton)"
    ],
    laser: [
      "Pressure Die Casting 120 Ton & 180 Ton : One Each",
      "Hi Perm 4 Ton Load Capacity : One Line ",
      "MIG Machines 250 Amp to 450 Amp. — 20",
      "ARC Welding Machine — 06",
      "Spot Machine — 05",
      "Projection Machine — 04",
      "Butt Welding Machine — 02"
    ],
    toolRoom: [
      "Wirecut (Electronica Sprintcut) 300*400 Working Area : One",
      "SODICK - AQ750L - 750-X*500-Y*400-Z : One",
      "VMC – BFW 1050*600 Working Area : One",
      "Surface Grinder Hydraulic -KENT (1500*600), Taiwan : One",
      "Surface Grinder - ELB (1500*370), US : One",
      "M1TR Seiki (Table Size -4No.) : One",
      "Lathe -6' : One",
      "Surface Grinder 12\"x24\" : One",
      "Surface Grinder 10\"x20\" : One",
      "Drill Machine 1\" : Two",
      "Tapping Arm M3- M16 : One"
    ],
    weldShop: [
      "Digital Vernier Calipers",
      "Digital Micrometers ",
      "Digital Height Gauze",
      "Bore Gauzes",
      "Bevel Protectors",
      "DFT Meter",
      "Filler Gauze"
     
    ]
  };

  return (
    <>
      <Helmet>
        <title>Our Machineries - SARVATRA INDUSTRIES</title>
        <meta name="description" content="Explore our state-of-the-art machinery including hydraulic presses, laser cutting machines, tool room equipment, and welding facilities." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 mb-12">
          <div className="absolute inset-0">
            <img
              src="/assets/press-3.jpg"
              alt="Industrial machinery"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Machineries</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                State-of-the-art equipment for precision manufacturing
              </p>
            </motion.div>
          </div>
        </section>

        {/* Machinery Lists */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <MachinerySection
              title="Press Shop"
              icon={Hammer}
              items={machineryData.press}
            />
            
          

            <MachinerySection
              title="Tool Room"
              icon={Wrench}
              items={machineryData.toolRoom}
            />

              { <MachinerySection
              title="Welding & Die Casting"
              icon={Tool}
              items={machineryData.laser}
            /> }
            

            <MachinerySection
              title=" Special Testing Equipments"
              icon={Cog}
              items={machineryData.weldShop}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Machineries;