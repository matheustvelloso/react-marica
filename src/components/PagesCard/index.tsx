import { Dispatch, memo, SetStateAction, useCallback } from 'react'

import { getDate, getMonth, format } from 'date-fns'

import noPhoto from 'assets/noPhoto.jpeg'

import { Page } from 'types/PageType'

import {
  ButtonCategory,
  CardContainer,
  ImageBackground,
  ImageLink,
  LinkTitle,
  PageTitle,
} from './styles'

interface IPagesCardProps {
  apiContent: Page
  fetchCategory?: (id: number) => void
  title: string
  startDate?: string
  setCategoryValue?: Dispatch<SetStateAction<string>>
}

const PagesCard: React.FC<IPagesCardProps> = ({
  apiContent,
  fetchCategory,
  title,
  startDate,
  setCategoryValue,
}) => {
  const getMonthAbbreviation = (date: string | number): string => {
    switch (getMonth(new Date(date))) {
      case 2:
        return 'MAR'
      case 3:
        return 'ABR'
      case 4:
        return 'MAIO'
      case 5:
        return 'JUN'
      case 6:
        return 'JUL'
      case 7:
        return 'AGO'
      case 8:
        return 'SET'
      case 9:
        return 'OUT'
      case 10:
        return 'NOV'
      case 11:
        return 'DEZ'
      case 12:
        return 'JAN'
      default:
        return 'FEV'
    }
  }

  const formatStartDate = (): string | number =>
    startDate ? format(new Date(startDate), 'yyyy-MM-dd HH:mm:mm:mm') : ''

  const handleCategoryButton = useCallback(
    (categoryId: number, categoryValue: string) => {
      if (fetchCategory) fetchCategory(categoryId)
      if (setCategoryValue) setCategoryValue(categoryValue)
    },
    [fetchCategory, setCategoryValue],
  )

  return (
    <CardContainer>
      <ImageLink to={`/${title}/${apiContent.id}`}>
        <ImageBackground
          background={apiContent.capa ? apiContent.capa : noPhoto}
        />
      </ImageLink>
      <div className="p-3">
        <div className="d-flex gap-3">
          {startDate && (
            <div className="d-flex flex-column align-items-center">
              <span style={{ color: '#dc3545' }}>
                {getMonthAbbreviation(formatStartDate())}
              </span>
              <span>{getDate(new Date(formatStartDate()))}</span>
            </div>
          )}
          <div>
            <PageTitle>
              <LinkTitle to={`/${title}/${apiContent.id}`}>
                {apiContent.nome}
              </LinkTitle>
            </PageTitle>
            <div className="d-flex gap-2 flex-wrap">
              {fetchCategory &&
                apiContent.categorias.map((category) => (
                  <ButtonCategory
                    key={category.id}
                    type="button"
                    onClick={() =>
                      handleCategoryButton(category.id, category.label)
                    }
                  >
                    {category.label}
                  </ButtonCategory>
                ))}
            </div>
          </div>
        </div>
        {apiContent?.enderecos.map((address) => (
          <p key={address.id} className="mt-3 mb-5 text-muted fs-sm">
            {address.label}
          </p>
        ))}
      </div>
    </CardContainer>
  )
}

export default memo(PagesCard)
