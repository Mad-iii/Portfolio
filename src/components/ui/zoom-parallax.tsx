'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className={`absolute top-0 flex h-full w-full items-center justify-center 
								${index === 1 ? '[&>div]:!-top-[20vh] sm:[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[20vh] sm:[&>div]:!h-[30vh] [&>div]:!w-[40vw] sm:[&>div]:!w-[35vw]' : ''} 
								${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[35vh] sm:[&>div]:!h-[45vh] [&>div]:!w-[30vw] sm:[&>div]:!w-[20vw]' : ''} 
								${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[20vh] sm:[&>div]:!h-[25vh] [&>div]:!w-[35vw] sm:[&>div]:!w-[25vw]' : ''} 
								${index === 4 ? '[&>div]:!top-[20vh] sm:[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[20vh] sm:[&>div]:!h-[25vh] [&>div]:!w-[30vw] sm:[&>div]:!w-[20vw]' : ''} 
								${index === 5 ? '[&>div]:!top-[20vh] sm:[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[20vh] sm:[&>div]:!h-[25vh] [&>div]:!w-[40vw] sm:[&>div]:!w-[30vw]' : ''} 
								${index === 6 ? '[&>div]:!top-[15vh] sm:[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[10vh] sm:[&>div]:!h-[15vh] [&>div]:!w-[25vw] sm:[&>div]:!w-[15vw]' : ''} `}
						>
							<div className="relative h-[20vh] w-[40vw] sm:h-[25vh] sm:w-[25vw] shadow-2xl rounded-lg overflow-hidden border border-white/10">
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover"
								/>
							</div>
						</motion.div>
					);
				})}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                        <p className="text-white font-bold text-xl uppercase tracking-[0.2em]">Our Projects</p>
                    </div>
                </div>
			</div>
		</div>
	);
}
