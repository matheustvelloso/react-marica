import { memo } from 'react'

import { Category } from 'types/CategoryType'

import { ButtonCategory, CategoriesList } from './styles'

interface ICategoriesProps {
  categories: Category[] | undefined
  fetchCategory: (id: number) => void
}

const Categories: React.FC<ICategoriesProps> = ({
  categories,
  fetchCategory,
}) => {
  return (
    <div className="mb-4">
      <CategoriesList>
        {categories?.map((category) => (
          <ButtonCategory
            key={category.id}
            type="button"
            onClick={() => fetchCategory(category.id)}
          >
            {category.label}
          </ButtonCategory>
        ))}
      </CategoriesList>
    </div>
  )
}

export default memo(Categories)
