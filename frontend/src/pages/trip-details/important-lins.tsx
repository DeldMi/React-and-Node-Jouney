import { Link2, Plus } from "lucide-react";

// interface ImportantLinksProps{
    
// }

export function ImportantLinks (){

    return (
        <div className={'space-y-6'}>
                        <h2 className={'font-semibold text-xl'}>Links importantes</h2>
                        <div className={'space-y-5'}>

                            <div className={'flex items-center justify-between gap-4'}>
                                <div className={"space-y-1.5 "}>
                                    <span className={"block font-medium text-zinc-100"}>Reserva dp AirBnB</span>
                                    <a href="#" className={"block font-xs text-zinc-400 truncate hover:text-zinc-200"}>
                                        https://www.airbnb.com.br/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2024-08-01&monthly_length=3&monthly_end_date=2024-11-01&price_filter_input_type=0&channel=EXPLORE&category_tag=Tag%3A5348&search_type=category_change
                                    </a>
                                </div>
                                <Link2 className={"size-5 text-zinc-400 shrink-0"} />
                            </div>

                            <div className={'flex items-center justify-between gap-4'}>
                                <div className={"space-y-1.5 "}>
                                    <span className={"block font-medium text-zinc-100"}>Reserva dp AirBnB</span>
                                    <a href="#" className={"block font-xs text-zinc-400 truncate hover:text-zinc-200"}>
                                        https://www.airbnb.com.br/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2024-08-01&monthly_length=3&monthly_end_date=2024-11-01&price_filter_input_type=0&channel=EXPLORE&category_tag=Tag%3A5348&search_type=category_change
                                    </a>
                                </div>
                                <Link2 className={"size-5 text-zinc-400 shrink-0"} />
                            </div>

                        </div>
                        <button
                            className={"bg-zinc-800 text-zinc-200 rounded-lg w-full px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700"}>
                            <Plus className={"size-5 "} />
                            Cadastrar novo link
                        </button>
                    </div>
    )
}