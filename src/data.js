import { FaInstagram, FaTwitter, FaWhatsapp, FaPinterest, FaYoutube} from "react-icons/fa";
import { Image, UsersRound, Download, Folder, TrendingUp, Trees, Laptop, PawPrint, Building2, Camera, Sparkles  } from 'lucide-react'
import {

    Mountain, Heart,
    Car,
    Utensils,
    Flower2,
    Palette,
    Landmark,
    Briefcase,
    Gem,
    MoonStar,
    User,
} from "lucide-react";
import { CiHeart, CiGlobe } from "react-icons/ci";
import { LuUsersRound } from "react-icons/lu";
import Categories from "./components/Categories";
import { AiFillQqSquare } from "react-icons/ai";

export const social = [
    {
        id: 1,
        icon: FaInstagram, 
        link: "https://www.instagram.com/"
    },
    {
        id: 2,
        icon: FaTwitter,
        link: "https://www.twitter.com/"
    },
    {
        id: 3,
        icon: FaWhatsapp,
        link: "https://www.whatsapp.com/"
    },
    {
        id: 4,
        icon: FaPinterest,
        link: "https://www.pinterest.com/"
    },
    {
        id: 5,
        icon: FaYoutube,
        link: "https://www.youtube.com/"
    }
]
 export const testimonials = [
    {
        id: 1,
        name: "Sophia Carter",
        profession: "Landscape Photographer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
        rating: 5,
        verified: true,
        bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
        review:
            "Lumina Gallery has completely changed the way I showcase my photography. The platform is beautiful, fast, and the community is incredibly supportive.",
    },
    {
        id: 2,
        name: "Daniel Moore",
        profession: "Travel Photographer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
        rating: 5,
        verified: true,
        bgImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        review:
            "The collections and smart organization tools help me keep my work tidy and accessible. It's a must-have for any serious creative.",
    },
    {
        id: 3,
        name: "Ethan Brooks",
        profession: "Portrait Photographer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
        rating: 5,
        verified: true,
        bgImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80",
        review:
            "I love how Lumina Gallery puts the focus on the work. The clean design lets my photos speak for themselves.",
    },
    {
        id: 4,
        name: "Isabella Chen",
        profession: "Urban Photographer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
        rating: 5,
        verified: true,
        bgImage: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80",
        review:
            "From uploading to sharing, everything is seamless. Lumina Gallery truly understands what creators need.",
    },
    {
        id: 5,
        name: "Ethan Brooks",
        profession: "Travel Photographer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
        rating: 5,
        verified: true,
        bgImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
        review:
            "Lumina Gallery gives me the perfect space to organize and share my travel adventures. The interface is elegant, responsive, and makes every photo stand out beautifully.",
    }
];
export const elements = [
  {
    id: 1.1,
    icon:LuUsersRound,
    title: "Happy Creators",
    count: "850K+"
  },
  {
    id: 1.2,
    icon:CiGlobe,
    title: "Countries",
    count: "180+"
  },
  {
    id: 1.3,
    icon:CiHeart,
    title: "User Rating",
    count: "4.9/5"
  }
]
export const cards = [
  {
    id: 1,
    count: "2.4M+",
    title: "Photos",
    percent: "18.6%",
    icon: Image,
    image:
      "https://plus.unsplash.com/premium_photo-1698362819146-bb3233129fda?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    count: "850K+",
    title: "Happy Users",
    percent: "24.3%",
    icon: UsersRound,
    image:
      "https://images.unsplash.com/photo-1758691737138-7b9b1884b1db?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    count: "6.7M+",
    title: "Downloads",
    percent: "31.5%",
    icon: Download,
    image:
      "https://media.istockphoto.com/id/2270051352/photo/download-button-on-keyboard-with-cursor-click.jpg?s=1024x1024&w=is&k=20&c=ZEWlzDDraMXuoZunnz9pF4k0K9YXUzBxr0jcjphic2Y=",
  },
  {
    id: 4,
    count: "12K+",
    title: "Collections",
    percent: "15.2%",
    icon: Folder,
    image:
      "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=865&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
]

export const values = [
  {
    number: "01",
    title: "Inspire",
    description:
      "Discover photographs that spark curiosity and inspire you to see the world differently.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Bring photographers and visual storytellers together through a shared creative community.",
    icon: Heart,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Give creators a place to showcase their work and let their unique perspective be seen.",
    icon: Camera,
  },
];


export const journey = [
  {
    year: "2021",
    title: "Lumina Gallery was born",
    description:
      "A small idea to celebrate visual storytelling.",
  },
  {
    year: "2022",
    title: "First 100K Photographs",
    description:
      "Our community started growing worldwide.",
  },
  {
    year: "2023",
    title: "Expanding The Vision",
    description:
      "New features, more creators, stronger connections.",
  },
  {
    year: "2024",
    title: "500K+ Creative Community",
    description:
      "Half a million passionate creators and growing.",
  },
  {
    year: "2025",
    title: "2.4M+ Photos Worldwide",
    description:
      "Continuing our mission to inspire the world through photography.",
  },
];

export const categories = [
  {
    id: 1,
    title: "Nature",
    imageCount: 1076,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Travel",
    imageCount: 820,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Architecture",
    imageCount: 670,
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Animals",
    imageCount: 954,
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Technology",
    imageCount: 508,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Food",
    imageCount: 732,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "Fashion",
    imageCount: 486,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "Sports",
    imageCount: 615,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    title: "Abstract",
    imageCount: 341,
    image:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    title: "Space",
    imageCount: 289,
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
  },
];
export const featuredCollections = [
  {
    id: 1,
    title: "Wild Encounters",
    description: "Animals in their Natural Habitats.",
    totalPhotos: 82,
    image:
      "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Night Wonders",
    description: "Experience dazzling city lights beneath starry skies.",
    totalPhotos: 56,
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Ocean Serenity",
    description: "Relax with peaceful waves and coastal beauty.",
    totalPhotos: 36,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Mountain Escapes",
    description: "Explore majestic peaks wrapped in tranquil landscapes.",
    totalPhotos: 64,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
  },
];
export const boxes = [
    {
        id: 1,
        name: "Nature",
        icon: Trees,
    },
    {
        id: 2,
        name: "Technology",
        icon: Laptop,
    },
    {
        id: 3,
        name: "Animals",
        icon: PawPrint,
    },
    {
        id: 4,
        name: "Architecture",
        icon: Building2,
    },
    {
        id: 5,
        name: "Photography",
        icon: Camera,
    },
    {
        id: 6,
        name: "Abstract",
        icon: Sparkles,
    },
    {
        id: 7,
        name: "Mountains",
        icon: Mountain,
    },
    {
        id: 8,
        name: "Vehicles",
        icon: Car,
    },
    {
        id: 9,
        name: "Food",
        icon: Utensils,
    },
    {
        id: 10,
        name: "Flowers",
        icon: Flower2,
    },
    {
        id: 11,
        name: "Art",
        icon: Palette,
    },
    {
        id: 12,
        name: "Historical",
        icon: Landmark,
    },
    {
        id: 13,
        name: "Business",
        icon: Briefcase,
    },
    {
        id: 14,
        name: "Luxury",
        icon: Gem,
    },
    {
        id: 15,
        name: "Night",
        icon: MoonStar,
    },
    {
        id: 16,
        name: "People",
        icon: User,
    },
];

// console.log(boxes.slice(2, 5))

export const CollectionHeader = [
  {
    title: "CURATED SELECTION",
    subtitle: "Featured ",
    subtitle2: "Collection",
    desc: "HandPicked Collections of extraordinary Photography from talented artists around the world."
  }
]
export const CategoryHeader = [
  {
    title: "BROWSE",
    subtitle: "Explore ",
    subtitle2: "By Categories",
    desc: "Find the perfect image from our wide range of Photography.",
    image: "https://plus.unsplash.com/premium_photo-1661443598082-afd740d6d07c?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
export const ImpactHeader = [
  {
    title: "OUR IMPACT",
    subtitle: "Numbers ",
    subtitle2: "That Inspire",
    desc: "We are proud of our growing community and the incredible moments captured through our platform.",
    image: "https://images.unsplash.com/photo-1565799515768-2dcfd834625c?q=80&w=919&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
export const ReviewHeader = [
  {
    title: "WHAT PEOPLE SAY",
    subtitle: "Loved ",
    subtitle2: "By Creators",
    desc: "Join thousands of Photographers and creatives who trust our platform to showcase and share their vision with world.",
    image: "https://images.unsplash.com/photo-1610664921890-ebad05086414?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
export const AboutHeader = [
  {
    title: "OUR STORY",
    subtitle: "More than just a Gallery. A Home for Visual",
    subtitle2: "Creativity",
    desc: "Lumina Gallery is a creative space where photographers, explorers, and visual storytellers come together to discover, share, and inspire."
  }
]