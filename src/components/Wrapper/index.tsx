import { memo } from 'react'

import { Wrap } from './styles'

interface IWrapperProps {
  children?: React.ReactNode
}

const Wrapper: React.FC<IWrapperProps> = ({ children }) => {
  return <Wrap>{children}</Wrap>
}

export default memo(Wrapper)
