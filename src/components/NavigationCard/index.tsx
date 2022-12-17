import { memo } from 'react'

import { IconType } from 'react-icons'

import {
  ButtonAccessExternalLink,
  ButtonAccessLink,
  CardContainer,
  CardContent,
  DescriptionSpan,
  ExternalLink,
  IconLink,
  TitleLink,
} from './styles'

interface INavigationCardProps {
  icon: IconType
  link: string
  title: string
  description: string
  linkReact: string
}

const NavigationCard: React.FC<INavigationCardProps> = ({
  icon,
  link,
  title,
  description,
  linkReact,
}) => {
  const Icon = icon
  return (
    <CardContainer>
      <CardContent>
        <IconLink to={link}>
          <Icon />
        </IconLink>
        <h2>
          {linkReact === 'Link' ? (
            <TitleLink to={link}>{title}</TitleLink>
          ) : (
            <ExternalLink href={link} target="_blank" rel="noreferrer">
              {title}
            </ExternalLink>
          )}
        </h2>
        <DescriptionSpan>{description}</DescriptionSpan>
        {linkReact === 'Link' ? (
          <ButtonAccessLink to={link}>Acessar</ButtonAccessLink>
        ) : (
          <ButtonAccessExternalLink
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Acessar
          </ButtonAccessExternalLink>
        )}
      </CardContent>
    </CardContainer>
  )
}

export default memo(NavigationCard)
