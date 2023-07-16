import { View, Text } from "react-native";

interface Props {
  seconds: number;
  running: boolean;
}

export const Clock = ({ seconds, running }: Props) => {
  return (
    <View className="align-center justify-center w-80 h-80 rounded-full border-slate-800 border-4 border-solid">
      <Text
        className={`text-center text-6xl ${
          running ? "text-white" : "text-gray-400"
        } p-16`}
      >
        {formatSeconds(seconds)}
      </Text>
      {!running && (
        <View className="w-full h-full absolute flex justify-center items-center rounded-full bg-black opacity-30">
          <Text className="text-white text-9xl text-center font-black">
            | |
          </Text>
        </View>
      )}
    </View>
  );
};

/**
 * Formats number of seconds into af MM:SS string
 * @param seconds Seconds to format
 * @returns MM:SS string
 */
function formatSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remSeconds = seconds - minutes * 60;
  let minutesStr = minutes.toString();
  let secondsStr = remSeconds.toString();
  if (minutesStr.length == 1) {
    minutesStr = "0" + minutesStr;
  }

  if (secondsStr.length == 1) {
    secondsStr = "0" + secondsStr;
  }

  return `${minutesStr}:${secondsStr}`;
}
