"use client"

import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface LoadImageItem {
    itemIndex: number;
    isLoaded: boolean;
}

const LoadImage = ({
    src,
    alt,
    index,
    className,
}: {
    src: string;
    alt: string | null;
    index: number;
    className: string;
}) => {
    const [loaded, setLoaded] = useState<LoadImageItem[]>([]);

    useEffect(() => {
        if (src == null) return;

        const existingItem = loaded.find((item) => item.itemIndex === index);
        if (existingItem?.isLoaded) return;

        const image = new Image();
        image.src = src;

        const onLoad = () => {
            setLoaded((prevLoaded) =>
                prevLoaded.map((item) =>
                    item.itemIndex === index ? { itemIndex: index, isLoaded: true } : item
                )
            );
        };

        image.addEventListener("load", onLoad);

        return () => {
            image.removeEventListener("load", onLoad);
        };
    }, [src, index, loaded]);

    useEffect(() => {
        setLoaded((prevLoaded) => {
            if (prevLoaded.some((item) => item.itemIndex === index)) return prevLoaded;
            return [...prevLoaded, { itemIndex: index, isLoaded: false }];
        });
    }, [index]);

    // const isImageLoaded = false;
    const isImageLoaded = loaded.find((item) => item.itemIndex === index)?.isLoaded;

    return (
        <>
            {!isImageLoaded ? (
                <div
                    className={`!relative border-none !overflow-hidden ${className}`}
                >
                    <Skeleton width="100%" height="100%" baseColor='#1a1a1a' highlightColor='#404040' className={`absolute !block left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2`} />
                </div>
            ) : (
                <img src={src} className={className} alt={alt ?? ""} />
            )}
        </>
    );
};

export default LoadImage;
