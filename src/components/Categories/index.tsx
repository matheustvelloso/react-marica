import { memo } from 'react'

import { Category } from 'types/CategoryType'

import { CategoryLink, CategoriesList } from './styles'

interface ICategoriesProps {
  categories: Category[] | undefined
}

const Categories: React.FC<ICategoriesProps> = ({ categories }) => {
  return (
    <div className="mb-4">
      <CategoriesList>
        {categories &&
          categories.map((category) => (
            <CategoryLink to="/">{category.label}</CategoryLink>
          ))}
      </CategoriesList>
    </div>
  )
}

export default memo(Categories)
