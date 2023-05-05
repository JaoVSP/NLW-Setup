import {
  TouchableOpacity,
  Dimensions,
  TouchableOpacityProps
} from 'react-native'

import { generateProgressPercentage } from '../utils/generate-progress-percentage'

import clsx from 'clsx'
import dayjs from 'dayjs'

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5

export const DAY_MARGIN_BETEWEEN = 8
export const DAY_SIZE =
  Dimensions.get('screen').width / WEEK_DAYS - (SCREEN_HORIZONTAL_PADDING + 5)

interface Props extends TouchableOpacityProps {
  amountOfHabits?: number
  amountCompleted?: number
  date: Date
}

export function HabitDay({
  amountOfHabits = 0,
  amountCompleted = 0,
  date,
  ...rest
}: Props) {
  const amountAccomplishedPercentage =
    amountOfHabits > 0
      ? generateProgressPercentage(amountOfHabits, amountCompleted)
      : 0

  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  return (
    <TouchableOpacity
      className={clsx('bg-check-900 rouded-lg m-1', {
        'bg-check-500': amountAccomplishedPercentage >= 90,
        'bg-check-600':
          amountAccomplishedPercentage >= 50 &&
          amountAccomplishedPercentage < 90,
        'bg-check-700':
          amountAccomplishedPercentage >= 25 &&
          amountAccomplishedPercentage < 50,
        'bg-check-800':
          amountAccomplishedPercentage >= 1 &&
          amountAccomplishedPercentage < 25,
        'border-white border-[1px]': isCurrentDay
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
      {...rest}
    />
  )
}
