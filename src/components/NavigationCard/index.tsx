import { memo } from 'react'

import { IconType } from 'react-icons'

import {
  ButtonAccess,
  CardContainer,
  CardContent,
  DescriptionSpan,
  IconLink,
  TitleLink,
} from './styles'

interface INavigationCardProps {
  icon: IconType
  link: string
  title: string
  description: string
}

const NavigationCard: React.FC<INavigationCardProps> = ({
  icon,
  link,
  title,
  description,
}) => {
  const Icon = icon
  return (
    <CardContainer>
      <CardContent>
        <IconLink to={link}>
          <Icon />
        </IconLink>
        <h2>
          <TitleLink to={link}>{title}</TitleLink>
        </h2>
        <DescriptionSpan>{description}</DescriptionSpan>
        <ButtonAccess to={link}>Acessar</ButtonAccess>
      </CardContent>
    </CardContainer>
  )
}

export default memo(NavigationCard)
