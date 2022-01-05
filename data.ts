import {RiComputerLine} from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import {AiOutlineAntDesign, AiOutlineApi} from 'react-icons/ai'
import {MdDeveloperMode} from 'react-icons/md'

import {IService} from './type'

export const services:IService[] = [

    {
        title: "Frontend Dev",
        about: "Lorem...",
        Icon: RiComputerLine,
    },
    {
        title: "Dev",
        about: "Lorem...",
        Icon: FaServer,
    },
    {
        title: "123 Dev",
        about: "Lorem...",
        Icon: AiOutlineAntDesign,
    },
    {
        title: "34 Dev",
        about: "Lorem...",
        Icon: AiOutlineApi,
    },
    {
        title: "34 Dev",
        about: "Lorem...",
        Icon: MdDeveloperMode,
    },

]
