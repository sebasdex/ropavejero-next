"use client";
import { dbShirts } from "@/db/db";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
}

function RelatedProducts({ currentId }: { currentId: number }) {
    const currentProduct = dbShirts.find((s) => s.id === currentId);
    const [related, setRelated] = useState<typeof dbShirts>([]);

    useEffect(() => {
        if (!currentProduct) return;
        const filtered = dbShirts.filter(
            (shirt) => shirt.category === currentProduct.category && shirt.id !== currentId
        );
        const randomized = shuffleArray(filtered).slice(0, 6);
        setRelated(randomized);
    }, [currentId]);

    if (!currentProduct || related.length === 0) return null;

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wide mb-4">
                También podría gustarte
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {related.map((shirt) => (
                    <Link key={shirt.id} href={`/collection/${shirt.id}`} className="group">
                        <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white transition-all duration-200 transform group-hover:shadow-lg group-hover:scale-105">
                            <div className="overflow-hidden h-40">
                                <Image
                                    src={shirt.image}
                                    alt={shirt.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-2 text-xs text-center text-neutral-800 font-medium group-hover:underline transition-colors">
                                {shirt.name}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );

}

export default RelatedProducts;
