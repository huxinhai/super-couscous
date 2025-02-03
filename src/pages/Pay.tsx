import type { navigationProps } from '@/global'
import { observer } from 'mobx-react'
import { Text} from 'react-native'
import type React from 'react'


const Pay: React.FC<navigationProps> = ({ navigation }) => {
  return (
    <>
      <Text>hello</Text>
    </>
  )
}

export default observer(Pay)
