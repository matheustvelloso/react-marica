import { memo } from 'react'

import { IconType } from 'react-icons'

import { MenuNavigationContainer } from './styles'

interface IMenuNavigationProps {
  icon: IconType
  title: string
  link: string
}

const MenuNavigation: React.FC<IMenuNavigationProps> = ({
  icon,
  title,
  link,
}) => {
  const Icon = icon
  return (
    <MenuNavigationContainer to={link}>
      <Icon />
      <span className="ms-2">{title}</span>
    </MenuNavigationContainer>
  )
}

export default memo(MenuNavigation)
