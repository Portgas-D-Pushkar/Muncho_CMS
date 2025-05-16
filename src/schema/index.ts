export type SiteContent = {
  nav: {
    logo: string;
    links: {
      title: string;
      link: string;
    }[];
    index: string;
  };

  hero: {
    text: {
      subtitle: string;
      title: string;
    };
    image: string;
    index: string;
  };

  gallery_1: {
    heading: {
      title: string;
      subtitle: string;
    };
    images: string[];
    index: string;
  };

  catering: {
    image: string;
    text: {
      title: string;
      description: string;
    };
    index: string;
  };

  gallery_2: {
    heading: {
      title: string;
    };
    images: string[];
    index: string;
  };

  dishes: {
    heading: {
      title: string;
      subtitle: string;
    };
    index: string;
  };

  giftCard: {
    heading: string;
    description: string;
    image: string;
    index: string;
  };

  faq: {
    heading: {
      title: string;
    };
    questions: {
      title: string;
      description: string;
    }[];
    index: string;
  };

  location: {
    locations: {
      name: string;
      city: string;
      address: string;
      phone: string;
      email: string;
      mapQuery: string;
      longitude: string;
      latitude: string;
    }[];
    index: string;
  };
};
