// GSAP Animations
export { GSAPAnimations } from './gsap';

export const fetchVideoData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching video data:', error);
        throw error;
    }
};

export const formatVideoDuration = (duration: number): string => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const generateVideoThumbnailUrl = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};