        export interface VideoDoorPhoneProduct {
        id: number;
        slug: string;
        name: string;
        category: string;
        categorySlug: string;
        image: string;
        gallery: string[];
        description: string;
        colours: string[];
        features: string[];
        specifications: Record<string, string>;
        }

        export const videoDoorPhones: VideoDoorPhoneProduct[] = [
        {
            id: 401,

            slug: "7-inch-smart-video-door-phone",

            name: "7-Inch Smart Video Door Phone",

            category: "Video Door Phones",

            categorySlug: "video-door-phones",

            image: "/images/products/videoDoorPhones/7-inch-smart-video-door-phone.webp",

            gallery: [
            "/images/products/videoDoorPhones/7-inch-smart-video-door-phone.webp"
            ],

            description:
            "Premium smart video door phone with HD camera, mobile app integration, two-way audio, live video monitoring, remote unlocking and visitor history.",

            colours: [
            "Black"
            ],

            features: [
            "HD Camera",
            "Two-Way Audio",
            "Live Video",
            "Remote Monitoring",
            "Mobile App",
            "Motion Detection",
            "Night Vision",
            "Visitor Snapshot",
            "Remote Unlock",
            "Cloud Recording"
            ],

            specifications: {
            Display: "7 Inch IPS Touch Screen",
            Camera: "2MP HD Camera",
            Resolution: "1080P",
            ViewingAngle: "120°",
            Audio: "Two-Way Communication",
            NightVision: "IR Night Vision",
            Connectivity: "Wi-Fi",
            MobileApp: "SmartLiv App",
            Recording: "Cloud + SD Card",
            UnlockSupport: "Door Lock Integration",
            Power: "DC 12V",
            Warranty: "2 Years"
            }
        }
        ];