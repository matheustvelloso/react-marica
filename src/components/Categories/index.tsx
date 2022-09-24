import { memo } from 'react'

import { Category } from 'types/CategoryType'

import { ButtonCategory, CategoriesList } from './styles'

interface ICategoriesProps {
  categories: Category[] | undefined
  handleBtn: (id: number) => void
}

const Categories: React.FC<ICategoriesProps> = ({ categories, handleBtn }) => {
  return (
    <div className="mb-4">
      <CategoriesList>
        {categories &&
          categories.map((category) => (
            <ButtonCategory
              type="button"
              onClick={() => handleBtn(category.id)}
            >
              {category.label}
            </ButtonCategory>
          ))}
      </CategoriesList>
    </div>
  )
}

export default memo(Categories)
