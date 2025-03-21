"use client"

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface DynamicImageProps {
    src: string;
    alt: string;
    className?: string;
}

const DynamicImage: React.FC<DynamicImageProps> = ({ src, alt, className }) => {
    const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

    useEffect(() => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
            setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${src}`);
        };
    }, [src]);

    if (!dimensions) return <p>Loading...</p>;

    return (
        <Image src={src} alt={alt} width={dimensions.width} height={dimensions.height} className={className} />
    );
};

export default DynamicImage;