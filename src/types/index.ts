export interface Video {
    id: number;
    title: string;
    description?: string;
    thumbnail: string;
    url: string;
    category: string;
    duration?: string;
    createdAt?: Date;
}

export interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
    features?: string[];
}

export interface Testimonial {
    id: string;
    name: string;
    feedback: string;
    rating?: number;
    date: Date;
    avatar?: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    videoUrl: string;
    category: string;
    client?: string;
    year?: number;
    tags?: string[];
}