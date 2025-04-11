"use client";
import { dbShirts } from "@/db/db";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
}

type Props =
    | { currentId: number; category?: never; excludeIds?: never }
    | { category: string; excludeIds?: number[]; currentId?: never };

function RelatedProducts(props: Props) {
    const [related, setRelated] = useState<typeof dbShirts>([]);

    useEffect(() => {
        let filtered: typeof dbShirts = [];
        if ("currentId" in props) {
            const currentProduct = dbShirts.find((s) => s.id === props.currentId);
            if (!currentProduct) return;
            filtered = dbShirts.filter(
                (shirt) =>
                    shirt.category === currentProduct.category &&
                    shirt.id !== props.currentId
            );
        }

        if ("category" in props) {
            filtered = dbShirts.filter(
                (shirt) =>
                    shirt.category === props.category &&
                    !props.excludeIds?.includes(shirt.id)
            );
        }

        const randomized = shuffleArray(filtered).slice(0, 6);
        setRelated(randomized);
    }, [props]);

    if (related.length === 0) return null;

    return (
        <div className="space-y-6 mt-16">
            <h3 className="text-xl font-bold uppercase tracking-wide mb-2">
                También podría gustarte
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {related.map((shirt) => (
                    <Link
                        key={shirt.id}
                        href={`/collection/${shirt.id}`}
                        className="group"
                    >
                        <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white transition-all duration-300 transform group-hover:shadow-md group-hover:scale-[1.03] flex flex-col h-full">
                            <div className="overflow-hidden h-40">
                                <Image
                                    src={shirt.image}
                                    alt={shirt.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-2 text-xs text-center text-neutral-800 font-medium group-hover:underline transition-colors h-[40px] line-clamp-2">
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
