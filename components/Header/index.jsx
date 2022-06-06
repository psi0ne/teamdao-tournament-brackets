export default function Header() {
    return (
        <div className="w-full grid grid-cols-3 gap-2 bg-black">

            <div className="flex justify-start pl-10 items-center">
                <img
                    alt="logo"
                    src="/assets/sponsors/team-logo-black.png"
                    className="h-20 w-24 object-contain" />
            </div>

            <div className="flex justify-center items-center">
                <span className="text-blue-600 font-bold text-2xl">TOURNAMENT SEASON 1</span>
            </div>

            <div className="flex justify-end items-center pr-5">
                <span
                    className="text-gray-300 font-semibold text-xl border-[1px] p-2 border-[#00ff19] rounded-xl tracking-wide">₱60,000 POOL</span>
            </div>
        </div>
    )
}