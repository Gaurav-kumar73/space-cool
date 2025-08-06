import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';


export const icon = {
    Home: (props) => <Feather name="home" size={24} {...props} />,
    about: (props) => <Ionicons name="information-circle"size={24} {...props} />,
    carrers: (props) => <Octicons name="workflow" size={24} {...props} />,
    programs: (props) => <AntDesign name="appstore1" size={24} {...props} />,




}