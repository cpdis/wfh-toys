export const amazonTag = "heismukamily-20";
export const updatedLabel = "June 2026";

// Route Amazon shopping links through one helper so the Associate tag stays consistent.
const amazon = (query) =>
  `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${amazonTag}`;

const maker = (href) => href;

export const sections = [
  {
    id: "video",
    navLabel: "Video",
    eyebrow: "Look clear",
    title: "Modern webcams beat the old capture-card ritual for most desks.",
    summary:
      "The baseline shifted from DSLR rigs to sharper USB-C webcams with better sensors, privacy shutters, and software that does not require a second hobby.",
    accent: "red",
    items: [
      {
        name: "Logitech MX Brio 4K",
        badge: "Default webcam",
        image:
          "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/mx-brio/buy/migration-assets-for-delorean-2025/gallery/mx-brio-3qtr-front-right-graphite.png",
        imageAlt: "Logitech MX Brio 4K webcam",
        description:
          "The clean default for a serious home office: 4K capture, a larger sensor than older Brio models, USB-C, and a physical privacy shutter.",
        linkLabel: "View on Amazon",
        href: amazon("Logitech MX Brio 4K webcam"),
        sourceName: "Logitech",
        sourceUrl: "https://www.logitech.com/en-us/products/webcams/mx-brio.html",
      },
      {
        name: "Opal Tadpole",
        badge: "Laptop travel",
        image:
          "https://shopify.opalcamera.com/cdn/shop/files/Screenshot2024-05-15at2.06.53PM_1200x1200.png?v=1715807355",
        imageAlt: "Opal Tadpole laptop webcam",
        description:
          "A tiny 4K webcam built for laptop people who want a better camera without hauling a desk rig between rooms, offices, and trips.",
        linkLabel: "Visit maker",
        href: maker("https://shopify.opalcamera.com/products/tadpole"),
        sourceName: "Opal",
        sourceUrl: "https://shopify.opalcamera.com/products/tadpole",
      },
      {
        name: "Sony ZV-E10 II starter rig",
        badge: "Advanced setup",
        image: "assets/img/a6600.jpg",
        imageAlt: "Sony mirrorless camera body",
        description:
          "For the person who records, streams, or presents constantly: a modern Sony APS-C body, a wide prime lens, clean power, and one good light still wins.",
        linkLabel: "Search Amazon",
        href: amazon("Sony ZV-E10 II webcam setup Sigma 16mm capture card"),
        sourceName: "Sony",
        sourceUrl:
          "https://electronics.sony.com/imaging/interchangeable-lens-cameras/aps-c/p/zve10m2b",
      },
    ],
  },
  {
    id: "audio",
    navLabel: "Audio",
    eyebrow: "Sound sane",
    title: "Audio is still the highest-leverage WFH upgrade.",
    summary:
      "A decent mic or business headset makes more difference than another camera upgrade, especially in shared spaces and long calls.",
    accent: "teal",
    items: [
      {
        name: "Shure MV7+",
        badge: "Best voice",
        image:
          "https://products.shureweb.eu/shure_product_db/product_main_images/files/0a5/4f1/be-/setcard/fe71d068e73acc951e1c9a0458a7093c.jpeg",
        imageAlt: "Shure MV7+ microphone",
        description:
          "A USB-C and XLR dynamic mic with onboard DSP, auto-leveling, and voice isolation. Great when calls, recordings, and demos all happen at the same desk.",
        linkLabel: "View on Amazon",
        href: amazon("Shure MV7+ USB-C XLR microphone"),
        sourceName: "Shure",
        sourceUrl:
          "https://www.shure.com/en-US/products/microphones/mv7?variant=MV7-K-BNDL",
      },
      {
        name: "Rode PodMic USB",
        badge: "Simple desk mic",
        image:
          "https://edge.rode.com//images/products/variants/183/rode-podmic-usb-black-hero-3-quater-tilted-4000x4000-rgb-2000x2000-064a3d6.png",
        imageAlt: "Rode PodMic USB microphone",
        description:
          "Broadcast-style sound with both USB and XLR paths. It is less fussy than a full studio chain and still grows with an audio interface later.",
        linkLabel: "View on Amazon",
        href: amazon("Rode PodMic USB microphone"),
        sourceName: "Rode",
        sourceUrl: "https://rode.com/en-us/microphones/usb/podmic-usb",
      },
      {
        name: "Jabra Evolve2 65 Flex",
        badge: "Open office",
        image:
          "https://www.jabra.com/-/media/Images/Products/Jabra-Evolve2-65-Flex/V1/OG/Jabra-Evolve2-65-Flex.jpg?h=630&iar=0&w=1200&hash=FDCD385FF0A3962CECA7A50B633E7525",
        imageAlt: "Jabra Evolve2 65 Flex headset",
        description:
          "A foldable business headset with active noise cancellation and a real boom mic, built for people who take calls away from a treated room.",
        linkLabel: "View on Amazon",
        href: amazon("Jabra Evolve2 65 Flex headset"),
        sourceName: "Jabra",
        sourceUrl:
          "https://www.jabra.com/business/office-headsets/jabra-evolve/jabra-evolve2-65-flex",
      },
      {
        name: "AirPods Pro 2 (USB-C)",
        badge: "Everywhere backup",
        image: "assets/img/airpods.jpeg",
        imageAlt: "Apple AirPods Pro earbuds",
        description:
          "Not the best microphone, but excellent as a pocketable backup with strong noise cancellation for calls from airports, cafes, and the couch.",
        linkLabel: "View on Amazon",
        href: amazon("Apple AirPods Pro 2 USB-C"),
        sourceName: "Apple",
        sourceUrl: "https://www.apple.com/airpods-pro/",
      },
    ],
  },
  {
    id: "desk",
    navLabel: "Desk",
    eyebrow: "Work longer",
    title: "The desk matters because you touch it all day.",
    summary:
      "Quiet input devices, a stable sit-stand desk, a proper chair, and a USB-C monitor are boring purchases. Boring is perfect here.",
    accent: "pink",
    items: [
      {
        name: "Logitech MX Master 4",
        badge: "Work mouse",
        image:
          "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-4/gallery/mx-master-4-black-3qtr-angle-gallery-8.png",
        imageAlt: "Logitech MX Master 4 wireless mouse",
        description:
          "A productivity mouse with haptic feedback, Actions Ring shortcuts, quiet clicks, fast scrolling, and an 8K DPI sensor that tracks on glass.",
        linkLabel: "View on Amazon",
        href: amazon("Logitech MX Master 4"),
        sourceName: "Logitech",
        sourceUrl: "https://www.logitech.com/en-us/shop/qr/mx-master-4",
      },
      {
        name: "Logitech MX Keys S",
        badge: "Quiet keyboard",
        image:
          "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-keys-s/migration-assets-for-delorean-2025/gallery/mx-keys-s-top-view-graphite-us.png",
        imageAlt: "Logitech MX Keys S keyboard",
        description:
          "A low-profile keyboard with quiet keys, multi-device switching, and backlighting that behaves like it has met a human before.",
        linkLabel: "View on Amazon",
        href: amazon("Logitech MX Keys S keyboard"),
        sourceName: "Logitech",
        sourceUrl: "https://www.logitech.com/en-us/shop/p/mx-keys-s.920-011564",
      },
      {
        name: "Dell UltraSharp U2725QE",
        badge: "USB-C monitor",
        image:
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/category-pages/dlud22-wb7022-wl7022-km7321w-la7430nt-u2722d-xbt-800x620.png?qlt=95&fit=constrain,1&hei=620&wid=800&fmt=png-alpha",
        imageAlt: "Dell UltraSharp monitor on a desk",
        description:
          "A 27-inch 4K Thunderbolt hub monitor keeps the desk simple: one cable for display, charging, networking, and USB devices.",
        linkLabel: "View on Amazon",
        href: amazon("Dell UltraSharp U2725QE Thunderbolt monitor"),
        sourceName: "Dell",
        sourceUrl:
          "https://www.dell.com/en-us/shop/dell-ultrasharp-27-4k-thunderbolt-hub-monitor-u2725qe/apd/210-bqtl/monitors-monitor-accessories",
      },
      {
        name: "UPLIFT V2 Standing Desk",
        badge: "Stable base",
        image: "assets/img/bekant.jpeg",
        imageAlt: "Sit-stand desk",
        description:
          "A long-running favorite because it is customizable, stable, repairable, and supported well enough to be worth buying once.",
        linkLabel: "Search Amazon",
        href: amazon("UPLIFT V2 standing desk"),
        sourceName: "UPLIFT Desk",
        sourceUrl: "https://www.upliftdesk.com/uplift-v2-standing-desk-v2-or-v2-commercial/",
      },
      {
        name: "Herman Miller Aeron",
        badge: "Chair you keep",
        image: "assets/img/aeron.jpg",
        imageAlt: "Herman Miller Aeron chair",
        description:
          "Still the canonical mesh office chair. Buy used or new, but buy for fit: size and posture matter more than the logo.",
        linkLabel: "View on Amazon",
        href: amazon("Herman Miller Aeron chair"),
        sourceName: "Herman Miller",
        sourceUrl: "https://www.hermanmiller.com/products/seating/office-chairs/aeron-chairs/",
      },
    ],
  },
  {
    id: "infrastructure",
    navLabel: "Infrastructure",
    eyebrow: "Remove friction",
    title: "The unsexy gear is what keeps the day from wobbling.",
    summary:
      "Lighting, docks, and network gear are not toys once your desk becomes a small broadcast booth with too many USB-C opinions.",
    accent: "amber",
    items: [
      {
        name: "Elgato Key Light Neo",
        badge: "Desk lighting",
        image: "assets/img/elgato-key-light-neo.jpg",
        imageAlt: "Elgato Key Light Neo",
        description:
          "A compact key light for cleaner calls and recordings when window light is gone, weird, or actively betraying you.",
        linkLabel: "View on Amazon",
        href: amazon("Elgato Key Light Neo"),
        sourceName: "Elgato",
        sourceUrl: "https://www.elgato.com/us/en/p/key-light-neo",
      },
      {
        name: "CalDigit TS5 Plus",
        badge: "Dock",
        image: "https://downloads.caldigit.com/assets/images/TS5-plus-icon.png",
        imageAlt: "CalDigit TS5 Plus dock",
        description:
          "A Thunderbolt 5 dock for people who keep adding displays, fast storage, Ethernet, microphones, cameras, and then pretend one port was enough.",
        linkLabel: "View on Amazon",
        href: amazon("CalDigit TS5 Plus Thunderbolt 5 dock"),
        sourceName: "CalDigit",
        sourceUrl: "https://www.caldigit.com/docks/",
      },
      {
        name: "Eero Max 7",
        badge: "Wi-Fi 7 mesh",
        image: "assets/img/eero-max-7.jpg",
        imageAlt: "Eero Max 7 mesh Wi-Fi routers",
        description:
          "Video calls hate weak uplinks and bad roaming. Wi-Fi 7 mesh is not magic, but it is a good fix for big homes and dead zones.",
        linkLabel: "View on Amazon",
        href: amazon("Eero Max 7 Wi-Fi 7 mesh"),
        sourceName: "Eero",
        sourceUrl: "https://www.eero.com/shop/eero-max-7",
      },
    ],
  },
];

export const resources = [
  {
    title: "Amazon Associates linking requirements",
    type: "Policy",
    href: "https://affiliate-program.amazon.com/help/node/GP38PJ6EUR6PFBEC",
    description:
      "Amazon documents the associate tag pattern used by the generated shopping links.",
  },
  {
    title: "RTINGS review: Logitech MX Master 4",
    type: "Review",
    href: "https://www.rtings.com/mouse/reviews/logitech/mx-master-4",
    description:
      "Independent test data for the current productivity mouse pick.",
  },
  {
    title: "RTINGS best mice for work",
    type: "Guide",
    href: "https://www.rtings.com/mouse/reviews/best/work",
    description:
      "Current work-mouse recommendations used to sanity-check the workstation section.",
  },
  {
    title: "Wirecutter office furniture guidance",
    type: "Guide",
    href: "https://www.nytimes.com/wirecutter/office-furniture/",
    description:
      "Long-running chair and standing desk research for the ergonomic picks.",
  },
  {
    title: "Tom's Guide best microphones",
    type: "Guide",
    href: "https://www.tomsguide.com/best-picks/best-microphones",
    description:
      "Current microphone recommendations for home recording and calls.",
  },
];
