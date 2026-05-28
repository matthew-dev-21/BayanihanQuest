import { useState } from "react";
import { FaImage } from "react-icons/fa";

export default function FallbackImage({ src, alt, className = "", iconClassName = "text-3xl", ...props }) {
    const [hasError, setHasError] = useState(!src);

    if (hasError) {
        return (
            <div className={`grid place-items-center bg-white/[0.04] text-slate-500 ${className}`} role="img" aria-label={alt || "Image unavailable"}>
                <FaImage className={iconClassName} />
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setHasError(true)}
            {...props}
        />
    );
}
