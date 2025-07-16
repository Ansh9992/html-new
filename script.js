// Complete periodic table data for all 118 elements with proper positioning
const elementsData = [
    // Period 1
    { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', row: 1, col: 1, mass: '1.008', config: '1s¹', state: 'Gas', mp: '-259.14°C', bp: '-252.87°C', density: '0.00008988 g/cm³', facts: ['Most abundant element in the universe! 🌌', 'Powers the sun through nuclear fusion ☀️', 'Can be used as clean fuel for cars 🚗', 'Literally means "water former" in Greek 💧'] },
    { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', row: 1, col: 18, mass: '4.003', config: '1s²', state: 'Gas', mp: '-272.2°C', bp: '-268.93°C', density: '0.0001785 g/cm³', facts: ['Makes your voice sound funny! 🎈', 'Second most abundant element in the universe', 'Used in party balloons and medical equipment', 'Named after the Greek sun god Helios ☀️'] },
    
    // Period 2
    { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', row: 2, col: 1, mass: '6.941', config: '[He] 2s¹', state: 'Solid', mp: '180.54°C', bp: '1342°C', density: '0.534 g/cm³', facts: ['Powers your phone and laptop! 🔋', 'Lightest metal in existence', 'Used in mood-stabilizing medications', 'Can cut through butter like... well, butter! 🧈'] },
    { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth-metal', row: 2, col: 2, mass: '9.012', config: '[He] 2s²', state: 'Solid', mp: '1287°C', bp: '2469°C', density: '1.85 g/cm³', facts: ['Used in spacecraft and satellites! 🚀', 'Incredibly toxic - handle with care! ⚠️', 'Transparent to X-rays', 'Harder than steel but lighter than aluminum'] },
    { number: 5, symbol: 'B', name: 'Boron', category: 'metalloid', row: 2, col: 13, mass: '10.811', config: '[He] 2s² 2p¹', state: 'Solid', mp: '2075°C', bp: '4000°C', density: '2.34 g/cm³', facts: ['Essential for plant growth! 🌱', 'Used in bulletproof vests and armor', 'Forms beautiful crystalline structures', 'Named after the mineral borax'] },
    { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', row: 2, col: 14, mass: '12.011', config: '[He] 2s² 2p²', state: 'Solid', mp: '3550°C', bp: '4027°C', density: '2.267 g/cm³', facts: ['The basis of all life on Earth! 🧬', 'Can form diamonds and graphite', 'Makes up 18% of your body weight', 'Essential ingredient in your morning coffee ☕'] },
    { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', row: 2, col: 15, mass: '14.007', config: '[He] 2s² 2p³', state: 'Gas', mp: '-209.86°C', bp: '-195.8°C', density: '0.0012506 g/cm³', facts: ['Makes up 78% of the air you breathe! 🌬️', 'Essential for protein synthesis', 'Used in food preservation', 'Liquid nitrogen is super cold and fun to watch!'] },
    { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', row: 2, col: 16, mass: '15.999', config: '[He] 2s² 2p⁴', state: 'Gas', mp: '-218.4°C', bp: '-182.96°C', density: '0.001429 g/cm³', facts: ['You literally cannot live without it! 💨', 'Makes up 21% of our atmosphere', 'Essential for fire and combustion 🔥', 'Most abundant element in Earth\'s crust'] },
    { number: 9, symbol: 'F', name: 'Fluorine', category: 'nonmetal', row: 2, col: 17, mass: '18.998', config: '[He] 2s² 2p⁵', state: 'Gas', mp: '-219.62°C', bp: '-188.14°C', density: '0.001696 g/cm³', facts: ['In your toothpaste for strong teeth! 🦷', 'Most reactive element in existence', 'Used in non-stick cookware', 'Can eat through glass and concrete!'] },
    { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', row: 2, col: 18, mass: '20.180', config: '[He] 2s² 2p⁶', state: 'Gas', mp: '-248.67°C', bp: '-246.05°C', density: '0.0008999 g/cm³', facts: ['Lights up Vegas and Tokyo! 🌃', 'Gives off that iconic orange-red glow', 'Completely inert - won\'t react with anything', 'Named after the Greek word for "new"'] },
    
    // Period 3
    { number: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', row: 3, col: 1, mass: '22.990', config: '[Ne] 3s¹', state: 'Solid', mp: '97.72°C', bp: '883°C', density: '0.971 g/cm³', facts: ['Essential for nerve function! 🧠', 'Explodes in water - literally! 💥', 'Makes up table salt with chlorine', 'Stored under oil to prevent reactions'] },
    { number: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth-metal', row: 3, col: 2, mass: '24.305', config: '[Ne] 3s²', state: 'Solid', mp: '650°C', bp: '1090°C', density: '1.738 g/cm³', facts: ['Center of every chlorophyll molecule! 🌿', 'Burns with brilliant white light', 'Essential for healthy bones and muscles', 'Used in fireworks and flares ✨'] },
    { number: 13, symbol: 'Al', name: 'Aluminum', category: 'post-transition-metal', row: 3, col: 13, mass: '26.982', config: '[Ne] 3s² 3p¹', state: 'Solid', mp: '660.32°C', bp: '2519°C', density: '2.70 g/cm³', facts: ['Your soda cans are made of this! 🥤', 'Most abundant metal in Earth\'s crust', 'Never rusts, just forms protective coating', 'Can be recycled infinitely without losing quality'] },
    { number: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', row: 3, col: 14, mass: '28.086', config: '[Ne] 3s² 3p²', state: 'Solid', mp: '1414°C', bp: '3265°C', density: '2.3296 g/cm³', facts: ['Powers all your tech devices! 💻', 'Second most abundant element in Earth\'s crust', 'Makes up sand and glass', 'Silicon Valley is named after this element!'] },
    { number: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', row: 3, col: 15, mass: '30.974', config: '[Ne] 3s² 3p³', state: 'Solid', mp: '44.15°C', bp: '280.5°C', density: '1.82 g/cm³', facts: ['In your DNA and bones! 🦴', 'White phosphorus glows in the dark', 'Essential for energy storage in cells', 'Used in matches and fertilizers'] },
    { number: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', row: 3, col: 16, mass: '32.065', config: '[Ne] 3s² 3p⁴', state: 'Solid', mp: '115.21°C', bp: '444.61°C', density: '2.067 g/cm³', facts: ['That rotten egg smell! 🥚', 'Essential for protein structure', 'Used in gunpowder and rubber', 'Forms beautiful yellow crystals'] },
    { number: 17, symbol: 'Cl', name: 'Chlorine', category: 'nonmetal', row: 3, col: 17, mass: '35.453', config: '[Ne] 3s² 3p⁵', state: 'Gas', mp: '-101.5°C', bp: '-34.04°C', density: '0.003214 g/cm³', facts: ['Keeps your swimming pool clean! 🏊', 'Used in bleach and disinfectants', 'Deadly gas but essential for life in small amounts', 'Makes table salt with sodium'] },
    { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', row: 3, col: 18, mass: '39.948', config: '[Ne] 3s² 3p⁶', state: 'Gas', mp: '-189.35°C', bp: '-185.85°C', density: '0.0017837 g/cm³', facts: ['Makes up 1% of our atmosphere! 🌍', 'Used in light bulbs and welding', 'Completely inert and unreactive', 'Named after Greek word meaning "lazy"'] },
    
    // Period 4
    { number: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal', row: 4, col: 1, mass: '39.098', config: '[Ar] 4s¹', state: 'Solid', mp: '63.38°C', bp: '759°C', density: '0.89 g/cm³', facts: ['Essential for your heartbeat! ❤️', 'Found in bananas and potatoes 🍌', 'Soft enough to cut with butter knife', 'Makes purple flames when burned'] },
    { number: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth-metal', row: 4, col: 2, mass: '40.078', config: '[Ar] 4s²', state: 'Solid', mp: '842°C', bp: '1484°C', density: '1.54 g/cm³', facts: ['Builds strong bones and teeth! 🦷', 'Most abundant mineral in your body', 'Found in milk and dairy products 🥛', 'Makes limestone and marble'] },
    { number: 21, symbol: 'Sc', name: 'Scandium', category: 'transition-metal', row: 4, col: 3, mass: '44.956', config: '[Ar] 3d¹ 4s²', state: 'Solid', mp: '1541°C', bp: '2836°C', density: '2.99 g/cm³', facts: ['Super rare and expensive! 💰', 'Used in high-end bicycle frames', 'Lighter than aluminum but stronger', 'Named after Scandinavia'] },
    { number: 22, symbol: 'Ti', name: 'Titanium', category: 'transition-metal', row: 4, col: 4, mass: '47.867', config: '[Ar] 3d² 4s²', state: 'Solid', mp: '1668°C', bp: '3287°C', density: '4.5 g/cm³', facts: ['Strong as steel, light as aluminum! 💪', 'Used in aircraft and spacecraft', 'Biocompatible - used in implants', 'Named after the Greek Titans'] },
    { number: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal', row: 4, col: 5, mass: '50.942', config: '[Ar] 3d³ 4s²', state: 'Solid', mp: '1910°C', bp: '3407°C', density: '6.0 g/cm³', facts: ['Makes steel super strong! 🔩', 'Used in Damascus steel blades', 'Essential trace element for some organisms', 'Named after Vanadis, Norse goddess of beauty'] },
    { number: 24, symbol: 'Cr', name: 'Chromium', category: 'transition-metal', row: 4, col: 6, mass: '51.996', config: '[Ar] 3d⁵ 4s¹', state: 'Solid', mp: '1907°C', bp: '2671°C', density: '7.15 g/cm³', facts: ['Makes things shiny and chrome! ✨', 'Used in stainless steel', 'Gives rubies their red color', 'Essential trace element for glucose metabolism'] },
    { number: 25, symbol: 'Mn', name: 'Manganese', category: 'transition-metal', row: 4, col: 7, mass: '54.938', config: '[Ar] 3d⁵ 4s²', state: 'Solid', mp: '1246°C', bp: '2061°C', density: '7.44 g/cm³', facts: ['Essential for photosynthesis! 🌱', 'Used in steelmaking and batteries', 'Fourth most used metal after iron, aluminum, and copper', 'Can form compounds in 7 different oxidation states'] },
    { number: 26, symbol: 'Fe', name: 'Iron', category: 'transition-metal', row: 4, col: 8, mass: '55.845', config: '[Ar] 3d⁶ 4s²', state: 'Solid', mp: '1538°C', bp: '2862°C', density: '7.874 g/cm³', facts: ['In your blood right now! 🩸', 'Most used metal in the world', 'Core of Earth is mostly iron', 'Rusts when exposed to oxygen and water'] },
    { number: 27, symbol: 'Co', name: 'Cobalt', category: 'transition-metal', row: 4, col: 9, mass: '58.933', config: '[Ar] 3d⁷ 4s²', state: 'Solid', mp: '1495°C', bp: '2927°C', density: '8.86 g/cm³', facts: ['Powers your smartphone battery! 📱', 'Used in jet engines and turbines', 'Essential for vitamin B12', 'Creates beautiful blue pigments'] },
    { number: 28, symbol: 'Ni', name: 'Nickel', category: 'transition-metal', row: 4, col: 10, mass: '58.693', config: '[Ar] 3d⁸ 4s²', state: 'Solid', mp: '1455°C', bp: '2913°C', density: '8.912 g/cm³', facts: ['In your coins and jewelry! 💍', 'Major component of stainless steel', 'Can cause allergic reactions in some people', 'Named after German word for "devil\'s copper"'] },
    { number: 29, symbol: 'Cu', name: 'Copper', category: 'transition-metal', row: 4, col: 11, mass: '63.546', config: '[Ar] 3d¹⁰ 4s¹', state: 'Solid', mp: '1084.62°C', bp: '2562°C', density: '8.933 g/cm³', facts: ['Conducts electricity amazingly! ⚡', 'Used in all electrical wiring', 'Naturally antimicrobial', 'Turns green when oxidized (Statue of Liberty!)'] },
    { number: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal', row: 4, col: 12, mass: '65.409', config: '[Ar] 3d¹⁰ 4s²', state: 'Solid', mp: '419.53°C', bp: '907°C', density: '7.134 g/cm³', facts: ['Boosts your immune system! 🛡️', 'Used to galvanize steel', 'Essential for wound healing', 'Found in sunscreen and batteries'] },
    { number: 31, symbol: 'Ga', name: 'Gallium', category: 'post-transition-metal', row: 4, col: 13, mass: '69.723', config: '[Ar] 3d¹⁰ 4s² 4p¹', state: 'Solid', mp: '29.76°C', bp: '2204°C', density: '5.91 g/cm³', facts: ['Melts in your hand! 🤚', 'Used in LEDs and semiconductors', 'Liquid at room temperature in summer', 'Expands when it freezes (like water!)'] },
    { number: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', row: 4, col: 14, mass: '72.640', config: '[Ar] 3d¹⁰ 4s² 4p²', state: 'Solid', mp: '938.25°C', bp: '2833°C', density: '5.323 g/cm³', facts: ['Revolutionized electronics! 💻', 'First transistor was made from this', 'Predicted by Mendeleev before discovery', 'Used in fiber optic cables'] },
    { number: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', row: 4, col: 15, mass: '74.922', config: '[Ar] 3d¹⁰ 4s² 4p³', state: 'Solid', mp: '817°C', bp: '614°C', density: '5.776 g/cm³', facts: ['Famous poison in detective stories! 🕵️', 'Used in pesticides and wood preservatives', 'Essential trace element in tiny amounts', 'Can exist in multiple forms'] },
    { number: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', row: 4, col: 16, mass: '78.971', config: '[Ar] 3d¹⁰ 4s² 4p⁴', state: 'Solid', mp: '221°C', bp: '685°C', density: '4.809 g/cm³', facts: ['Antioxidant superhero! 🦸', 'Used in anti-dandruff shampoo', 'Conducts electricity when light hits it', 'Essential for thyroid function'] },
    { number: 35, symbol: 'Br', name: 'Bromine', category: 'nonmetal', row: 4, col: 17, mass: '79.904', config: '[Ar] 3d¹⁰ 4s² 4p⁵', state: 'Liquid', mp: '-7.2°C', bp: '58.8°C', density: '3.11 g/cm³', facts: ['Only liquid nonmetal at room temperature! 💧', 'Used in flame retardants', 'Gives off toxic brown vapor', 'Named from Greek word meaning "stench"'] },
    { number: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', row: 4, col: 18, mass: '83.798', config: '[Ar] 3d¹⁰ 4s² 4p⁶', state: 'Gas', mp: '-157.36°C', bp: '-153.22°C', density: '0.003733 g/cm³', facts: ['Superman\'s weakness! 🦸‍♂️', 'Used in high-performance light bulbs', 'Produces white light when electrified', 'Named after Greek word meaning "hidden"'] },
    
    // Period 5
    { number: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali-metal', row: 5, col: 1, mass: '85.468', config: '[Kr] 5s¹', state: 'Solid', mp: '39.31°C', bp: '688°C', density: '1.532 g/cm³', facts: ['Burns violet-red in flames! 🔥', 'Used in atomic clocks', 'More reactive than potassium', 'Named after Latin word for "deep red"'] },
    { number: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth-metal', row: 5, col: 2, mass: '87.62', config: '[Kr] 5s²', state: 'Solid', mp: '777°C', bp: '1382°C', density: '2.64 g/cm³', facts: ['Makes fireworks red! 🎆', 'Used in medical imaging', 'Radioactive isotope used in cancer treatment', 'Named after Strontian, Scotland'] },
    { number: 39, symbol: 'Y', name: 'Yttrium', category: 'transition-metal', row: 5, col: 3, mass: '88.906', config: '[Kr] 4d¹ 5s²', state: 'Solid', mp: '1526°C', bp: '3345°C', density: '4.47 g/cm³', facts: ['In your TV and computer screens! 📺', 'Used in superconductors', 'Makes red phosphors for CRT displays', 'Named after Ytterby, Sweden'] },
    { number: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition-metal', row: 5, col: 4, mass: '91.224', config: '[Kr] 4d² 5s²', state: 'Solid', mp: '1855°C', bp: '4409°C', density: '6.52 g/cm³', facts: ['Nuclear reactor fuel cladding! ⚛️', 'Extremely corrosion resistant', 'Used in high-end kitchen knives', 'Diamond substitute when cubic'] },
    { number: 41, symbol: 'Nb', name: 'Niobium', category: 'transition-metal', row: 5, col: 5, mass: '92.906', config: '[Kr] 4d⁴ 5s¹', state: 'Solid', mp: '2477°C', bp: '4744°C', density: '8.57 g/cm³', facts: ['Superconductor at low temperatures! 🌡️', 'Used in jet engines', 'Hypoallergenic for jewelry', 'Named after Niobe from Greek mythology'] },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition-metal', row: 5, col: 6, mass: '95.96', config: '[Kr] 4d⁵ 5s¹', state: 'Solid', mp: '2623°C', bp: '4639°C', density: '10.2 g/cm³', facts: ['Essential for enzymes! 🧬', 'Used in high-strength steel alloys', 'Sixth highest melting point', 'Important in nitrogen fixation'] },
    { number: 43, symbol: 'Tc', name: 'Technetium', category: 'transition-metal', row: 5, col: 7, mass: '98', config: '[Kr] 4d⁵ 5s²', state: 'Solid', mp: '2157°C', bp: '4265°C', density: '11 g/cm³', facts: ['First artificially made element! 🧪', 'All isotopes are radioactive', 'Used in medical imaging', 'Named from Greek word meaning "artificial"'] },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition-metal', row: 5, col: 8, mass: '101.07', config: '[Kr] 4d⁷ 5s¹', state: 'Solid', mp: '2334°C', bp: '4150°C', density: '12.1 g/cm³', facts: ['Rare and valuable! 💎', 'Used in electrical contacts', 'Catalyst for chemical reactions', 'Named after Ruthenia (Russia)'] },
    { number: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition-metal', row: 5, col: 9, mass: '102.91', config: '[Kr] 4d⁸ 5s¹', state: 'Solid', mp: '1964°C', bp: '3695°C', density: '12.4 g/cm³', facts: ['Most expensive metal! 💰', 'Used in catalytic converters', 'Incredibly reflective and shiny', 'Named from Greek word meaning "rose"'] },
    { number: 46, symbol: 'Pd', name: 'Palladium', category: 'transition-metal', row: 5, col: 10, mass: '106.42', config: '[Kr] 4d¹⁰', state: 'Solid', mp: '1554.9°C', bp: '2963°C', density: '12.0 g/cm³', facts: ['Absorbs hydrogen like a sponge! 🧽', 'Used in jewelry and dentistry', 'Catalyst for hydrogenation reactions', 'Named after asteroid Pallas'] },
    { number: 47, symbol: 'Ag', name: 'Silver', category: 'transition-metal', row: 5, col: 11, mass: '107.87', config: '[Kr] 4d¹⁰ 5s¹', state: 'Solid', mp: '961.78°C', bp: '2162°C', density: '10.501 g/cm³', facts: ['Best electrical conductor! ⚡', 'Antibacterial properties', 'Used in mirrors and photography', 'Currency for thousands of years'] },
    { number: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition-metal', row: 5, col: 12, mass: '112.41', config: '[Kr] 4d¹⁰ 5s²', state: 'Solid', mp: '321.07°C', bp: '767°C', density: '8.69 g/cm³', facts: ['Toxic heavy metal! ⚠️', 'Used in rechargeable batteries', 'Gives beautiful yellow pigments', 'Can cause serious health problems'] },
    { number: 49, symbol: 'In', name: 'Indium', category: 'post-transition-metal', row: 5, col: 13, mass: '114.82', config: '[Kr] 4d¹⁰ 5s² 5p¹', state: 'Solid', mp: '156.60°C', bp: '2072°C', density: '7.31 g/cm³', facts: ['In your touchscreen! 📱', 'Softer than lead', 'Used in LCD displays', 'Makes a crying sound when bent'] },
    { number: 50, symbol: 'Sn', name: 'Tin', category: 'post-transition-metal', row: 5, col: 14, mass: '118.71', config: '[Kr] 4d¹⁰ 5s² 5p²', state: 'Solid', mp: '231.93°C', bp: '2602°C', density: '7.287 g/cm³', facts: ['Been used for 5000+ years! 🕰️', 'Makes "tin cans" (actually steel)', 'Used in soldering electronics', 'Can suffer from "tin pest" in cold weather'] },
    { number: 51, symbol: 'Sb', name: 'Antimony', category: 'metalloid', row: 5, col: 15, mass: '121.76', config: '[Kr] 4d¹⁰ 5s² 5p³', state: 'Solid', mp: '630.63°C', bp: '1587°C', density: '6.685 g/cm³', facts: ['Ancient eye makeup ingredient! 👁️', 'Used in flame retardants', 'Toxic in large amounts', 'Symbol comes from Latin "stibium"'] },
    { number: 52, symbol: 'Te', name: 'Tellurium', category: 'metalloid', row: 5, col: 16, mass: '127.60', config: '[Kr] 4d¹⁰ 5s² 5p⁴', state: 'Solid', mp: '449.51°C', bp: '988°C', density: '6.232 g/cm³', facts: ['Rarer than gold! 🏆', 'Used in solar panels', 'Gives you garlic breath if ingested', 'Improves machinability of steel'] },
    { number: 53, symbol: 'I', name: 'Iodine', category: 'nonmetal', row: 5, col: 17, mass: '126.90', config: '[Kr] 4d¹⁰ 5s² 5p⁵', state: 'Solid', mp: '113.7°C', bp: '184.3°C', density: '4.93 g/cm³', facts: ['Purple crystals that sublime! 💜', 'Essential for thyroid function', 'Used as antiseptic', 'Found in seaweed and salt'] },
    { number: 54, symbol: 'Xe', name: 'Xenon', category: 'noble-gas', row: 5, col: 18, mass: '131.29', config: '[Kr] 4d¹⁰ 5s² 5p⁶', state: 'Gas', mp: '-111.75°C', bp: '-108.12°C', density: '0.005887 g/cm³', facts: ['Used in car headlights! 🚗', 'Can form compounds (rare for noble gas)', 'Used in anesthesia', 'Named from Greek meaning "stranger"'] },
    
    // Period 6
    { number: 55, symbol: 'Cs', name: 'Cesium', category: 'alkali-metal', row: 6, col: 1, mass: '132.91', config: '[Xe] 6s¹', state: 'Solid', mp: '28.44°C', bp: '671°C', density: '1.93 g/cm³', facts: ['Most reactive metal! 🔥', 'Used in atomic clocks', 'Liquid at room temperature in summer', 'Gives blue-violet flame color'] },
    { number: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline-earth-metal', row: 6, col: 2, mass: '137.33', config: '[Xe] 6s²', state: 'Solid', mp: '727°C', bp: '1897°C', density: '3.62 g/cm³', facts: ['Makes fireworks green! 🎆', 'Used in medical X-ray imaging', 'Toxic but useful in small amounts', 'Named from Greek meaning "heavy"'] },
    { number: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanide', row: 6, col: 3, mass: '138.91', config: '[Xe] 5d¹ 6s²', state: 'Solid', mp: '920°C', bp: '3464°C', density: '6.15 g/cm³', facts: ['First of the lanthanides! 🌟', 'Used in camera lenses', 'Gives steel special properties', 'Named from Greek meaning "to lie hidden"'] },
    { number: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanide', row: 9, col: 4, mass: '140.12', config: '[Xe] 4f¹ 5d¹ 6s²', state: 'Solid', mp: '795°C', bp: '3443°C', density: '6.77 g/cm³', facts: ['Most abundant rare earth element! 🏆', 'Used in lighter flints', 'Self-sharpening property', 'Named after asteroid Ceres'] },
    { number: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanide', row: 9, col: 5, mass: '140.91', config: '[Xe] 4f³ 6s²', state: 'Solid', mp: '935°C', bp: '3520°C', density: '6.77 g/cm³', facts: ['Creates green compounds! 💚', 'Used in magnets and lasers', 'Rare earth element', 'Named from Greek meaning "green twin"'] },
    { number: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanide', row: 9, col: 6, mass: '144.24', config: '[Xe] 4f⁴ 6s²', state: 'Solid', mp: '1016°C', bp: '3074°C', density: '7.01 g/cm³', facts: ['Strongest permanent magnets! 🧲', 'Used in headphones and speakers', 'Purple-pink color in compounds', 'Essential for wind turbines'] },
    { number: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanide', row: 9, col: 7, mass: '145', config: '[Xe] 4f⁵ 6s²', state: 'Solid', mp: '1042°C', bp: '3000°C', density: '7.26 g/cm³', facts: ['Completely artificial! 🤖', 'All isotopes are radioactive', 'Used in nuclear batteries', 'Named after Prometheus'] },
    { number: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanide', row: 9, col: 8, mass: '150.36', config: '[Xe] 4f⁶ 6s²', state: 'Solid', mp: '1072°C', bp: '1794°C', density: '7.52 g/cm³', facts: ['Used in powerful magnets! 🧲', 'Cancer treatment applications', 'Absorbs neutrons well', 'Named after mineral samarskite'] },
    { number: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanide', row: 9, col: 9, mass: '151.96', config: '[Xe] 4f⁷ 6s²', state: 'Solid', mp: '826°C', bp: '1529°C', density: '5.24 g/cm³', facts: ['Makes red phosphors in TVs! 📺', 'Most reactive rare earth metal', 'Used in anti-counterfeiting', 'Named after Europe'] },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanide', row: 9, col: 10, mass: '157.25', config: '[Xe] 4f⁷ 5d¹ 6s²', state: 'Solid', mp: '1313°C', bp: '3273°C', density: '7.90 g/cm³', facts: ['Used in MRI contrast agents! 🏥', 'Highest neutron absorption', 'Ferromagnetic at room temperature', 'Named after Johan Gadolin'] },
    { number: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanide', row: 9, col: 11, mass: '158.93', config: '[Xe] 4f⁹ 6s²', state: 'Solid', mp: '1356°C', bp: '3230°C', density: '8.23 g/cm³', facts: ['Creates green phosphors! 💚', 'Used in fluorescent lamps', 'One of the rarest elements', 'Named after Ytterby, Sweden'] },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanide', row: 9, col: 12, mass: '162.50', config: '[Xe] 4f¹⁰ 6s²', state: 'Solid', mp: '1412°C', bp: '2567°C', density: '8.55 g/cm³', facts: ['Used in hybrid car motors! 🚗', 'Magnetic data storage', 'High magnetic susceptibility', 'Named from Greek meaning "hard to obtain"'] },
    { number: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanide', row: 9, col: 13, mass: '164.93', config: '[Xe] 4f¹¹ 6s²', state: 'Solid', mp: '1474°C', bp: '2700°C', density: '8.80 g/cm³', facts: ['Highest magnetic strength! 🧲', 'Used in lasers and magnets', 'Yellow oxide color', 'Named after Stockholm (Holmia)'] },
    { number: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanide', row: 9, col: 14, mass: '167.26', config: '[Xe] 4f¹² 6s²', state: 'Solid', mp: '1529°C', bp: '2868°C', density: '9.07 g/cm³', facts: ['Powers fiber optic cables! 🌐', 'Pink-colored compounds', 'Used in laser surgery', 'Named after Ytterby, Sweden'] },
    { number: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanide', row: 9, col: 15, mass: '168.93', config: '[Xe] 4f¹³ 6s²', state: 'Solid', mp: '1545°C', bp: '1950°C', density: '9.32 g/cm³', facts: ['Rarest rare earth element! 🏆', 'Used in X-ray machines', 'Expensive and hard to obtain', 'Named after ancient name for Scandinavia'] },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanide', row: 9, col: 16, mass: '173.05', config: '[Xe] 4f¹⁴ 6s²', state: 'Solid', mp: '824°C', bp: '1196°C', density: '6.90 g/cm³', facts: ['Used in atomic clocks! ⏰', 'Stress gauge applications', 'Soft and malleable', 'Named after Ytterby, Sweden'] },
    { number: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanide', row: 9, col: 17, mass: '174.97', config: '[Xe] 4f¹⁴ 5d¹ 6s²', state: 'Solid', mp: '1663°C', bp: '3402°C', density: '9.84 g/cm³', facts: ['Last lanthanide element! 🏁', 'Most expensive rare earth', 'Used in PET scan detectors', 'Named after ancient name for Paris'] },
    { number: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition-metal', row: 6, col: 4, mass: '178.49', config: '[Xe] 4f¹⁴ 5d² 6s²', state: 'Solid', mp: '2233°C', bp: '4603°C', density: '13.3 g/cm³', facts: ['Used in nuclear control rods! ⚛️', 'Extremely corrosion resistant', 'Twin of zirconium', 'Named after Copenhagen (Hafnia)'] },
    { number: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition-metal', row: 6, col: 5, mass: '180.95', config: '[Xe] 4f¹⁴ 5d³ 6s²', state: 'Solid', mp: '3017°C', bp: '5458°C', density: '16.4 g/cm³', facts: ['In your smartphone! 📱', 'Extremely corrosion resistant', 'Used in surgical implants', 'Named after Greek mythological figure'] },
    { number: 74, symbol: 'W', name: 'Tungsten', category: 'transition-metal', row: 6, col: 6, mass: '183.84', config: '[Xe] 4f¹⁴ 5d⁴ 6s²', state: 'Solid', mp: '3422°C', bp: '5555°C', density: '19.3 g/cm³', facts: ['Highest melting point! 🔥', 'Used in light bulb filaments', 'Incredibly hard and dense', 'Symbol from German "wolfram"'] },
    { number: 75, symbol: 'Re', name: 'Rhenium', category: 'transition-metal', row: 6, col: 7, mass: '186.21', config: '[Xe] 4f¹⁴ 5d⁵ 6s²', state: 'Solid', mp: '3186°C', bp: '5596°C', density: '20.8 g/cm³', facts: ['One of the rarest elements! 🏆', 'Used in jet engines', 'Third highest melting point', 'Last stable element discovered'] },
    { number: 76, symbol: 'Os', name: 'Osmium', category: 'transition-metal', row: 6, col: 8, mass: '190.23', config: '[Xe] 4f¹⁴ 5d⁶ 6s²', state: 'Solid', mp: '3033°C', bp: '5012°C', density: '22.57 g/cm³', facts: ['Densest natural element! 🏋️', 'Used in fountain pen tips', 'Extremely hard and brittle', 'Named from Greek meaning "smell"'] },
    { number: 77, symbol: 'Ir', name: 'Iridium', category: 'transition-metal', row: 6, col: 9, mass: '192.22', config: '[Xe] 4f¹⁴ 5d⁷ 6s²', state: 'Solid', mp: '2466°C', bp: '4428°C', density: '22.42 g/cm³', facts: ['Most corrosion-resistant metal! 🛡️', 'Used in spark plugs', 'Killed the dinosaurs (asteroid)', 'Named from Latin meaning "rainbow"'] },
    { number: 78, symbol: 'Pt', name: 'Platinum', category: 'transition-metal', row: 6, col: 10, mass: '195.08', config: '[Xe] 4f¹⁴ 5d⁹ 6s¹', state: 'Solid', mp: '1768.2°C', bp: '3825°C', density: '21.46 g/cm³', facts: ['More precious than gold! 💎', 'Used in jewelry and catalysts', 'Chemically inert', 'Symbol of luxury and prestige'] },
    { number: 79, symbol: 'Au', name: 'Gold', category: 'transition-metal', row: 6, col: 11, mass: '196.97', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', state: 'Solid', mp: '1064.18°C', bp: '2856°C', density: '19.282 g/cm³', facts: ['Ultimate store of value! 💰', 'Never tarnishes or corrodes', 'Used in electronics and medicine', 'Symbol of wealth for millennia'] },
    { number: 80, symbol: 'Hg', name: 'Mercury', category: 'transition-metal', row: 6, col: 12, mass: '200.59', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', state: 'Liquid', mp: '-38.83°C', bp: '356.73°C', density: '13.533 g/cm³', facts: ['Only liquid metal at room temp! 🌡️', 'Used in thermometers (historically)', 'Highly toxic to humans', 'Named after Roman god'] },
    { number: 81, symbol: 'Tl', name: 'Thallium', category: 'post-transition-metal', row: 6, col: 13, mass: '204.38', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', state: 'Solid', mp: '304°C', bp: '1473°C', density: '11.8 g/cm³', facts: ['Deadly poison! ☠️', 'Used in rat poison', 'Gives green flame color', 'Named from Greek meaning "green twig"'] },
    { number: 82, symbol: 'Pb', name: 'Lead', category: 'post-transition-metal', row: 6, col: 14, mass: '207.2', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', state: 'Solid', mp: '327.46°C', bp: '1749°C', density: '11.342 g/cm³', facts: ['Used since ancient times! 🏛️', 'Shields against radiation', 'Toxic heavy metal', 'Symbol from Latin "plumbum"'] },
    { number: 83, symbol: 'Bi', name: 'Bismuth', category: 'post-transition-metal', row: 6, col: 15, mass: '208.98', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', state: 'Solid', mp: '271.3°C', bp: '1564°C', density: '9.807 g/cm³', facts: ['Creates beautiful crystals! 💎', 'Used in medicine and cosmetics', 'Least toxic heavy metal', 'Expands when it solidifies'] },
    { number: 84, symbol: 'Po', name: 'Polonium', category: 'post-transition-metal', row: 6, col: 16, mass: '209', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', state: 'Solid', mp: '254°C', bp: '962°C', density: '9.32 g/cm³', facts: ['Discovered by Marie Curie! 👩‍🔬', 'Extremely radioactive', 'Used in nuclear batteries', 'Named after Poland'] },
    { number: 85, symbol: 'At', name: 'Astatine', category: 'nonmetal', row: 6, col: 17, mass: '210', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', state: 'Solid', mp: '302°C', bp: '337°C', density: '7 g/cm³', facts: ['Rarest natural element! 🏆', 'All isotopes are radioactive', 'Only 25 grams exist on Earth', 'Named from Greek meaning "unstable"'] },
    { number: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas', row: 6, col: 18, mass: '222', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', state: 'Gas', mp: '-71°C', bp: '-62°C', density: '0.00973 g/cm³', facts: ['Natural radioactive gas! ⚠️', 'Can accumulate in basements', 'Second leading cause of lung cancer', 'Named from radium'] },
    
    // Period 7
    { number: 87, symbol: 'Fr', name: 'Francium', category: 'alkali-metal', row: 7, col: 1, mass: '223', config: '[Rn] 7s¹', state: 'Solid', mp: '27°C', bp: '677°C', density: '1.87 g/cm³', facts: ['Most unstable element! 💥', 'Extremely rare and radioactive', 'Last discovered natural element', 'Named after France'] },
    { number: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline-earth-metal', row: 7, col: 2, mass: '226', config: '[Rn] 7s²', state: 'Solid', mp: '696°C', bp: '1737°C', density: '5.5 g/cm³', facts: ['Glows in the dark! 🌟', 'Discovered by Marie Curie', 'Highly radioactive', 'Used in early luminous paints'] },
    { number: 89, symbol: 'Ac', name: 'Actinium', category: 'actinide', row: 7, col: 3, mass: '227', config: '[Rn] 6d¹ 7s²', state: 'Solid', mp: '1051°C', bp: '3198°C', density: '10.07 g/cm³', facts: ['First actinide element! 🌟', 'Glows blue-white in dark', 'Extremely radioactive', 'Named from Greek meaning "beam"'] },
    { number: 90, symbol: 'Th', name: 'Thorium', category: 'actinide', row: 10, col: 4, mass: '232.04', config: '[Rn] 6d² 7s²', state: 'Solid', mp: '1750°C', bp: '4788°C', density: '11.72 g/cm³', facts: ['Potential nuclear fuel! ⚛️', 'More abundant than uranium', 'Used in gas lantern mantles', 'Named after Thor'] },
    { number: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinide', row: 10, col: 5, mass: '231.04', config: '[Rn] 5f² 6d¹ 7s²', state: 'Solid', mp: '1572°C', bp: '4000°C', density: '15.37 g/cm³', facts: ['Extremely rare! 🏆', 'Highly radioactive', 'No practical applications', 'Named meaning "before actinium"'] },
    { number: 92, symbol: 'U', name: 'Uranium', category: 'actinide', row: 10, col: 6, mass: '238.03', config: '[Rn] 5f³ 6d¹ 7s²', state: 'Solid', mp: '1135°C', bp: '4131°C', density: '18.95 g/cm³', facts: ['Nuclear power source! ⚡', 'Heaviest natural element', 'Used in nuclear weapons', 'Named after planet Uranus'] },
    { number: 93, symbol: 'Np', name: 'Neptunium', category: 'actinide', row: 10, col: 7, mass: '237', config: '[Rn] 5f⁴ 6d¹ 7s²', state: 'Solid', mp: '644°C', bp: '4174°C', density: '20.45 g/cm³', facts: ['First transuranium element! 🚀', 'Artificially produced', 'Highly radioactive', 'Named after planet Neptune'] },
    { number: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinide', row: 10, col: 8, mass: '244', config: '[Rn] 5f⁶ 7s²', state: 'Solid', mp: '640°C', bp: '3228°C', density: '19.84 g/cm³', facts: ['Nuclear weapons material! 💥', 'Extremely toxic', 'Used in space missions', 'Named after planet Pluto'] },
    { number: 95, symbol: 'Am', name: 'Americium', category: 'actinide', row: 10, col: 9, mass: '243', config: '[Rn] 5f⁷ 7s²', state: 'Solid', mp: '1176°C', bp: '2607°C', density: '13.69 g/cm³', facts: ['In your smoke detector! 🚨', 'Artificially produced', 'Alpha particle source', 'Named after America'] },
    { number: 96, symbol: 'Cm', name: 'Curium', category: 'actinide', row: 10, col: 10, mass: '247', config: '[Rn] 5f⁷ 6d¹ 7s²', state: 'Solid', mp: '1345°C', bp: '3110°C', density: '13.51 g/cm³', facts: ['Glows in the dark! 🌟', 'Used in space missions', 'Highly radioactive', 'Named after Marie Curie'] },
    { number: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinide', row: 10, col: 11, mass: '247', config: '[Rn] 5f⁹ 7s²', state: 'Solid', mp: '1050°C', bp: '2627°C', density: '14.79 g/cm³', facts: ['Artificially created! 🧪', 'No practical applications', 'Highly radioactive', 'Named after Berkeley, California'] },
    { number: 98, symbol: 'Cf', name: 'Californium', category: 'actinide', row: 10, col: 12, mass: '251', config: '[Rn] 5f¹⁰ 7s²', state: 'Solid', mp: '900°C', bp: '1743°C', density: '15.1 g/cm³', facts: ['Neutron source! ⚛️', 'Used in nuclear reactors', 'Extremely expensive', 'Named after California'] },
    { number: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinide', row: 10, col: 13, mass: '252', config: '[Rn] 5f¹¹ 7s²', state: 'Solid', mp: '860°C', bp: '1130°C', density: '8.84 g/cm³', facts: ['Discovered in H-bomb test! 💥', 'Extremely radioactive', 'No practical uses', 'Named after Einstein'] },
    { number: 100, symbol: 'Fm', name: 'Fermium', category: 'actinide', row: 10, col: 14, mass: '257', config: '[Rn] 5f¹² 7s²', state: 'Solid', mp: '1527°C', bp: 'Unknown', density: 'Unknown', facts: ['Discovered in nuclear explosion! 💥', 'Extremely unstable', 'No practical applications', 'Named after Enrico Fermi'] },
    { number: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinide', row: 10, col: 15, mass: '258', config: '[Rn] 5f¹³ 7s²', state: 'Solid', mp: '827°C', bp: 'Unknown', density: 'Unknown', facts: ['Made one atom at a time! ⚛️', 'Extremely short-lived', 'No practical uses', 'Named after Mendeleev'] },
    { number: 102, symbol: 'No', name: 'Nobelium', category: 'actinide', row: 10, col: 16, mass: '259', config: '[Rn] 5f¹⁴ 7s²', state: 'Solid', mp: '827°C', bp: 'Unknown', density: 'Unknown', facts: ['Controversial discovery! 🤔', 'Extremely unstable', 'No practical applications', 'Named after Alfred Nobel'] },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinide', row: 10, col: 17, mass: '262', config: '[Rn] 5f¹⁴ 7s² 7p¹', state: 'Solid', mp: '1627°C', bp: 'Unknown', density: 'Unknown', facts: ['Last actinide! 🏁', 'Extremely short-lived', 'No practical uses', 'Named after Lawrence Berkeley Lab'] },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition-metal', row: 7, col: 4, mass: '267', config: '[Rn] 5f¹⁴ 6d² 7s²', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['First transactinide! 🚀', 'Extremely unstable', 'No practical applications', 'Named after Ernest Rutherford'] },
    { number: 105, symbol: 'Db', name: 'Dubnium', category: 'transition-metal', row: 7, col: 5, mass: '268', config: '[Rn] 5f¹⁴ 6d³ 7s²', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Naming controversy! 🤔', 'Extremely short-lived', 'No practical uses', 'Named after Dubna, Russia'] },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition-metal', row: 7, col: 6, mass: '269', config: '[Rn] 5f¹⁴ 6d⁴ 7s²', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Named after living person! 👨‍🔬', 'Extremely unstable', 'No practical applications', 'Named after Glenn Seaborg'] },
    { number: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition-metal', row: 7, col: 7, mass: '270', config: '[Rn] 5f¹⁴ 6d⁵ 7s²', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Named after Niels Bohr! 👨‍🔬', 'Extremely short-lived', 'No practical uses', 'Lasts only milliseconds'] },
    { number: 108, symbol: 'Hs', name: 'Hassium', category: 'transition-metal', row: 7, col: 8, mass: '277', config: '[Rn] 5f¹⁴ 6d⁶ 7s²', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Named after German state! 🇩🇪', 'Extremely unstable', 'No practical applications', 'Named after Hesse (Hassia)'] },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', category: 'transition-metal', row: 7, col: 9, mass: '278', config: '[Rn] 5f¹⁴ 6d⁷ 7s²', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Named after Lise Meitner! 👩‍🔬', 'Extremely short-lived', 'No practical uses', 'First element named after a woman'] },
        { number: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition-metal', row: 7, col: 10, mass: '281', config: '[Rn] 5f¹⁴ 6d⁹ 7s¹', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Named after German city! 🇩🇪', 'Extremely unstable', 'No practical applications', 'Named after Darmstadt, Germany'] },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition-metal', row: 7, col: 11, mass: '282', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s¹', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Named after X-ray discoverer! 📡', 'Extremely short-lived', 'No practical uses', 'Named after Wilhelm Röntgen'] },
    { number: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition-metal', row: 7, col: 12, mass: '285', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Named after Copernicus! 🌟', 'Extremely unstable', 'No practical applications', 'Named after Nicolaus Copernicus'] },
    { number: 113, symbol: 'Nh', name: 'Nihonium', category: 'post-transition-metal', row: 7, col: 13, mass: '286', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['First Asian-named element! 🇯🇵', 'Extremely short-lived', 'No practical uses', 'Named after Japan (Nihon)'] },
    { number: 114, symbol: 'Fl', name: 'Flerovium', category: 'post-transition-metal', row: 7, col: 14, mass: '289', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Named after Russian lab! 🇷🇺', 'Extremely unstable', 'No practical applications', 'Named after Flerov Laboratory'] },
    { number: 115, symbol: 'Mc', name: 'Moscovium', category: 'post-transition-metal', row: 7, col: 15, mass: '290', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Named after Moscow! 🇷🇺', 'Extremely short-lived', 'No practical uses', 'Named after Moscow region'] },
    { number: 116, symbol: 'Lv', name: 'Livermorium', category: 'post-transition-metal', row: 7, col: 16, mass: '293', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Named after US lab! 🇺🇸', 'Extremely unstable', 'No practical applications', 'Named after Livermore Laboratory'] },
    { number: 117, symbol: 'Ts', name: 'Tennessine', category: 'nonmetal', row: 7, col: 17, mass: '294', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Named after Tennessee! 🇺🇸', 'Extremely short-lived', 'No practical uses', 'Named after Tennessee state'] },
    { number: 118, symbol: 'Og', name: 'Oganesson', category: 'noble-gas', row: 7, col: 18, mass: '294', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', state: 'Solid', mp: 'Unknown', bp: 'Unknown', density: 'Unknown', facts: ['Heaviest element! 🏆', 'Named after Yuri Oganessian', 'Completes period 7', 'May not be truly noble gas-like'] }
];

// Global variables for 3D interactions
let isAutoRotating = false;
let showingCategories = false;
let currentRotation = 0;
let rotationInterval;

// Create periodic table with proper positioning
function createPeriodicTable() {
    const table = document.getElementById('periodicTable');
    table.innerHTML = '';
    
    // Create 10 rows × 18 columns grid (including lanthanides and actinides)
    const totalCells = 10 * 18;
    
    // Fill with empty cells first
    for (let i = 0; i < totalCells; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'element-3d empty';
        table.appendChild(emptyDiv);
    }
    
    // Place elements in their correct positions
    elementsData.forEach(element => {
        let position;
        
        // Calculate position based on row and column
        if (element.row <= 7) {
            position = (element.row - 1) * 18 + (element.col - 1);
        } else {
            // For lanthanides (row 9) and actinides (row 10)
            position = (element.row - 1) * 18 + (element.col - 1);
        }
        
        if (position < totalCells) {
            const elementDiv = table.children[position];
            elementDiv.className = `element-3d ${element.category}`;
            elementDiv.innerHTML = `
                <div class="element-number-3d">${element.number}</div>
                <div class="element-symbol-3d">${element.symbol}</div>
                <div class="element-name-3d">${element.name}</div>
            `;
            
            // Add click and touch event listeners
            elementDiv.addEventListener('click', () => showElementModal(element));
            elementDiv.addEventListener('touchstart', (e) => {
                e.preventDefault();
                showElementModal(element);
            });
            
            // Add hover effect data
            elementDiv.setAttribute('data-element', JSON.stringify(element));
        }
    });
}

// Show element modal with 3D animation
function showElementModal(element) {
    const modal = document.getElementById('elementModal');
    const modalSymbol = document.getElementById('modalSymbol');
    const modalName = document.getElementById('modalName');
    const modalNumber = document.getElementById('modalNumber');
    const propertyGrid = document.getElementById('propertyGrid');
    const factsList = document.getElementById('factsList');
    
    // Populate modal content
    modalSymbol.textContent = element.symbol;
    modalName.textContent = element.name;
    modalNumber.textContent = `#${element.number}`;
    
    // Clear previous content
    propertyGrid.innerHTML = '';
    factsList.innerHTML = '';
    
    // Add properties
    const properties = [
        { label: 'Atomic Mass', value: element.mass },
        { label: 'Electron Configuration', value: element.config },
        { label: 'State at Room Temp', value: element.state },
        { label: 'Melting Point', value: element.mp },
        { label: 'Boiling Point', value: element.bp },
        { label: 'Density', value: element.density }
    ];
    
    properties.forEach(prop => {
        const propertyDiv = document.createElement('div');
        propertyDiv.className = 'property-3d';
        propertyDiv.innerHTML = `
            <div class="property-label-3d">${prop.label}:</div>
            <div class="property-value-3d">${prop.value}</div>
        `;
        propertyGrid.appendChild(propertyDiv);
    });
    
    // Add fun facts
    element.facts.forEach(fact => {
        const factDiv = document.createElement('div');
        factDiv.className = 'fact-3d';
        factDiv.textContent = fact;
        factsList.appendChild(factDiv);
    });
    
    // Show modal with animation
    modal.style.display = 'block';
    setTimeout(() => {
        modal.querySelector('.modal-content-3d').style.animation = 'modalFloat 0.5s ease';
    }, 10);
}

// Control functions
function toggleAutoRotate() {
    const table = document.getElementById('periodicTable');
    const btn = document.getElementById('rotateBtn');
    
    if (isAutoRotating) {
        table.classList.remove('rotating');
        clearInterval(rotationInterval);
        btn.innerHTML = '<i class="fas fa-sync-alt"></i> Auto Rotate';
        isAutoRotating = false;
    } else {
        table.classList.add('rotating');
        btn.innerHTML = '<i class="fas fa-pause"></i> Stop Rotate';
        isAutoRotating = true;
    }
}

function toggleCategories() {
    const legend = document.getElementById('legend');
    const btn = document.getElementById('categoryBtn');
    
    if (showingCategories) {
        legend.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-palette"></i> Show Categories';
        showingCategories = false;
    } else {
        legend.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Categories';
        showingCategories = true;
    }
}

function resetView() {
    const table = document.getElementById('periodicTable');
    table.style.transform = 'rotateX(0deg) rotateY(0deg)';
    
    if (isAutoRotating) {
        toggleAutoRotate();
    }
    
    // Reset all elements to normal state
    document.querySelectorAll('.element-3d:not(.empty)').forEach(element => {
        element.style.transform = '';
        element.style.zIndex = '';
    });
}

// Category highlighting
function highlightCategory(category) {
    document.querySelectorAll('.element-3d').forEach(element => {
        if (element.classList.contains(category)) {
            element.style.transform = 'translateZ(20px) scale(1.1)';
            element.style.zIndex = '100';
        } else if (!element.classList.contains('empty')) {
            element.style.opacity = '0.3';
        }
    });
}

function clearHighlight() {
    document.querySelectorAll('.element-3d').forEach(element => {
        element.style.transform = '';
        element.style.opacity = '';
        element.style.zIndex = '';
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Show loading screen
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Create periodic table
    setTimeout(() => {
        createPeriodicTable();
        
        // Hide loading screen
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
    
    // Event listeners for controls
    document.getElementById('rotateBtn').addEventListener('click', toggleAutoRotate);
    document.getElementById('categoryBtn').addEventListener('click', toggleCategories);
    document.getElementById('resetBtn').addEventListener('click', resetView);
    
    // Modal event listeners
    const modal = document.getElementById('elementModal');
    const closeBtn = document.querySelector('.close-3d');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
    
    // Legend category highlighting
    document.querySelectorAll('.legend-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const category = item.getAttribute('data-category');
            highlightCategory(category);
        });
        
        item.addEventListener('mouseleave', () => {
            clearHighlight();
        });
    });
    
    // Add parallax effect to the page
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.container');
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    });
    
    // Add mouse tracking for 3D effect
    document.addEventListener('mousemove', (e) => {
        const table = document.getElementById('periodicTable');
        const rect = table.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const rotateX = (y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * 10;
        
        if (!isAutoRotating) {
            table.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isAutoRotating) {
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const deltaX = touchX - touchStartX;
            const deltaY = touchY - touchStartY;
            
            const table = document.getElementById('periodicTable');
            const rotateY = deltaX * 0.1;
            const rotateX = -deltaY * 0.1;
            
            table.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });
    
    // Initialize legend as hidden
    document.getElementById('legend').style.display = 'none';
    
    // Add some cool particle effects
    createParticles();
});

// Create floating particles for extra visual appeal
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '1';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.backgroundColor = '#fff';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${5 + Math.random() * 10}s ease-in-out infinite`;
        particlesContainer.appendChild(particle);
    }
    
    // Add floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
    `;
    document.head.appendChild(style);
}

