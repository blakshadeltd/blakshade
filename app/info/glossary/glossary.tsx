"use client";

import { useState } from "react";

export const glossaryData = [

  {
    term: "AC Generator",
    definition: "An AC Generator is an electrical generator that converts mechanical/kinetic energy into an alternating electrical current."
  },
  {
    term: "Active Power",
    definition: "Active Power is AC power including a unity power factor, this is measured in Watts (W)."
  },
  {
    term: "Air Circuit Breaker (ACB)",
    definition: "Circuit breaker using air as the arc extinguishing media (ACB). Also see Circuit Breaker."
  },
  {
    term: "Alternator",
    definition: "Electrical generator that produces alternating current."
  },
  {
    term: "Amortisseur Winding",
    definition: "See Damper Winding."
  },
  {
    term: "Analogue Controls",
    definition: "Controls using variable voltage or current to pass information."
  },
  {
    term: "Anti-Vibration Mounts (AVM)",
    definition: "Mounts to reduce transmission of vibration from a generating set to the foundations. Types may be open, closed, spring, rubber etc."
  },
  {
    term: "Apparent Power",
    definition: "The product of current and voltage in an alternating current circuit which has a reactive element."
  },
  {
    term: "Arc Flash",
    definition: "Arc Flash is the result of a rapid release of energy due to an arcing fault between a conductor and another conductor or neutral or a ground. During an arc fault the air is the conductor. Arc faults are generally limited to systems where the bus voltage is in excess of 120 volts. Lower voltage levels normally will not sustain an arc."
  },
  {
    term: "Armature",
    definition: "The assembly of windings and iron core in which the generator output is produced. Sometimes referred to as the Stator to avoid confusion."
  },
  {
    term: "Asynchronous",
    definition: "Term applied to motors or generators which operate at a speed not fixed by poleage and the supply frequency. (i.e. an induction generator or induction motor)."
  },
  {
    term: "ATEX",
    definition: "ATEX is an acronym for a series of EU Directives describing what equipment and work environment is allowed in an environment with an explosive atmosphere. The ATEX 137 workplace directive 99/92/EC has been enacted in the UK as DSEAR. The term ATEX has been derived from the French: Atmospheriques Explosives."
  },
  {
    term: "Attenuators",
    definition: "Devices for reduction of the emission of sound."
  },
  {
    term: "Auto Transformer Starter",
    definition: "Transformer switching arrangement to reduce voltage applied to an electric motor during starting."
  },
  {
    term: "Automatic Mains Failure (AMF)",
    definition: "Referring to the duty of a generating set to start and take over the load on indication of mains electricity failure. Also often referring to the build of control panel used, e.g. AMF Panel."
  },
  {
    term: "Automatic Transfer Switch (ATS)",
    definition: "A device used to automatically switch a power supply from normal to emergency when a power failure occurs (ATS)."
  },
  {
    term: "Automatic Voltage Regulator (AVR)",
    definition: "Device used to control the voltage of an AC generator by sensing the terminal voltage and varying the field current (AVR)."
  },
  {
    term: "AVR Droop",
    definition: "AVR voltage reference is reduced as VAr increases."
  },
  {
    term: "Backup Protection",
    definition: "Type of protection intended to operate only after the main protective device(s) has failed to operate."
  },
  {
    term: "Base Load",
    definition: "The portion of load of a generator or building which is constant. Alternatively referring to a constant generator output when in parallel with the grid."
  },
  {
    term: "Bedplate",
    definition: "Metal fabricated structure to support the engine, generator, radiator etc. of a generating set or other plant. Also known as a baseplate."
  },
  {
    term: "Berm",
    definition: "Ridge or embankment separating two areas. Often used alongside rivers as flood prevention. Also used around sites to provide visual and noise separation. A continuous berm enclosing an area is a bund."
  },
  {
    term: "Biodiesel",
    definition: "Diesel fuel with all or part content derived from vegetable and / or animal oils."
  },
  {
    term: "Black Start",
    definition: "Refers to starting of a power system without the use of an external power source (but internal power such as DC control and start power is available)."
  },
  {
    term: "Brown Out",
    definition: "An intentional or unintentional drop in voltage in the utility mains power supply. Intentional brownouts are used for load reduction in an emergency. The reduction may last for minutes or hours, as opposed to short-term voltage sag (or dip) lasting seconds caused by other factors. It is known that such voltage drops can be harmful to certain sensitive electrical devices, such as computers; therefore accentuating the importance of a resilient back up regime including a generating set for a business."
  },
  {
    term: "Bulk Tank",
    definition: "A large storage tank from which the generating set may take its immediate supply of fuel. The bulk tank generally is the receiving tank for fresh fuel supply. The bulk tank may be used to provide a supply to a day tank, then to the generating set."
  },
  {
    term: "Bund",
    definition: "In civil engineering terms, a wall or bank enclosing an area, often to provide secondary containment. Often seen around tank farms. Also see Berm."
  },
  {
    term: "Bunding",
    definition: "Bunding, also called a bund wall, is a constructed retaining wall or bank around storage. Generally seen around large tank farms, but can be used around smaller tanks. Smaller tanks can have integral bunds, often called twin skin or twin wall tanks or \"self bunded tanks\". Bunding of fuel tanks is generally required for tank volumes above 200 litres. Containerised generating sets are often bunded by sealing of the container floor."
  },
  {
    term: "Busbar",
    definition: "Copper or aluminium (usually rigid) conductors of rectangular, square, round or hollow section, to inter-connect high current circuits in a switchboard or building."
  },
  {
    term: "CE Marking",
    definition: "CE stands for Conformité Européenne - European Certification Standards and Markings. Not all products must have CE marking. It is compulsory only for most of the products covered by the New Approach Directives. It is forbidden to affix CE marking to other products. It must be noted that a CE marking does not indicate that a product have been approved as safe by the EU or by another authority. It does not indicate the origin of a product either. CE Marking confirms that the Product complies with all applicable EU product legislation."
  },
  {
    term: "Check Synchroniser",
    definition: "Synchroniser used to check the operation of automatic or manual synchronisation. Also see Synchroniser."
  },
  {
    term: "Circuit",
    definition: "An electrical circuit is a path in which electrons from a voltage or current source flow. Thus the circuit must be a closed loop. In general an electrical circuit is an interconnection of electrical elements such as resistors, inductors, capacitors, transmission lines, switches etc. with a power source and a closed loop return path for the current."
  },
  {
    term: "Circuit Breaker (CB)",
    definition: "A protective device to interrupt the flow of current in a circuit when the current level exceeds a certain value. It is normally rated to interrupt fault current. Many devices include the protection relay etc. to make this an automatic circuit breaker."
  },
  {
    term: "Close Fit",
    definition: "A generic term for an enclosure or canopy which is designed to fit onto the base frame of the generating set; these may be sound proofed or simply weather protected."
  },
  {
    term: "Combined Cycle Gas Turbine (CCGT)",
    definition: "Power plant where the exhaust heat from the turbine(s) is turned into steam which is used to generate power in a steam turbine. Thereby increasing the overall efficiency of the plant."
  },
  {
    term: "Combined Heat and Power (CHP)",
    definition: "Use of a generating set (or multiple sets) for the purpose of utilising the heat produced (via the exhaust and the radiator) as the well as producing electricity. Thereby increasing the overall efficiency of the plant."
  },
  {
    term: "Commutator",
    definition: "A rotary electrical switch in DC electrical generators which periodically reverses the current direction between the rotor and the stationary circuit, in order to provide steady direct current. Similarly used in DC motors."
  },
  {
    term: "Compound Generator",
    definition: "A generator where the excitation system takes elements of both voltage and current, or derivatives of these in order to give the required level of excitation to the main field of the main field."
  },
  {
    term: "Contactor",
    definition: "An electrically operated heavy current switching device. Unlike a circuit breaker, a contactor is not intended to interrupt a fault current."
  },
  {
    term: "Container",
    definition: "Usually taken to mean an ISO shipping container, often used as an enclosure for a generating set and / or its ancillaries. Also known as an Intermodal Container."
  },
  {
    term: "Cross Current Compensation",
    definition: "System whereby the current loading of a generator in parallel with another is used to adjust the excitation of the second generator, so that the two generators share the load current equally, with minimum impact on the combined voltage level."
  },
  {
    term: "Current Transformer (CT)",
    definition: "A current transformer will produce a current, in its isolated secondary circuit proportional to the current in the main circuit being measured. Standard currents in the secondary are 1A and 5A at the rated primary current."
  },
  {
    term: "Cycle",
    definition: "The complete reversal of an alternating current or voltage, from zero to positive maximum down to negative maximum and back to zero."
  },
  {
    term: "Damper Winding",
    definition: "Windings embedded in the pole faces of a synchronous generator, whose function is to dampen oscillations of the rotor due to cyclic irregularity and effect of load changes. A more common term for amortisseur winding."
  },
  {
    term: "Day Tank",
    definition: "A small storage tank from which the generating set takes its immediate supply of fuel. Often built into the skid of the generator."
  },
  {
    term: "Deflection Tolerance",
    definition: "Term used in specifying vibration mounts."
  },
  {
    term: "Delta",
    definition: "Usually associated with a winding connection configuration of a transformer or electrical rotating machine, where the three phase-coils are connected in series in a Δ (delta) configuration. There are a number of connection options for both 3 and 4 wire circuits e.g. open delta, Edison delta, (sometime referred to as high-leg delta or red-leg delta), and jack-leg delta etc. A two coil 3 wire connection would be an Open Delta."
  },
  {
    term: "Deviation Factor",
    definition: "The maximum instantaneous deviation of a generator voltage waveform, as a percentage of the true sine wave of the same RMS value."
  },
  {
    term: "Dielectric Strength",
    definition: "The maximum electric strength that an insulating material can withstand intrinsically without breaking down, i.e. without experiencing failure of its insulating properties."
  },
  {
    term: "Diesel Bug",
    definition: "The 'Diesel Bug' is the generic term for the microbial growth found within fuel systems and fuel storage tanks. Formed of a variety of different strains of fungi and bacteria. Can be associated with fuels containing a biodiesel fraction."
  },
  {
    term: "Diesel Rotary UPS",
    definition: "A diesel engine driven generating set which includes an electric motor driven heavy flywheel and AC generator. In normal operation the motor drives the flywheel/AC generator. When the mains supply fails the diesel engine is started and takes over from the motor, to drive the flywheel/AC generator. The heavy flywheel keeps the system stable whilst the engine is starting up."
  },
  {
    term: "Differential Protection Relay",
    definition: "Relay operated when the current differential between two points of an electrical circuit exceeds a predetermined value. Used to detect faults in generator and transformer windings."
  },
  {
    term: "Direct Current",
    definition: "Current flow in one direction only i.e. no reversal of polarity."
  },
  {
    term: "Directive (European)",
    definition: "A directive is a legal act of the European Union, which requires member states to achieve a particular result without dictating the means of achieving that result. It can be distinguished from regulations which are self-executing and do not require any implementing measures."
  },
  {
    term: "Double Skin",
    definition: "Non preferred term (see Bunding)."
  },
  {
    term: "Droop Speed Control",
    definition: "Term used in the generating set industry to indicate the action of a generating set when put under load. As in 'AVR Droop' above or speed (frequency) droop when the prime mover is under load. The setting of which are critical as generating sets can be operated in parallel running in 'droop'."
  },
  {
    term: "Dump Line",
    definition: "Refers to the safeguarding method of using a pipe work system to 'dump' fuel away from a day tank when there is a potential fire risk."
  },
  {
    term: "Duty Assist",
    definition: "An arrangement where two (or more) generating sets are configured to provide mutual support in case of one piece failing to operate or needing assistance to achieve a required target: If one generating set fails to operate or cannot achieve a required target, the second (and subsequent) generating set will operate."
  },
  {
    term: "Duty Standby",
    definition: "An arrangement where two (or more) pieces of equipment, e.g. fuel transfer pumps, are configured to provide mutual support in case of one piece failing to operate: One piece is duty, the other(s) is standby to the duty piece. One piece fails, the other operates. Also see Duty Assist."
  },
  {
    term: "E-stop",
    definition: "Emergency stop (push button)."
  },
  {
    term: "Earth Fault",
    definition: "Failure of electrical insulation between live conductors and earth. May be considered for detection in \"restricted\" areas of a circuit or \"unrestricted\" i.e. occurrence of a fault anywhere within a circuit."
  },
  {
    term: "Electronic Governor",
    definition: "Electronic device to control and maintain the speed of an engine. Usually done by monitoring the output of a tachogenerator or magnetic pick-up, and feeding a proportional output to an actuator which controls the engine fuel supply. Also see Governor."
  },
  {
    term: "Emission Level Stages",
    definition: "European emission standards for new nonroad diesel engines (Fixed & variable speed)."
  },
  {
    term: "Enclosure",
    definition: "A general term, but often meant as the acoustic cover over a generating set."
  },
  {
    term: "Engine Governing",
    definition: "Engine speed control (see Governor) which may be mechanical, hydraulic or electronic."
  },
  {
    term: "Engine Starting",
    definition: "12 or 24V DC electric, air, hydraulic, spring."
  },
  {
    term: "Euronorm",
    definition: "European Standards which must be transposed into member state's standards."
  },
  {
    term: "European Directive",
    definition: "See Directive (European)."
  },
  {
    term: "Exciter",
    definition: "A secondary generator or winding that provides DC power for excitation of the main field of a synchronous AC generator."
  },
  {
    term: "Exhaust Gas Recirculation (EGR)",
    definition: "In internal combustion engines, exhaust gas recirculation (EGR) is a nitrogen oxide (NOx) emissions reduction technique used in petrol/gasoline and diesel engines. EGR works by recirculating a portion of an engine's exhaust gas back to the engine cylinders. This dilutes the O₂ in the incoming air stream and produces gases inert to combustion to act as absorbents of combustion heat to reduce peak in-cylinder temperatures. Noₓ is produced in a narrow band of high cylinder temperatures and pressures."
  },
  {
    term: "Exhaust Silencer",
    definition: "Device to reduce the noise level of an engine's exhaust system."
  },
  {
    term: "Faulty Synchronising",
    definition: "If synchronising occurs outside relatively small limits, then the transient currents and torques resulting from the acceleration can damage the generator and prime mover. In severe cases, destruction of the generating set can result. Often called crash synchronising. This can also occur with excessively long ride-through times that exceed critical fault clearance time."
  },
  {
    term: "Feed & Return",
    definition: "Method of using feed & return pipe work back to the bulk storage tank (see Bulk Tank), where the fuel can be maintained and quality monitored. Particularly relevant with the growth in use of biofuels where there is a potential degradation of quality if the fuel is stored for long periods of time (see Fuel Polishing). Some diesel engines return a considerable amount of fuel to the storage tank, as it is used for cooling and lubrication of the fuel system. Also known as flow & return pipes."
  },
  {
    term: "Field",
    definition: "A permanent or electromagnet whose magnetic field induces voltage in the armature coils of a generator."
  },
  {
    term: "Fill Point Cabinet",
    definition: "A cabinet, often wall mounted or free standing, with connections and equipment to allow remote filling of a storage tank."
  },
  {
    term: "Fire Protection Systems",
    definition: "From a simple drop weight fire valve in the fuel line to full fire suppression systems; a system is in place to react in the event of a fire; cut off the flow of combustible material (e.g. fuel) to an area or a machine and shut down the affected components or may suppress the fire with either water, foam or an inert gas."
  },
  {
    term: "Fire Rated Enclosure/Section Building",
    definition: "An enclosure constructed to meet a fire regulation i.e. BS476 4 hour fire rating or offshore fire rating i.e. A60 i.e. 60 minutes integrity with a max temp rise from one side to other of 140°C."
  },
  {
    term: "Free Field Measurement",
    definition: "Measurement of sound in an environment in which the effect of reflective boundaries can be considered negligible."
  },
  {
    term: "Frequency (Hz)",
    definition: "The number of cycles of an alternating current or sound wave in a given time i.e. Hz or cycles per second."
  },
  {
    term: "Frequency Regulation",
    definition: "The degree of variation in frequency of a generating set from no-load to fully loaded state."
  },
  {
    term: "Fuel Lines",
    definition: "Pipelines from an engine to a fuel tank or from one fuel tank to another fuel tank."
  },
  {
    term: "Fuel Polishing",
    definition: "The removal of water, sediment, non-combustible particulate matter and microbial contamination to below levels stated in ASTM D975 (Standard Specification for Diesel Fuel Oils) while re-suspending combustible particulate matter to maintain ASTM standards for heating value, lubricity, and cetane number (see Diesel Bug)."
  },
  {
    term: "Full Authority Digital Engine Control (FADEC)",
    definition: "Full authority digital engine control (FADEC) having no form of manual override available, placing full authority over the operating parameters of the engine in the hands of the computer. If a total FADEC failure occurs, the engine fails. If the engine is controlled digitally and electronically but allows for manual override, it is considered solely an EEC (Electronic Engine Controller) or ECU (Electronic Control Unit)."
  },
  {
    term: "G10",
    definition: "Republic of Ireland (Eire) code for paralleling with the mains utility supply."
  },
  {
    term: "G100",
    definition: "Technical Requirements for Customer Export Limiting Schemes."
  },
  {
    term: "G5/4-1",
    definition: "An Energy Networks Association (ENA) document specifying the limits for harmonic distortion on utility supplies."
  },
  {
    term: "G59",
    definition: "An Energy Networks Association (ENA) document specifying the connection and protection requirements for the connection of a generator, above 16 Amps per phase, to the Distribution Network."
  },
  {
    term: "G83",
    definition: "An Energy Networks Association (ENA) document specifying the connection and protection requirements for the connection of a generator, below 16 Amps per phase, to the Distribution Network."
  },
  {
    term: "G98",
    definition: "A proposed Energy Networks Association (ENA) document specifying the connection and protection requirements for the connection of a generator, above 16 Amps per phase, to the Distribution Network under the RfG Directive."
  },
  {
    term: "G99",
    definition: "A proposed Energy Networks Association (ENA) document specifying the connection and protection requirements for the connection of a generator, below 16 Amps per phase, to the Distribution Network under the RfG Directive."
  },
  {
    term: "Gas Powered",
    definition: "Gas fuelled generating set - differing gas types for differing applications."
  },
  {
    term: "Generating Set",
    definition: "A generating set is a piece of equipment that converts mechanical energy obtained from an external source into electrical energy as the output."
  },
  {
    term: "Generator Breaker",
    definition: "Breaker used for connecting and breaking a generator circuit."
  },
  {
    term: "Global System for Mobile Communications (GSM)",
    definition: "Global System for Mobile Communications, (GSM), originally Groupe Spécial Mobile), is a standard developed by the European Telecommunications Standards Institute (ETSI) to describe the protocols for second-generation (2G) digital cellular networks used by mobile phones."
  },
  {
    term: "Governor",
    definition: "A device for controlling fuel to the engine to maintain speed under varying load conditions or a pre-set speed droop from no-load to full load conditions."
  },
  {
    term: "Hall Effect Sensor",
    definition: "A transducer that varies its output voltage in response to a magnetic field."
  },
  {
    term: "Harmonics",
    definition: "A component of a periodic wave with a frequency that is a multiple of the frequency of the original wave."
  },
  {
    term: "Hunting",
    definition: "A term which can relate to speed or voltage, and which occurs after a control function change, causing the controlled element to continue to oscillate about the desired set value. Usually the result of insufficient damping in the control."
  },
  {
    term: "Impedance",
    definition: "Total of resistive, capacitive and inductive elements of a circuit."
  },
  {
    term: "Independent Distribution Network Operator (IDNO)",
    definition: "An Independent Distribution Network Operator (IDNO) designs, builds, owns and operates a distribution network, which is an extension of an existing DNO network. They typically build networks for new developments such as business parks and residential areas."
  },
  {
    term: "Inrush Current",
    definition: "Initial instantaneous current drawn by transformers, motors, capacitors or current using equipment on the application of a supply voltage. Causes of these high currents vary with different types of equipment."
  },
  {
    term: "Insulation",
    definition: "Non conductive material used between phases or phase to earth to prevent current leakage. Generally classified in Classes of temperature withstand capability. For generators and motors, classes F and H are currently used. Temperature rises typically are: Class H @ 125°C over 40°C; Class F @ 105°C over 40°C; Class B @ 80°C over 40°C."
  },
  {
    term: "IP Rating",
    definition: "Degree of protection provided by enclosures to ingress of particles, solid foreign objects and moisture."
  },
  {
    term: "Isochronous Governor",
    definition: "Engine governor that maintains a set steady state speed without droop i.e. irrespective of load."
  },
  {
    term: "Kilo-Volt-Ampere (kVA)",
    definition: "1000 VA. A term used for rating of an electrical circuit, which is the product of the circuit maximum current and voltage rating. Also known as apparent power."
  },
  {
    term: "Kilo-Volt-Ampere Reactive (kVAr)",
    definition: "1000 VAr. A term used for the rating of a purely inductive or capacitive circuit, which is the product of the circuit maximum current and voltage rating. Generally used in the context of that part of the generator output which is not giving true, or active, power, and that current which flows between generators in parallel."
  },
  {
    term: "Kilo-watt (kW)",
    definition: "1000 watts. Unit used for power rating of electrical devices."
  },
  {
    term: "Kilo-Watt-Hour (kWh)",
    definition: "1000 watt-hours. The unit of electrical energy equal to the use of one kW for the period of one hour."
  },
  {
    term: "Knocking",
    definition: "Knocking (pinking) in spark-ignition internal combustion engines occurs when combustion of the air/fuel mixture in the cylinder does not occur correctly following ignition by the spark plug, and some of the mixture explodes. Knocking can result in damage to the engine."
  },
  {
    term: "Load Acceptance",
    definition: "% of the rated set load that can be applied to a generator set and is capable of accepting in one step, and recovering from to within defined parameters."
  },
  {
    term: "Load Balancing",
    definition: "Common term used to describe best practice of balancing the load evenly across 3 phases where possible. With reference to the Negative Phase Sequence entry below it must be noted that for 3-phase generators the load must be balanced within the negative phase sequence rating of the generator otherwise overheating of the generator can occur."
  },
  {
    term: "Load Bank",
    definition: "Resistance and/or inductors to provide load for generating set(s) for test purposes. Usually the resistance/inductance units are transportable."
  },
  {
    term: "Load Factor",
    definition: "The ratio of average load to the generating set power rating."
  },
  {
    term: "Load Step",
    definition: "Normally a percentage load applied to a generating set."
  },
  {
    term: "Lube Oil Make Up System",
    definition: "All engines consume lubricating oil when they run. Therefore, the autonomy of an engine (time for which the engine can run without requiring intervention) is determined by how much oil in the engine is available to be consumed. To supplement this, a lube oil make up system can be added. This normally consists of a small lubricating oil tank connected to the engine with a make up valve. The make up valve provides a slow feed of oil to the engine to match the consumption of oil."
  },
  {
    term: "Magnetic Pick Up",
    definition: "A device that detects the speed of a prime mover, typically an engine or turbine. They are the communication link between the engine and an electronic governor control. The MPU is installed next to a flywheel ring gear which is made of a material that reacts to a magnetic field. As each tooth of the ring gear passes within 0.75mm to 1.0mm of the MPU, the tooth interrupts the MPU's magnetic field, and an alternating voltage is developed. The frequency of this voltage is translated by the speed control into a signal that accurately depicts the speed of the prime mover."
  },
  {
    term: "Main Set Breaker",
    definition: "The main breaker is the circuit breaker through which the full power of the generating set flows."
  },
  {
    term: "Mains Breaker",
    definition: "A circuit breaker that is usually positioned at the electricity services intake of a premises and which may be interlocked with a generator circuit breaker to form a changeover from mains to generator power. Also known as the utility breaker."
  },
  {
    term: "Make Before Break",
    definition: "An arrangement for electrical switchgear whereby two switching devices close to make a circuit in parallel before one switching device opens. This as a term often relates to parallel electrical power supplies, for arrangements where when changing from one power supply to another, there is no interruption between supplies. Note that it is extremely important when considering parallel AC electrical supplies that consideration is made to ensure that the supplies are synchronised."
  },
  {
    term: "Mechanical Bridge",
    definition: "A support for power cabling, fuel lines, exhaust, radiator etc."
  },
  {
    term: "Meg-ohm",
    definition: "A unit used in defining the level of insulation in terms of its resistance to current leakage."
  },
  {
    term: "Methane Number (MN)",
    definition: "The methane number (MN) describes the knocking resistance of a fuel gas (see Knocking). It is defined by the ratio of a mixture of hydrogen (H) and methane (CH₄) which has the same knocking tendency as that fuel gas. The definition is MN 100 for methane CH₄ and MN 0 for hydrogen. In the UK, mains natural gas has a methane number of 80."
  },
  {
    term: "Midel",
    definition: "A less environmentally harmful insulation/cooling oil for use in electrical transformers."
  },
  {
    term: "Motoring",
    definition: "This is the term applied when a generator remains connected to a network or other generators but its drive engine fails to deliver power - the generator set continues to run with the generator now driving the engine, i.e. the generator now becomes a motor (see Reverse Power)."
  },
  {
    term: "Moulded Case Circuit Breaker",
    definition: "A circuit breaker which is enclosed in a plastic insulating case and which trips when the current exceeds a pre-determined value for a given time."
  },
  {
    term: "N+1 / N+N",
    definition: "Operational configurations where levels of redundancy of equipment are included in the design. N+1 applies to installations where however many pieces of a given type of equipment are required for operational reasons, one additional unit is supplied for redundancy e.g. for a site that requires three generating sets to support the load, a fourth would also be supplied. N+N applies to installations where, however, many pieces of a given type of equipment are required for operational reasons, as many again are supplied. N+N equates to 100% redundancy of supply."
  },
  {
    term: "Negative Phase Sequence Current",
    definition: "In any three phase system, the currents that make up the system can be resolved to positive, negative and zero phase sequence phases. Thus the positive sequence components produce a normal rotating field; the negative sequence components create a counter-rotating field and the zero sequence components produce an oscillating field that does not rotate."
  },
  {
    term: "Noise Pollution",
    definition: "A term often used to refer to the inherent noise of any machines, near to buildings, people, etc. which may require treatment to reduce its effect, and maybe a key design consideration."
  },
  {
    term: "Non-Linear Load",
    definition: "A load in which there is a non-linear relationship between current and voltage. Commonly the result of electronic switching during the cycle in the load circuits, such as with SCR controllers e.g. switch mode supplies, VSDs (also see Harmonics)."
  },
  {
    term: "Normally Closed / Open Contact",
    definition: "Description of the status of a relay contact when the relay is de-energised."
  },
  {
    term: "Notified Body",
    definition: "A Notified Body, in the European Union, is an organization that has been accredited by a Member State to assess whether a product meets certain preordained standards."
  },
  {
    term: "Octave Band",
    definition: "Frequency range where the highest frequency is double the lowest, with eight bands 63 Hz, 125 Hz, 250 Hz etc. being used most frequently to analyse and quantify sound."
  },
  {
    term: "Offset Fill Point",
    definition: "Remote or low-level fill points added to tanks to make the filling process easier. This is especially recommended for tanks where direct-filling could cause safety issues (see Fill Point Cabinet)."
  },
  {
    term: "Ohm",
    definition: "The SI derived unit of electrical resistance; The Ohm is defined as an electrical resistance between two points of a conductor when a constant potential difference of 1 volt, applied to these points, produces in the conductor a current of 1 ampere."
  },
  {
    term: "Oil Circuit Breaker (OCB)",
    definition: "Circuit breaker with the contacts enclosed in a tank of oil. Oil circuit breakers are obsolete devices, but many thousands remain in service worldwide."
  },
  {
    term: "Open Coupled Generator Design",
    definition: "The AC generator has its shaft extension coupled to the engine flywheel without a mechanical tie between the generator frame and the engine flywheel housing. Generally, the generator has two bearings."
  },
  {
    term: "Out-of-Phase",
    definition: "Referring to alternating currents or voltages of the same frequency, which are not passing through their zero points at the same time."
  },
  {
    term: "Overload",
    definition: "Term referring to the amount by which an electrical circuit is exceeding its rating."
  },
  {
    term: "Overshoot / Overspeed",
    definition: "The amount by which voltage or frequency exceeds the nominal value following a load change, or when starting the generator."
  },
  {
    term: "Parallel Operation",
    definition: "Operating two or more generators, or generators and network together to supply a common load, or just to supply power to the grid/utility."
  },
  {
    term: "Peak Lopping",
    definition: "Load dependent Automatic Starting of Power Generation equipment. To reduce the load on the system by running the Generating Plant in Parallel with the Mains supply to maintain a fixed import load from the mains."
  },
  {
    term: "Peak Shaving",
    definition: "Power generation equipment running in parallel with the grid, producing a fixed amount of kW and kVArs."
  },
  {
    term: "Pipe-in-Pipe",
    definition: "Pipe system specifically designed for the conveyance of fuel or other liquid, designed to contain leaks. The interstitial space between the inner and outer pipe can be used with a leak detection system to guard against potential leaks out into the environment (see Double skin)."
  },
  {
    term: "PLC Controls",
    definition: "Programmable Logic Controller - a programmable hardware control system which includes digital and analogue inputs and outputs."
  },
  {
    term: "Pole",
    definition: "Generally refers to the magnetic poles of field assembly of a generator or motor. It can also refer to the electrodes of a DC battery or the number of contacts on a contactor or circuit breaker."
  },
  {
    term: "Pole Slip",
    definition: "Condition where the generator field strength is unable to hold the rotor in phase with the stator against the torque being supplied by the engine. The rotor is then driven by the prime mover until it is attracted to the next pole position. The transient torques can cause severe damage or destruction of the machine (see Faulty Synchronising)."
  },
  {
    term: "Positive Phase Sequence Current",
    definition: "Element of fault current vector in same phase sequence as the supply voltage."
  },
  {
    term: "Power Factor (PF)",
    definition: "Power Factor is only relevant in AC circuits, and in its simplest form it is the ratio of kW to kVA. Therefore, the result is a number between 0 and 1, and is usually given to 2 decimal places."
  },
  {
    term: "Power Factor Control",
    definition: "Control of generator power factor when in parallel operation by means of varying the excitation."
  },
  {
    term: "Prime Mover",
    definition: "A machine which converts a source of energy into mechanical power. It can be a turbine, steam, gas or hydro, a diesel engine or a spark ignition gas engine, amongst others."
  },
  {
    term: "Prime Power",
    definition: "The maximum power which a generating set is capable of delivering continuously whilst supplying a variable load when operating for an unlimited number of hours per year under the agreed operating conditions with the maintenance intervals and procedures being carried out as prescribed by the manufacturer. The permissible average power over 24 hours of operation must not exceed 70% of the Prime Power agreed by the engine manufacturer. As stated in BS ISO 8528."
  },
  {
    term: "Radiator",
    definition: "Typically, heat exchangers used to transfer thermal energy from one medium to another for the purpose of cooling fluids flowing in circuits around an engine including the water jacket cooling the engine; a charge air circuit used to cool directly the compressed air from an engine turbochargers, prior to entry into the engine for combustion; a secondary water circuit on engines fitted with water cooled charge air coolers (WCCAC). It must be remembered the radiator needs airflow across the unit to get rid of the heat dissipated from the fluids. This airflow is generated from a fan which can be fitted directly onto the engine, by one fitted onto the radiator and driven from the engine via belts or ones fitted onto an electric motor remote from the generating set."
  },
  {
    term: "Ratings",
    definition: "The output of a generating set relating to its use as defined in BS ISO 8528 as - Continuous Power (COP), Prime Power (PRP), Limited-time Running Power (LTP), Emergency Standby Power (ESP)."
  },
  {
    term: "Ratiometric",
    definition: "Input circuit that can be configured to be digital, resistive, 4-20mA or 0-10V."
  },
  {
    term: "Reactance",
    definition: "Opposition of a circuit to a change in electric current due to inductance or capacitance."
  },
  {
    term: "Real Time Clock",
    definition: "A computer clock that calculates the present time. Not to be confused with hardware clocks in computers which time the device but may not calculate in world time."
  },
  {
    term: "Regulation (European)",
    definition: "A regulation is a legal act of the European Union that becomes immediately enforceable as law in all member states simultaneously. Regulations can be distinguished from directives which, at least in principle, need to be transposed into national law."
  },
  {
    term: "Restricted Earth Fault Protection",
    definition: "Electrical protection normally consisting of current transformers in each phase and in the connection between neutral and ground of a generator or transformer. Protection will operate for an earth fault in the zone (Restricted), but not for phase to phase faults, nor to a fault outside the zone (see unrestricted earth fault protection)."
  },
  {
    term: "Reverse Power",
    definition: "Power absorbed by a generator from a paralleled system due to engine failure. Active power absorbed by a generator from the connected system. This may be another paralleled generator, the utility supply or possibly a motor such as a crane hoist that is being driven by the load."
  },
  {
    term: "Root Mean Square (RMS)",
    definition: "Mathematical term for establishing the effective voltage or current of an AC Circuit. It is calculated by summing the square(s) of the waveform over time, then taking the square root of the sum. For a sine wave, this is 0.707 of the peak value."
  },
  {
    term: "Rotor",
    definition: "A rotating part of a machine. E.g. of an electrical generator or motor."
  },
  {
    term: "SAE Flange",
    definition: "Flange format often used for the mechanical connection between engines and generators. Specification is SAE J617."
  },
  {
    term: "Safety Integrity Level (SIL)",
    definition: "Safety integrity level (SIL) is defined as a relative level of risk-reduction provided by a safety function, or to specify a target level of risk reduction. In simple terms, SIL is a measurement of performance required for a safety instrumented function (SIF). In the BS EN 61508 standard, four SILs are defined, with SIL 4 the most dependable and SIL 1 the least."
  },
  {
    term: "Secondary Containment",
    definition: "A safeguarding method used to prevent unplanned releases of hazardous liquids such as diesel fuel into uncontrolled areas, typically used when referring to fuel pipe work and fuel storage (see Bunding)."
  },
  {
    term: "Selective Catalytic Reduction (SCR)",
    definition: "A means of after treatment of turbo charged petrol, diesel and gas engine exhaust gas emissions. The method used to remove Nitrogen Oxides (NOx) and help reduce the amount of particulate matter in emissions which are known to directly damage health and convert the nitrox oxide to nitrogen and water vapour to cause less harm to the environment."
  },
  {
    term: "Self-Excited Generator",
    definition: "A generator whose excitation system takes power from its own output."
  },
  {
    term: "Separately Excited Generator",
    definition: "A generator whose excitation system takes power from a separate source. Usually a secondary permanent magnet generator or exciter."
  },
  {
    term: "Short Term Operating Reserve (STOR)",
    definition: "A Short Term Operating Reserve (STOR) is a service for the provision of additional active power from generation and/or demand reduction for National Grid."
  },
  {
    term: "Shunt Trip",
    definition: "A feature added to circuit breakers in order to remotely trip the breaker from an externally derived signal; such as a generator controller or switchgear control system."
  },
  {
    term: "Single Bearing",
    definition: "The AC generator has one bearing at the non drive end."
  },
  {
    term: "Single Bearing Close Coupled",
    definition: "A generating set where the AC generator has no bearing at the drive end (i.e. end of the rotor driven by the engine) and the AC generator rotor is supported by the engine bearing at the engine drive end (see Twin Bearing Open Coupled)."
  },
  {
    term: "Slip",
    definition: "The difference between synchronous and actual speed of an induction generator or motor."
  },
  {
    term: "Slip Ring",
    definition: "An electromechanical device that allows the transmission of electrical power or signals from a stationary to a rotating structure. Traditionally used on generators to supply field current to the rotor, before the development of brushless exciters."
  },
  {
    term: "Sodium Hexafluoride (SF6)",
    definition: "Sodium Hexafluoride gas (SF6) is used as an insulation and arc quenching medium in switchgear. Now being withdrawn due to its ozone layer depletion properties."
  },
  {
    term: "Solid State Controls",
    definition: "Electronic control (switching) devices e.g. transistors, thyristors."
  },
  {
    term: "Sound Power Level (LWA)",
    definition: "Sound level expressed in terms of power as logarithmic ratio (dB) relative to reference power level of 10⁻¹² W. This quantifies the acoustic energy emitted."
  },
  {
    term: "Sound Power vs Pressure Levels",
    definition: "The sound power level indicates the total acoustic energy that a machine (in our industry a generating set/s) radiates to its environment. The sound pressure level is a measure of the effect of the energy of an acoustic source (or a collection of sources) and depends upon factors such as the distance to and size of the source(s) and acoustic properties of the surroundings …"
  },
  {
    term: "Speed Droop",
    definition: "Engine speed droop occurs when the governor speed reference is reduced as load (or fuelling) increases."
  },
  {
    term: "Star Connection",
    definition: "The 3 windings are connected in a star configuration. The winding ends opposite the phase outputs are all connected together. The star point can be used as a neutral, and can be connected to ground (Earth)."
  },
  {
    term: "Star Delta Starter",
    definition: "Device for switching electric motor windings to reduce starting current."
  },
  {
    term: "Starting Current",
    definition: "High current drawn by an electric motor during starting."
  },
  {
    term: "Stator",
    definition: "The stationary winding assembly of an AC generator or exciter."
  },
  {
    term: "Sub-Transient Reactance",
    definition: "Initial reactance of generator at the instant of short circuit fault condition."
  },
  {
    term: "Surge",
    definition: "A term applied to both current and voltage, it refers to an exceptionally high increase in the quantity over a very short time period. Usually the result of load switching or lightning strikes."
  },
  {
    term: "Surge Suppressor",
    definition: "A general term used for a device to prevent externally promoted voltage surges from destroying other devices. Commonly employed on the exciters of brushless generators to prevent rotating diode failure."
  },
  {
    term: "Synchronisation",
    definition: "The act of matching the voltage magnitude, frequency and zero crossing times (phase), of two alternating current sources for the purposes of connecting them in parallel."
  },
  {
    term: "Synchroniser",
    definition: "Instrument which detects whether two periodic motions are in synchronism. In power generation, an instrument that checks that two wave forms are aligned prior to the breaker closing."
  },
  {
    term: "Synchronising Breaker",
    definition: "Breaker with the closing circuit controlled by a synchronising device. It may be the generator breaker and / or the breaker(s) connecting to the utility."
  },
  {
    term: "Synchronous Reactance",
    definition: "Measure of generator magnetic stiffness."
  },
  {
    term: "Système International (SI)",
    definition: "The International System of Units, abbreviated SI from the French name, Le Système International d'Unités."
  },
  {
    term: "Telephone Influence Factor (TIF)",
    definition: "Related to non sinusoidal voltage waveform, and the magnetic linkage between power and telephone cables, it is measure of the influence of the generated waveform on telephone operation."
  },
  {
    term: "Thermistor",
    definition: "Temperature-dependant resistor."
  },
  {
    term: "Thermocouple",
    definition: "Bi-metal junction producing signal voltage proportional to temperature."
  },
  {
    term: "Thermostat",
    definition: "Device which switches at a designed temperature - used to control temperature of a medium e.g. air ambient, coolant temperature."
  },
  {
    term: "Time Constant",
    definition: "Normally the time taken for a system to rise or fall exponentially to approximately 63% of the difference between its old and new value."
  },
  {
    term: "Transducer",
    definition: "Device to convert one form of energy to another. In power generation, often a device found at the boundary between the mechanical systems and the control and monitoring system e.g. pressure, temperature, position transducers. Also used to convert voltage, current and power etc. Output is analogue (4-20mA) or digital signals."
  },
  {
    term: "Transformer",
    definition: "Device which transfers electrical energy between circuits by electromagnetic induction."
  },
  {
    term: "Transient Reactance",
    definition: "Transitional reactance of generator following sub transient stage of fault."
  },
  {
    term: "Transition Fitting",
    definition: "Typically used to describe a polyethylene electro-fusion or spigot jointed fitting with a steel thread or flanged connection. Giving a fast, simple method of transitioning to connections on fuel tanks (see Day Tank and Bulk Tank), pumps, generators and other system apparatus."
  },
  {
    term: "Triads",
    definition: "Half-hour peaks of mains power demand, which incur the highest energy costs. Can be used to determine when local on-site power generation should be used to power their loads."
  },
  {
    term: "Twin Bearing Open Coupled",
    definition: "The AC generator has two bearings with its shaft extension coupled to the engine flywheel without a mechanical tie between the generator frame and the engine flywheel housing (see Single Bearing Close Coupled)."
  },
  {
    term: "Twin-Bearing",
    definition: "The AC generator has two bearings, rather than one bearing as is common in the generating set industry."
  },
  {
    term: "Undershoot",
    definition: "Refers to the amount by which frequency or voltage drops below the nominal value as a result of load changes."
  },
  {
    term: "Unrestricted Earth Fault Protection",
    definition: "Protection where a current transformer is fitted in the neutral connection to earth. Protection will operate for any earth fault in the network. Thus it is unrestricted. Often used as back up protection, with a timer, to prevent nuisance tripping."
  },
  {
    term: "Vacuum Circuit Breaker (VCB)",
    definition: "Circuit breaker with vacuum as the arc quenching medium."
  },
  {
    term: "Varistor - Voltage Dependant Resistor (VDR)",
    definition: "A resistance which has a significant change in value when a certain level of supply voltage is reached - used as voltage surge suppression."
  },
  {
    term: "Vibration Mounts",
    definition: "See Anti-Vibration Mounts (AVM)."
  },
  {
    term: "Volt-Free Contact",
    definition: "A term used to describe a digital control signal used to interface between systems. The indicating system opens or closes a relay contact to provide a circuit. The \"ends\" of the circuit are left available for the receiving system to use with a voltage of its choice. It is important when specifying a volt free contact that the intended voltage and current to be used on the circuit is known to ensure that the circuit is rated appropriately."
  },
  {
    term: "Voltage Dip / Voltage Sag",
    definition: "The temporary drop in generator voltage that occurs when a load is connected, before the control system responds and corrects it."
  },
  {
    term: "Voltage Regulation",
    definition: "The allowed difference between maximum and minimum steady state voltage as a percentage of the nominal voltage."
  },
  {
    term: "Voltage Regulator",
    definition: "Device for maintaining voltage between the allowed limits for varying load conditions. Generally used for a generator output."
  },
  {
    term: "Volts (V)",
    definition: "Volts (V) are the unit of electrical potential."
  },
  {
    term: "Zero Sequence Phase Sequence Current",
    definition: "Element of fault current vector with no phase sequence rotation."
  },
  {
    term: "Zone",
    definition: "Generally the term used for identification of areas of hazardous environment under the ATEX directives. The purpose of defining zones is to ensure employees and the public are protected from fires and explosion and provide a level of risk assessment. Also refer to DSEAR regulations."
  },
  {
    term: "Zone 0",
    definition: "Zone 0 refers to an area with an explosive atmosphere with gas or vapour present continuously, for long periods or frequently due to malfunctions, typically more than 1000 hours per year - no motors are allowed in Zone 0."
  },
  {
    term: "Zone 1",
    definition: "Zone 1 refers to an area with explosive gas or vapour likely to occur due to expected malfunctions, typically between 10 and 1000 hours per year - flameproof or increased safety motors are allowed in Zone 1."
  },
  {
    term: "Zone 2",
    definition: "Zone 2 refers to an area with explosive gas or vapour unlikely to occur, or if it does is likely to only be of short duration and not during normal duty, typically less than 10 hours per year - increased safety or non-sparking motors are allowed in Zone 2."
  },
  {
    term: "Zone 20",
    definition: "Zone 20 refers to the permanent presence of combustible dust. Motors are not allowed in zone 20."
  },
  {
    term: "Zone 21",
    definition: "Ignition-proof motors approved and certified by a notified body can be used - The presence of combustible dust only occurs by accident, but not during normal duty."
  },
  {
    term: "Zone 22",
    definition: "Dust ignition proof motors approved by a notified body or the manufacturer can be used."
  }
]

export default function Glossary() {
  const [search, setSearch] = useState("");

  const filteredData = glossaryData.filter((item) =>
    item.term.toLowerCase().includes(search.toLowerCase())
  );

  const letters = [
    ...new Set(glossaryData.map((item) => item.term[0].toUpperCase())),
  ].sort();

  return (
    <section>
      <div
        className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
        style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
      >
        <div className="container h-full flex items-end pb-4">
          <h1 className="text-[var(--background)] text-2xl md:text-4xl">
            Power Industry Glossary
          </h1>
        </div>
      </div>
<div className="container mt-6 mb-6">
      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search for a term..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
        />
      </div>

      {/* Alphabetical index */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#${letter}`}
            className="px-3 py-1 rounded cursor-pointer btn-primary shine-effect"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Glossary List */}
      <div className="space-y-12">
        {letters.map((letter) => {
          const termsForLetter = filteredData.filter(
            (item) => item.term[0].toUpperCase() === letter
          );
          if (!termsForLetter.length) return null;

          return (
            <section key={letter} id={letter}>
              <h2 className="text-[var(--foreground)] text-2xl mb-4 border-b pb-2">
                {letter}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {termsForLetter.map((item) => (
                  <div
                    key={item.term}
                    className="p-5 rounded-xl shadow-sm bg-white hover:shadow-md transition"
                  >
                    <h3 className="text-xl text-[var(--foreground)] mb-2">
                      {item.term}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
        </div>
      </div>
    </section>
  );
}
