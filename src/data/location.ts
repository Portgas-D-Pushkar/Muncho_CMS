
export interface Location {
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  mapQuery: string; 
}

export const locations: Location[] = [
  {
    name: "Talkin' Tacos Brickell",
    city: "Miami, FL",
    address: "97 SW 8th St, Miami, FL 33130",
    phone: "(305) 602-4816",
    email: "Info@TalkinTacos.net",
    mapQuery: "97 SW 8th St, Miami, FL 33130",
  },
  {
    name: "Talkin' Tacos Miramar",
    city: "Miramar, FL",
    address: "123 Main St, Miramar, FL 33025",
    phone: "(305) 123-4567",
    email: "Miramar@TalkinTacos.net",
    mapQuery: "123 Main St, Miramar, FL 33025",
  },
  {
    name: "Talkin' Tacos Wynwood",
    city: "Miami, FL",
    address: "234 Wynwood Ave, Miami, FL 33127",
    phone: "(305) 999-1111",
    email: "Wynwood@TalkinTacos.net",
    mapQuery: "234 Wynwood Ave, Miami, FL 33127",
  },
];
