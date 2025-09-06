import { useState, useEffect } from 'react';

// Video data type
interface Video {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  url: string;
  duration?: string;
  description?: string;
}

export const useFetchVideos = (url: string) => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [url]);

    return { videos, loading, error };
};