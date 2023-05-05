import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function HabitsEmpty() {
  const { navigate } = useNavigation()
  return (
    <Text className="text-zinc-400 text-base">
      Você ainda não está monitorando nenhum hábito {''}
      <Text
        className="text-check-500 text-base underline active:text-check-600"
        onPress={() => navigate('new')}
      >
        Comece cadastrando um.
      </Text>
    </Text>
  )
}
