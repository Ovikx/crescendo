import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    name: string;
    size: number;
    color: string;
}

export const Icon = ({name, size, color}: Props) => {
    switch (name) {
        case 'home':
            return <MaterialIcons name="home" size={size} color={color} />;
            break;
        case 'item':
            return <MaterialIcons name="music-note" size={size} color={color} />;
            break;
        case 'list':
            return <MaterialIcons name="format-list-bulleted" size={size} color={color} />;
            break;
        default:
            return <MaterialIcons name="disabled-by-default" size={size} color={color} />;
    }
}