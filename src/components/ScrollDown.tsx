import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function ScrollDown() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[10] cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Скролл вниз</span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown className="w-5 h-5 text-violet-500" />
            </motion.div>
        </motion.div>
    );
}
