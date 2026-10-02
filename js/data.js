/**
 * HAIRÉA - Luxury Hair Care & Cosmetics Data Store
 * "Know Your Hair. Love Your Ritual."
 */

const INITIAL_PRODUCTS = [
  {
    id: "hrea-01",
    name: "Botanical Silk Cleanser",
    subtitle: "Gentle Restorative Shampoo",
    category: "Shampoo",
    price: 36.00,
    rating: 4.9,
    reviewsCount: 342,
    badge: "Bestseller",
    hairType: ["Straight", "Wavy", "Curly", "Coily"],
    scalpType: ["Dry", "Normal", "Sensitive"],
    concerns: ["Dryness & Dehydration", "Frizz Control", "Dullness & Shine"],
    freeFrom: ["Sulfate-Free", "Silicone-Free", "Paraben-Free", "Vegan", "Cruelty-Free"],
    image: "IMAGE/Product.jpg",
    gallery: [
      "IMAGE/Product.jpg",
      "IMAGE/SHOP.jpg",
      "IMAGE/Product1.jpg",
      "IMAGE/Product4.jpg"
    ],
    description: "A decadent, sulfate-free foaming ritual infused with Fermented Camellia Seed Oil, French Meadowfoam, and Bio-Hydrolized Silk. Gently lifts impurities while restoring the hair cuticle's lipid barrier without stripping essential natural oils.",
    volume: "250 ml / 8.45 fl oz",
    scent: "Sandalwood & White Jasmine",
    scentNotes: "Top: Bergamot, Mandarin. Heart: White Jasmine, Magnolia. Base: Creamy Sandalwood, Cashmere Amber.",
    benefits: [
      "Deeply cleanses without stripping natural moisture",
      "Imparts 4x more radiant high-gloss shine",
      "Soothes sensitive, tight, or dry scalp barriers",
      "Safe for keratin-treated & color-treated strands"
    ],
    ingredientsKey: [
      { name: "Fermented Camellia Seed", role: "Lipid Matrix Reconstruction", origin: "Jeju Island, Korea" },
      { name: "Bio-Hydrolyzed Silk Protein", role: "Cuticle Smoothing & Strength", origin: "Provence, France" },
      { name: "Meadowfoam Seed Oil", role: "Moisture Sealing & Elasticity", origin: "Oregon, USA" },
      { name: "Rosemary Leaf Extract", role: "Microcirculation & Follicle Vitality", origin: "Atlas Mountains" }
    ],
    fullIngredients: "Aqua/Water/Eau, Sodium Cocoyl Isethionate, Cocamidopropyl Hydroxysultaine, Camellia Japonica Seed Oil Ferment Extract, Hydrolyzed Vegetable Silk Protein, Limnanthes Alba (Meadowfoam) Seed Oil, Rosmarinus Officinalis (Rosemary) Leaf Extract, Sodium Lauroyl Methyl Isethionate, Glycerin, Panthenol (Pro-Vitamin B5), Niacinamide, Sodium Hyaluronate, Tocopherol (Vitamin E), Citrus Aurantium Bergamia Fruit Oil, Santalum Album (Sandalwood) Oil, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    clinicalResults: "97% reported softer, silkier strands after 1 wash. 94% observed reduced scalp redness in 14 days.",
    inStock: true,
    featured: true,
    isSubscription: true
  },
  {
    id: "hrea-02",
    name: "Lipid Velvet Moisture Melt",
    subtitle: "Intensive Hydration Conditioner",
    category: "Conditioner",
    price: 38.00,
    rating: 4.95,
    reviewsCount: 289,
    badge: "Award Winner",
    hairType: ["Curly", "Coily", "Wavy", "Damaged"],
    scalpType: ["Dry", "Normal", "Oily"],
    concerns: ["Deep Hydration", "Frizz Control", "Damage & Breakage", "Detangling"],
    freeFrom: ["Sulfate-Free", "Silicone-Free", "Paraben-Free", "Vegan", "Cruelty-Free"],
    image: "IMAGE/Product1.jpg",
    gallery: [
      "IMAGE/Product1.jpg",
      "IMAGE/SHOP1.jpg",
      "IMAGE/Product2.jpg"
    ],
    description: "An ultra-nourishing buttery conditioner engineered with plant squalane, Kalahari melon seed extract, and 18-MEA bio-mimetic ceramides to instantly slip through knots and melt into dehydrated strands.",
    volume: "250 ml / 8.45 fl oz",
    scent: "Vanilla Bourbon & Rose Water",
    scentNotes: "Top: Damask Rose, Lychee. Heart: Amber Blossom. Base: Madagascar Vanilla Pod, Warm Cedar.",
    benefits: [
      "Instantly detangles with effortless comb-glide",
      "Restores inner core moisture by 89% in single use",
      "Zero weight or greasy residue on fine to thick hair",
      "Reduces split end formation over time"
    ],
    ingredientsKey: [
      { name: "Bio-Mimetic Ceramide Complex", role: "Inter-Cellular Cement Repair", origin: "Switzerland" },
      { name: "Kalahari Melon Seed Oil", role: "Omega-6 & 9 Deep Nourishment", origin: "Namibia" },
      { name: "Olive Squalane", role: "Weightless Moisture Shield", origin: "Spain" }
    ],
    fullIngredients: "Aqua/Water/Eau, Cetearyl Alcohol, Behentrimonium Methosulfate, Squalane, Citrullus Lanatus (Kalahari Melon) Seed Oil, Ceramide NP, Ceramide AP, Phytosphingosine, Butyrospermum Parkii (Shea) Butter, Hydrolyzed Quinoa, Panthenol, Rosa Damascena Flower Water, Vanilla Planifolia Fruit Extract, Polyquaternium-37, Caprylyl Glycol, Hexylene Glycol.",
    clinicalResults: "98% noticed immediate detangling ease. 91% reported significant reduction in breakage during styling.",
    inStock: true,
    featured: true,
    isSubscription: true
  },
  {
    id: "hrea-03",
    name: "Peptide Bond Elixir Mask",
    subtitle: "Deep Cellular Repair Treatment",
    category: "Treatment",
    price: 54.00,
    rating: 5.0,
    reviewsCount: 512,
    badge: "Editor's Choice",
    hairType: ["Damaged", "Color-Treated", "Straight", "Wavy", "Curly", "Coily"],
    scalpType: ["Dry", "Normal", "Oily", "Sensitive"],
    concerns: ["Damage & Breakage", "Color Fade & Chemical Damage", "Split Ends"],
    freeFrom: ["Sulfate-Free", "Silicone-Free", "Paraben-Free", "Vegan", "Cruelty-Free"],
    image: "IMAGE/Product2.jpg",
    gallery: [
      "IMAGE/Product2.jpg",
      "IMAGE/SHOP2.jpg",
      "IMAGE/Product7.jpg"
    ],
    description: "Formulated with the proprietary Tri-Peptide 29 Bond Rebuilder and Cold-Pressed Murumuru Butter. Penetrates the inner cortex to reconnect broken polypeptide chains caused by bleach, hot tools, and environmental stressors.",
    volume: "200 ml / 6.76 fl oz",
    scent: "Smoky Amber & Cedarwood",
    scentNotes: "Top: Smoked Cardamom, Pink Peppercorn. Heart: Iris, Palo Santo. Base: Atlas Cedar, Rich Vetiver.",
    benefits: [
      "Rebuilds broken structural keratin bonds in 5 minutes",
      "Increases tensile hair strength by 320%",
      "Protects color radiance and prevents brassy tones",
      "Leaves hair velvety smooth and touchably resilient"
    ],
    ingredientsKey: [
      { name: "Tri-Peptide 29 Complex", role: "Polypeptide Chain Repair", origin: "Boston, USA" },
      { name: "Astrocaryum Murumuru Butter", role: "Lipid Matrix Sealant", origin: "Amazon Basin" },
      { name: "Golden Millet Oil", role: "Natural Keratin Stimulator", origin: "Alps, Austria" }
    ],
    fullIngredients: "Aqua/Water, Cetyl Alcohol, Tri-Peptide 29, Astrocaryum Murumuru Seed Butter, Hydrolyzed Adansonia Digitata (Baobab) Seed Extract, Panicum Miliaceum (Millet) Seed Oil, Hydrogenated Castor Oil/Sebacic Acid Copolymer, Behentrimonium Chloride, Isopropyl Myristate, Parfum, Tocopheryl Acetate, Tetrasodium Glutamate Diacetate.",
    clinicalResults: "Clinically proven to repair 82% of broken chemical bonds within 3 treatments. 99% agreed hair felt reborn.",
    inStock: true,
    featured: true,
    isSubscription: true
  },
  {
    id: "hrea-04",
    name: "Golden Nectar Scalp Serum",
    subtitle: "Follicle Density & Root Stimulant",
    category: "Scalp Care",
    price: 48.00,
    rating: 4.88,
    reviewsCount: 194,
    badge: "Trending",
    hairType: ["Straight", "Wavy", "Curly", "Coily", "Damaged"],
    scalpType: ["Dry", "Oily", "Sensitive"],
    concerns: ["Scalp Balance & Detox", "Thinning & Density", "Dryness & Dehydration"],
    freeFrom: ["Sulfate-Free", "Silicone-Free", "Paraben-Free", "Vegan", "Cruelty-Free"],
    image: "IMAGE/Product3.jpg",
    gallery: [
      "IMAGE/Product3.jpg",
      "IMAGE/SHOP3.jpg",
      "IMAGE/Product.jpg"
    ],
    description: "An invigorating water-light pre-wash and leave-in elixir powered by fermented Rosemary stem cells, Copper Tripeptide-1, and Zinc PCA. Clarifies follicle congestion while calming scalp irritation and encouraging thicker, fuller regrowth.",
    volume: "50 ml / 1.7 fl oz",
    scent: "Crushed Eucalyptus & Herbaceous Mint",
    scentNotes: "Top: French Lavender, Peppermint. Heart: Crisp Rosemary, Tea Tree. Base: Hinoki Cypress.",
    benefits: [
      "Balances scalp microbiome and sebum production",
      "Promotes noticeable density and root lift in 60 days",
      "Zero greasy residue; absorbs rapidly into the root zone",
      "Relieves flaking, tightness, and itching instantly"
    ],
    ingredientsKey: [
      { name: "Copper Tripeptide-1", role: "Follicle Size Expansion & Vitality", origin: "South Korea" },
      { name: "Rosemary Stem Cells", role: "DHT Micro-Inhibition", origin: "Provence" },
      { name: "Zinc PCA", role: "Sebum Regulation & Microbiome Health", origin: "Japan" }
    ],
    fullIngredients: "Aqua, Propanediol, Glycerin, Rosmarinus Officinalis (Rosemary) Extract, Copper Tripeptide-1, Zinc PCA, Salicylic Acid (Willow Bark Derived), Caffeine, Epilobium Angustifolium Flower/Leaf/Stem Extract, Mentha Piperita (Peppermint) Oil, Eucalyptus Globulus Leaf Oil, Xanthan Gum, Hydroxyethylcellulose, Benzyl Alcohol.",
    clinicalResults: "92% noticed visible scalp soothing on day 1. 87% noted fuller-looking hairline after 8 weeks.",
    inStock: true,
    featured: false,
    isSubscription: true
  },
  {
    id: "hrea-05",
    name: "Luminous Glass Glossing Oil",
    subtitle: "Weightless Heat Protectant & Shimmer",
    category: "Styling & Oil",
    price: 42.00,
    rating: 4.96,
    reviewsCount: 420,
    badge: "Viral Sensation",
    hairType: ["Straight", "Wavy", "Curly", "Coily", "Damaged", "Color-Treated"],
    scalpType: ["Dry", "Normal", "Oily"],
    concerns: ["Frizz Control", "Dullness & Shine", "Heat Protection (up to 450°F)"],
    freeFrom: ["Sulfate-Free", "Silicone-Free", "Paraben-Free", "Vegan", "Cruelty-Free"],
    image: "IMAGE/Product4.jpg",
    gallery: [
      "IMAGE/Product4.jpg",
      "IMAGE/SHOP4.jpg",
      "IMAGE/Product5.jpg"
    ],
    description: "A crystal-clear, dry oil finisher capturing 100% cold-pressed organic Marula, Tsubaki oil, and Golden Jojoba. Delivers mirror-like gloss and high-definition frizz resistance with thermal defense up to 450°F (232°C).",
    volume: "60 ml / 2.02 fl oz",
    scent: "Champagne Fleur & Pear",
    scentNotes: "Top: Sparkling Green Pear, White Tea. Heart: Peony, Jasmine Sambac. Base: Blonde Woods, White Musk.",
    benefits: [
      "450°F thermal heat defense shield",
      "Featherlight dry-touch finish with zero clumping",
      "72-hour humidity protection and mirror shine",
      "Tames flyaways and seals split strands instantly"
    ],
    ingredientsKey: [
      { name: "Organic Marula Oil", role: "Antioxidant & High-Refraction Shine", origin: "Madagascar" },
      { name: "Tsubaki Flower Oil", role: "Lipid replenishment", origin: "Oshima Island, Japan" },
      { name: "Plant-Derived Hemisqualane", role: "Silicone Alternative Glide", origin: "Brazil" }
    ],
    fullIngredients: "C13-15 Alkane (Hemisqualane), Sclerocarya Birrea (Marula) Seed Oil, Camellia Japonica (Tsubaki) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Caprylic/Capric Triglyceride, Fragrance (Parfum), Helianthus Annuus (Sunflower) Seed Oil, Beta-Carotene.",
    clinicalResults: "99% agreed it provided radiant shine without weighing hair down. Proven 72h anti-frizz barrier.",
    inStock: true,
    featured: true,
    isSubscription: true
  },
  {
    id: "hrea-06",
    name: "Architect Curl Definition Custard",
    subtitle: "Spring-Memory Hydrating Cream",
    category: "Styling & Oil",
    price: 34.00,
    rating: 4.87,
    reviewsCount: 178,
    badge: "Curl Favorite",
    hairType: ["Wavy", "Curly", "Coily"],
    scalpType: ["Dry", "Normal"],
    concerns: ["Curl Definition & Bounce", "Frizz Control", "Deep Hydration"],
    freeFrom: ["Sulfate-Free", "Silicone-Free", "Paraben-Free", "Vegan", "Cruelty-Free"],
    image: "IMAGE/Product5.jpg",
    gallery: [
      "IMAGE/Product5.jpg",
      "IMAGE/SHOP5.jpg",
      "IMAGE/Product6.jpg"
    ],
    description: "A rich botanical styling whip engineered with Agave Nectar, Flaxseed Gel, and Raw Cupuaçu Butter. Clumps curls into bouncy, flake-free ribbons of moisture with touchable medium hold and supreme bounce.",
    volume: "240 ml / 8.1 fl oz",
    scent: "Coconut Milk & White Fig",
    scentNotes: "Top: Green Fig Leaf, Coconut Water. Heart: Frangipani, Solar Amber. Base: Creamy Tonka Bean.",
    benefits: [
      "Defines curls and coils with zero crunch or flaking",
      "Locks in moisture for 5 days without re-wetting",
      "Enhances natural curl pattern geometry and elasticity",
      "Infused with heat & UV protective botanicals"
    ],
    ingredientsKey: [
      { name: "Golden Flaxseed Mucilage", role: "Pattern Lock & Elastic Hold", origin: "Canada" },
      { name: "Raw Cupuaçu Butter", role: "Hydration Retention & Softness", origin: "Brazil" },
      { name: "Blue Agave Extract", role: "Humectant & Moisture Magnet", origin: "Mexico" }
    ],
    fullIngredients: "Aqua, Linum Usitatissimum (Flaxseed) Extract, Theobroma Grandiflorum (Cupuaçu) Seed Butter, Agave Tequilana Leaf Extract, Aloe Barbadensis Leaf Juice, Cetearyl Olivate, Sorbitan Olivate, Hydroxypropyl Starch Phosphate, Guar Hydroxypropyltrimonium Chloride, Parfum, Dehydroacetic Acid.",
    clinicalResults: "100% of curly panel participants reported bouncy, soft curls with zero flake or residue.",
    inStock: true,
    featured: false,
    isSubscription: true
  },
  {
    id: "hrea-07",
    name: "Atmospheric Clarifying Apple Polish",
    subtitle: "Weekly Scalp & Strand Clarifier",
    category: "Scalp Care",
    price: 39.00,
    rating: 4.91,
    reviewsCount: 165,
    badge: "Cleanse Reset",
    hairType: ["Straight", "Wavy", "Curly", "Coily", "Color-Treated"],
    scalpType: ["Oily", "Normal", "Dry"],
    concerns: ["Scalp Balance & Detox", "Dullness & Shine", "Product Buildup"],
    freeFrom: ["Sulfate-Free", "Silicone-Free", "Paraben-Free", "Vegan", "Cruelty-Free"],
    image: "IMAGE/Product6.jpg",
    gallery: [
      "IMAGE/Product6.jpg",
      "IMAGE/SHOP6.jpg",
      "IMAGE/Product.jpg"
    ],
    description: "An artisanal scalp exfoliator with micro-milled Pink Himalayan salt crystals, Organic Apple Cider Vinegar, and Fermented Black Tea Komubucha. Effortlessly dissolves styling residue, hard water minerals, and pollutants.",
    volume: "220 g / 7.76 oz",
    scent: "Crisp Green Apple & Sage",
    scentNotes: "Top: Granny Smith Apple, Bergamot. Heart: White Sage, Spearmint. Base: Cedarwood, Amber.",
    benefits: [
      "Removes 99% of styling residue & hard water build-up",
      "Restores scalp pH balance to natural 4.5 - 5.5 acidity",
      "Transforms heavy, lifeless hair into airy volume",
      "Stimulates microcirculation during gentle massage"
    ],
    ingredientsKey: [
      { name: "Raw Apple Cider Vinegar", role: "Cuticle Clarifier & pH Reset", origin: "Normandy, France" },
      { name: "Himalayan Pink Rock Minerals", role: "Gentle Follicle Exfoliation", origin: "Himalayan Range" },
      { name: "Fermented Kombucha Bio-Tea", role: "Antioxidant Cuticle Sealer", origin: "Kyoto, Japan" }
    ],
    fullIngredients: "Sodium Chloride, Aqua, Pyrus Malus (Apple) Cider Vinegar, Saccharomyces/Xylinum/Black Tea Ferment, Cocamidopropyl Betaine, Decyl Glucoside, Glycerin, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Salvia Officinalis (Sage) Extract, Parfum, Potassium Sorbate.",
    clinicalResults: "96% felt their scalp could 'breathe' again after a single application. 93% longer time between washes.",
    inStock: true,
    featured: false,
    isSubscription: true
  },
  {
    id: "hrea-08",
    name: "Aura Violet Chromatic Masque",
    subtitle: "Anti-Brass Blonde & Grey Illuminator",
    category: "Treatment",
    price: 46.00,
    rating: 4.93,
    reviewsCount: 210,
    badge: "Color Master",
    hairType: ["Color-Treated", "Straight", "Wavy", "Curly"],
    scalpType: ["Dry", "Normal", "Sensitive"],
    concerns: ["Color Fade & Chemical Damage", "Dullness & Shine", "Damage & Breakage"],
    freeFrom: ["Sulfate-Free", "Silicone-Free", "Paraben-Free", "Vegan", "Cruelty-Free"],
    image: "IMAGE/Product7.jpg",
    gallery: [
      "IMAGE/Product7.jpg",
      "IMAGE/SHOP7.jpg",
      "IMAGE/Product2.jpg"
    ],
    description: "A deep amethyst-pigmented treatment infused with Wild Blueberry anthocyanins, Purple Orchid extract, and Hydrolyzed Keravis. Neutralizes orange and yellow brassy tones while infusing deep moisture into bleached and lightened strands.",
    volume: "200 ml / 6.76 fl oz",
    scent: "Violet Blossom & Blackberry",
    scentNotes: "Top: Wild Blackberry, Cassis. Heart: French Violet, Iris Pallida. Base: Sheer Musk, Oakmoss.",
    benefits: [
      "Instantly cools unwanted brassy & yellow undertones",
      "Deeply conditions processed, bleached, and fragile locks",
      "Boosts luminous icy brightness and silver dimension",
      "Zero violet staining on skin or shower tiles"
    ],
    ingredientsKey: [
      { name: "Wild Arctic Blueberry Extract", role: "Natural Amethyst Pigment Neutralizer", origin: "Lapland, Finland" },
      { name: "Purple Orchid Petals", role: "Hydration Reservoir & Elasticity", origin: "Bali, Indonesia" },
      { name: "Hydrolyzed Keravis Complex", role: "Tensile Strength & Cuticle Reinforcement", origin: "UK" }
    ],
    fullIngredients: "Aqua, Cetearyl Alcohol, Vaccinium Myrtillus Fruit Extract, Orchis Mascula Extract, Hydrolyzed Vegetable Protein PG-Propyl Silanetriol, Ext. Violet 2 (CI 60730), Behentrimonium Chloride, Isopropyl Palmitate, Amodimethicone (Bio-Derived), Parfum, Citric Acid, Benzyl Alcohol.",
    clinicalResults: "100% color neutralization achieved after 3 minutes. 95% reduction in post-bleach brittleness.",
    inStock: true,
    featured: false,
    isSubscription: true
  }
];

const INITIAL_ROUTINES = [
  {
    id: "routine-curly",
    name: "Architectural Curl & Coil Revival",
    tagline: "High-definition bounce, zero frizz, and 72-hour moisture memory.",
    hairType: "Curly & Coily (3A - 4C)",
    idealFor: "Dry, frizzy, dull, or tangled curl patterns seeking sculpted definition without stiffness.",
    duration: "15 - 20 mins",
    image: "Hair Care Routines/oJCno19h4v-5mE4FmU3Q-UzQfyNpcVnS2fZiNLt7C4b-Ta9CK-KS9IJb3NGiD-Leue2n65fdBT2aTbEkFjCc0KksHJhvgpKiOzcgiwecod9Bo-slJKi153HXIAGmG2JHysoyXCc__2iN_BLRKp_4jqr1aQZxxIpqq-UpAbn5MUe.jpg",
    bannerImage: "Hair Care Routines/KujZ75IoilHJIRHOsS4_k0rI2QHyn0Y-B_Ky9TxOCqkQVkTLsrKADVQPWsm6aD2_b5i13Ap36gByLH0pfUkQIPS60cmAdzNBA2Bc_Yt-Pg8Ycpyze40OtjIrcPkGj4ka_uYivrjVtB-emH-aK1A8pKj9l8Zxtz.jpg",
    productIds: ["hrea-01", "hrea-02", "hrea-06", "hrea-05"],
    steps: [
      {
        step: 1,
        title: "Cleanse with Botanical Silk Cleanser",
        instruction: "Lather in wet palms. Massage into scalp using circular finger movements to dislodge build-up. Rinse with lukewarm water.",
        time: "3 mins"
      },
      {
        step: 2,
        title: "Drench with Lipid Velvet Moisture Melt",
        instruction: "Section wet hair into 4 quadrants. Apply generously from mid-lengths to ends. Detangle with a wide-tooth comb or fingers. Leave on for 4 minutes before a cool rinse.",
        time: "5 mins"
      },
      {
        step: 3,
        title: "Sculpt with Architect Curl Definition Custard",
        instruction: "On soaking wet hair, rake the custard through small sections and scrunch upwards toward the scalp. Air-dry or diffuse on low heat.",
        time: "6 mins"
      },
      {
        step: 4,
        title: "Seal & Break the Cast with Luminous Glass Oil",
        instruction: "Once 100% dry, warm 2 drops of oil in palms and gently scrunch out the light cast for ultra-soft, mirror-like curls.",
        time: "2 mins"
      }
    ],
    bundlePrice: 130.00,
    originalPrice: 150.00,
    savings: "15% OFF"
  },
  {
    id: "routine-damaged",
    name: "Bond Architecture Cellular Repair",
    tagline: "Rebuild chemically stressed, bleached, or heat-ravaged hair from within.",
    hairType: "Damaged, Bleached & Brittle",
    idealFor: "Hair prone to snapping, split ends, color fade, or rough straw-like texture.",
    duration: "20 - 25 mins",
    image: "Hair Care Routines/CV1qg4urvC95k-YnhplwM-ym4JvnWfyrP4O3JDmwk0puY7iBxlHAjTrsuOKIfSPwc4Su65ZbCbGE1ETmcEiLxzpRUdRF6y1vxgCnZese3ihZl641C8UNiEmowGOdhv9OHe4unRr24YcV6G7_0rZTT30AAP-6W0.jpg",
    bannerImage: "Hair Care Routines/V75gGZEKwzVmnMuphrAeX6BhCK9tcXxC4qgXKsAtjhbtZX5NIrGTiC3YK26Gj1aIYICXaTiUUOPjAK0RZTL0kHGONkVdc6Uxdrmk1lfxZlh0eLpdETivRSuYOcclbLDL1mdGrK3AUQ4VS22ny6y8-ijxrHNyj9.jpg",
    productIds: ["hrea-01", "hrea-03", "hrea-05"],
    steps: [
      {
        step: 1,
        title: "Cleanse with Botanical Silk Cleanser",
        instruction: "Wash gently to prepare cuticles to receive restorative peptides without friction.",
        time: "3 mins"
      },
      {
        step: 2,
        title: "Rebuild with Peptide Bond Elixir Mask",
        instruction: "Towel-blot excess water. Apply mask from roots to ends. Wrap in a warm microfiber towel or shower cap for 10-15 minutes.",
        time: "15 mins"
      },
      {
        step: 3,
        title: "Shield with Luminous Glass Glossing Oil",
        instruction: "Distribute 3 drops through damp ends before blow-drying or air-drying for 450°F heat defense.",
        time: "2 mins"
      }
    ],
    bundlePrice: 112.00,
    originalPrice: 132.00,
    savings: "15% OFF"
  },
  {
    id: "routine-scalp",
    name: "Microbiome Detox & Follicle Awakening",
    tagline: "Exfoliate, clarify, and stimulate the root foundation for denser, lighter hair.",
    hairType: "Oily, Flaky or Congested Scalp",
    idealFor: "Heavy roots, product buildup, flaky scalps, and fine strands that easily look greasy.",
    duration: "15 mins",
    image: "Hair Care Routines/iOrP9_d6Jsg9IlMJI5uMJMjrfiQYjnPDxwmG_LxM0EvXcFHdDKDHG-8dYjW5-zt0a-lI0ydZ8wiS1jAxysU1GWC0NjHmUP4IU-NaTD3Xo0g1oZl8klBJ9rvtoPiCdxEngweJRMpWwGi9t8TsfcTnQYTWW1Rp9k.jpg",
    bannerImage: "IMAGE/Hair Diagnostic Quiz21.jpg",
    productIds: ["hrea-07", "hrea-04", "hrea-01"],
    steps: [
      {
        step: 1,
        title: "Detox with Apple Clarifying Scalp Polish",
        instruction: "Part wet hair and massage salt scrub directly onto the scalp in small circular motions. Let sit for 3 minutes before rinsing.",
        time: "5 mins"
      },
      {
        step: 2,
        title: "Cleanse with Botanical Silk Cleanser",
        instruction: "Follow with a small pump of shampoo to wash away remaining exfoliants and soften hair lengths.",
        time: "3 mins"
      },
      {
        step: 3,
        title: "Energize with Golden Nectar Scalp Serum",
        instruction: "Towel-dry hair. Apply 1 full dropper of serum across the crown and hairline. Massage gently with fingertips. Do not rinse.",
        time: "3 mins"
      }
    ],
    bundlePrice: 104.00,
    originalPrice: 123.00,
    savings: "15% OFF"
  },
  {
    id: "routine-straight",
    name: "Liquid Glass Silk Lamination",
    tagline: "Mirror-like light reflection, silky swing, and anti-static humidity barrier.",
    hairType: "Fine to Medium Straight / Wavy",
    idealFor: "Straight or gently wavy hair prone to flyaways, lack of volume, or dull lifeless strands.",
    duration: "12 mins",
    image: "Hair Care Routines/V75gGZEKwzVmnMuphrAeX6BhCK9tcXxC4qgXKsAtjhbtZX5NIrGTiC3YK26Gj1aIYICXaTiUUOPjAK0RZTL0kHGONkVdc6Uxdrmk1lfxZlh0eLpdETivRSuYOcclbLDL1mdGrK3AUQ4VS22ny6y8-ijxrHNyj9.jpg",
    bannerImage: "IMAGE/Hair Diagnostic Quiz.jpg",
    productIds: ["hrea-01", "hrea-02", "hrea-05"],
    steps: [
      {
        step: 1,
        title: "Botanical Silk Shampoo",
        instruction: "Gentle cleanse focusing on root aeration.",
        time: "3 mins"
      },
      {
        step: 2,
        title: "Lipid Velvet Conditioner",
        instruction: "Apply only to the lower two-thirds of hair to maintain natural root lift.",
        time: "4 mins"
      },
      {
        step: 3,
        title: "Luminous Glass Finishing Oil",
        instruction: "Emulsify 1 drop in palms and smooth along hair length for glass-like shine.",
        time: "1 min"
      }
    ],
    bundlePrice: 98.00,
    originalPrice: 116.00,
    savings: "15% OFF"
  }
];

const INITIAL_TRANSFORMATIONS = [
  {
    id: "tr-01",
    clientName: "Elena Rostova",
    location: "Paris, France",
    hairType: "Type 3B Curly",
    scalp: "Dry & Sensitive",
    concern: "Frizz & Loss of Pattern",
    timeframe: "30 Days of Ritual",
    beforeImage: "IMAGE/Hair Diagnostic Quiz.jpg",
    afterImage: "Hair Care Routines/oJCno19h4v-5mE4FmU3Q-UzQfyNpcVnS2fZiNLt7C4b-Ta9CK-KS9IJb3NGiD-Leue2n65fdBT2aTbEkFjCc0KksHJhvgpKiOzcgiwecod9Bo-slJKi153HXIAGmG2JHysoyXCc__2iN_BLRKp_4jqr1aQZxxIpqq-UpAbn5MUe.jpg",
    quote: "My curls had lost all life after years of bleaching and bad drugstore products. Within 4 weeks of the Architectural Curl Revival routine, my ringlets sprang back with bounce, shine, and zero crunch!",
    productsUsed: ["Botanical Silk Cleanser", "Lipid Velvet Conditioner", "Architect Curl Custard", "Luminous Glass Oil"],
    rating: 5,
    verified: true
  },
  {
    id: "tr-02",
    clientName: "Claire Dupont",
    location: "Montreal, Canada",
    hairType: "Bleached / Damaged Straight",
    scalp: "Dry",
    concern: "Bleach Breakage & Split Ends",
    timeframe: "6 Weeks of Ritual",
    beforeImage: "IMAGE/Hair Diagnostic Quiz1.jpg",
    afterImage: "Hair Care Routines/CV1qg4urvC95k-YnhplwM-ym4JvnWfyrP4O3JDmwk0puY7iBxlHAjTrsuOKIfSPwc4Su65ZbCbGE1ETmcEiLxzpRUdRF6y1vxgCnZese3ihZl641C8UNiEmowGOdhv9OHe4unRr24YcV6G7_0rZTT30AAP-6W0.jpg",
    quote: "The Peptide Bond Elixir literally resurrected my platinum hair. I used to see handfuls of snapped hair when brushing; now my ends are sealed and smooth like glass.",
    productsUsed: ["Peptide Bond Elixir Mask", "Luminous Glass Glossing Oil", "Botanical Silk Cleanser"],
    rating: 5,
    verified: true
  },
  {
    id: "tr-03",
    clientName: "Sora Takahashi",
    location: "Tokyo, Japan",
    hairType: "Type 2B Wavy",
    scalp: "Oily & Congested",
    concern: "Heavy Buildup & Flat Roots",
    timeframe: "21 Days of Ritual",
    beforeImage: "IMAGE/Hair Diagnostic Quiz3.jpg",
    afterImage: "Hair Care Routines/V75gGZEKwzVmnMuphrAeX6BhCK9tcXxC4qgXKsAtjhbtZX5NIrGTiC3YK26Gj1aIYICXaTiUUOPjAK0RZTL0kHGONkVdc6Uxdrmk1lfxZlh0eLpdETivRSuYOcclbLDL1mdGrK3AUQ4VS22ny6y8-ijxrHNyj9.jpg",
    quote: "I was washing my hair every 18 hours because of greasiness. The Apple Polish scrub and Rosemary serum rebalanced my scalp completely. I now wash every 3 days with gorgeous natural root volume.",
    productsUsed: ["Atmospheric Apple Polish", "Golden Nectar Scalp Serum", "Botanical Silk Cleanser"],
    rating: 5,
    verified: true
  },
  {
    id: "tr-04",
    clientName: "Amara Okonjo",
    location: "London, UK",
    hairType: "Type 4A Coily",
    scalp: "Dry",
    concern: "Extreme Dehydration & Shrinkage",
    timeframe: "45 Days of Ritual",
    beforeImage: "IMAGE/Hair Diagnostic Quiz21.jpg",
    afterImage: "Hair Care Routines/KujZ75IoilHJIRHOsS4_k0rI2QHyn0Y-B_Ky9TxOCqkQVkTLsrKADVQPWsm6aD2_b5i13Ap36gByLH0pfUkQIPS60cmAdzNBA2Bc_Yt-Pg8Ycpyze40OtjIrcPkGj4ka_uYivrjVtB-emH-aK1A8pKj9l8Zxtz.jpg",
    quote: "Finding products that keep 4A coils hydrated without petroleum or silicones is nearly impossible. HAIRÉA changed everything. My coils are defined, elongated, and hydrated for days.",
    productsUsed: ["Lipid Velvet Conditioner", "Architect Curl Custard", "Peptide Bond Elixir Mask"],
    rating: 5,
    verified: true
  }
];

const INITIAL_REVIEWS = [
  {
    id: "rev-01",
    author: "Genevieve St. Claire",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    hairType: "Type 2C Wavy",
    scalpType: "Normal",
    rating: 5,
    date: "2 days ago",
    verified: true,
    productName: "Botanical Silk Cleanser",
    title: "Editorial-grade luxury in a bottle.",
    content: "From the custom fragrance to the rich, creamy lather that leaves zero residue, this is unquestionably the finest shampoo I have ever used. My fine waves have luminous body and feel like real silk.",
    helpfulCount: 47,
    image: "IMAGE/Product.jpg"
  },
  {
    id: "rev-02",
    author: "Marcella Vane",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    hairType: "Type 3A Curly",
    scalpType: "Dry",
    rating: 5,
    date: "1 week ago",
    verified: true,
    productName: "Lipid Velvet Moisture Melt",
    title: "My holy grail detangler & moisture lock.",
    content: "I have very tangly curls that normally rip during washing. The slip on this conditioner is magical. It feels like butter melting into my strands and leaves my bathroom smelling like high-end Parisian niche perfume.",
    helpfulCount: 32,
    image: "IMAGE/Product1.jpg"
  },
  {
    id: "rev-03",
    author: "David K.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    hairType: "Straight / Fine",
    scalpType: "Oily & Sensitive",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    productName: "Golden Nectar Scalp Serum",
    title: "Visible density and zero itchiness.",
    content: "The Rosemary stem cells and Copper peptides are no joke. After 2 months of daily drops, my hairline is visibly denser and my chronic dry patches are 100% gone. 10/10.",
    helpfulCount: 68,
    image: "IMAGE/Product3.jpg"
  },
  {
    id: "rev-04",
    author: "Seraphina Lin",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    hairType: "Color-Treated / Bleached",
    scalpType: "Normal",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    productName: "Peptide Bond Elixir Mask",
    title: "Saved my hair from bleach disaster.",
    content: "My colorist recommended this after a double-process bleach session. It took my hair from crispy straw to touchable cashmere in one 15-minute session. Will never be without this.",
    helpfulCount: 91,
    image: "IMAGE/Product2.jpg"
  },
  {
    id: "rev-05",
    author: "Camille Laurent",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
    hairType: "Type 2A Wavy",
    scalpType: "Dry",
    rating: 5,
    date: "1 month ago",
    verified: true,
    productName: "Luminous Glass Glossing Oil",
    title: "Instant glass hair without greasiness.",
    content: "Literally reflects light like a mirror! Just two drops smoothed through my dry ends eliminates every single flyaway without flattening my natural volume. The bottle design on my vanity is art.",
    helpfulCount: 54,
    image: "IMAGE/Product4.jpg"
  }
];

const INITIAL_JOURNAL = [
  {
    id: "post-01",
    title: "The Architecture of Hair: Understanding Your Cuticle Lipids & Protein Matrix",
    category: "Hair Science",
    readTime: "6 min read",
    date: "OCTOBER 2026",
    author: "Dr. Alistair Vance, Lead Trichologist",
    image: "IMAGE/Hair Diagnostic Quiz.jpg",
    excerpt: "Why cosmetic silicones offer only a fleeting illusion of health, and how bio-mimetic ceramides rebuild the structural lipid barrier from the cellular core outward.",
    content: `
      <p class="lead">Healthy hair is not an accident of genetics—it is a masterpiece of biological architecture. At HAIRÉA, our lab approaches strand health not as cosmetic masking, but as bio-molecular restoration.</p>
      <h3>The 18-MEA Lipid Envelope</h3>
      <p>Every virgin hair strand is born wrapped in an ultra-thin protective lipid membrane known as the F-layer (18-Methyl Eicosanoic Acid). When you expose hair to chemical lightening, excessive heat styling, or harsh anionic sulfates, this lipid layer is stripped away permanently.</p>
      <blockquote>"When the lipid membrane is depleted, moisture escapes unimpeded, leaving hair porous, vulnerable to humidity frizz, and prone to mechanical breakage."</blockquote>
      <h3>The Bio-Mimetic Solution</h3>
      <p>Instead of coating hair in heavy occlusive silicones that build up over time, HAIRÉA utilizes cold-fermented Camellia oil, plant squalane, and Tri-Peptide 29. These microscopic bio-identical molecules integrate directly into the cuticle gaps, permanently sealing moisture without weight.</p>
    `
  },
  {
    id: "post-02",
    title: "The Rosemary vs. Minoxidil Clinical Debate: What Modern Dermatology Confirms",
    category: "Scalp & Follicle",
    readTime: "8 min read",
    date: "SEPTEMBER 2026",
    author: "Camille Moreau, Cosmetic Formulator",
    image: "IMAGE/Hair Diagnostic Quiz21.jpg",
    excerpt: "An evidence-based deep dive into botanical stem cells, copper peptides, and microcirculation for sustainable, non-irritating hair density.",
    content: `
      <p class="lead">In 2015, a landmark comparative trial showed that concentrated Rosmarinus Officinalis extract demonstrated equivalent efficacy to 2% minoxidil in increasing hair count after six months—with significantly less scalp pruritus (itching).</p>
      <h3>The Mechanism of Follicle Oxygenation</h3>
      <p>Our Scalp Elixir couples bio-fermented Rosemary stem cells with Copper Tripeptide-1. By supporting microvascular circulation around the dermal papilla and inhibiting local 5-alpha reductase activity, it provides optimal root nourishment.</p>
    `
  },
  {
    id: "post-03",
    title: "Mastering the 4-Step Curly Cast: How to Achieve 5-Day Defined Ringlets",
    category: "Ritual & Styling",
    readTime: "5 min read",
    date: "AUGUST 2026",
    author: "Chloe Dubois, Editorial Stylist",
    image: "Hair Care Routines/oJCno19h4v-5mE4FmU3Q-UzQfyNpcVnS2fZiNLt7C4b-Ta9CK-KS9IJb3NGiD-Leue2n65fdBT2aTbEkFjCc0KksHJhvgpKiOzcgiwecod9Bo-slJKi153HXIAGmG2JHysoyXCc__2iN_BLRKp_4jqr1aQZxxIpqq-UpAbn5MUe.jpg",
    excerpt: "The step-by-step technique to form a soft protective gel cast on soaking wet curls, and how to gently 'scrunch out the crunch' with dry botanical oils.",
    content: `
      <p class="lead">The secret to salon-perfect curl definition that lasts from Monday through Friday is all in the moisture cast technique.</p>
      <h3>Step 1: The Soaking Wet Application</h3>
      <p>Never apply styling custard to damp hair. Hair must be dripping wet so water acts as the vehicle distributing the flaxseed polysaccharides evenly around every individual strand.</p>
      <h3>Step 2: Breaking the Cast with Dry Oil</h3>
      <p>Allow curls to dry 100% untouched. Then take two drops of Luminous Glass Oil in palms and gently squeeze upward. You get angelic softness with 100% pattern integrity.</p>
    `
  }
];

const INITIAL_SUBSCRIPTIONS = [
  {
    id: "sub-9021",
    productName: "Botanical Silk Cleanser + Lipid Velvet Conditioner",
    frequency: "Every 6 Weeks",
    nextDelivery: "November 14, 2026",
    status: "Active",
    discount: "20% Off",
    price: 59.20,
    freeGifts: "Complimentary Travel-size Scalp Polish with next box"
  }
];

const INITIAL_ORDERS = [
  {
    id: "ORD-89412",
    date: "October 01, 2026",
    items: [
      { name: "Botanical Silk Cleanser", qty: 1, price: 36.00 },
      { name: "Luminous Glass Glossing Oil", qty: 1, price: 42.00 }
    ],
    total: 78.00,
    status: "Delivered",
    tracking: "DHL Express #9842194812",
    destination: "New York, USA"
  },
  {
    id: "ORD-89104",
    date: "September 15, 2026",
    items: [
      { name: "Peptide Bond Elixir Mask", qty: 1, price: 54.00 }
    ],
    total: 54.00,
    status: "Shipped",
    tracking: "FedEx #7719284102",
    destination: "London, UK"
  }
];

// LocalStorage helpers
const Storage = {
  getProducts: () => {
    const data = localStorage.getItem("hairea_products");
    return data ? JSON.parse(data) : INITIAL_PRODUCTS;
  },
  setProducts: (products) => {
    localStorage.setItem("hairea_products", JSON.stringify(products));
  },
  getRoutines: () => {
    const data = localStorage.getItem("hairea_routines");
    return data ? JSON.parse(data) : INITIAL_ROUTINES;
  },
  getTransformations: () => {
    const data = localStorage.getItem("hairea_transformations");
    return data ? JSON.parse(data) : INITIAL_TRANSFORMATIONS;
  },
  setTransformations: (trans) => {
    localStorage.setItem("hairea_transformations", JSON.stringify(trans));
  },
  getReviews: () => {
    const data = localStorage.getItem("hairea_reviews");
    return data ? JSON.parse(data) : INITIAL_REVIEWS;
  },
  setReviews: (reviews) => {
    localStorage.setItem("hairea_reviews", JSON.stringify(reviews));
  },
  getJournal: () => {
    return INITIAL_JOURNAL;
  },
  getCart: () => {
    const data = localStorage.getItem("hairea_cart");
    return data ? JSON.parse(data) : [];
  },
  setCart: (cart) => {
    localStorage.setItem("hairea_cart", JSON.stringify(cart));
  },
  getWishlist: () => {
    const data = localStorage.getItem("hairea_wishlist");
    return data ? JSON.parse(data) : [];
  },
  setWishlist: (list) => {
    localStorage.setItem("hairea_wishlist", JSON.stringify(list));
  },
  getQuizResult: () => {
    const data = localStorage.getItem("hairea_quiz_result");
    return data ? JSON.parse(data) : null;
  },
  setQuizResult: (res) => {
    localStorage.setItem("hairea_quiz_result", JSON.stringify(res));
  },
  getSubscriptions: () => {
    const data = localStorage.getItem("hairea_subscriptions");
    return data ? JSON.parse(data) : INITIAL_SUBSCRIPTIONS;
  },
  setSubscriptions: (subs) => {
    localStorage.setItem("hairea_subscriptions", JSON.stringify(subs));
  },
  getOrders: () => {
    const data = localStorage.getItem("hairea_orders");
    return data ? JSON.parse(data) : INITIAL_ORDERS;
  },
  setOrders: (orders) => {
    localStorage.setItem("hairea_orders", JSON.stringify(orders));
  },
  getUser: () => {
    const data = localStorage.getItem("hairea_user");
    return data ? JSON.parse(data) : {
      name: "Genevieve Moreau",
      email: "genevieve.moreau@editorial.com",
      tier: "Platinum Atelier Member",
      points: 480,
      hairProfile: "3B Curly / Dry Scalp / Anti-Frizz Ritual",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    };
  },
  setUser: (user) => {
    localStorage.setItem("hairea_user", JSON.stringify(user));
  },
  getCurrency: () => {
    return localStorage.getItem("hairea_currency") || "USD";
  },
  setCurrency: (cur) => {
    localStorage.setItem("hairea_currency", cur);
  }
};
