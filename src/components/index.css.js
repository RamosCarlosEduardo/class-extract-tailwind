const flexCol = "flex flex-col items-center justify-between" 

export const container = `${flexCol}  lg:flex-row lg:px-48 gap-8 lg:gap-0  py-5 border-b-2  bg-backgroundWhite`

export const ul = `${flexCol} md:flex-row gap-2 md:gap-8 font-kalam`

export const navLink = "text-green-600 text-xl lg:text-2xl navlink"

export function mudaCorFundo (intent) {
    return intent === 'danger' ? ' bg-red-500' : ' bg-green-500'
}