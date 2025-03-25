import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { DocumentIcon } from "../icons/Documenticon";


import { LinkIcon } from "../icons/LinkIcon";
import { TagIcon } from "../icons/TagIcon";

export function Sidebar() {
    // Add aria-label for accessibility

    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
            <div className="flex text-2xl pt-8 items-center" aria-label="Sidebar Logo">

            <div className="pr-2 text-purple-600">
                <Logo />
            </div>
            Second Brain
        </div>
        <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon aria-label="Twitter Icon" />} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon aria-label="YouTube Icon" />} />

            <SidebarItem text="Document" icon={<DocumentIcon />} />


            <SidebarItem text="Link" icon={<LinkIcon />} />
            <SidebarItem text="Tag" icon={<TagIcon />} />
        </div>
    </div>
}