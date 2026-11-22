export type ScheduleItem = {
  label?: string;
  time?: string;
  text?: string;
};

export type LocationId = "familyResidence" | "sharmaFarms";

export type VenueLocation = {
  id: LocationId;
  name: string;
  address: string[];
  googleMapsUrl: string;
  embedUrl?: string;
};

export type WeddingEvent = {
  id: string;
  locationId: LocationId;
  title: string;
  date: string;
  shortDate: string;
  fullDate: string;
  chapter: string;
  line: string;
  scheduleLabel?: string;
  schedule: ScheduleItem[];
  venueLabel?: string;
  venueTitle?: string;
  venueAddress: string[];
  baratRoute?: string[];
  isMainVenueEmphasized?: boolean;
  time?: string;
  venue?: string;
  address?: string;
  mapUrl?: string;
};
export type WeddingDateConfig = {
  year: number | null;
  month: number;
  day: number;
  dateLabel: string;
  time: string | null;
  timezone: string;
  todayMessage: string;
  pastMessage: string;
};

const wedding: WeddingDateConfig = {
  year: 2026,
  month: 11,
  day: 26,
  dateLabel: "26 November",
  time: null,
  timezone: "Asia/Kolkata",
  todayMessage: "Our forever begins today.",
  pastMessage: "And so our forever began.",
};

export const weddingData = {
  religiousInvocation: "!! Shri Ganeshay Namah !!",
  couple: { groom: "Sahil", bride: "Keena" },
  wedding,
  grandparents: "(Smt. Shakuntla Devi & Late Sh. Shri Kishan)",
  invitationPreamble:
    "solicit the pleasure of your presence & blessing to grace the auspicious occasion of the wedding ceremony of their Grand son",
  groomDetails: "(S/o Smt. Sunita Devi & Sh. Suraj Bhan)",
  brideDetails: "(D/o Smt. Beermati Devi & Sh. Raj Kumar)",
  brideVillage: "(Vll. Narhera Pataudi, Disttt. Gurugram)",
  programmeNote: "as Per Programme",
  invitationAddress: "House No. 365, Ward No.24, Near Balmiki Mandir, Qutubpur, Rewari (Hry.)",
  phoneNumbers: ["9466227287", "7206765494", "9729074549", "8607073242"],
  rsvpHeading: "R.S.V.P.:",
  rsvpContacts: [
    "Sh. Jagdish Chawariya",
    "(Cooperative Bank)",
    "Raj Chawariya",
    "(Head Master Haryana Govt.)",
    "Ajay (S.A. D.H. B.V. N)",
    "Vishal (A.S. M) (Total Energies)",
    "Rahul Lot (A.S.M) VIP Bags.",
    "Dinesh (Guard Indian Rly.)",
    "Rahul (Indian Rly)",
    "Ajay Sarpanch, Dhruv, Sidharth, Gourav, Madhav, Parshant, Yash, Vihan, Sidharth Tank",
  ],
  maternalFamily: [
    "Sh. Jailal",
    "Sh. Manoj",
    "Sh. Surender",
    "Sh. Ramdas",
    "Sh. Abhishek & All Bohat Family",
  ],
  wbcF: "All Chawariya Family Relatives & friends",
  ladiesInvitationNote: "Please accept ladies invitation by this card.",
  familySignOff: [
    {
      heading: "A CORDIAL INVITATION FROM",
      names: ["Sh. Shiv Shankar — Canara Bank Manager (Retd.)", " Sh. Suraj Bhan"],
    },
    {
      heading: "NANIHAL PAKSH",
      names: [
        "Sh. Jailal",
        "Sh. Manoj",
        "Sh. Surender",
        "Sh. Ramdas",
        "Sh. Abhishek & All Bohat Family",
      ],
    },
    {
      heading: "W.B.C.F.",
      names: ["All Chawariya Family Relatives & friends"],
    },
    {
      heading: "CUTE INVITATION FROM WAITING EYES",
      names: ["Limisha (Mishtu)", "Pranshul (Keshu)"],
    },
  ],
  closing: { message: "Join us as we begin our forever." },
  locations: {
    familyResidence: {
      id: "familyResidence" as const,
      name: "Kala Sadan",
      address: ["Gopal Dev Chowk", "Rewari"],
      googleMapsUrl: "https://www.google.com/maps?q=Rewari",
      embedUrl: "https://maps.google.com/maps?q=Rewari&hl=en&z=16&output=embed",
    },
    sharmaFarms: {
      id: "sharmaFarms" as const,
      name: "Community Center",
      address: ["Ward No.5, Bilaspur Road", "Pataudi Distt. Gurugram (Hr.)"],
      googleMapsUrl: "https://www.google.com/maps?q=Pataudi+Gurugram",
      embedUrl: "https://maps.google.com/maps?q=Pataudi+Gurugram&hl=en&z=16&output=embed",
    },
  },
  location: {
    venue: "Community Center",
    address: "Ward No.5, Bilaspur Road, Pataudi Distt. Gurugram (Hr.)",
    googleMapsUrl: "https://www.google.com/maps?q=Pataudi+Gurugram",
    embedUrl: "https://maps.google.com/maps?q=Pataudi+Gurugram&hl=en&z=16&output=embed",
  },
  musicUrl: "/audio/aaj-sajeya.mp3",
  events: [
    {
      id: "mata",
      locationId: "familyResidence" as const,
      title: "Haldi",
      date: "20 November",
      shortDate: "20 NOVEMBER",
      fullDate: "FRIDAY · 20 NOVEMBER 2026",
      chapter: "Haldi Ceremony",
      line: "Bathed in turmeric, laughter, and the love of our own.",
      scheduleLabel: "SCHEDULE",
      schedule: [
        {
          label: "Haldi",
          time: "4:15 P.M.",
        },
      ],
      venueLabel: "VENUE",
      venueTitle: "House No. 365",
      venueAddress: ["Ward No.24, Near Balmiki Mandir", "Qutubpur, Rewari (Hry.)"],
      venue: "House No. 365, Ward No.24, Near Balmiki Mandir, Qutubpur, Rewari (Hry.)",
      address: "House No. 365, Ward No.24, Near Balmiki Mandir, Qutubpur, Rewari (Hry.)",
      mapUrl: "https://maps.app.goo.gl/6GchBCgnLvM5MRVn7",
    },
    {
      id: "mehendi",
      locationId: "familyResidence" as const,
      title: "Chak-Bhat",
      date: "25 November",
      shortDate: "25 NOVEMBER",
      fullDate: "WEDNESDAY · 25 NOVEMBER 2026",
      chapter: "Chak-Bhat Ceremony",
      line: "Henna on our hands. A little magic in the air.",
      scheduleLabel: "SCHEDULE",
      schedule: [
        {
          label: "Chak-Bhat",
          time: "4:15 P.M.",
        },
        {
          label: "Dinner",
          time: "7:15 P.M.",
        },
      ],
      venueLabel: "VENUE",
      venueTitle: "Kala Sadan",
      venueAddress: ["Gopal Dev Chowk", "Rewari"],
      venue: "Kala Sadan, Gopal Dev Chowk, Rewari",
      address: "Kala Sadan, Gopal Dev Chowk, Rewari",
      mapUrl: "https://maps.app.goo.gl/6GchBCgnLvM5MRVn7",
    },
    {
      id: "haldi",
      locationId: "familyResidence" as const,
      title: "Gurchari",
      date: "26 November",
      shortDate: "26 NOVEMBER",
      fullDate: "THURSDAY · 26 NOVEMBER 2026",
      chapter: "Gurchari Ceremony",
      line: "A morning of blessings before the forever begins.",
      scheduleLabel: "SCHEDULE",
      schedule: [
        {
          label: "Gurchari",
          time: "5:15 P.M.",
        },
      ],
      venueLabel: "VENUE",
      venueTitle: "House No. 365",
      venueAddress: ["Ward No.24, Near Balmiki Mandir", "Qutubpur, Rewari (Hry.)"],
      venue: "House No. 365, Ward No.24, Near Balmiki Mandir, Qutubpur, Rewari (Hry.)",
      address: "House No. 365, Ward No.24, Near Balmiki Mandir, Qutubpur, Rewari (Hry.)",
      mapUrl: "https://maps.app.goo.gl/6GchBCgnLvM5MRVn7",
    },
    {
      id: "vivah",
      locationId: "sharmaFarms" as const,
      title: "Vivah Sanskar",
      date: wedding.dateLabel,
      shortDate: "26 NOVEMBER",
      fullDate: "THURSDAY · 26 NOVEMBER 2026",
      chapter: "The beginning of forever",
      line: "Two hearts. Seven promises. A lifetime together.",
      scheduleLabel: "SCHEDULE",
      schedule: [
        {
          label: "Departure of Barat",
          time: "6:15 P.M.",
        },
        {
          label: "Vivah Sanskar",
          time: "Shubh Lagnanusar",
        },
      ],
      baratRoute: ["House No. 365, Rewari", "Community Center, Pataudi"],
      venueLabel: "MAIN VENUE",
      venueTitle: "COMMUNITY CENTER",
      venueAddress: ["Ward No.5, Bilaspur Road", "Pataudi Distt. Gurugram (Hr.)"],
      isMainVenueEmphasized: true,
      venue: "COMMUNITY CENTER, Pataudi",
      address: "Ward No.5, Bilaspur Road, Pataudi Distt. Gurugram (Hr.)",
      mapUrl: "https://www.google.com/maps?q=Pataudi+Gurugram",
    },
  ] as WeddingEvent[],
};
