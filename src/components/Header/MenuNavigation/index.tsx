import { memo, SetStateAction } from 'react'

import { IconType } from 'react-icons'

import { MenuNavigationContainer } from './styles'

interface IMenuNavigationProps {
  icon: IconType
  title: string
  link: string
  setIsMenuOpened: (value: SetStateAction<boolean>) => void
}

const MenuNavigation: React.FC<IMenuNavigationProps> = ({
  icon,
  title,
  link,
  setIsMenuOpened,
}) => {
  const Icon = icon
  return (
    <MenuNavigationContainer to={link} onClick={() => setIsMenuOpened(false)}>
      <Icon />
      <span className="ms-2">{title}</span>
    </MenuNavigationContainer>
  )
}

export default memo(MenuNavigation)
