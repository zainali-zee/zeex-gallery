import { useState } from "react";
import { boxes } from "../data";
import { ArrowLeft, ArrowRight } from "lucide-react";

const boxes_num = 5;

function Boxes({setCategory}) {
    const [page, setPage] = useState(0);

    const start = page * boxes_num;
    const end = Math.min(start + boxes_num, boxes.length);

    const NextHandler = () => {
        if (end < boxes.length) {
            setPage((prev) => prev + 1);
        }
    };

    const PreviousHandler = () => {
        if (page > 0) {
            setPage((prev) => prev - 1);
        }
    };

   

    return (
        <>
            {/* Previous Button */}
            {page > 0 && (
                <div
                    onClick={PreviousHandler}
                    className="hover:bg-cyan-500 active:scale-95 transition-colors duration-200 flex cursor-pointer gap-2 px-5 py-2 items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-full"
                >
                    <ArrowLeft size={18} />
                    Previous
                </div>
            )}

            {/* Current Page Items */}
            {boxes.slice(start, end).map((box) => {
                const Icon = box.icon;

                return (
                    <div onClick={()=>{
                        setCategory(box.name)
                        console.log(box.name)
                    }}
                        key={box.id}
                        className="hover:bg-cyan-500 active:scale-95 transition-colors duration-200 flex cursor-pointer gap-2 px-5 py-2 items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-full flex-wrap"
                    >
                        <Icon size={18} />
                        {box.name}
                    </div>
                );
            })}

            {/* Next Button */}
            {end < boxes.length && (
                <div
                    onClick={NextHandler}
                    className="hover:bg-cyan-500 active:scale-95 transition-colors duration-200 flex cursor-pointer gap-2 px-5 py-2 items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-full"
                >
                    View More
                    <ArrowRight size={18} />
                </div>
            )}
        </>
    );
}

export default Boxes;