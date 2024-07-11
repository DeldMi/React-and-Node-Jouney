import { CircleDashed, UserCog } from "lucide-react";

export function Guests(){
    return (
        <div className={'space-y-6'}>
        <h2 className={'font-semibold text-xl'}>Convidados</h2>
        <div className={'space-y-5'}>

            <div className={'flex items-center justify-between gap-4'}>
                <div className={"space-y-1.5 "}>
                    <span className={"block font-medium text-zinc-100"}>Andre Felipe</span>
                    <span className={"block font-xm text-zinc-400 truncate"}>
                        andre88444@gmail.com                                    </span>
                </div>
                <CircleDashed className={"size-5 text-zinc-400 shrink-0"} />
            </div>

            <div className={'flex items-center justify-between gap-4'}>
                <div className={"space-y-1.5 "}>
                    <span className={"block font-medium text-zinc-100"}>Mikaela Rocha</span>
                    <span className={"block font-xm text-zinc-400 truncate"}>
                        mikaela.ed1306@gmail.com                                    </span>
                </div>
                <CircleDashed className={"size-5 text-zinc-400 shrink-0"} />
            </div>

        </div>
        <button
            className={"bg-zinc-800 text-zinc-200 rounded-lg w-full px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700"}>
            <UserCog className={"size-5 "} />
            Gerecia convidados
        </button>
    </div>
    )
}