import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}

function Char({ char, range, progress }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p ref={ref} className={className} style={style}>
      {characters.map((char, i) => {
        const start = i / total;
        const end = (i + 1) / total;
        return (
          <Char
            key={i}
            char={char === ' ' ? ' ' : char}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}
